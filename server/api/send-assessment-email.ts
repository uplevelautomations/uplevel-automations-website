// Emails for the "Where should you start?" quiz (/ai-readiness). Rebuilt
// 2026-11-20 with the quiz: the prospect gets their plan, Roy gets their
// answers. Only sent when the prospect chooses to email themselves the plan.
import { Request, Response } from 'express'
import { Resend } from 'resend'

interface QuizEmailRequest {
  to: string
  toName: string
  phone?: string
  heardFrom?: string
  recommendation: string
  tagline: string
  firstBuild: string
  price: string
  next: string
  reasons: string[]
  estimate: number | null
  answers: { question: string; answer: string }[]
}

const CALL_URL = 'https://cal.com/roy-banwell/30minaicall'

const esc = (s: unknown) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const money = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`

export async function sendAssessmentEmailHandler(req: Request, res: Response) {
  try {
    const body = req.body as QuizEmailRequest
    if (!body.to || !body.toName || !body.recommendation) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const prospectEmail = await resend.emails.send({
      from: 'Roy at UpLevel <noreply@uplevelautomations.com>',
      to: body.to,
      replyTo: 'roy@uplevelautomations.com',
      subject: `Your plan: ${body.recommendation}`,
      html: prospectHtml(body),
    })

    const royEmail = await resend.emails.send({
      from: 'UpLevel <noreply@uplevelautomations.com>',
      to: 'roy@uplevelautomations.com',
      subject: `New quiz: ${body.toName} → ${body.recommendation}`,
      html: royHtml(body),
    })

    return res.json({ success: true, prospectEmailId: prospectEmail.data?.id, royEmailId: royEmail.data?.id })
  } catch (error) {
    console.error('Quiz email error:', error)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}

function prospectHtml(b: QuizEmailRequest): string {
  const first = esc(b.toName.split(' ')[0])
  const reasons = (b.reasons || []).map((r) => `<li style="margin:0 0 8px">${esc(r)}</li>`).join('')
  const est =
    b.estimate && b.estimate > 0
      ? `<div style="background:#221d17;color:#f7f2e9;border-radius:12px;padding:20px;margin:0 0 24px">
          <div style="font-size:13px;color:#d3c6b3">What your old leads might be worth, month one</div>
          <div style="font-family:Georgia,serif;font-size:40px;color:#e09c7f;margin:6px 0">≈ ${money(b.estimate)}</div>
          <div style="font-size:12px;color:#a99c8a">Based on one client's real result (CBUS Cleaning booked 12 jobs in month one from 1,430 old leads). First jobs only. Yours will differ.</div>
        </div>`
      : ''
  return `
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#221d17;background:#f7f2e9">
    <p style="font-size:16px;margin:0 0 18px">Hi ${first},</p>
    <p style="font-size:16px;margin:0 0 24px">Here's what you got from the quiz.</p>
    <div style="font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#c4532f">Your recommendation</div>
    <h1 style="font-family:Georgia,serif;font-weight:400;font-size:34px;margin:6px 0 8px">${esc(b.recommendation)}</h1>
    <p style="font-size:16px;color:#615749;margin:0 0 22px">${esc(b.tagline)}</p>
    ${reasons ? `<h3 style="font-size:15px;margin:0 0 10px">Why, based on your answers</h3><ul style="padding-left:18px;color:#4a4237;margin:0 0 22px">${reasons}</ul>` : ''}
    <div style="background:#fffdf8;border:2px solid #c4532f;border-radius:12px;padding:20px;margin:0 0 24px">
      <h3 style="font-size:15px;margin:0 0 8px">What I'd build first</h3>
      <p style="margin:0 0 14px;color:#4a4237">${esc(b.firstBuild)}</p>
      <p style="margin:0 0 6px;color:#615749"><strong style="color:#221d17">Price:</strong> ${esc(b.price)}</p>
      <p style="margin:0 0 6px;color:#615749"><strong style="color:#221d17">After that:</strong> ${esc(b.next)}</p>
      <p style="margin:0;color:#615749"><strong style="color:#221d17">Guarantee:</strong> 30 days. If it isn't working end to end, you get your money back.</p>
    </div>
    ${est}
    <p style="font-size:16px;margin:0 0 18px">If you want to talk it through, grab a time below. It's 50 minutes with me, free, and you'll leave with one clear recommendation and a price.</p>
    <p style="margin:0 0 28px"><a href="${CALL_URL}" style="display:inline-block;background:#c4532f;color:#fffaf3;text-decoration:none;padding:14px 22px;border-radius:6px;font-weight:600">Book a free call</a></p>
    <p style="font-size:15px;margin:0">Roy<br><span style="color:#7d7264">UpLevel · I run a cleaning company on AI, and build the same systems for others.</span></p>
    <p style="font-size:12px;color:#a99c8a;margin:24px 0 0">Just reply to this email if you have a question. It comes straight to me.</p>
  </div>`
}

function royHtml(b: QuizEmailRequest): string {
  const rows = (b.answers || [])
    .map((a) => `<p style="margin:6px 0;color:#4a4237"><strong>${esc(a.question)}</strong><br>${esc(a.answer)}</p>`)
    .join('')
  return `
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:640px;margin:0 auto;padding:20px;color:#221d17">
    <h1 style="font-size:22px;margin:0 0 16px">New quiz: ${esc(b.recommendation)}</h1>
    <div style="background:#f3ede3;border-radius:10px;padding:16px;margin:0 0 18px">
      <p style="margin:4px 0"><strong>Name:</strong> ${esc(b.toName)}</p>
      <p style="margin:4px 0"><strong>Email:</strong> <a href="mailto:${esc(b.to)}">${esc(b.to)}</a></p>
      ${b.phone ? `<p style="margin:4px 0"><strong>Phone:</strong> ${esc(b.phone)}</p>` : ''}
      ${b.heardFrom ? `<p style="margin:4px 0"><strong>Found you via:</strong> ${esc(b.heardFrom)}</p>` : ''}
      ${b.estimate ? `<p style="margin:4px 0"><strong>Old-lead estimate shown:</strong> ${money(b.estimate)}</p>` : ''}
    </div>
    <h3 style="font-size:15px;margin:0 0 8px">Their answers</h3>
    ${rows}
    <h3 style="font-size:15px;margin:18px 0 8px">What the quiz told them</h3>
    <p style="margin:4px 0;color:#4a4237"><strong>First build:</strong> ${esc(b.firstBuild)}</p>
    <p style="margin:4px 0;color:#4a4237"><strong>Price shown:</strong> ${esc(b.price)}</p>
  </div>`
}
