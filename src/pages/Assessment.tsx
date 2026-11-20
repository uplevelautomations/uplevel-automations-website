// "Where should you start?" quiz, served at /ai-readiness (the old URL, so
// existing links keep working). Rebuilt 2026-11-20: replaces the old
// readiness score with one recommendation that matches the offer
// (RELAUNCH-OFFER-2026-11.md, CURRENT OFFER): start with leads ($1,500),
// start with the foundation ($2,500), or one back-office build ($1,500).
// Results show right away; email is optional and only sends the plan.
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

const CALL_URL = 'https://cal.com/roy-banwell/30minaicall'
const SHEET_URL =
  'https://script.google.com/macros/s/AKfycbzs806_T0UUwSAMwZa_ppjAobgf4STx_85d3pGjGCc28fr4GTRnG6RkBAm-BhMVBy-XaA/exec'

type Option = { value: string; label: string }
type Question = { id: string; q: string; options: Option[] }

const QUESTIONS: Question[] = [
  {
    id: 'business',
    q: 'What kind of business do you run?',
    options: [
      { value: 'residential', label: 'Residential cleaning' },
      { value: 'commercial', label: 'Commercial cleaning' },
      { value: 'home-service', label: 'Another home service (lawn, pest, HVAC...)' },
      { value: 'other', label: 'Something else' },
    ],
  },
  {
    id: 'leads',
    q: 'Roughly how many new leads do you get a month?',
    options: [
      { value: 'lt25', label: 'Under 25' },
      { value: '25-100', label: '25 to 100' },
      { value: '100-300', label: '100 to 300' },
      { value: '300+', label: '300 or more' },
    ],
  },
  {
    id: 'followup',
    q: 'What happens to a lead who doesn’t book on day one?',
    options: [
      { value: 'manual', label: 'Someone follows up by hand, when they can' },
      { value: 'nothing', label: 'Usually nothing' },
      { value: 'automated', label: 'We have automatic follow-up' },
      { value: 'unsure', label: 'Honestly, not sure' },
    ],
  },
  {
    id: 'oldLeads',
    q: 'How many old leads and past customers are sitting in your CRM?',
    options: [
      { value: 'lt250', label: 'Under 250' },
      { value: '250-1000', label: '250 to 1,000' },
      { value: '1000-3000', label: '1,000 to 3,000' },
      { value: '3000+', label: 'More than 3,000' },
      { value: 'unknown', label: 'No idea' },
    ],
  },
  {
    id: 'jobValue',
    q: 'What’s a typical first job worth to you?',
    options: [
      { value: 'lt150', label: 'Under $150' },
      { value: '150-250', label: '$150 to $250' },
      { value: '250-400', label: '$250 to $400' },
      { value: '400+', label: '$400 or more' },
    ],
  },
  {
    id: 'weekEater',
    q: 'What eats most of your week?',
    options: [
      { value: 'leads', label: 'Answering and chasing leads' },
      { value: 'schedule', label: 'Scheduling, reschedules and cancellations' },
      { value: 'issues', label: 'Client complaints and fixing problems' },
      { value: 'team', label: 'Hiring and managing the team' },
      { value: 'admin', label: 'Admin: invoices, supplies, payroll' },
    ],
  },
  {
    id: 'goal',
    q: 'Where do you want the business a year from now?',
    options: [
      { value: 'grow', label: 'Growing fast, with me still running it' },
      { value: 'hands-off', label: 'Running without me day to day' },
      { value: 'sell', label: 'Ready to sell' },
      { value: 'calmer', label: 'Same size, just less chaos' },
    ],
  },
  {
    id: 'ai',
    q: 'Where are you with AI so far?',
    options: [
      { value: 'none', label: 'Haven’t really tried it' },
      { value: 'chat', label: 'I use ChatGPT or similar for writing' },
      { value: 'broke', label: 'Tried an automation, and it broke or fizzled' },
      { value: 'running', label: 'We already run some automations' },
    ],
  },
]

type Answers = Record<string, string>
type RecKey = 'leads' | 'foundation' | 'backoffice'

const labelOf = (id: string, value: string) =>
  QUESTIONS.find((q) => q.id === id)?.options.find((o) => o.value === value)?.label ?? ''

const FIRST_BUILD: Record<string, string> = {
  leads: 'Lead follow-up: every new lead answered in seconds and followed up until they book or say no.',
  schedule: 'Schedule help: open jobs offered to the right cleaner and conflicts flagged before the day starts.',
  issues: 'Client issue watcher: unhappy clients caught and flagged to your team before they cancel.',
  team: 'Hiring funnel: applicants screened and onboarded without you on the phone.',
  admin: 'Back-office automation: invoices, supply orders or payroll prep handled for you.',
}

const OLD_LEADS: Record<string, number> = { lt250: 150, '250-1000': 600, '1000-3000': 1800, '3000+': 3500 }
const JOB_VALUE: Record<string, number> = { lt150: 120, '150-250': 200, '250-400': 320, '400+': 450 }
// The one result on record: CBUS Cleaning, 12 bookings in month one from 1,430 old leads.
const CBUS_RATE = 12 / 1430

function estimate(a: Answers): number | null {
  const n = OLD_LEADS[a.oldLeads]
  const v = JOB_VALUE[a.jobValue]
  if (!n || !v) return null
  return Math.round((n * CBUS_RATE * v) / 50) * 50
}

type Plan = {
  key: RecKey
  title: string
  tagline: string
  reasons: string[]
  firstBuild: string
  price: string
  next: string
}

function buildPlan(a: Answers): Plan {
  const leadsGap = a.followup !== 'automated' && a.leads !== 'lt25'
  const handsOff = a.goal === 'hands-off' || a.goal === 'sell'
  const bigList = a.oldLeads === '1000-3000' || a.oldLeads === '3000+'

  let key: RecKey
  if (handsOff) key = 'foundation'
  else if (leadsGap || a.weekEater === 'leads') key = 'leads'
  else key = 'backoffice'

  const reasons: string[] = []
  if (leadsGap) {
    reasons.push(
      `You get ${labelOf('leads', a.leads).toLowerCase()} leads a month, and ${
        a.followup === 'nothing' || a.followup === 'unsure'
          ? 'the ones who don’t book on day one mostly never hear from you again.'
          : 'follow-up depends on someone remembering.'
      }`,
    )
  }
  if (bigList) reasons.push(`You have ${labelOf('oldLeads', a.oldLeads).toLowerCase()} old leads and past customers you already paid for.`)
  if (handsOff) {
    reasons.push(
      `You want the business ${a.goal === 'sell' ? 'ready to sell' : 'running without you'}. That takes systems you own, not one-off fixes.`,
    )
  }
  if (a.weekEater && a.weekEater !== 'leads') reasons.push(`${labelOf('weekEater', a.weekEater)} eats most of your week.`)
  if (a.ai === 'broke' && key === 'foundation') {
    reasons.push('You’ve had an automation fizzle before. That usually happens when it’s bolted on with nothing underneath. The foundation is what goes underneath.')
  }

  const buildFor = key === 'foundation' && leadsGap ? 'leads' : a.weekEater || 'leads'

  if (key === 'leads') {
    return {
      key,
      title: 'Start with your leads',
      tagline: 'The fastest money: the leads you already paid for, finally worked.',
      reasons,
      firstBuild: FIRST_BUILD.leads,
      price: '$1,500 for the build. Lead follow-up runs in your own GoHighLevel.',
      next: 'Once leads are handled, most owners look at scheduling or client issues next.',
    }
  }
  if (key === 'foundation') {
    return {
      key,
      title: 'Start with the foundation',
      tagline: 'The base every future system plugs into, in accounts you own. Then your first build on top.',
      reasons,
      firstBuild: FIRST_BUILD[buildFor],
      price: '$2,500 for the foundation plus your first build. About $25 a month in tools, paid directly.',
      next: 'Every build after that starts at $1,250 and is usually live within a week.',
    }
  }
  return {
    key,
    title: 'Start with one back-office build',
    tagline: 'Your leads are covered. The time goes somewhere else, so that’s where to start.',
    reasons,
    firstBuild: FIRST_BUILD[buildFor],
    price: 'From $1,500. If I host it, $50 a month, or $125 with changes included.',
    next: 'If you’re planning more than one build, the foundation saves you money from the second build on.',
  }
}

const money = (n: number) => `$${n.toLocaleString('en-US')}`

function track(event: string, extra: Record<string, unknown> = {}) {
  if (typeof window !== 'undefined') window.dataLayer?.push({ event, ...extra })
}

export default function Assessment() {
  const [started, setStarted] = useState(false)
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [done, setDone] = useState(false)
  const [contact, setContact] = useState({ name: '', email: '', phone: '', heardFrom: '' })
  const [sent, setSent] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const q = QUESTIONS[step]

  const choose = (value: string) => {
    const next = { ...answers, [q.id]: value }
    setAnswers(next)
    if (step < QUESTIONS.length - 1) {
      setTimeout(() => setStep(step + 1), 180)
    } else {
      const plan = buildPlan(next)
      track('assessment_complete', { assessment_recommendation: plan.key })
      setTimeout(() => setDone(true), 180)
    }
  }

  const restart = () => {
    setAnswers({})
    setStep(0)
    setDone(false)
    setSent('idle')
  }

  const sendPlan = async (plan: Plan, est: number | null) => {
    if (!contact.name || !contact.email) return
    setSent('sending')
    track('assessment_email', { assessment_recommendation: plan.key })
    const qa = QUESTIONS.map((x) => ({ question: x.q, answer: labelOf(x.id, answers[x.id]) }))

    fetch(SHEET_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'assessment',
        version: 'where-to-start-2026-11',
        timestamp: new Date().toISOString(),
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        heard_from: contact.heardFrom,
        recommendation: plan.title,
        estimate: est ?? '',
        ...Object.fromEntries(QUESTIONS.map((x) => [x.id, labelOf(x.id, answers[x.id])])),
      }),
    }).catch(() => {})

    try {
      const res = await fetch('/api/send-assessment-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: contact.email,
          toName: contact.name,
          phone: contact.phone,
          heardFrom: contact.heardFrom,
          recommendation: plan.title,
          tagline: plan.tagline,
          firstBuild: plan.firstBuild,
          price: plan.price,
          next: plan.next,
          reasons: plan.reasons,
          estimate: est,
          answers: qa,
        }),
      })
      setSent(res.ok ? 'sent' : 'error')
    } catch {
      setSent('error')
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          {!started && (
            <div className="text-center pt-6">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-5">
                8 questions · about 60 seconds
              </span>
              <h1 className="text-5xl md:text-6xl text-slate-900 leading-[1.05] mb-5">
                Where should your company start with AI?
              </h1>
              <p className="text-lg text-slate-600 mb-9 max-w-xl mx-auto">
                Answer eight quick questions and get one clear recommendation: what to build first, why, what it costs,
                and what your old leads might be worth.
              </p>
              <button
                type="button"
                onClick={() => {
                  setStarted(true)
                  track('assessment_start')
                }}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Start the quiz →
              </button>
              <p className="text-sm text-slate-500 mt-5">No email needed to see your answer.</p>
            </div>
          )}

          {started && !done && (
            <div>
              <div className="flex items-center justify-between text-sm text-slate-500 mb-3">
                <span>
                  Question {step + 1} of {QUESTIONS.length}
                </span>
                {step > 0 && (
                  <button type="button" onClick={() => setStep(step - 1)} className="hover:text-slate-900">
                    ← Back
                  </button>
                )}
              </div>
              <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden mb-10">
                <div
                  className="h-full bg-blue-600 transition-all duration-300"
                  style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
                />
              </div>
              <h2 className="text-4xl md:text-5xl text-slate-900 leading-[1.1] mb-8">{q.q}</h2>
              <div className="space-y-3">
                {q.options.map((o) => {
                  const on = answers[q.id] === o.value
                  return (
                    <button
                      key={o.value}
                      type="button"
                      onClick={() => choose(o.value)}
                      className={`w-full text-left px-5 py-4 rounded-xl border transition-all ${
                        on
                          ? 'border-blue-600 bg-blue-50 text-slate-900'
                          : 'border-slate-200 bg-white hover:border-blue-400 hover:bg-blue-50/40 text-slate-700'
                      }`}
                    >
                      {o.label}
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {done && <Results answers={answers} contact={contact} setContact={setContact} sent={sent} onSend={sendPlan} onRestart={restart} />}
        </div>
      </main>
      <Footer />
    </div>
  )
}

function Results({
  answers,
  contact,
  setContact,
  sent,
  onSend,
  onRestart,
}: {
  answers: Answers
  contact: { name: string; email: string; phone: string; heardFrom: string }
  setContact: (c: { name: string; email: string; phone: string; heardFrom: string }) => void
  sent: 'idle' | 'sending' | 'sent' | 'error'
  onSend: (plan: Plan, est: number | null) => void
  onRestart: () => void
}) {
  const plan = buildPlan(answers)
  const est = estimate(answers)

  return (
    <div>
      <p className="text-sm font-medium uppercase tracking-wider text-blue-700 mb-3">Your recommendation</p>
      <h1 className="text-5xl md:text-6xl text-slate-900 leading-[1.05] mb-4">{plan.title}.</h1>
      <p className="text-xl text-slate-600 mb-10">{plan.tagline}</p>

      {plan.reasons.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-200 p-7 mb-6">
          <h3 className="font-semibold text-slate-900 mb-4">Why, based on your answers</h3>
          <ul className="space-y-3">
            {plan.reasons.map((r) => (
              <li key={r} className="flex gap-3 text-slate-700">
                <span className="mt-2 w-1.5 h-1.5 bg-blue-600 flex-none" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="bg-white rounded-2xl border-2 border-blue-600 p-7 mb-6">
        <h3 className="font-semibold text-slate-900 mb-2">What I’d build first</h3>
        <p className="text-slate-700 mb-5">{plan.firstBuild}</p>
        <div className="border-t border-slate-200 pt-4 space-y-2 text-slate-600">
          <p>
            <span className="font-semibold text-slate-900">Price:</span> {plan.price}
          </p>
          <p>
            <span className="font-semibold text-slate-900">After that:</span> {plan.next}
          </p>
          <p>
            <span className="font-semibold text-slate-900">Guarantee:</span> 30 days. If it isn’t working end to end, you
            get your money back.
          </p>
        </div>
      </div>

      {est !== null && est > 0 && (
        <div className="bg-slate-900 text-white rounded-2xl p-7 mb-6">
          <p className="text-slate-300 text-sm mb-1">What your old leads might be worth, month one</p>
          <p className="font-serif text-6xl leading-none text-blue-300 mb-3">≈ {money(est)}</p>
          <p className="text-slate-400 text-sm">
            Based on one client’s real result (CBUS Cleaning booked 12 jobs in month one from 1,430 old leads), applied to
            your list size and job value. First jobs only. Yours will differ.
          </p>
        </div>
      )}

      <div className="text-center my-10">
        <a
          href={CALL_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track('cta_click', { cta_text: 'Book a call', cta_location: 'quiz_results', assessment_recommendation: plan.key })}
          className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
        >
          Talk it through: book a free 50-min call →
        </a>
        <p className="text-sm text-slate-500 mt-3">With me, not a salesperson. You’ll leave with a price either way.</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-7">
        {sent === 'sent' ? (
          <p className="text-slate-700">
            <span className="font-semibold text-slate-900">Sent.</span> Check your inbox for your plan.
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              onSend(plan, est)
            }}
          >
            <h3 className="font-semibold text-slate-900 mb-1">Want this plan in your inbox?</h3>
            <p className="text-sm text-slate-500 mb-5">Optional. I’ll email it to you, and nothing else unless you reply.</p>
            <div className="grid sm:grid-cols-2 gap-3 mb-3">
              <input
                required
                placeholder="Your name"
                value={contact.name}
                onChange={(e) => setContact({ ...contact, name: e.target.value })}
                className="px-4 py-3 rounded-lg border border-slate-200 bg-white focus:border-blue-600 outline-none"
              />
              <input
                required
                type="email"
                placeholder="Email"
                value={contact.email}
                onChange={(e) => setContact({ ...contact, email: e.target.value })}
                className="px-4 py-3 rounded-lg border border-slate-200 bg-white focus:border-blue-600 outline-none"
              />
              <input
                placeholder="Phone (optional)"
                value={contact.phone}
                onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                className="px-4 py-3 rounded-lg border border-slate-200 bg-white focus:border-blue-600 outline-none"
              />
              <select
                value={contact.heardFrom}
                onChange={(e) => setContact({ ...contact, heardFrom: e.target.value })}
                className="px-4 py-3 rounded-lg border border-slate-200 bg-white focus:border-blue-600 outline-none text-slate-700"
              >
                <option value="">How did you find me?</option>
                <option value="x">X (Twitter)</option>
                <option value="referral">A friend or client</option>
                <option value="whatsapp">WhatsApp group</option>
                <option value="google">Google</option>
                <option value="ai">ChatGPT or another AI</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={sent === 'sending'}
              className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-colors disabled:opacity-60"
            >
              {sent === 'sending' ? 'Sending…' : 'Email me my plan'}
            </button>
            {sent === 'error' && <p className="text-sm text-red-600 mt-3">That didn’t send. Try again, or just book a call.</p>}
          </form>
        )}
      </div>

      <div className="flex flex-wrap justify-between gap-4 mt-8 text-sm text-slate-500">
        <button type="button" onClick={onRestart} className="hover:text-slate-900">
          ↻ Retake the quiz
        </button>
        <Link to="/#start" className="hover:text-slate-900">
          See both ways to start →
        </Link>
      </div>
    </div>
  )
}
