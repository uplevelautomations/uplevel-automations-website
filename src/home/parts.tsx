import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from 'react'
import Cal from '@calcom/embed-react'

export const CALL_URL = 'https://cal.com/roy-banwell/30minaicall'

/** True once the element has scrolled into view (stays true). */
export function useInView<T extends Element>(threshold = 0.25) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return [ref, inView] as const
}

export function Arrow() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
      <path d="M0 7h17M11 1l6 6-6 6" stroke="currentColor" strokeWidth="2.4" />
    </svg>
  )
}

export function track(text: string, location: string) {
  if (typeof window !== 'undefined') {
    window.dataLayer?.push({ event: 'cta_click', cta_text: text, cta_location: `home_${location}` })
  }
}

const reducedMotion = () =>
  typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

export function Reveal({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'figure'
}) {
  const [ref, inView] = useInView<HTMLElement>(0.15)
  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={`vc-reveal ${inView ? 'is-in' : ''} ${className}`}
      style={{ '--d': delay } as CSSProperties}
    >
      {children}
    </Tag>
  )
}

export function CallButton({
  location,
  label = 'Book a free 50-min call',
  className = '',
}: {
  location: string
  label?: string
  className?: string
}) {
  return (
    <a
      href={CALL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`vc-btn ${className}`}
      onClick={() => track(label, location)}
    >
      {label} <Arrow />
    </a>
  )
}

/* ------------------------------------------------------------------ */
/* Console: an example day of the system at work, streamed line by     */
/* line. Illustrative, and labelled that way on the page.              */
/* ------------------------------------------------------------------ */
type Line = { t: string; k: string; v: string; tone?: 'think' | 'win' } | 'gap'

const LOG: Line[] = [
  { t: '23:47', k: 'lead.new', v: 'Maria G. · website quote form' },
  { t: '23:47', k: 'reply.sent', v: '“Hi Maria, got your request…” · 7s' },
  { t: '23:47', k: 'thinking', v: 'After hours. Nobody on shift. Start follow-up.', tone: 'think' },
  'gap',
  { t: '08:15', k: 'followup', v: 'Day 1 text sent' },
  { t: '10:02', k: 'thread.read', v: 'She replied: “Thursday works”' },
  { t: '10:02', k: 'thinking', v: 'Ready to book. Alert the team.', tone: 'think' },
  { t: '10:03', k: 'booked', v: 'Thu 9:00 AM · first clean', tone: 'win' },
  'gap',
  { t: '11:30', k: 'reactivate', v: '50 old leads texted today' },
  { t: '14:30', k: 'clean.done', v: 'Check-in sent to the Parkers' },
  { t: '14:41', k: 'thread.read', v: '“Everything looked great, thank you!”' },
  { t: '14:41', k: 'thinking', v: 'Happy customer. Ask for a review.', tone: 'think' },
  { t: '14:42', k: 'review.ask', v: 'Google review link sent', tone: 'win' },
]

const LABELS: Record<string, string> = {
  'lead.new': 'New lead',
  'reply.sent': 'Replied',
  thinking: 'Thinking',
  followup: 'Follow-up',
  'thread.read': 'Read reply',
  booked: 'Booked',
  reactivate: 'Old leads',
  'clean.done': 'Clean done',
  'review.ask': 'Review ask',
}

export function Console() {
  const [ref, inView] = useInView<HTMLDivElement>(0.3)
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reducedMotion()) {
      setN(LOG.length)
      return
    }
    let i = 0
    let timer: ReturnType<typeof setTimeout>
    const step = () => {
      i += 1
      if (i > LOG.length) {
        i = 0
        setN(0)
        timer = setTimeout(step, 600)
        return
      }
      setN(i)
      const next = LOG[i]
      const wait = i === LOG.length ? 5200 : next === 'gap' ? 250 : typeof next === 'object' && next.tone === 'think' ? 1100 : 750
      timer = setTimeout(step, wait)
    }
    timer = setTimeout(step, 700)
    return () => clearTimeout(timer)
  }, [inView])

  const shown = LOG.slice(0, n)
  const count = (k: string) => shown.filter((l) => l !== 'gap' && l.k === k).length

  return (
    <div ref={ref}>
      <div className="vc-console" aria-label="Example activity log">
        <div className="vc-console__bar">
          <span>
            <i /> Activity
          </span>
          <span>example day</span>
        </div>
        <div className="vc-console__body" aria-hidden="true">
          {shown.map((l, i) =>
            l === 'gap' ? (
              <span key={i} className="vc-log--gap" />
            ) : (
              <div key={i} className={`vc-log ${l.tone ? `vc-log--${l.tone}` : ''}`}>
                <time>{l.t}</time>
                <b>{LABELS[l.k] ?? l.k}</b>
                <span>{l.v}</span>
              </div>
            ),
          )}
        </div>
        <div className="vc-console__foot">
          <div>
            <b>{count('reply.sent') + count('followup') + count('review.ask') + (count('reactivate') ? 50 : 0)}</b>
            messages sent
          </div>
          <div>
            <b>{count('booked')}</b>
            job booked
          </div>
          <div>
            <b>0</b>
            minutes of your time
          </div>
        </div>
      </div>
      <p className="vc-console__cap">An example day. Names and times are illustrative.</p>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Trace: pick a situation, watch how the system handles it.           */
/* Each one is something built and running, for me or for a client.    */
/* ------------------------------------------------------------------ */
const SCENARIOS = [
  {
    tab: 'A quote request at midnight',
    kind: 'New lead',
    sees: (
      <>
        A website quote form at <code>11:47 PM</code>. 3 bed, 2 bath, wants a deep clean.
      </>
    ),
    reads: 'It’s after hours. Nobody is on shift until 8 AM. She’s probably asking two other companies right now.',
    decides: 'Answer now. Don’t wait for morning.',
    does: 'Texts her within seconds, starts two weeks of follow-up, and alerts your team first thing in the morning.',
    proof: 'In my own data, 41% of website quote requests arrived outside working hours.',
  },
  {
    tab: 'A lead from last spring',
    kind: 'Dead lead',
    sees: (
      <>
        Asked for a quote <code>7 months ago</code>. Never booked. Nobody has contacted her since.
      </>
    ),
    reads: 'Not a current customer. Hasn’t opted out. You already paid to get this lead.',
    decides: 'Worth one friendly check-in.',
    does: 'Sends a short, personal text as part of a small daily batch. If she replies, your team gets her right away.',
    proof: 'CBUS Cleaning: 12 bookings in month one from 1,430 leads like this.',
  },
  {
    tab: 'A clean just finished',
    kind: 'After the job',
    sees: (
      <>
        A job marked complete. Two hours later the customer texts: <code>“Everything looked great!”</code>
      </>
    ),
    reads: 'The whole conversation, not just one message. She’s happy, and she hasn’t been asked for a review before.',
    decides: 'Happy customer. Ask for the review.',
    does: 'Sends your Google review link. If she’d been unhappy, it would alert you instead and never ask.',
    proof: 'Running every day in my own cleaning company.',
  },
  {
    tab: 'A crew needs supplies',
    kind: 'Back office',
    sees: (
      <>
        A supply request typed into the cleaning software: <code>liners, towels, floor cleaner</code>.
      </>
    ),
    reads: 'Which building it’s for, and which items you pay for versus which get billed back to the client.',
    decides: 'Split it the way the contract says.',
    does: 'Builds a ready-to-send vendor order with the costs split correctly. No retyping, no typos.',
    proof: 'NEAT Commercial Cleaning: about 5 hours a week saved for the Director of Operations.',
  },
]

const KEYS = ['Sees', 'Reads', 'Decides', 'Does'] as const

export function Trace() {
  const [ref, inView] = useInView<HTMLDivElement>(0.35)
  const [active, setActive] = useState(0)
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reducedMotion()) {
      setStep(5)
      return
    }
    setStep(0)
    let s = 0
    let timer: ReturnType<typeof setTimeout>
    const tick = () => {
      s += 1
      setStep(s)
      if (s < 5) timer = setTimeout(tick, s === 2 ? 1500 : 950)
    }
    timer = setTimeout(tick, 350)
    return () => clearTimeout(timer)
  }, [active, inView])

  const sc = SCENARIOS[active]
  const values: ReactNode[] = [sc.sees, sc.reads, sc.decides, sc.does]

  return (
    <div ref={ref} className="vc-trace">
      <div className="vc-trace__tabs" role="tablist" aria-label="Situations">
        {SCENARIOS.map((s, i) => (
          <button
            key={s.tab}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={`vc-tab ${i === active ? 'is-on' : ''}`}
            onClick={() => {
              track(s.tab, 'trace')
              setActive(i)
            }}
          >
            <small>{s.kind}</small>
            {s.tab}
          </button>
        ))}
      </div>
      <div className="vc-trace__body" role="tabpanel">
        {KEYS.map((k, i) => {
          const on = step > i
          const now = step === i
          return (
            <div
              key={`${active}-${k}`}
              className={`vc-step ${on ? 'is-on' : ''} ${now ? 'is-now is-on' : ''} ${k === 'Decides' ? 'vc-step--decide' : ''}`}
            >
              <div className="vc-step__k">{k}</div>
              <div className="vc-step__v">
                {on ? (
                  values[i]
                ) : now ? (
                  <span className="vc-thinking" aria-label="thinking">
                    <i />
                    <i />
                    <i />
                  </span>
                ) : (
                  <span style={{ color: 'var(--dim)' }}>…</span>
                )}
              </div>
            </div>
          )
        })}
        <div className={`vc-trace__proof ${step >= 5 ? 'is-on' : ''}`}>
          <b>In the real world</b>
          <span>{sc.proof}</span>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Study bars: figures from the 935-lead benchmark page.               */
/* ------------------------------------------------------------------ */
export function StudyBars() {
  const [ref, inView] = useInView<HTMLDivElement>(0.4)
  return (
    <div ref={ref} className="vc-bars">
      <div className="vc-bar">
        <div className="vc-bar__top">
          <span>Booked, when someone reached them by phone</span>
          <b>20%</b>
        </div>
        <div className="vc-bar__track">
          <div className="vc-bar__fill" style={{ width: inView ? '100%' : 0 }} />
        </div>
      </div>
      <div className="vc-bar vc-bar--low">
        <div className="vc-bar__top">
          <span>Booked, when nobody did</span>
          <b>7%</b>
        </div>
        <div className="vc-bar__track">
          <div className="vc-bar__fill" style={{ width: inView ? '35%' : 0 }} />
        </div>
      </div>
      <div className="vc-bars__pair">
        <div>
          <b>59%</b>
          <span>of leads never got a real conversation</span>
        </div>
        <div>
          <b>41%</b>
          <span>of website quote requests came in after hours</span>
        </div>
      </div>
      <div className="vc-mono vc-bars__src">935 real leads · my own company · Sept to Nov 2026</div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Calculator: same single grounded rate as Version B (CBUS result).   */
/* ------------------------------------------------------------------ */
const CBUS_RATE = 12 / 1430
const BUILD_PRICE = 1500
const money = (v: number) => `$${Math.round(v).toLocaleString('en-US')}`

function useTween(target: number) {
  const [value, setValue] = useState(target)
  const from = useRef(target)
  useEffect(() => {
    const start = from.current
    if (start === target) return
    const t0 = performance.now()
    let raf = 0
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / 380)
      const v = start + (target - start) * (1 - Math.pow(1 - p, 3))
      from.current = v
      setValue(v)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target])
  return value
}

export function Calculator() {
  const [leads, setLeads] = useState(1200)
  const [job, setJob] = useState(220)
  const bookings = leads * CBUS_RATE
  const shown = useTween(bookings * job)
  const fill = (v: number, min: number, max: number) =>
    ({ '--fill': `${((v - min) / (max - min)) * 100}%` }) as CSSProperties

  return (
    <div className="vc-calc">
      <div className="vc-calc__in">
        <div className="vc-field">
          <div className="vc-field__top">
            <label htmlFor="vc-leads">Old leads sitting in your CRM</label>
            <output htmlFor="vc-leads">{leads.toLocaleString('en-US')}</output>
          </div>
          <p>Everyone who asked for a quote and never booked. A rough guess is fine.</p>
          <input
            id="vc-leads"
            className="vc-range"
            type="range"
            min={100}
            max={5000}
            step={50}
            value={leads}
            style={fill(leads, 100, 5000)}
            onChange={(e) => setLeads(Number(e.target.value))}
          />
        </div>
        <div className="vc-field">
          <div className="vc-field__top">
            <label htmlFor="vc-job">What a first job is worth to you</label>
            <output htmlFor="vc-job">{money(job)}</output>
          </div>
          <p>Just the first clean. Recurring customers are worth far more, so this undercounts.</p>
          <input
            id="vc-job"
            className="vc-range"
            type="range"
            min={100}
            max={600}
            step={10}
            value={job}
            style={fill(job, 100, 600)}
            onChange={(e) => setJob(Number(e.target.value))}
          />
        </div>
      </div>
      <div className="vc-calc__out" aria-live="polite">
        <div className="vc-mono" style={{ color: 'var(--mute)' }}>
          Estimated month one, from leads you already have
        </div>
        <div className="vc-calc__big">{money(shown)}</div>
        <dl>
          <div>
            <dt>Jobs recovered</dt>
            <dd>≈ {bookings.toFixed(bookings < 10 ? 1 : 0)}</dd>
          </div>
          <div>
            <dt>Booking rate used (CBUS, real)</dt>
            <dd>0.84%</dd>
          </div>
          <div>
            <dt>Jobs to pay back a $1,500 build</dt>
            <dd>{Math.ceil(BUILD_PRICE / job)}</dd>
          </div>
        </dl>
        <p className="vc-calc__fine">
          Uses one client’s actual result: CBUS Cleaning booked 12 jobs in month one from 1,430 old leads. Yours will
          differ. That’s what the 30-day money-back guarantee is for.
        </p>
        <CallButton location="calculator" label="Check my real numbers" />
      </div>
    </div>
  )
}

export function InlineBooking({ dark = false }: { dark?: boolean }) {
  const [ref, inView] = useInView<HTMLDivElement>(0.05)
  return (
    <div ref={ref} className="vc-cal">
      {inView ? (
        <Cal
          calLink="roy-banwell/30minaicall"
          style={{ width: '100%', height: '100%', minHeight: 520, overflow: 'auto' }}
          config={{ layout: 'month_view', theme: dark ? 'dark' : 'light' }}
        />
      ) : (
        <div className="vc-cal__ph vc-mono">Loading calendar…</div>
      )}
    </div>
  )
}

export function Dock() {
  const [on, setOn] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const nearEnd = y + window.innerHeight > document.documentElement.scrollHeight - 900
      setOn(y > 700 && !nearEnd)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div className={`vc-dock ${on ? 'is-on' : ''}`}>
      <CallButton location="dock" label="Book a free call" />
    </div>
  )
}
