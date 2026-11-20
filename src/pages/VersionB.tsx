// Version B of the homepage, served at /versionb for comparison with "/".
// Same offer and proof as the live homepage; different design and features.
// Offer source of truth: RELAUNCH-OFFER-2026-11.md in the roy-hq repo.
import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import '../versionb/versionb.css'
import {
  Arrow,
  CallButton,
  Calculator,
  Dock,
  HeroChart,
  InlineBooking,
  PhoneDemo,
  Reveal,
  track,
} from '../versionb/parts'

const d = (n: number) => ({ '--d': n }) as CSSProperties

const TICKER = [
  'Taking 3 new builds for December',
  '30-day money-back guarantee',
  'Built by an operator, not an agency',
  'Builds from $1,500',
  'Every system runs in my own company first',
]

const STRIP = [
  { num: 'Ads: paused', lab: 'Enough new business to pause paid ads for the first time in nearly a year', who: 'City of Good Maids · Buffalo' },
  { num: '3× back', lab: 'Revenue already triple what the system cost', who: 'Sixth Sense Cleaning · Arizona' },
  { num: '12 jobs', lab: 'Booked in month one from 1,430 leads nobody was working', who: 'CBUS Cleaning · Columbus' },
  { num: '5 hrs / wk', lab: 'Handed back to the Director of Operations', who: 'NEAT Commercial · Arkansas' },
]

const TICKETS = [
  {
    big: 'OFF',
    unit: 'Paid ads, first time in a year',
    quote:
      'The automated texts and emails brought in enough business that we were able to pause paid ads for the first time in nearly a year.',
    name: 'Dan Ponto',
    co: 'Owner, City of Good Maids · Buffalo, NY',
    build: 'Build: lead follow-up + old-customer reactivation',
  },
  {
    big: '3×',
    unit: 'What he paid, back in revenue',
    quote:
      'We were spending 1-2 hours every day manually following up with leads. We’ve already tripled what we spent to get the system up and running from the revenue we’ve brought in!',
    name: 'Luke Lovelady',
    co: 'Owner, Sixth Sense Cleaning · Arizona',
    build: 'Build: every inbound lead captured + followed up',
  },
  {
    big: '12',
    unit: 'New bookings in month one',
    quote:
      'I started with a lead follow up automation which has already generated 12 new bookings in just the first month.',
    name: 'Alex Ray',
    co: 'Owner, CBUS Cleaning Company · Columbus, OH',
    build: 'Build: 1,430 dead leads put back to work',
  },
  {
    big: '5h',
    unit: 'Saved every week',
    quote:
      'It has been a huge unlock for my business, saving my Director of Operations roughly 5 hours of work per week.',
    name: 'Nick Beyer',
    co: 'Owner, NEAT Commercial Cleaning · NW Arkansas',
    build: 'Build: supply ordering, automated end to end',
  },
]

const SALES = [
  ['Instant reply to every new lead', 'Day or night, in seconds, so you stop losing the ones who book whoever answers first.'],
  ['Two weeks of follow-up', 'Texts and emails that keep going until they book or say no. Nobody has to remember.'],
  ['Dead-lead reactivation', 'The old quotes sitting in your CRM get worked again, a few each day.'],
  ['Past-customer win-back', 'One-time customers and cancelled plans hear from you again.'],
  ['Review requests', 'Happy customers get asked. Unhappy ones get routed to you first.'],
]

const BACK = [
  ['Scheduling help', 'Open jobs offered to the right cleaner, and conflicts flagged before the day starts.'],
  ['Supply ordering', 'Requests turned into a ready-to-send vendor order, split by who pays.'],
  ['Cleaner hiring funnel', 'Applicants screened, trained and onboarded without you on the phone.'],
  ['First-clean photos', 'New customers asked for photos up front so the quote and the crew match the house.'],
  ['Whatever is eating your week', 'If I’ve built it for my own company, I can build it for yours. One build at a time.'],
]

const FAQ = [
  [
    'What does it cost?',
    'Done-For-You builds start at $1,500, one build at a time. The do-it-yourself Plug-In kit is $500. After launch you can add support for $300 a month, or run it yourself. I tell you the price before we ever get on a call so nobody is surprised.',
  ],
  [
    'What if it doesn’t work?',
    'Done-For-You builds come with a 30-day money-back guarantee. If the system isn’t working your leads end to end in 30 days, you get your money back.',
  ],
  [
    'What software do I need?',
    'The lead follow-up system runs on GoHighLevel. If you don’t have it, you sign up for it and pay for it directly, usually about $197 a month plus text and email usage. I connect it to your website forms and lead sources, and to your booking software where it allows.',
  ],
  [
    'How long does it take?',
    'A lead follow-up build is usually live in about two weeks. Bigger back-office builds get a timeline before you pay.',
  ],
  [
    'Do I own it?',
    'Yes. It lives in your accounts, under your login. If we stop working together, it keeps running.',
  ],
  [
    'Why only 3 builds at a time?',
    'Because I run a cleaning company every day and I build everything myself. Three is what I can do well.',
  ],
  [
    'I’m not a cleaning company. Does this fit?',
    'Most of my clients are cleaning companies. I’ve also built for a commercial cleaner, a realtor and a mortgage broker. If you run a service business that gets leads, one call will tell us quickly.',
  ],
]

export default function VersionB() {
  return (
    <div className="vb">
      {/* ticker */}
      <div className="vb-ticker" aria-hidden="true">
        <div className="vb-ticker__track">
          {[...TICKER, ...TICKER, ...TICKER, ...TICKER].map((t, i) => (
            <span key={i}>
              <i>◆</i>&nbsp;&nbsp;{t}
            </span>
          ))}
        </div>
      </div>

      {/* nav */}
      <header className="vb-nav">
        <div className="vb-wrap vb-nav__in">
          <a href="#top" className="vb-brand">
            UPLEVEL<b>.</b> <small>AUTOMATIONS</small>
          </a>
          <nav className="vb-nav__links" aria-label="Sections">
            <a href="#proof">Proof</a>
            <a href="#numbers">Your numbers</a>
            <a href="#pricing">Pricing</a>
            <a href="#call">The call</a>
            <a href="#faq">FAQ</a>
            <CallButton location="nav" label="Book a call" className="vb-btn--sm" />
          </nav>
        </div>
      </header>

      <main id="top">
        {/* 00 hero */}
        <section className="vb-hero">
          <div className="vb-wrap vb-hero__grid">
            <div>
              <p className="vb-eyebrow vb-rise" style={d(0)}>
                For cleaning company owners
              </p>
              <h1 className="vb-display vb-rise" style={d(1)}>
                I took my cleaning company from <span className="vb-from">$13K</span> to{' '}
                <span className="vb-to">$60K a month.</span>
              </h1>
              <div className="vb-rise" style={{ ...d(3), marginTop: 26 }}>
                <p className="vb-hero__sub">
                  Now I install the same AI systems in yours, so the leads you already paid for turn into booked jobs.
                </p>
              </div>
              <div className="vb-hero__cta vb-rise" style={d(4)}>
                <CallButton location="hero" />
                <a href="#numbers" className="vb-btn vb-btn--ghost" onClick={() => track('Run your numbers', 'hero')}>
                  Run your numbers
                </a>
              </div>
              <p className="vb-hero__note vb-rise" style={d(5)}>
                Builds start at $1,500 · 30-day money-back guarantee · Taking 3 new builds for December
              </p>
            </div>
            <div className="vb-rise" style={d(3)}>
              <HeroChart />
            </div>
          </div>
        </section>

        {/* proof strip */}
        <section className="vb-strip" aria-label="Client results">
          <div className="vb-wrap vb-strip__grid">
            {STRIP.map((s, i) => (
              <Reveal key={s.who} delay={i} className="vb-strip__cell">
                <div className="vb-strip__num">{s.num}</div>
                <div className="vb-strip__lab">{s.lab}</div>
                <div className="vb-mono vb-strip__who">{s.who}</div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 01 night */}
        <section className="vb-sec vb-night">
          <span className="vb-secnum" aria-hidden="true">
            01
          </span>
          <div className="vb-wrap vb-night__grid">
            <div>
              <Reveal>
                <p className="vb-clock">TUESDAY · 11:47 PM</p>
                <h2 className="vb-display vb-h2" style={{ marginTop: 18 }}>
                  A lead just came in. <span className="vb-signal">You’re asleep.</span>
                </h2>
                <p className="vb-lede">
                  By the time someone calls her back tomorrow, she’s booked whoever answered first. I measured this in
                  my own company, across 935 real leads. The gap between a lead who gets reached and one who doesn’t is
                  the whole game.
                </p>
              </Reveal>
              <div className="vb-facts">
                <Reveal delay={0} className="vb-fact">
                  <div className="vb-fact__n">41%</div>
                  <p>of website quote requests arrived outside working hours.</p>
                </Reveal>
                <Reveal delay={1} className="vb-fact">
                  <div className="vb-fact__n">
                    20<small>vs</small>7%
                  </div>
                  <p>booked when someone reached them by phone, versus when nobody did.</p>
                </Reveal>
                <Reveal delay={2} className="vb-fact">
                  <div className="vb-fact__n">59%</div>
                  <p>of leads never got a real conversation at all.</p>
                </Reveal>
              </div>
              <p className="vb-source">
                Source: my own lead log, calls and bookings, Sept to Nov 2026.{' '}
                <Link className="vb-link" to="/benchmarks/cleaning-lead-response" onClick={() => track('Read the 935-lead study', 'night')}>
                  Read the full 935-lead study
                </Link>
              </p>
            </div>
            <PhoneDemo />
          </div>
        </section>

        {/* 02 calculator */}
        <section className="vb-sec" id="numbers" style={{ scrollMarginTop: 60 }}>
          <span className="vb-secnum" aria-hidden="true">
            02
          </span>
          <div className="vb-wrap">
            <Reveal>
              <p className="vb-eyebrow">Run your numbers</p>
              <h2 className="vb-display vb-h2">
                What’s your dead-lead <br />
                pile <span className="vb-signal">worth?</span>
              </h2>
              <p className="vb-lede">
                Every quote request that never booked is still in your CRM. You paid for each one. Drag the sliders.
              </p>
            </Reveal>
            <Calculator />
          </div>
        </section>

        {/* 03 proof */}
        <section className="vb-sec vb-sec--alt" id="proof" style={{ scrollMarginTop: 60 }}>
          <span className="vb-secnum" aria-hidden="true">
            03
          </span>
          <div className="vb-wrap">
            <Reveal>
              <p className="vb-eyebrow">Receipts</p>
              <h2 className="vb-display vb-h2">
                Five cleaning companies hired me. <span className="vb-signal">All five are live.</span>
              </h2>
              <p className="vb-lede">Four of them said I could use their names. These are their words, not mine.</p>
            </Reveal>
            <div className="vb-proof">
              {TICKETS.map((t, i) => (
                <Reveal as="figure" key={t.name} delay={i % 2} className="vb-ticket">
                  <div className="vb-ticket__stub">
                    <div>
                      <div className="vb-ticket__big">{t.big}</div>
                      <div className="vb-ticket__unit">{t.unit}</div>
                    </div>
                    <div className="vb-mono" style={{ color: 'var(--ink-3)', fontSize: 10.5 }}>
                      No. {String(i + 1).padStart(3, '0')} · Live
                    </div>
                  </div>
                  <div className="vb-ticket__body">
                    <blockquote>“{t.quote}”</blockquote>
                    <figcaption>
                      <b>{t.name}</b>
                      <br />
                      {t.co}
                      <div className="vb-mono vb-ticket__build">{t.build}</div>
                    </figcaption>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="vb-proof__more">
              The fifth runs three locations and asked to stay anonymous. He bought a second build within weeks of the
              first.{' '}
              <Link className="vb-link" to="/proof">
                See the systems running in my own company
              </Link>
            </p>
          </div>
        </section>

        {/* 04 what I build */}
        <section className="vb-sec">
          <span className="vb-secnum" aria-hidden="true">
            04
          </span>
          <div className="vb-wrap">
            <Reveal>
              <p className="vb-eyebrow">What I build</p>
              <h2 className="vb-display vb-h2">
                Sales first. <br />
                Back office <span className="vb-signal">second.</span>
              </h2>
              <p className="vb-lede">
                Most owners start with the leads, because that’s where the money shows up fastest. Once that’s working,
                we look at what’s next.
              </p>
            </Reveal>
            <div className="vb-build">
              <Reveal>
                <h3>
                  Sales <span>Start here</span>
                </h3>
                <ul>
                  {SALES.map(([b, s], i) => (
                    <li key={b}>
                      <i>{String(i + 1).padStart(2, '0')}</i>
                      <div>
                        <b>{b}</b>
                        <span>{s}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={1}>
                <h3>
                  Back office <span>Then this</span>
                </h3>
                <ul>
                  {BACK.map(([b, s], i) => (
                    <li key={b}>
                      <i>{String(i + 1).padStart(2, '0')}</i>
                      <div>
                        <b>{b}</b>
                        <span>{s}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 05 pricing */}
        <section className="vb-sec vb-sec--alt" id="pricing" style={{ scrollMarginTop: 60 }}>
          <span className="vb-secnum" aria-hidden="true">
            05
          </span>
          <div className="vb-wrap">
            <Reveal>
              <p className="vb-eyebrow">Pricing, in the open</p>
              <h2 className="vb-display vb-h2">
                Three ways <br />
                to <span className="vb-signal">work together.</span>
              </h2>
            </Reveal>
            <Reveal className="vb-tiers">
              <div className="vb-tier">
                <div className="vb-tier__name">Plug-In</div>
                <div className="vb-tier__price">$500</div>
                <p className="vb-tier__tag">My lead follow-up system, ready to plug in yourself.</p>
                <ul>
                  <li>The same follow-up I run in my own company, as a ready-made GoHighLevel setup</li>
                  <li>A step-by-step guide to hook it up</li>
                  <li>You set it up and you own it</li>
                </ul>
                <p className="vb-tier__fine">No setup help or guarantee on this one.</p>
                <CallButton location="tier_plugin" label="Get the kit" className="vb-btn--ghost" />
              </div>

              <div className="vb-tier vb-tier--main">
                <div className="vb-stamp" aria-hidden="true">
                  <span>
                    <b>30</b>
                    day money
                    <br />
                    back
                  </span>
                </div>
                <div className="vb-tier__name">Done-For-You · most popular</div>
                <div className="vb-tier__price">
                  <small>FROM</small>$1,500
                </div>
                <p className="vb-tier__tag">I build it for your business and make sure it works.</p>
                <ul>
                  <li>Sales: instant lead follow-up, old leads and past customers re-engaged, review requests</li>
                  <li>Back office: scheduling, supply ordering, hiring. One build at a time</li>
                  <li>Optional support after launch: $300 a month</li>
                </ul>
                <p className="vb-tier__fine">
                  Guaranteed: if it isn’t working your leads end to end in 30 days, you get your money back.
                </p>
                <CallButton location="tier_dfy" className="vb-btn--signal" />
              </div>

              <div className="vb-tier">
                <div className="vb-tier__name">Transformation</div>
                <div className="vb-tier__price">$15,000</div>
                <p className="vb-tier__tag">An AI-first rebuild of how your whole company runs.</p>
                <ul>
                  <li>Every core process redesigned around AI</li>
                  <li>Your team trained on the systems</li>
                  <li>Guaranteed by milestones, agreed up front</li>
                </ul>
                <p className="vb-tier__fine">Limited to 2 per quarter.</p>
                <CallButton location="tier_transformation" label="Apply" className="vb-btn--ghost" />
              </div>
            </Reveal>
            <div className="vb-tiers__foot">
              <span>Taking 3 new builds for December</span>
              <span>You own everything I build</span>
              <span>No retainers required</span>
            </div>
          </div>
        </section>

        {/* 06 the call */}
        <section className="vb-sec" id="call" style={{ scrollMarginTop: 60 }}>
          <span className="vb-secnum" aria-hidden="true">
            06
          </span>
          <div className="vb-wrap">
            <Reveal>
              <p className="vb-eyebrow">The first call</p>
              <h2 className="vb-display vb-h2">
                50 minutes. <br />
                <span className="vb-signal">One recommendation.</span>
              </h2>
              <p className="vb-lede">
                It’s free, and you’ll know the price before you book. Here is exactly what happens, minute by minute.
              </p>
            </Reveal>
            <Reveal>
              <div className="vb-call">
                <div className="vb-call__step">
                  <div className="vb-call__time">00:00 → 20:00</div>
                  <h3>I learn your business</h3>
                  <p>How leads come in, what happens to the ones that don’t book, and what’s eating your week.</p>
                </div>
                <div className="vb-call__step">
                  <div className="vb-call__time">20:00 → 35:00</div>
                  <h3>I show you mine</h3>
                  <p>The actual systems running in my company and my clients’, picked for what you just told me.</p>
                </div>
                <div className="vb-call__step">
                  <div className="vb-call__time">35:00 → 50:00</div>
                  <h3>One build, one price</h3>
                  <p>The single build I’d do first and what it costs. Say yes and you get a one-page scope the same day.</p>
                </div>
              </div>
              <div className="vb-call__bar" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <div className="vb-call__rules">
                <span className="vb-chip">No slide deck</span>
                <span className="vb-chip">No menu of 12 things</span>
                <span className="vb-chip">No surprise pricing</span>
                <span className="vb-chip">Price known before you book</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 07 about */}
        <section className="vb-sec vb-sec--alt">
          <span className="vb-secnum" aria-hidden="true">
            07
          </span>
          <div className="vb-wrap vb-about">
            <Reveal as="figure" className="vb-portrait">
              <img src="/roy-headshot.png" alt="Roy Banwell" loading="lazy" width={606} height={738} />
              <figcaption className="vb-mono">Roy Banwell · operator</figcaption>
            </Reveal>
            <Reveal delay={1}>
              <p className="vb-eyebrow">Who you’d be working with</p>
              <h2 className="vb-display vb-h2">
                I’m not an agency. <span className="vb-signal">I’m in the trade.</span>
              </h2>
              <p style={{ marginTop: 24 }}>
                I co-own Catalina Cleaning, a home cleaning company in Miami. Instead of hiring more office staff to
                grow, I built AI systems to answer leads, follow up, check on customers and keep the schedule straight.
              </p>
              <p>
                Everything I sell ran in my own company first, with real customers and real money on the line. When
                something breaks at 7am, I’m the one who finds out. That’s the difference between me and someone who
                read about automation last month.
              </p>
              <div className="vb-about__stats">
                <div>
                  <b>1,000+</b>
                  <span>leads handled a month</span>
                </div>
                <div>
                  <b>200+</b>
                  <span>jobs a month</span>
                </div>
                <div>
                  <b>$13K → $60K</b>
                  <span>monthly revenue, in about a year</span>
                </div>
              </div>
              <a
                href="https://x.com/Roy_Banwell"
                target="_blank"
                rel="noopener noreferrer"
                className="vb-btn vb-btn--ghost vb-btn--sm"
                onClick={() => track('Follow on X', 'about')}
              >
                I post the numbers on X <Arrow />
              </a>
            </Reveal>
          </div>
        </section>

        {/* 08 faq */}
        <section className="vb-sec" id="faq" style={{ scrollMarginTop: 60 }}>
          <span className="vb-secnum" aria-hidden="true">
            08
          </span>
          <div className="vb-wrap">
            <Reveal>
              <p className="vb-eyebrow">Straight answers</p>
              <h2 className="vb-display vb-h2">
                Before <span className="vb-signal">you ask.</span>
              </h2>
            </Reveal>
            <div className="vb-faq">
              {FAQ.map(([q, a], i) => (
                <details key={q} open={i === 0}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* final */}
        <section className="vb-final" id="book">
          <div className="vb-wrap">
            <Reveal>
              <p className="vb-eyebrow" style={{ color: 'rgba(242,237,228,.65)' }}>
                Taking 3 new builds for December
              </p>
              <h2 className="vb-display">
                Let’s find the jobs hiding <span className="vb-signal">in your leads.</span>
              </h2>
            </Reveal>
            <div className="vb-final__grid">
              <Reveal className="vb-final__pitch">
                <p className="vb-serif" style={{ fontSize: 30, lineHeight: 1.15, margin: '0 0 26px' }}>
                  Pick a time. Answer a few questions so I come prepared. That’s it.
                </p>
                <ul>
                  <li>
                    <i>01</i>
                    <span>Free 50-minute call, with me, not a salesperson</span>
                  </li>
                  <li>
                    <i>02</i>
                    <span>Builds start at $1,500, with a 30-day money-back guarantee</span>
                  </li>
                  <li>
                    <i>03</i>
                    <span>You leave with one clear recommendation either way</span>
                  </li>
                </ul>
                <CallButton location="final" label="Open the calendar" className="vb-btn--signal" />
              </Reveal>
              <Reveal delay={1}>
                <InlineBooking />
              </Reveal>
            </div>

            <footer className="vb-foot">
              <span>© {new Date().getFullYear()} UpLevel Automations · Miami, FL</span>
              <nav aria-label="Footer">
                <Link to="/">Main site</Link>
                <Link to="/proof">Proof</Link>
                <Link to="/benchmarks/cleaning-lead-response">935-lead study</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/privacy">Privacy</Link>
                <Link to="/terms">Terms</Link>
              </nav>
            </footer>
          </div>
        </section>
      </main>

      <Dock />
    </div>
  )
}
