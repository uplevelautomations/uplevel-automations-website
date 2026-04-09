import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function CaseStudyDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
            <Link to="/" className="hover:text-slate-900">Home</Link>
            <span>/</span>
            <Link to="/proof" className="hover:text-slate-900">Proof</Link>
            <span>/</span>
            <span className="text-slate-900">Operations Dashboard</span>
          </div>
          <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full mb-4">
            Case Study
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
            How I Replaced 4 Logins With One Operations Dashboard
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Every morning I was checking Stripe, GoHighLevel, BookingKoala, and Google Ads in separate tabs. Then I built a single dashboard that pulls every number I care about into one screen, with AI-written analysis on every section. Here's how it works and what it cost.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <span>Built for: My own cleaning company</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Hosted on: Railway</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Hosting cost: ~$5/month</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6">
        <div className="border-t border-slate-200" />
      </div>

      <article className="py-16 px-6">
        <div className="max-w-3xl mx-auto">

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The Problem</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              I run a cleaning company that serves 200+ customers a month and generates 1,000+ leads a month. The data I needed to make decisions was scattered across four platforms: Stripe for revenue, GoHighLevel for the CRM, BookingKoala for jobs and cleaner payouts, and Google Ads for Local Service Ads spend.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Every morning I was opening four tabs, checking four dashboards, and trying to mentally cross-reference numbers that lived in different formats. I couldn't answer simple questions like "which market is profitable this month?" or "which cleaner is costing me money in refunds?" without 20 minutes of clicking.
            </p>
            <p className="text-slate-600 leading-relaxed">
              I needed one screen, not four.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What I Built</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              I built a dashboard that pulls data from every system, runs the calculations I care about, and displays everything on one password-protected URL. It runs on Railway, refreshes nightly at 1 AM Eastern, and is accessible from my phone.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              The dashboard has 18 sections covering revenue, refunds, churn, lead sources, conversion funnels, area profitability, cleaner quality scoring, manual issue reports, LSA analytics, organic traffic, and rank tracking. Every section has AI-written analysis on top of the raw numbers, so I see "what changed and whether to worry" instead of just a table.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The hard part wasn't the front end. It was building the backend that connects to all the data sources, normalizes the formats, and stores the historical data in a way that survives deploys.
            </p>
          </section>

          <section className="mb-16">
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-6 text-center">System Architecture</h3>
              <div className="space-y-4 text-sm">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                  {['Stripe', 'GHL', 'BookingKoala', 'Google Ads', 'BrightLocal'].map((src) => (
                    <div key={src} className="bg-white rounded-lg p-3 border border-slate-200 text-center">
                      <div className="font-medium text-slate-900 text-xs">{src}</div>
                      <div className="text-slate-500 text-xs">Data source</div>
                    </div>
                  ))}
                </div>
                <div className="text-center text-slate-400">↓</div>
                <div className="bg-white rounded-lg p-4 border border-slate-200 text-center max-w-md mx-auto">
                  <div className="font-medium text-slate-900 text-sm">Catalina BI Server (Python)</div>
                  <div className="text-slate-500 text-xs">24-tool MCP server. Normalizes and caches all data.</div>
                </div>
                <div className="text-center text-slate-400">↓</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-white rounded-lg p-3 border border-slate-200 text-center">
                    <div className="font-medium text-slate-900 text-xs">SQLite (persistent volume)</div>
                    <div className="text-slate-500 text-xs">Booking log, issues, history</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-slate-200 text-center">
                    <div className="font-medium text-slate-900 text-xs">Claude API</div>
                    <div className="text-slate-500 text-xs">Section-level analysis text</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-slate-200 text-center">
                    <div className="font-medium text-slate-900 text-xs">Webhooks (Zapier)</div>
                    <div className="text-slate-500 text-xs">Live booking + completion events</div>
                  </div>
                </div>
                <div className="text-center text-slate-400">↓</div>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 text-center max-w-md mx-auto">
                  <div className="font-medium text-blue-900 text-sm">Dashboard (Railway)</div>
                  <div className="text-blue-600 text-xs">Password-protected, phone-accessible, always-on</div>
                </div>
              </div>
              <p className="text-center text-xs text-slate-500 mt-6">
                Refreshes nightly at 1 AM ET. Webhook events update the booking log in real time.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The 18 Sections</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Every section is built around a question I actually ask. Each one shows raw numbers and an AI-written analysis paragraph that tells me what changed and whether to worry.
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-600 mb-4">
              {[
                'Revenue KPIs (7-day, 30-day, MTD)',
                'Refund report with reason codes',
                'Churn detection (inactive customers)',
                'Lead sources (LSA, Yelp, organic)',
                'Conversion funnel by source',
                'Area profitability per market',
                'Cleaner scoreboard with risk levels',
                'Manual issue reports',
                'LSA analytics (real CPL, day/hour patterns)',
                'GA4 organic traffic chart (6 months)',
                'Local rank tracker (30 keywords)',
                'Citation score from BrightLocal',
                'Marketing spend vs revenue',
                'Cleaner payouts (from accounting)',
                'Expense anomaly alerts',
                'P&L month-to-date',
                'Booking log (every job)',
                'Lead type classification',
              ].map((s) => (
                <li key={s} className="flex gap-2">
                  <span className="text-blue-600 mt-1">·</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The Numbers</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                { label: 'Sections on the dashboard', value: '18', sub: 'Each with AI analysis' },
                { label: 'Tools in the BI server', value: '24', sub: 'Reusable across all systems' },
                { label: 'Logins replaced', value: '4', sub: 'Stripe, GHL, BK, Google Ads' },
                { label: 'Hosting cost', value: '$5/mo', sub: 'Railway always-on' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-lg p-5 border border-slate-200">
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm font-medium text-slate-700 mt-1">{stat.label}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Cost Comparison</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              The "build a real BI dashboard" budget for a small business is normally five figures. Here's what this same output would have cost through traditional channels:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left py-3 px-4 font-semibold text-slate-900"></th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">BI Consultant</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Domo / Tableau</th>
                    <th className="text-left py-3 px-4 font-semibold text-blue-700 bg-blue-50 rounded-t-lg">This System</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: 'Setup cost', a: '$10,000-30,000', b: '$5,000-15,000', c: '$0' },
                    { label: 'Monthly cost', a: '$3,000-8,000', b: '$300-2,000', c: '~$5' },
                    { label: 'Custom integrations', a: 'Yes (slow)', b: 'Limited', c: 'Yes (any API)' },
                    { label: 'AI analysis per section', a: 'No', b: 'No', c: 'Yes' },
                    { label: 'Time to first version', a: '4-12 weeks', b: '2-6 weeks', c: '1 week' },
                  ].map((row) => (
                    <tr key={row.label} className="border-b border-slate-100">
                      <td className="py-3 px-4 font-medium text-slate-700">{row.label}</td>
                      <td className="py-3 px-4 text-slate-600">{row.a}</td>
                      <td className="py-3 px-4 text-slate-600">{row.b}</td>
                      <td className="py-3 px-4 text-blue-700 font-medium bg-blue-50">{row.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-3">
              Excludes Claude API usage for nightly analysis (a few dollars per month).
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Tech Stack</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { tool: 'Python + Flask', role: 'Dashboard server' },
                { tool: 'Railway', role: 'Always-on hosting + persistent volume' },
                { tool: 'SQLite', role: 'Booking log, issue tracker, history' },
                { tool: 'Claude API', role: 'Section-level analysis text' },
                { tool: 'Stripe API', role: 'Revenue, refunds, churn' },
                { tool: 'GHL API', role: 'CRM, leads, conversations' },
                { tool: 'BookingKoala webhooks', role: 'Job creation + completion' },
                { tool: 'Google Ads API', role: 'Real LSA cost-per-lead' },
                { tool: 'Digits OAuth', role: 'Cleaner payouts + expenses' },
                { tool: 'BrightLocal API', role: 'Citations + rank tracking' },
              ].map((item) => (
                <div key={item.tool} className="flex gap-3 p-3 rounded-lg bg-white border border-slate-200">
                  <div>
                    <div className="text-sm font-medium text-slate-900">{item.tool}</div>
                    <div className="text-xs text-slate-500">{item.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What It Took</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The dashboard itself is the easy part. The work is in three places that nobody talks about:
            </p>
            <ol className="space-y-3 mb-4">
              {[
                'Trusting the data. I had to audit every metric and strip the ones I couldn\'t verify. Half my original dashboard came down because the underlying tags were wrong. Trustworthy < pretty.',
                'Persistent storage. Webhook data was getting wiped on every Railway deploy because it was stored in the ephemeral container filesystem. Adding a persistent volume took 5 minutes and saved months of data.',
                'Forward-only attribution. Instead of trying to backfill years of bad historical tagging, I committed to clean data from day one. Every metric on the dashboard is trustworthy because I draw a line and don\'t pretend the past was better than it was.',
              ].map((step, i) => (
                <li key={i} className="flex gap-3 text-slate-600 leading-relaxed">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="mb-16">
            <div className="bg-slate-900 rounded-xl p-8 md:p-10 text-center">
              <h2 className="text-2xl font-bold text-white mb-3">
                Want a dashboard like this for your business?
              </h2>
              <p className="text-slate-400 mb-6 max-w-xl mx-auto leading-relaxed">
                If you're checking 3+ tools every morning to figure out how your business is doing, you need this. Let's talk about what your version would look like.
              </p>
              <a
                href="https://cal.com/roy-banwell/30minaicall"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => (window as any).dataLayer?.push({ event: 'cal_booking_click', booking_source: 'case_study_dashboard_cta' })}
                className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all shadow-sm hover:shadow-md"
              >
                Book a Strategy Call
              </a>
              <p className="text-xs text-slate-500 mt-3">
                Free, 30 minutes. No pitch deck.
              </p>
            </div>
          </section>

        </div>
      </article>

      <Footer />
    </div>
  )
}
