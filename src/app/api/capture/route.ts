import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";

export async function POST(request: NextRequest) {
  // CORS
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  const { email } = await request.json();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Neveljaven email naslov" },
      { status: 400, headers }
    );
  }

  const normalizedEmail = email.toLowerCase();

  // Check duplicate
  const { data: existing } = await supabaseAdmin
    .from("subscribers")
    .select("id")
    .eq("email", normalizedEmail)
    .single();

  if (existing) {
    return NextResponse.json(
      { success: true, message: "Že prijavljeni" },
      { headers }
    );
  }

  // Store subscriber
  const { error: insertError } = await supabaseAdmin
    .from("subscribers")
    .insert({
      email: normalizedEmail,
      source: "lead_magnet",
      signup_at: new Date().toISOString(),
      emails_sent: [],
      drip_status: "active",
    });

  if (insertError) {
    console.error("Subscriber insert error:", insertError.message);
    return NextResponse.json(
      { error: "Database error" },
      { status: 500, headers }
    );
  }

  // Send welcome email via AgentMail
  const downloadUrl =
    "https://www.nakupsrebra.com/assets/vodnik-srebro-2026.pdf";
  try {
    const inbox = process.env.AGENTMAIL_INBOX;
    const resp = await fetch(
      `https://api.agentmail.to/v0/inboxes/${encodeURIComponent(inbox!)}/messages/send`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.AGENTMAIL_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: normalizedEmail,
          subject: "Vaš vodnik za naložbe v srebro 📘",
          text: `Pozdravljeni,\n\nHvala za zaupanje. Tukaj je vaš brezplačen vodnik:\n\n${downloadUrl}\n\nEkipa NakupSrebra.com`,
          html: welcomeHtml(downloadUrl),
        }),
      }
    );
    if (!resp.ok) {
      console.error("AgentMail error:", resp.status, await resp.text());
    }
  } catch (err) {
    console.error("AgentMail send failed:", (err as Error).message);
  }

  // VPS webhook (legacy, non-blocking)
  try {
    await fetch(process.env.VPS_WEBHOOK_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: normalizedEmail,
        secret: process.env.VPS_WEBHOOK_SECRET,
      }),
    });
  } catch (e) {
    console.error("VPS webhook failed:", (e as Error).message);
  }

  return NextResponse.json({ success: true }, { headers });
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

function welcomeHtml(downloadUrl: string) {
  return `<!DOCTYPE html>
<html><head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#fdfcfa;font-family:'Source Sans 3',-apple-system,system-ui,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#fdfcfa;padding:40px 20px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;">
  <tr><td style="background:linear-gradient(135deg,#1a365d,#2c5282);padding:40px;text-align:center;">
    <div style="font-size:48px;margin-bottom:16px;">🥈</div>
    <h1 style="color:#ffffff;font-family:Georgia,serif;font-size:24px;font-weight:400;margin:0;">Vaš vodnik je pripravljen</h1>
  </td></tr>
  <tr><td style="padding:40px;">
    <p style="color:#2d3748;font-size:16px;line-height:1.7;margin:0 0 20px;">Pozdravljeni,</p>
    <p style="color:#2d3748;font-size:16px;line-height:1.7;margin:0 0 20px;">Hvala za zaupanje. Tukaj je vaš brezplačen vodnik <strong>"Kako začeti z naložbo v srebro"</strong>.</p>
    <p style="color:#2d3748;font-size:16px;line-height:1.7;margin:0 0 30px;">V njem boste našli vse, kar morate vedeti, preden kupite prvo unčo.</p>
    <table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center">
      <a href="${downloadUrl}" style="display:inline-block;background:#b7791f;color:#ffffff;padding:16px 40px;border-radius:6px;text-decoration:none;font-size:18px;font-weight:600;">📥 Prenesi PDF vodnik</a>
    </td></tr></table>
    <p style="color:#718096;font-size:14px;line-height:1.7;margin:30px 0 0;">V naslednjih dneh vam bomo poslali še nekaj praktičnih nasvetov.</p>
    <hr style="border:none;border-top:1px solid #e2e8f0;margin:30px 0;">
    <p style="color:#718096;font-size:13px;margin:0;">Ekipa NakupSrebra.com</p>
  </td></tr>
</table>
</td></tr></table>
</body></html>`;
}
