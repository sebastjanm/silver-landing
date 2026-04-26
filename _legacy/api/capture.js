const fs = require('fs');
const path = require('path');

const AGENTMAIL_KEY = 'am_us_31af73d7a0c25cff0d08c6215610aacd646e4dc74323ca40f9b7a8a9d6981109';
const INBOX = 'srebro@agentmail.to';
const VPS_WEBHOOK = 'https://ai.sebastjanm.com/silver/subscribe';
const VPS_SECRET = 'silver_capture_2026';
const SUBSCRIBERS_FILE = path.join('/tmp', 'silver-subscribers.json');

function loadSubscribers() {
  try { return JSON.parse(fs.readFileSync(SUBSCRIBERS_FILE, 'utf8')); }
  catch { return []; }
}

function saveSubscribers(subs) {
  fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify(subs, null, 2));
}

function welcomeHtml(downloadUrl) {
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
    <p style="color:#2d3748;font-size:16px;line-height:1.7;margin:0 0 30px;">V njem boste našli vse, kar morate vedeti, preden kupite prvo unčo: od osnov plemenitih kovin do davkov in zakonodaje v Sloveniji.</p>
    <table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center">
      <a href="${downloadUrl}" style="display:inline-block;background:#b7791f;color:#ffffff;padding:16px 40px;border-radius:6px;text-decoration:none;font-size:18px;font-weight:600;">📥 Prenesi PDF vodnik</a>
    </td></tr></table>
    <p style="color:#718096;font-size:14px;line-height:1.7;margin:30px 0 0;">V naslednjih dneh vam bom poslal še nekaj praktičnih nasvetov. Brez prodajnega pritiska — samo koristne informacije.</p>
    <hr style="border:none;border-top:1px solid #e2e8f0;margin:30px 0;">
    <p style="color:#718096;font-size:13px;margin:0;">Sebastjan<br>NakupSrebra.com</p>
  </td></tr>
</table>
</td></tr></table>
</body></html>`;
}

function welcomeText(downloadUrl) {
  return `Pozdravljeni,

Hvala za zaupanje. Tukaj je vaš brezplačen vodnik "Kako začeti z naložbo v srebro":

${downloadUrl}

V njem boste našli vse, kar morate vedeti, preden kupite prvo unčo: od osnov plemenitih kovin do davkov in zakonodaje v Sloveniji.

V naslednjih dneh vam bom poslal še nekaj praktičnih nasvetov. Brez prodajnega pritiska — samo koristne informacije.

Sebastjan
NakupSrebra.com`;
}

module.exports = async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email } = req.body || {};
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Neveljaven email naslov' });
  }

  // Check duplicate
  const subs = loadSubscribers();
  if (subs.find(s => s.email === email.toLowerCase())) {
    return res.status(200).json({ success: true, message: 'Že prijavljeni' });
  }

  // Store subscriber
  subs.push({ email: email.toLowerCase(), signupAt: new Date().toISOString(), emailsSent: [] });
  saveSubscribers(subs);

  // Send welcome email via AgentMail
  const downloadUrl = 'https://www.nakupsrebra.com/assets/vodnik-srebro-2026.pdf';
  try {
    const resp = await fetch(`https://api.agentmail.to/v0/inboxes/${encodeURIComponent(INBOX)}/messages/send`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AGENTMAIL_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: email,
        subject: 'Vaš vodnik za naložbe v srebro 📘',
        text: welcomeText(downloadUrl),
        html: welcomeHtml(downloadUrl),
      }),
    });

    if (!resp.ok) {
      console.error('AgentMail error:', resp.status, await resp.text());
      // Still return success — we stored the email, will retry later
    }
  } catch (err) {
    console.error('AgentMail send failed:', err.message);
  }

  // Also register on VPS for persistent storage + drip sequence
  try {
    await fetch(VPS_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.toLowerCase(), secret: VPS_SECRET }),
    });
  } catch (e) {
    console.error('VPS webhook failed (non-blocking):', e.message);
  }

  return res.status(200).json({ success: true });
};
