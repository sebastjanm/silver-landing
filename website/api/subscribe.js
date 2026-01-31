// Vercel Serverless Function - Email Subscription with PDF
// Sends silver guide PDF via Resend

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Neveljaven email' });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  
  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY not configured');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    // Fetch PDF from public URL
    const pdfUrl = 'https://nakupsrebra.com/assets/vodnik-srebro-2026.pdf';
    const pdfResponse = await fetch(pdfUrl);
    
    if (!pdfResponse.ok) {
      throw new Error('Failed to fetch PDF');
    }
    
    const pdfBuffer = await pdfResponse.arrayBuffer();
    const pdfBase64 = Buffer.from(pdfBuffer).toString('base64');

    // Send email via Resend
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Nakup Srebra <info@nakupsrebra.com>',
        to: email,
        subject: '🥈 Vaš brezplačen vodnik: Kako začeti z naložbo v srebro',
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a2b4a;">
            <h1 style="color: #1a2b4a; font-size: 24px;">Hvala za zaupanje!</h1>
            
            <p style="font-size: 16px; line-height: 1.6;">
              V priponki najdete vaš brezplačen vodnik <strong>"Kako začeti z naložbo v srebro"</strong>.
            </p>
            
            <p style="font-size: 16px; line-height: 1.6;">
              V 25 straneh boste izvedeli:
            </p>
            
            <ul style="font-size: 16px; line-height: 1.8;">
              <li>Zakaj je srebro zanimiva naložba v 2026</li>
              <li>Kako in kje kupiti fizično srebro</li>
              <li>Pravila hrambe in varnosti</li>
              <li>Davčne obveznosti v Sloveniji</li>
              <li>5 najpogostejših napak začetnikov</li>
            </ul>
            
            <p style="font-size: 16px; line-height: 1.6;">
              Imate vprašanja? Rezervirajte <a href="https://calendly.com/sebom/new-meeting" style="color: #c9a227;">brezplačen posvet</a>.
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; margin-top: 30px;">
              Lep pozdrav,<br>
              <strong>Sebastjan</strong><br>
              <span style="color: #666;">nakupsrebra.com</span>
            </p>
          </div>
        `,
        attachments: [
          {
            filename: 'Vodnik-Kako-zaceti-z-nalozbo-v-srebro.pdf',
            content: pdfBase64,
          }
        ],
      }),
    });

    if (!emailResponse.ok) {
      const error = await emailResponse.text();
      console.error('Resend error:', error);
      throw new Error('Failed to send email');
    }

    // Log subscription (you can see this in Vercel logs)
    console.log(`New subscriber: ${email} at ${new Date().toISOString()}`);

    return res.status(200).json({ 
      success: true, 
      message: 'Email poslan!' 
    });

  } catch (error) {
    console.error('Subscription error:', error);
    return res.status(500).json({ 
      error: 'Napaka pri pošiljanju. Prosimo, poskusite ponovno.' 
    });
  }
}
