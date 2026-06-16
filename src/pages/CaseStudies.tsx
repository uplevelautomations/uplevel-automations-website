import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const caseStudies = [
  {
    slug: 'operations-dashboard',
    title: 'One Operations Dashboard for a Cleaning Company',
    client: 'My own cleaning company',
    industry: 'Cleaning',
    description: 'Replaced 4 separate logins with one always-on dashboard: revenue, cash, crew margin, job profitability, cleaner quality, and ad spend, with AI-written analysis on every section.',
    tags: ['Railway', 'Python', 'QuickBooks', 'Stripe'],
    stats: [
      { label: 'Logins replaced', value: '4 → 1' },
      { label: 'Sections', value: '18' },
      { label: 'Updated', value: 'Live' },
    ],
  },
  {
    slug: 'va-coaching',
    title: 'AI That Coaches Cleaning-Company VAs',
    client: 'My own cleaning company',
    industry: 'Cleaning',
    description: 'An AI listens to my virtual assistants\' sales calls every night, scores each on 6 dimensions, and writes weekly coaching reports. Response time, talk time, and bookings, side by side.',
    tags: ['Claude', 'GHL API', 'Call transcripts'],
    stats: [
      { label: 'Calls scored', value: 'Nightly' },
      { label: 'Dimensions', value: '6' },
      { label: 'Reports', value: 'Weekly' },
    ],
  },
  {
    slug: 'automated-seo-blog',
    title: 'Fully Automated SEO Blog for a Cleaning Company',
    client: 'Residential Cleaning Company',
    industry: 'Cleaning',
    description: 'Built a system that writes, publishes, and manages SEO blog posts twice a week with zero human input. 65 topics queued, 8 months of content on autopilot.',
    tags: ['n8n', 'Claude AI', 'SEO', 'Content Automation'],
    stats: [
      { label: 'Posts/week', value: '2' },
      { label: 'Human input', value: 'Zero' },
      { label: 'Content queued', value: '8 months' },
    ],
  },
]

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
            Case Studies
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            Real systems I run in my own cleaning company. Each one breaks down what it does, how it works, and what it cost. If it didn't survive in my business, I don't sell it.
          </p>
        </div>
      </section>

      {/* Case Study Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                to={`/case-studies/${study.slug}`}
                className="block group"
              >
                <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 transition-all hover:shadow-lg hover:border-slate-300">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2.5 py-0.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-xs text-slate-400">
                      {study.client}
                    </span>
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {study.title}
                  </h2>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    {study.description}
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-6 mb-6">
                    {study.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-lg font-bold text-slate-900">{stat.value}</div>
                        <div className="text-xs text-slate-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-sm text-blue-600 font-medium group-hover:gap-3 transition-all">
                    Read case study
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900 rounded-xl p-8 md:p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Want one of these in your cleaning company?
            </h2>
            <p className="text-slate-400 mb-6 max-w-xl mx-auto leading-relaxed">
              I won't recommend anything I haven't run on my own cleaning company's P&L. Let's find which one fits yours.
            </p>
            <a
              href="https://cal.com/roy-banwell/30minaicall"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => (window as any).dataLayer?.push({ event: 'cal_booking_click', booking_source: 'case_studies_index_cta' })}
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all shadow-sm hover:shadow-md"
            >
              Book a Strategy Call
            </a>
            <p className="text-xs text-slate-500 mt-3">
              Free, 30 minutes. No pitch deck, just a conversation about your business.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
