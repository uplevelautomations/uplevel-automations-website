import { Link } from 'react-router-dom'

const systems = [
  {
    title: 'Daily Briefing',
    what: 'Every morning at 6 AM, an AI reads my calendar, email, website analytics, CRM, and revenue, then tells me exactly what to focus on.',
    why: 'Replaces 30 minutes of context-gathering with a 2-minute read.',
    tags: ['Claude', 'Telegram', 'MCP'],
  },
  {
    title: 'The Operations Dashboard',
    what: 'One screen that replaced 4 logins. Revenue, refunds, lead sources, cleaner quality, market profitability, ad spend, all live, with AI-written analysis on every section.',
    why: 'I stopped checking Stripe, GHL, BookingKoala, and Google Ads separately. Now I just check one URL.',
    tags: ['Railway', 'Python', 'SQLite'],
  },
  {
    title: 'VA Coaching System',
    what: 'An AI listens to my virtual assistants\' actual sales calls every night, scores them on 6 dimensions, and writes weekly coaching reports.',
    why: 'The hardest part of managing remote staff is knowing what\'s actually happening on the phone. Now I know.',
    tags: ['Opus 4.6', 'GHL API', 'Call transcripts'],
  },
  {
    title: 'The Outbound Machine',
    what: 'Finds prospects, sends the cold emails AND LinkedIn DMs, comments on their posts before pitching, classifies the replies, and drafts the responses for me to approve from my phone.',
    why: 'A full sales development team, built out of MCP servers, for under $350 a month.',
    tags: ['Instantly', 'Apollo', 'Unipile', 'Claude'],
  },
  {
    title: 'Blog Automator',
    what: '3 SEO blog posts per week, written by AI, published to my site automatically. I haven\'t written one in months.',
    why: 'Consistent content output without a content team. About 15 cents per post.',
    tags: ['n8n', 'Claude', 'Railway'],
  },
  {
    title: 'Cleaner Quality Engine',
    what: 'Every refund, complaint, and rebooking gets attributed to a specific cleaner. The system ranks them by composite score and flags the ones losing me money.',
    why: 'Found 19 refunds totaling $4,785 traced to specific people I would have otherwise kept booking.',
    tags: ['Stripe', 'BookingKoala', 'GHL', 'Custom scoring'],
  },
]

export default function BuiltInMyBusiness() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Built in my business first.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Every system below runs my own cleaning company. Real customers, real money, real consequences if it breaks.
          </p>
        </div>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {systems.map((system) => (
            <div
              key={system.title}
              className="relative p-6 rounded-xl border border-slate-200 bg-white transition-all hover:shadow-md hover:border-slate-300 flex flex-col"
            >
              <h3 className="font-semibold text-slate-900 text-lg mb-3">
                {system.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                {system.what}
              </p>
              <p className="text-sm text-slate-500 italic leading-relaxed mb-4 flex-grow">
                {system.why}
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

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/proof"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-all shadow-sm hover:shadow-md group"
          >
            See every system I've built
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
