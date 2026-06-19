import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

type System = {
  title: string
  what: string
  tags: string[]
}

type Category = {
  name: string
  blurb: string
  systems: System[]
}

const categories: Category[] = [
  {
    name: 'Intelligence & Decisions',
    blurb: 'The systems that turn raw operational data into decisions I actually act on.',
    systems: [
      {
        title: 'Operations Dashboard',
        what: 'One screen that replaced 4 separate logins. Revenue, refunds, lead sources, market profitability, ad spend, cleaner quality, all live, with AI-written analysis on every section.',
        tags: ['Railway', 'Python', 'SQLite'],
      },
      {
        title: 'Cleaner Quality Engine',
        what: 'Every cleaner scored by composite percentile across rebooking, complaints, refunds, and retention. Surfaced 19 refunds totaling $4,785 traced to specific people I would have kept booking. Includes a manual incident tracker for problems the data misses.',
        tags: ['Stripe', 'BookingKoala', 'GHL'],
      },
      {
        title: 'Market Profitability Engine',
        what: 'Per-clean profit margin for every city I serve. Tells me which markets actually make money and which ones I\'m quietly subsidizing. No estimates, no spreadsheets, no guessing.',
        tags: ['Webhooks', 'SQLite'],
      },
      {
        title: 'Real Cost-Per-Lead Tracker',
        what: 'Pulls real ad spend from the Google Ads API and matches it to actual leads I received. Discovered my real cost per lead was $22, less than half what my old reporting said.',
        tags: ['Google Ads API'],
      },
      {
        title: 'Lead Source Truth Engine',
        what: 'Classifies every booking by where it actually came from, not where the form said it came from. Found that 80% of my "website leads" actually started as missed phone calls. Changed how I budget every channel.',
        tags: ['GHL', 'Custom logic'],
      },
    ],
  },
  {
    name: 'Operations & Automation',
    blurb: 'The systems that quietly run the business while I sleep.',
    systems: [
      {
        title: 'No Lead Left Behind',
        what: 'Every new lead gets an instant reply and a two-week text-and-email follow-up sequence, and dormant leads get re-engaged automatically. We handle 1,000+ leads a month and none go dark, so I grow off leads I already paid for instead of chasing new ones.',
        tags: ['GHL', 'SMS', 'Claude'],
      },
      {
        title: 'Cleaner Hiring Funnel',
        what: 'A self-serve, trilingual hire funnel (catalinacleaning.com/join) that screens applicants, signs them up, trains and quizzes them on the real app, and collects their W-9 before they ever take a job. Turns recruiting from a scramble into a pipeline.',
        tags: ['Next.js', 'GHL', 'EN/ES/PT'],
      },
      {
        title: 'VA Coaching System',
        what: 'An AI listens to my virtual assistants\' actual sales calls every night, scores each one on 6 dimensions, and writes weekly coaching reports. Tracks response time, talk time, and bookings created so I can compare VAs side by side.',
        tags: ['Claude', 'GHL API', 'Call transcripts'],
      },
      {
        title: 'Review Sentiment Gate',
        what: 'A page that filters happy customers from unhappy ones before they ever reach Google. Happy clicks go straight to leaving a public review. Unhappy clicks trigger a private save sequence handled by my VAs. Every completed job enters the funnel automatically.',
        tags: ['Next.js', 'GHL', 'SMS'],
      },
      {
        title: 'Blog Automator',
        what: '3 SEO blog posts per week, written by AI, published to my live site automatically. I haven\'t written one in months. About 15 cents per post.',
        tags: ['n8n', 'Claude', 'Railway'],
      },
    ],
  },
  {
    name: 'Operating System',
    blurb: 'The infrastructure that lets me run the whole company from one chat.',
    systems: [
      {
        title: 'Daily Briefing',
        what: 'Every morning at 6 AM, an AI reads my calendar, email, website analytics, CRM, and revenue, then tells me exactly what to focus on. Replaces 30 minutes of context-gathering with a 2-minute read.',
        tags: ['launchd', 'Claude', 'Telegram'],
      },
      {
        title: 'Telegram Bot',
        what: 'Always-on AI assistant with full access to every system in this list. I run the business from a chat on my phone. No laptop required.',
        tags: ['Claude Code', 'MCP'],
      },
    ],
  },
]

const totalSystems = categories.reduce((sum, cat) => sum + cat.systems.length, 0)

export default function Proof() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
            200+ customers/month · 1,000+ leads/month
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
            Built in my business first.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            Every system on this page runs my own cleaning company. Real customers, real money, real consequences if it breaks. If it didn't survive there, it doesn't get sold here.
          </p>
          <p className="mt-4 text-sm text-slate-500">
            {totalSystems} production systems · updated as I ship
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-16 px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          {categories.map((category) => (
            <div key={category.name}>
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  {category.name}
                </h2>
                <p className="text-slate-600">{category.blurb}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.systems.map((system) => (
                  <div
                    key={system.title}
                    className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md hover:border-slate-300 transition-all flex flex-col"
                  >
                    <h3 className="font-semibold text-slate-900 mb-2">
                      {system.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-grow">
                      {system.what}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {system.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 bg-slate-100 text-slate-600 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured case studies */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Featured case studies</h2>
          <p className="text-slate-600 mb-6">Full breakdowns of what was built, how it works, what it cost, and what it took to ship.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                slug: 'operations-dashboard',
                title: 'Operations Dashboard',
                blurb: 'How I replaced 4 logins with one always-on dashboard. 18 sections, AI-written analysis on every section.',
              },
              {
                slug: 'va-coaching',
                title: 'VA Coaching System',
                blurb: 'How an AI listens to my virtual assistants\' actual sales calls every night and writes weekly coaching reports.',
              },
              {
                slug: 'automated-seo-blog',
                title: 'Blog Automator',
                blurb: '3 SEO posts a week, written by AI, published to a live site automatically. About 15 cents per post.',
              },
            ].map((c) => (
              <Link
                key={c.slug}
                to={`/case-studies/${c.slug}`}
                className="block bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md hover:border-slate-300 transition-all group"
              >
                <h3 className="font-semibold text-slate-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                  {c.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {c.blurb}
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-blue-600 font-medium group-hover:gap-2 transition-all">
                  Read case study
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <blockquote className="border-l-2 border-slate-200 pl-6 py-1">
            <p className="text-slate-600 leading-relaxed italic">
              "Working with UpLevel Automations on my initial business assessment helped me to get a better understanding of areas where AI can improve my daily workflow. After a couple of meetings, Roy outlined my existing system and offered a prioritized approach to building out a custom AI system tailored to my business. My goal is to reduce the admin work and increase the time I can spend on engineering. UpLevel Automations gave me a great starting point on my AI journey."
            </p>
            <footer className="mt-3 text-sm text-slate-500">
              Christopher Shaffer, Owner &amp; Principal Engineer —{' '}
              <a
                href="https://www.associatedsolutionsllc.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-700 underline underline-offset-2"
              >
                Associated Solutions LLC
              </a>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900 rounded-xl p-8 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Want one of these in your business?
            </h2>
            <p className="text-slate-400 mb-6 max-w-xl mx-auto leading-relaxed">
              I won't recommend anything I haven't run on my own P&L. Let's find which one fits yours.
            </p>
            <a
              href="https://cal.com/roy-banwell/30minaicall"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => (window as any).dataLayer?.push({ event: 'cal_booking_click', booking_source: 'proof_page_cta' })}
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all shadow-sm hover:shadow-md"
            >
              Book a Strategy Call
            </a>
            <p className="text-xs text-slate-500 mt-3">
              Free, 30 minutes. No pitch deck.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
