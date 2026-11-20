import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from 'react'
import Cal from '@calcom/embed-react'

export const CALL_URL = 'https://cal.com/roy-banwell/30minaicall'

export function track(text: string, location: string) {
  if (typeof window !== 'undefined') {
    window.dataLayer?.push({ event: 'cta_click', cta_text: text, cta_location: `vb_${location}` })
  }
}

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

export function Reveal({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'figure' | 'li' | 'section'
}) {
  const [ref, inView] = useInView<HTMLElement>(0.15)
  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={`vb-reveal ${inView ? 'is-in' : ''} ${className}`}
      style={{ '--d': delay } as CSSProperties}
    >
      {children}
    </Tag>
  )
}

export function Arrow() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
      <path d="M0 7h17M11 1l6 6-6 6" stroke="currentColor" strokeWidth="2.4" />
    </svg>
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
      className={`vb-btn ${className}`}
      onClick={() => track(label, location)}
    >
      {label} <Arrow />
    </a>
  )
}

/* ------------------------------------------------------------------ */
/* Hero chart: Roy's real Stripe gross volume, Jan 2025 to May 2026.   */
/* Same series as components/GrowthChart.tsx.                          */
/* ------------------------------------------------------------------ */
const REVENUE = [12, 11, 16, 13, 21, 14, 22, 21, 38, 30, 33, 41, 48, 46, 40, 52, 60] // $K per month
const PRIOR = [10, 9, 11, 10, 12, 9, 11, 10, 13, 12, 11, 13, 12, 9, 8, 11, 13]
const CL = 14
const CR = 440
const CT = 20
const CB = 250
const cx = (i: number) => CL + (i / (REVENUE.length - 1)) * (CR - CL)
const cy = (v: number) => CB - (v / 70) * (CB - CT)
const line = (d: number[]) => d.map((v, i) => `${i ? 'L' : 'M'}${cx(i).toFixed(1)},${cy(v).toFixed(1)}`).join(' ')

export function HeroChart() {
  const [ref, inView] = useInView<HTMLDivElement>(0.3)
  const START = 6
  return (
    <div ref={ref} className={`vb-chart ${inView ? 'is-in' : ''}`}>
      <span className="vb-chart__tape" aria-hidden="true" />
      <div className="vb-chart__head">
        <div>
          <div className="vb-mono" style={{ color: 'var(--ink-3)' }}>
            Gross volume · my own Stripe
          </div>
          <div className="vb-chart__big">$466K</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div className="vb-chart__delta">+215% vs prior period</div>
          <div className="vb-mono" style={{ color: 'var(--ink-3)', marginTop: 4 }}>
            Jan 2025 → May 2026
          </div>
        </div>
      </div>
      <svg
        viewBox="0 0 480 290"
        role="img"
        aria-label="Monthly revenue flat near 13 thousand dollars in early 2025, climbing to 60 thousand a month by May 2026"
      >
        <defs>
          <pattern id="vbHatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="6" stroke="#ee4a1c" strokeWidth="1.6" opacity="0.5" />
          </pattern>
        </defs>
        {[0, 20, 40, 60].map((g) => (
          <g key={g}>
            <line x1={CL} x2={CR} y1={cy(g)} y2={cy(g)} stroke="rgba(20,18,16,.12)" strokeDasharray="2 4" />
            <text x={CR + 6} y={cy(g) + 4} fontSize="11" fontFamily="DM Mono, monospace" fill="#8a8275">
              ${g}K
            </text>
          </g>
        ))}
        <path
          className="vb-chart__area"
          d={`${line(REVENUE)} L${CR},${CB} L${CL},${CB} Z`}
          fill="url(#vbHatch)"
        />
        <path d={line(PRIOR)} fill="none" stroke="#8a8275" strokeWidth="1.6" strokeDasharray="3 5" />
        <path
          className="vb-chart__line"
          d={line(REVENUE)}
          fill="none"
          stroke="#141210"
          strokeWidth="3.4"
          strokeLinejoin="round"
          strokeLinecap="round"
          pathLength={1200}
        />
        <g className="vb-chart__note">
          <line x1={cx(START)} x2={cx(START)} y1={cy(REVENUE[START]) - 8} y2={52} stroke="#ee4a1c" strokeWidth="2" />
          <circle cx={cx(START)} cy={cy(REVENUE[START])} r="5.5" fill="#ee4a1c" />
          <text
            x={cx(START) - 8}
            y={40}
            fontSize="19"
            fontFamily="Instrument Serif, serif"
            fontStyle="italic"
            fill="#b8340f"
            textAnchor="middle"
          >
            AI systems go in
          </text>
          <circle cx={cx(16)} cy={cy(60)} r="6" fill="#141210" />
          <text
            x={cx(16) - 12}
            y={cy(60) - 12}
            fontSize="26"
            fontFamily="Big Shoulders Display, sans-serif"
            fontWeight="800"
            fill="#141210"
            textAnchor="end"
          >
            $60K / MO
          </text>
        </g>
        <text x={CL} y={278} fontSize="11" fontFamily="DM Mono, monospace" fill="#8a8275">
          JAN 2025
        </text>
        <text x={CR} y={278} fontSize="11" fontFamily="DM Mono, monospace" fill="#8a8275" textAnchor="end">
          MAY 2026
        </text>
      </svg>
      <div className="vb-mono" style={{ color: 'var(--ink-3)', textAlign: 'center', fontSize: 10.5 }}>
        Dotted line = previous period · Catalina Cleaning, Miami
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Phone: an example of the follow-up sequence, played on scroll.      */
/* ------------------------------------------------------------------ */
type Msg =
  | { kind: 'sys'; text: string; win?: boolean }
  | { kind: 'out' | 'in'; tag: string; text: string }

const THREAD: Msg[] = [
  { kind: 'sys', text: 'Tue 11:47 PM · New quote request · Website' },
  {
    kind: 'out',
    tag: 'Auto · 11:47 PM · seconds later',
    text: 'Hi Maria, it’s Jess at Bright Home Cleaning. Got your quote request! What day works for your first clean?',
  },
  { kind: 'sys', text: 'Thu · Day 2 · no reply yet' },
  {
    kind: 'out',
    tag: 'Auto · Day 2',
    text: 'Hi Maria, just checking in. Is a weekday or weekend better for your clean?',
  },
  { kind: 'sys', text: 'Sun · Day 5' },
  {
    kind: 'out',
    tag: 'Auto · Day 5',
    text: 'Still happy to help whenever you’re ready, Maria. We have a couple of openings this week.',
  },
  { kind: 'in', tag: 'Maria · Day 5', text: 'Sorry, crazy week!! Yes please. Is Thursday morning open?' },
  { kind: 'sys', text: 'Your team is alerted and books it' },
  { kind: 'sys', text: '✓ Booked · Thursday 9:00 AM', win: true },
]

export function PhoneDemo() {
  const [ref, inView] = useInView<HTMLDivElement>(0.45)
  const [count, setCount] = useState(0)
  const [run, setRun] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setCount(THREAD.length)
      return
    }
    setCount(0)
    let i = 0
    let timer: ReturnType<typeof setTimeout>
    const step = () => {
      i += 1
      setCount(i)
      if (i < THREAD.length) {
        const next = THREAD[i]
        timer = setTimeout(step, next.kind === 'sys' ? 900 : 1500)
      }
    }
    timer = setTimeout(step, 500)
    return () => clearTimeout(timer)
  }, [inView, run])

  return (
    <div ref={ref}>
      <div className="vb-phone">
        <div className="vb-phone__screen">
          <div className="vb-phone__bar">
            <span>
              <b>Maria G.</b> · new lead
            </span>
          </div>
          <button
            type="button"
            className="vb-phone__replay"
            onClick={() => {
              track('Replay thread', 'phone')
              setRun((r) => r + 1)
            }}
          >
            ↻ Replay
          </button>
          <div className="vb-phone__thread" aria-live="off">
            {THREAD.slice(0, count).map((m, i) =>
              m.kind === 'sys' ? (
                <div key={`${run}-${i}`} className={`vb-sys ${m.win ? 'vb-sys--win' : ''}`}>
                  {m.text}
                </div>
              ) : (
                <div key={`${run}-${i}`} className={`vb-msg vb-msg--${m.kind}`}>
                  <span className="vb-msg__tag">{m.tag}</span>
                  {m.text}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
      <p className="vb-phone__cap">An example of the sequence. Wording is written for your company.</p>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Calculator: one grounded rate, from one real client result.         */
/* CBUS Cleaning: 12 bookings in month one from 1,430 old leads.       */
/* ------------------------------------------------------------------ */
const CBUS_RATE = 12 / 1430
const BUILD_PRICE = 1500
const money = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`

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
      const eased = 1 - Math.pow(1 - p, 3)
      const v = start + (target - start) * eased
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
  const revenue = bookings * job
  const shown = useTween(revenue)
  const jobsToPay = Math.ceil(BUILD_PRICE / job)
  const fill = (v: number, min: number, max: number) =>
    ({ '--fill': `${((v - min) / (max - min)) * 100}%` }) as CSSProperties

  return (
    <div className="vb-calc">
      <div>
        <div className="vb-field">
          <div className="vb-field__top">
            <label htmlFor="vb-leads">Old leads sitting in your CRM</label>
            <output htmlFor="vb-leads">{leads.toLocaleString('en-US')}</output>
          </div>
          <p>Everyone who asked for a quote and never booked. A rough guess is fine.</p>
          <input
            id="vb-leads"
            className="vb-range"
            type="range"
            min={100}
            max={5000}
            step={50}
            value={leads}
            style={fill(leads, 100, 5000)}
            onChange={(e) => setLeads(Number(e.target.value))}
          />
        </div>
        <div className="vb-field" style={{ borderBottom: '2px solid var(--ink)' }}>
          <div className="vb-field__top">
            <label htmlFor="vb-job">What a first job is worth to you</label>
            <output htmlFor="vb-job">{money(job)}</output>
          </div>
          <p>Just the first clean. Recurring customers are worth far more, so this undercounts.</p>
          <input
            id="vb-job"
            className="vb-range"
            type="range"
            min={100}
            max={600}
            step={10}
            value={job}
            style={fill(job, 100, 600)}
            onChange={(e) => setJob(Number(e.target.value))}
          />
        </div>
        <p style={{ marginTop: 22, color: 'var(--ink-2)', maxWidth: '52ch' }}>
          <span className="vb-serif" style={{ fontSize: 24, color: 'var(--ink)' }}>
            The math is deliberately boring.
          </span>{' '}
          I take the one result I can prove, CBUS Cleaning’s first month, and apply the same rate to your list. No
          industry averages, no best cases.
        </p>
      </div>

      <div className="vb-receipt" aria-live="polite">
        <div className="vb-receipt__head">
          <b>Dead Lead Receipt</b>
          Month one · estimate
        </div>
        <dl>
          <div>
            <dt>Old leads</dt>
            <dd>{leads.toLocaleString('en-US')}</dd>
          </div>
          <div>
            <dt>Booking rate (CBUS, real)</dt>
            <dd>0.84%</dd>
          </div>
          <div>
            <dt>Jobs recovered</dt>
            <dd>≈ {bookings.toFixed(bookings < 10 ? 1 : 0)}</dd>
          </div>
          <div>
            <dt>× first job value</dt>
            <dd>{money(job)}</dd>
          </div>
        </dl>
        <div className="vb-receipt__total">
          <span>Sitting in your CRM right now</span>
          <b>{money(shown)}</b>
        </div>
        <dl>
          <div>
            <dt>Done-For-You build</dt>
            <dd>{money(BUILD_PRICE)}</dd>
          </div>
          <div>
            <dt>Jobs to pay it back</dt>
            <dd>{jobsToPay}</dd>
          </div>
        </dl>
        <p className="vb-receipt__fine">
          Based on one client’s actual result: CBUS Cleaning booked 12 jobs in month one from 1,430 old leads. Yours
          will differ. That’s what the 30-day money-back guarantee is for.
        </p>
        <CallButton location="calculator" label="Check my real numbers" />
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Inline booking: the Cal embed only loads once it scrolls into view. */
/* ------------------------------------------------------------------ */
export function InlineBooking() {
  const [ref, inView] = useInView<HTMLDivElement>(0.05)
  return (
    <div ref={ref} className="vb-cal">
      {inView ? (
        <Cal
          calLink="roy-banwell/30minaicall"
          style={{ width: '100%', height: '100%', minHeight: 520, overflow: 'auto' }}
          config={{ layout: 'month_view', theme: 'light' }}
        />
      ) : (
        <div className="vb-cal__ph">Loading calendar…</div>
      )}
    </div>
  )
}

/** Mobile-only "Book a call" bar that appears after the hero. */
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
    <div className={`vb-dock ${on ? 'is-on' : ''}`}>
      <CallButton location="dock" label="Book a free call" />
    </div>
  )
}
