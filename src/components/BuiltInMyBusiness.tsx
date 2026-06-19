import { Link } from 'react-router-dom'

const systems = [
  {
    title: 'No Lead Left Behind',
    what: 'Every new lead gets an instant reply and a two-week follow-up sequence, and old leads get re-engaged automatically. We handle 1,000+ leads a month and none of them go dark.',
    why: 'The cheapest growth in a cleaning company is the leads you already paid for. Most owners let them rot.',
    tags: ['GHL', 'SMS', 'Claude'],
  },
  {
    title: 'Cleaner Hiring Funnel',
    what: 'A self-serve, trilingual hire funnel (catalinacleaning.com/join) that screens applicants, signs them up, trains and quizzes them on the real app, and collects their W-9 before they ever take a job.',
    why: 'Cleaner supply is the #1 thing capping growth. This turns recruiting from a scramble into a pipeline.',
    tags: ['Next.js', 'GHL', 'EN/ES/PT'],
  },
  {
    title: 'The Operations Dashboard',
    what: 'One screen that replaced 4 logins. Revenue, cash, lead sources, cleaner quality, market profitability, ad spend, all live, with AI-written analysis on every section.',
    why: 'I stopped checking Stripe, GHL, BookingKoala, and Google Ads separately. Now I just check one URL.',
    tags: ['QuickBooks', 'Stripe', 'BookingKoala'],
  },
  {
    title: 'Cleaner Quality Engine',
    what: 'Every refund, complaint, and rebooking gets attributed to a specific cleaner. The system ranks them by composite score and flags the ones losing me money.',
    why: 'Found 19 refunds totaling $4,785 traced to specific people I would have otherwise kept booking.',
    tags: ['Stripe', 'BookingKoala'],
  },
  {
    title: 'VA Coaching System',
    what: 'An AI listens to my virtual assistants\' actual sales calls every night, scores them on 6 dimensions, and writes weekly coaching reports.',
    why: 'The hardest part of managing remote staff is knowing what\'s actually happening on the phone. Now I know.',
    tags: ['Claude', 'Call transcripts'],
  },
  {
    title: 'Daily Briefing',
    what: 'Every morning at 6 AM, an AI reads my calendar, email, website analytics, CRM, and revenue, then tells me exactly what to focus on.',
    why: 'Replaces 30 minutes of context-gathering with a 2-minute read.',
    tags: ['Claude', 'Telegram'],
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
            Every system below runs my own cleaning company. Real customers, real money, real consequences if it breaks. They handle <span className="font-semibold text-slate-900">1,000+ leads and 200+ jobs a month</span> without me adding office staff.
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
        <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/demo"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all shadow-sm hover:shadow-md group"
          >
            See the live demo
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            to="/proof"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium rounded-lg transition-all"
          >
            See everything I've built
          </Link>
        </div>
      </div>
    </section>
  )
}
