// Homepage. Offer source of truth: RELAUNCH-OFFER-2026-11.md (CURRENT OFFER
// section) in the roy-hq repo. Styles live in src/home/home.css, scoped
// under .vc; the page uses the light "clay" theme.
import { useEffect, type CSSProperties } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './home/home.css'
import Logo from './components/Logo'
import {
  Arrow,
  CallButton,
  Calculator,
  Console,
  Dock,
  InlineBooking,
  Reveal,
  StudyBars,
  Trace,
  track,
} from './home/parts'

const d = (n: number) => ({ '--d': n }) as CSSProperties

const RESULTS = [
  { big: 'Ads paused', lab: 'Enough new business to pause paid ads for the first time in nearly a year', who: 'City of Good Maids · Buffalo' },
  { big: '3× return', lab: 'Revenue already triple what the system cost', who: 'Sixth Sense Cleaning · Arizona' },
  { big: '12 bookings', lab: 'In month one, from 1,430 leads nobody was working', who: 'CBUS Cleaning · Columbus' },
  { big: '5 hrs a week', lab: 'Handed back to the Director of Operations', who: 'NEAT Commercial · Arkansas' },
]

const QUOTES = [
  {
    num: 'Ads off',
    unit: 'first time in a year',
    quote:
      'The automated texts and emails brought in enough business that we were able to pause paid ads for the first time in nearly a year.',
    name: 'Dan Ponto',
    co: 'Owner, City of Good Maids · Buffalo, NY',
  },
  {
    num: '3×',
    unit: 'what he paid, back',
    quote:
      'We were spending 1-2 hours every day manually following up with leads. We’ve already tripled what we spent to get the system up and running from the revenue we’ve brought in!',
    name: 'Luke Lovelady',
    co: 'Owner, Sixth Sense Cleaning · Arizona',
  },
  {
    num: '12',
    unit: 'bookings, month one',
    quote: 'I started with a lead follow up automation which has already generated 12 new bookings in just the first month.',
    name: 'Alex Ray',
    co: 'Owner, CBUS Cleaning Company · Columbus, OH',
  },
  {
    num: '5 hrs',
    unit: 'saved every week',
    quote: 'It has been a huge unlock for my business, saving my Director of Operations roughly 5 hours of work per week.',
    name: 'Nick Beyer',
    co: 'Owner, NEAT Commercial Cleaning · NW Arkansas',
  },
]

const FAQ = [
  [
    'What does it cost?',
    'A single build starts at $1,500. The foundation plus your first build is $2,500, and every build after that starts at $1,250. If I host something for you, it’s $50 a month, or $125 a month if you want me making changes too. You’ll know the price before we ever get on a call.',
  ],
  [
    'What if it doesn’t work?',
    'Builds come with a 30-day money-back guarantee. If the system isn’t working end to end in 30 days, you get your money back.',
  ],
  [
    'What’s the foundation, in plain English?',
    'Four things, set up in accounts you own: a place where everything your AI knows about your company is stored, a place your automations run around the clock without your computer on, one channel where your team sees what’s happening, and the AI tool of your choice connected to all of it. Running costs are about $25 a month, paid directly to those tools.',
  ],
  [
    'Do I own it?',
    'With the foundation, yes: everything lives in your accounts, so you’re never locked into me or any one tool. Without it, lead follow-up still lives in your own GoHighLevel, and anything with code runs on my servers for $50 a month.',
  ],
  [
    'Is the AI going to say something dumb to my customers?',
    'The messages your customers get are written and approved up front, in your voice. The AI’s job is to read the conversation and decide what should happen next, like whether to follow up, alert your team, or ask for a review. Anything sensitive goes to a person.',
  ],
  [
    'What software do I need for lead follow-up?',
    'It runs on GoHighLevel. If you don’t have it, you sign up and pay for it directly, usually about $197 a month plus text and email usage. I connect it to your website forms and lead sources, and to your booking software where it allows.',
  ],
  [
    'How long does it take?',
    'Most builds are live in one to two weeks. Once your foundation is in, later builds are usually live within a week.',
  ],
  [
    'Why only 3 builds at a time?',
    'Because I run a cleaning company every day and I build everything myself. Three is what I can do well.',
  ],
]

/** Links from other pages (e.g. "/#services") scroll to the right section. */
function useHashScroll() {
  const location = useLocation()
  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    const t = setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100)
    return () => clearTimeout(t)
  }, [location])
}

export default function App() {
  useHashScroll()
  return (
    <div className="vc vc--light vc--clay">
      <div className="vc-ambient" aria-hidden="true" />
      <div className="vc-glow" style={{ top: -260, right: -200 }} aria-hidden="true" />

      <header className="vc-nav">
        <div className="vc-wrap vc-nav__in">
          <a href="#top" className="vc-brand" aria-label="UpLevel">
            <Logo size={30} />
          </a>
          <nav className="vc-nav__links" aria-label="Sections">
            <a href="#start">Where to start</a>
            <a href="#how">How it thinks</a>
            <a href="#proof">Results</a>
            <a href="#pricing">Pricing</a>
            <Link to="/blog">Blog</Link>
            <CallButton location="nav" label="Book a call" className="vc-btn--sm" />
          </nav>
        </div>
      </header>

      <main id="top">
        {/* hero */}
        <section className="vc-hero">
          <div className="vc-wrap vc-hero__grid">
            <div>
              <div className="vc-status vc-rise" style={d(0)}>
                <i /> Live in 5 cleaning companies
              </div>
              <h1 className="vc-h vc-rise" style={d(1)}>
                Run your cleaning company on AI, <em>not more office staff.</em>
              </h1>
              <p className="vc-hero__sub vc-rise" style={d(2)}>
                I did it in mine and went from <b>$13K to $60K a month</b>. Now I build the same systems in yours, one at
                a time.
              </p>
              <div className="vc-hero__cta vc-rise" style={d(3)}>
                <CallButton location="hero" />
                <a href="#start" className="vc-btn vc-btn--ghost" onClick={() => track('Where to start', 'hero')}>
                  Where to start
                </a>
              </div>
              <p className="vc-hero__note vc-rise" style={d(4)}>
                Builds from $1,500 · 30-day money-back guarantee · Taking 3 new builds for December
              </p>
            </div>
            <div className="vc-rise" style={d(3)}>
              <Console />
            </div>
          </div>
        </section>

        {/* results */}
        <section className="vc-results" aria-label="Client results">
          <div className="vc-wrap vc-results__grid">
            {RESULTS.map((r, i) => (
              <Reveal key={r.who} delay={i} className="vc-result">
                <b>{r.big}</b>
                <p>{r.lab}</p>
                <span className="vc-mono">{r.who}</span>
              </Reveal>
            ))}
          </div>
        </section>

        {/* two ways to start */}
        <section className="vc-sec" id="start" style={{ scrollMarginTop: 60 }}>
          <div className="vc-wrap">
            <Reveal>
              <p className="vc-label">Where to start</p>
              <h2 className="vc-h vc-h2">
                Two ways in. <em>Both pay for themselves.</em>
              </h2>
              <p className="vc-lede">
                Some owners want one problem fixed fast. Others want a business that runs without them. On the call
                we’ll figure out which you are.
              </p>
            </Reveal>
            <div className="vc-doors">
              <Reveal className="vc-door">
                <div className="vc-door__k">Start with your leads</div>
                <h3>The fastest money.</h3>
                <p>The leads you already paid for, finally worked.</p>
                <ul>
                  <li>Every new lead answered in seconds, day or night</li>
                  <li>Follow-up that keeps going until they book or say no</li>
                  <li>Old quotes and past customers put back to work</li>
                </ul>
                <p className="vc-door__proof">City of Good Maids paused paid ads for the first time in nearly a year.</p>
                <p className="vc-door__price">
                  <b>$1,500</b> one build
                </p>
                <CallButton location="door_leads" label="Start with leads" className="vc-btn--ghost" />
              </Reveal>
              <Reveal delay={1} className="vc-door vc-door--found">
                <div className="vc-door__k">Start with the foundation</div>
                <h3>A business that runs without you.</h3>
                <p>I set up the base every future system plugs into, in accounts you own. Then I build your first automation on top.</p>
                <ul>
                  <li>A brain for your company: everything your AI knows, stored where you own it</li>
                  <li>A place your automations run around the clock</li>
                  <li>One channel where your team sees everything, plus the AI of your choice</li>
                </ul>
                <p className="vc-door__proof">One client started here. His second build was live within a week.</p>
                <p className="vc-door__price">
                  <b>$2,500</b> foundation + first build · later builds from $1,250
                </p>
                <CallButton location="door_foundation" label="Start with the foundation" />
              </Reveal>
            </div>
          </div>
        </section>

        {/* trace */}
        <section className="vc-sec vc-sec--band" id="how" style={{ scrollMarginTop: 60 }}>
          <div className="vc-wrap">
            <Reveal>
              <p className="vc-label">How it thinks</p>
              <h2 className="vc-h vc-h2">
                It doesn’t just send texts. <br />
                <em>It reads the situation.</em>
              </h2>
              <p className="vc-lede">
                Some of what I build is simple: the right message at the right time. The smarter pieces read the whole
                conversation and decide what a good office manager would do next. Pick a situation and watch.
              </p>
            </Reveal>
            <Reveal>
              <Trace />
            </Reveal>
          </div>
        </section>

        {/* study */}
        <section className="vc-sec">
          <div className="vc-wrap vc-study">
            <Reveal>
              <p className="vc-label">I measured it</p>
              <h2 className="vc-h vc-h2">
                Leads that got reached booked at <em>three times</em> the rate.
              </h2>
              <p className="vc-lede">
                I went through 935 real leads in my own company: every call, every text, every booking. The biggest
                difference wasn’t price or who answered. It was whether anyone reached the customer at all.
              </p>
              <p style={{ marginTop: 22 }}>
                <Link
                  className="vc-link"
                  to="/benchmarks/cleaning-lead-response"
                  onClick={() => track('Read the 935-lead study', 'study')}
                >
                  Read the full study
                </Link>
              </p>
            </Reveal>
            <Reveal delay={1}>
              <StudyBars />
            </Reveal>
          </div>
        </section>

        {/* quotes */}
        <section className="vc-sec vc-sec--band" id="proof" style={{ scrollMarginTop: 60 }}>
          <div className="vc-wrap">
            <Reveal>
              <p className="vc-label">Results</p>
              <h2 className="vc-h vc-h2">
                Five cleaning companies. <em>All five live.</em>
              </h2>
              <p className="vc-lede">Four of them said I could use their names. These are their words, not mine.</p>
            </Reveal>
            <div className="vc-quotes">
              {QUOTES.map((q, i) => (
                <Reveal as="figure" key={q.name} delay={i % 2} className="vc-quote">
                  <div className="vc-quote__num">
                    {q.num}
                    <small>{q.unit}</small>
                  </div>
                  <blockquote>“{q.quote}”</blockquote>
                  <figcaption>
                    <b>{q.name}</b> · {q.co}
                  </figcaption>
                </Reveal>
              ))}
            </div>
            <p className="vc-quotes__more">
              The fifth runs three locations and asked to stay anonymous. He started with the foundation and came back
              for a second build within weeks.{' '}
              <Link className="vc-link" to="/proof">
                See the systems running in my own company
              </Link>
            </p>
          </div>
        </section>

        {/* about */}
        <section className="vc-sec" id="about" style={{ scrollMarginTop: 60 }}>
          <div className="vc-wrap vc-about">
            <Reveal as="figure" className="vc-portrait">
              <img src="/roy-headshot.png" alt="Roy Banwell" loading="lazy" width={606} height={738} />
              <figcaption className="vc-mono">
                Roy Banwell <span>· operator</span>
              </figcaption>
            </Reveal>
            <Reveal delay={1}>
              <p className="vc-label">Who builds it</p>
              <h2 className="vc-h vc-h2">
                Not an AI agency. <em>A cleaning company owner who builds AI.</em>
              </h2>
              <p style={{ marginTop: 24 }}>
                I co-own Catalina Cleaning, a home cleaning company in Miami. Instead of hiring more office staff to
                grow, I built AI systems to answer leads, follow up, check on customers and keep the schedule straight.
              </p>
              <p>
                Everything I sell ran in my own company first, with real customers and real money on the line. When
                something breaks at 7am, I’m the one who finds out.
              </p>
              <div className="vc-about__stats">
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
                className="vc-btn vc-btn--ghost vc-btn--sm"
                onClick={() => track('Follow on X', 'about')}
              >
                I post the numbers on X <Arrow />
              </a>
            </Reveal>
          </div>
        </section>

        {/* pricing */}
        <section className="vc-sec vc-sec--band" id="pricing" style={{ scrollMarginTop: 60 }}>
          <span id="services" style={{ position: 'relative', top: -60 }} aria-hidden="true" />
          <div className="vc-wrap">
            <Reveal>
              <p className="vc-label">Pricing, in the open</p>
              <h2 className="vc-h vc-h2">
                Three ways to <em>work together.</em>
              </h2>
              <p className="vc-lede">Taking 3 new builds for December.</p>
            </Reveal>
            <Reveal className="vc-tiers">
              <div className="vc-tier">
                <div className="vc-tier__name">One build</div>
                <div className="vc-tier__price">
                  <small>FROM</small>$1,500
                </div>
                <p className="vc-tier__tag">I fix one problem for you and make sure it works.</p>
                <ul>
                  <li>Sales: lead follow-up, old leads and past customers re-engaged, review requests</li>
                  <li>Back office: scheduling, supply ordering, hiring</li>
                  <li>I host anything with code: $50 a month, or $125 with changes included</li>
                </ul>
                <p className="vc-tier__g">
                  <b>30-day money-back guarantee.</b> If it isn’t working end to end in 30 days, you get your money back.
                </p>
                <CallButton location="tier_build" className="vc-btn--ghost" />
              </div>
              <div className="vc-tier vc-tier--main">
                <div className="vc-tier__name">
                  Foundation <i>Best value</i>
                </div>
                <div className="vc-tier__price">$2,500</div>
                <p className="vc-tier__tag">The base every future system plugs into, in accounts you own, plus your first build.</p>
                <ul>
                  <li>Your company brain, a place automations run 24/7, a team channel, and your choice of AI</li>
                  <li>Your first automation built on top</li>
                  <li>Every build after that from $1,250, usually live within a week</li>
                  <li>You own everything. About $25 a month in tools, paid directly</li>
                </ul>
                <p className="vc-tier__g">
                  <b>30-day money-back guarantee</b> on your first build.
                </p>
                <CallButton location="tier_foundation" />
              </div>
              <div className="vc-tier">
                <div className="vc-tier__name">Transformation</div>
                <div className="vc-tier__price">$15,000</div>
                <p className="vc-tier__tag">An AI-first rebuild of how your whole company runs.</p>
                <ul>
                  <li>Every core process redesigned around AI</li>
                  <li>Your team trained on the systems</li>
                  <li>Guaranteed by milestones, agreed up front</li>
                </ul>
                <p className="vc-tier__fine">Limited to 2 per quarter.</p>
                <CallButton location="tier_transformation" label="Apply" className="vc-btn--ghost" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* calculator */}
        <section className="vc-sec" id="numbers" style={{ scrollMarginTop: 60 }}>
          <div className="vc-wrap">
            <Reveal>
              <p className="vc-label">Your numbers</p>
              <h2 className="vc-h vc-h2">
                What are your old leads <em>worth?</em>
              </h2>
              <p className="vc-lede">
                Every quote request that never booked is still in your CRM, and you paid for each one. Drag the sliders.
              </p>
            </Reveal>
            <Reveal>
              <Calculator />
            </Reveal>
          </div>
        </section>

        {/* call */}
        <section className="vc-sec vc-sec--band" id="call" style={{ scrollMarginTop: 60 }}>
          <div className="vc-wrap">
            <Reveal>
              <p className="vc-label">The first call</p>
              <h2 className="vc-h vc-h2">
                50 minutes. <em>One recommendation.</em>
              </h2>
              <p className="vc-lede">It’s free, and you’ll know the price before you book. Here’s exactly what happens.</p>
            </Reveal>
            <Reveal>
              <div className="vc-callrow">
                <div className="vc-callstep">
                  <time>00:00 → 20:00</time>
                  <h3>I learn your business</h3>
                  <p>How leads come in, what happens to the ones that don’t book, and what’s eating your week.</p>
                </div>
                <div className="vc-callstep">
                  <time>20:00 → 35:00</time>
                  <h3>I show you mine</h3>
                  <p>The actual systems running in my company and my clients’, picked for what you just told me.</p>
                </div>
                <div className="vc-callstep">
                  <time>35:00 → 50:00</time>
                  <h3>One recommendation, one price</h3>
                  <p>A single build, or the foundation first. Say yes and you get a one-page scope the same day.</p>
                </div>
              </div>
              <div className="vc-chips">
                <span className="vc-chip">No slide deck</span>
                <span className="vc-chip">No menu of 12 things</span>
                <span className="vc-chip">No surprise pricing</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* faq */}
        <section className="vc-sec" id="faq" style={{ scrollMarginTop: 60 }}>
          <div className="vc-wrap">
            <Reveal>
              <p className="vc-label">Straight answers</p>
              <h2 className="vc-h vc-h2">
                Before <em>you ask.</em>
              </h2>
            </Reveal>
            <div className="vc-faq">
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
        <section className="vc-final" id="book">
          <div className="vc-wrap">
            <Reveal>
              <p className="vc-label">Taking 3 new builds for December</p>
              <h2 className="vc-h">
                Let’s find what to <em>take off your plate.</em>
              </h2>
            </Reveal>
            <div className="vc-final__grid">
              <Reveal className="vc-final__pitch">
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
                <CallButton location="final" label="Open the calendar" />
              </Reveal>
              <Reveal delay={1}>
                <InlineBooking />
              </Reveal>
            </div>
            <footer className="vc-foot" id="footer">
              <span>© {new Date().getFullYear()} UpLevel Automations · Miami, FL</span>
              <nav aria-label="Footer">
                <Link to="/proof">Proof</Link>
                <Link to="/case-studies">Case studies</Link>
                <Link to="/benchmarks/cleaning-lead-response">935-lead study</Link>
                <Link to="/answers">Answers</Link>
                <Link to="/blog">Blog</Link>
                <a href="mailto:roy@uplevelautomations.com">Email</a>
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
