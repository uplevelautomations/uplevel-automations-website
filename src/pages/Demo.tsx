import DemoHeader from '../components/demo/DemoHeader'
import RevenueModule from '../components/demo/RevenueModule'
import TechModule from '../components/demo/TechModule'
import JobProfitModule from '../components/demo/JobProfitModule'
import MarketingModule from '../components/demo/MarketingModule'
import DigestModule from '../components/demo/DigestModule'
import { demoFixture } from '../data/demoFixture'

const fmt = (n: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)

function SectionHeader({ title, source }: { title: string; source: string }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-widest">{title}</h2>
      <span className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">{source}</span>
    </div>
  )
}

export default function Demo() {
  const { revenue, teamAvgMargin } = demoFixture
  const totalAR = revenue.arAging.reduce((sum, r) => sum + r.amount, 0)
  const overdueInvoices = revenue.arAging.reduce((sum, r) => sum + (r.invoices ?? 0), 0)
  const change = Math.round(((revenue.thisMonth - revenue.lastMonth) / revenue.lastMonth) * 100)

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <DemoHeader />

      {/* Orientation + operator-credibility bar */}
      <div className="bg-blue-600">
        <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-sm text-blue-50 leading-snug">
            A sample dashboard for "Coastline Cleaning Co.," a ~$800K/yr cleaning company. Every number pulls automatically from the tools you already run.{' '}
            <span className="font-semibold text-white">Built by an operator who grew his own cleaning company to $60K/month</span> — this is what I'd build for you.
          </p>
          <a
            href="https://cal.com/roy-banwell/30minaicall"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => (window as any).dataLayer?.push({ event: 'cal_booking_click', booking_source: 'demo_top_bar' })}
            className="flex-shrink-0 px-5 py-2.5 bg-white hover:bg-blue-50 text-blue-700 text-sm font-semibold rounded-lg transition-colors text-center"
          >
            Book a 30-min call
          </a>
        </div>
      </div>

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-8 space-y-10">

        {/* KPI Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">This Month</p>
            <p className="text-2xl font-bold text-slate-900">{fmt(revenue.thisMonth)}</p>
            <p className="text-sm mt-1 font-medium text-emerald-600">▲ {change}% vs last month</p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">Cash Position</p>
            <p className="text-2xl font-bold text-slate-900">{fmt(revenue.cashPosition)}</p>
            <p className="text-sm mt-1 text-slate-400">Current bank balance</p>
          </div>
          <div className="bg-amber-50 rounded-xl border border-amber-200 p-5">
            <p className="text-xs font-medium text-amber-600 uppercase tracking-wide mb-1">Outstanding AR</p>
            <p className="text-2xl font-bold text-amber-900">{fmt(totalAR)}</p>
            <p className="text-sm mt-1 text-amber-600 font-medium">{overdueInvoices} invoices past due</p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">Team Avg Margin</p>
            <p className="text-2xl font-bold text-slate-900">{teamAvgMargin}%</p>
            <p className="text-sm mt-1 text-slate-400">Across 4 crews</p>
          </div>
        </div>

        {/* Alerts */}
        <div className="bg-red-50 border border-red-200 rounded-xl px-5 py-4 flex items-start gap-3">
          <span className="text-red-500 text-base mt-0.5">⚠️</span>
          <div className="flex-1">
            <p className="text-sm font-semibold text-red-800">Jasmine's Crew margin is 16 points below team average</p>
            <p className="text-xs text-red-600 mt-0.5">28% margin across 64 jobs this month vs. 44% team average. Closing that gap is <span className="font-semibold">~$2,200/month — roughly $26k/year</span> in recoverable profit. Click the row below to see which jobs.</p>
          </div>
        </div>

        {/* Revenue & Cash */}
        <section>
          <SectionHeader title="Revenue & Cash" source="QuickBooks" />
          <RevenueModule />
        </section>

        {/* Team Performance */}
        <section>
          <SectionHeader title="Crew Performance" source="Jobber" />
          <TechModule />
        </section>

        {/* Job Profitability */}
        <section>
          <SectionHeader title="Job Profitability" source="Jobber + QuickBooks" />
          <JobProfitModule />
        </section>

        {/* Marketing Performance */}
        <section>
          <SectionHeader title="Marketing Performance" source="Ads · GBP · Angi · BrightLocal · GSC" />
          <MarketingModule />
        </section>

        {/* Daily Digest */}
        <section>
          <SectionHeader title="Daily Digest" source="All systems" />
          <DigestModule />
        </section>

      </main>

      {/* Bottom CTA */}
      <div className="border-t border-slate-200 bg-white mt-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-slate-900">Want this for your cleaning company?</p>
            <p className="text-xs text-slate-500 mt-0.5">Free 30-min call. I'll map your tools and show you the numbers you're flying blind on. Works with whatever you already run (Jobber, Housecall Pro, BookingKoala, QuickBooks…). About 2 hours of your time to build · you own it outright, no SaaS lock-in.</p>
          </div>
          <a
            href="https://cal.com/roy-banwell/30minaicall"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => (window as any).dataLayer?.push({ event: 'cal_booking_click', booking_source: 'demo_bottom_cta' })}
            className="flex-shrink-0 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm shadow-blue-600/25"
          >
            Book my 30-min call
          </a>
        </div>
      </div>
    </div>
  )
}
