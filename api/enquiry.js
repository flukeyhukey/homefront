// Vercel serverless function: emails form enquiries via Resend (https://resend.com).
// Env vars: RESEND_API_KEY (required), ENQUIRY_TO (default archie@homefrontpm.com.au),
// ENQUIRY_FROM (a verified sender, e.g. "Homefront website <web@homefrontpm.com.au>").

const FIELDS = {
  address: 'Property address',
  name: 'Name',
  phone: 'Phone',
  email: 'Email',
  propertyType: 'Property type',
  status: 'Current status',
  bankLetter: 'Needs lender letter',
  message: 'Message',
  page: 'Sent from',
};

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
  if (body.website) return res.status(200).json({ ok: true }); // honeypot
  if (!body.name || !body.phone || !body.email) return res.status(400).json({ error: 'Missing fields' });

  const key = process.env.RESEND_API_KEY;
  if (!key) return res.status(500).json({ error: 'Email not configured' });

  const type = { appraisal: 'Rental appraisal request', switch: 'Switch enquiry', contact: 'Contact message' }[body.type] || 'Website enquiry';
  const rows = Object.entries(FIELDS)
    .filter(([k]) => body[k])
    .map(([k, label]) => `<tr><td style="padding:4px 12px 4px 0;color:#5B6478">${label}</td><td style="padding:4px 0">${esc(String(body[k]).slice(0, 2000))}</td></tr>`)
    .join('');

  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.ENQUIRY_FROM || 'Homefront website <onboarding@resend.dev>',
      to: [process.env.ENQUIRY_TO || 'archie@homefrontpm.com.au'],
      reply_to: body.email,
      subject: `${type}: ${body.address || body.name}`,
      html: `<h2 style="font-family:Arial">${type}</h2><table style="font-family:Arial;font-size:15px">${rows}</table>`,
    }),
  });

  if (!r.ok) return res.status(502).json({ error: 'Send failed' });
  return res.status(200).json({ ok: true });
}
