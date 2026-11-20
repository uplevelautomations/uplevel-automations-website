// Gate for the free playbooks (/playbooks/<slug>). The reader gives name,
// email, phone, company and lead volume; we email them the PDF link and
// email Roy the lead. The page shows the download once this returns 200.
import { Request, Response } from 'express'
import { Resend } from 'resend'
import { PLAYBOOKS } from '../../src/content/playbooks'

const SITE = 'https://www.uplevelautomations.com'
const CALL_URL = 'https://cal.com/roy-banwell/30minaicall'

const esc = (s: unknown) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const clip = (s: unknown, n: number) => String(s ?? '').trim().slice(0, n)

export async function playbookDownloadHandler(req: Request, res: Response) {
  try {
    const b = req.body ?? {}
    // Honeypot filled: pretend it worked, send nothing.
    if (b.website) return res.json({ success: true })

    const playbook = PLAYBOOKS.find((p) => p.slug === b.slug)
    const name = clip(b.name, 120)
    const email = clip(b.email, 200)
    const phone = clip(b.phone, 40)
    const company = clip(b.company, 160)
    const leads = clip(b.leads, 40)
    if (!playbook || !name || !email || !phone || !company) {
      return res.status(400).json({ error: 'Missing required fields' })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || phone.replace(/\D/g, '').length < 7) {
      return res.status(400).json({ error: 'Invalid email or phone' })
    }

    const link = `${SITE}${playbook.file}`
    const first = esc(name.split(' ')[0])
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Roy's copy goes first: the lead is the point, the reader still gets the
    // download on the page if their email fails.
    await resend.emails.send({
      from: 'UpLevel <noreply@uplevelautomations.com>',
      to: 'roy@uplevelautomations.com',
      replyTo: email,
      subject: `Playbook download: ${name}, ${company}`,
      html: `
      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:600px;color:#221d17">
        <h1 style="font-size:20px;margin:0 0 14px">New playbook download</h1>
        <div style="background:#f3ede3;border-radius:10px;padding:16px">
          <p style="margin:4px 0"><strong>Playbook:</strong> ${esc(playbook.title)}</p>
          <p style="margin:4px 0"><strong>Name:</strong> ${esc(name)}</p>
          <p style="margin:4px 0"><strong>Company:</strong> ${esc(company)}</p>
          <p style="margin:4px 0"><strong>Email:</strong> <a href="mailto:${esc(email)}">${esc(email)}</a></p>
          <p style="margin:4px 0"><strong>Phone:</strong> ${esc(phone)}</p>
          ${leads ? `<p style="margin:4px 0"><strong>Leads a month:</strong> ${esc(leads)}</p>` : ''}
        </div>
        <p style="color:#7d7264;font-size:13px">Reply to this email to write to them directly.</p>
      </div>`,
    })

    await resend.emails
      .send({
        from: 'Roy at UpLevel <noreply@uplevelautomations.com>',
        to: email,
        replyTo: 'roy@uplevelautomations.com',
        subject: `Your copy: ${playbook.title}`,
        html: `
      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#221d17;background:#f7f2e9">
        <p style="font-size:16px;margin:0 0 16px">Hi ${first},</p>
        <p style="font-size:16px;margin:0 0 22px">Here's your copy of <strong>${esc(playbook.title)}</strong>. It's the system I run in my own cleaning company, with the rules and the real numbers.</p>
        <p style="margin:0 0 26px"><a href="${link}" style="display:inline-block;background:#c4532f;color:#fffaf3;text-decoration:none;padding:14px 22px;border-radius:6px;font-weight:600">Download the playbook (PDF)</a></p>
        <p style="font-size:16px;margin:0 0 16px">If you read it and want to know which piece would help your company most, reply to this email. It comes straight to me.</p>
        <p style="font-size:16px;margin:0 0 22px">Or if you'd rather have it built for you, <a href="${CALL_URL}" style="color:#c4532f">grab a free 50-minute call</a>. You'll leave with one clear recommendation and a price.</p>
        <p style="font-size:15px;margin:0">Roy<br><span style="color:#7d7264">UpLevel · I run a cleaning company on AI, and build the same systems for others.</span></p>
      </div>`,
      })
      .catch((err) => console.error('Playbook email to reader failed:', err))

    return res.json({ success: true })
  } catch (error) {
    console.error('Playbook download error:', error)
    return res.status(500).json({ error: 'Failed' })
  }
}
