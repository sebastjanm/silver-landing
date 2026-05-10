import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { bookingFormSchema } from "@/lib/leads/schemas";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Neveljavna zahteva" }, { status: 400 });
  }

  const parsed = bookingFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten() },
      { status: 400 }
    );
  }
  const data = parsed.data;

  const { data: lead, error } = await supabaseAdmin
    .from("leads")
    .insert({
      name: data.name,
      phone: data.phone,
      email: data.email ?? null,
      message: data.message ?? null,
      time_window: data.timeWindow ?? null,
      urgency: data.urgency ?? null,
      source: data.source,
      consent_at: new Date().toISOString(),
      utm_source: data.utmSource ?? null,
      utm_medium: data.utmMedium ?? null,
      utm_campaign: data.utmCampaign ?? null,
    })
    .select("id")
    .single();

  if (error) {
    console.error("Lead insert error:", error.message);
    return NextResponse.json(
      { error: "Napaka pri shranjevanju" },
      { status: 500 }
    );
  }

  // Notify advisor inbox (fire-and-forget; do not block response on AgentMail).
  notifyAdvisor(data, lead?.id).catch((err) => {
    console.error("Advisor notify failed:", (err as Error).message);
  });

  return NextResponse.json({ success: true });
}

async function notifyAdvisor(
  data: Awaited<ReturnType<typeof bookingFormSchema.parse>>,
  leadId: string | undefined
) {
  const inbox =
    process.env.LEAD_NOTIFICATION_INBOX || process.env.AGENTMAIL_INBOX;
  if (!process.env.AGENTMAIL_API_KEY || !inbox) return;

  const subject = `Nov posvet: ${data.name} (${data.phone})`;
  const lines = [
    `Ime: ${data.name}`,
    `Telefon: ${data.phone}`,
    data.email ? `Email: ${data.email}` : null,
    data.timeWindow ? `Termin: ${data.timeWindow}` : null,
    data.urgency ? `Urgenca: ${data.urgency}` : null,
    data.source ? `Vir: ${data.source}` : null,
    data.utmSource ? `UTM source: ${data.utmSource}` : null,
    data.utmCampaign ? `UTM campaign: ${data.utmCampaign}` : null,
    data.message ? `\nSporočilo:\n${data.message}` : null,
    leadId ? `\n#${leadId}` : null,
  ].filter(Boolean);

  await fetch(
    `https://api.agentmail.to/v0/inboxes/${encodeURIComponent(inbox)}/messages/send`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.AGENTMAIL_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: inbox,
        subject,
        text: lines.join("\n"),
      }),
    }
  );
}
