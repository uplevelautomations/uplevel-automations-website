import { Link } from 'react-router-dom'
import { demoFixture } from '../data/demoFixture'

const fmt = (n: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)

const answers = [
  'Which crews actually make you money, after labor and supplies.',
  'Which jobs and lead sources are worth chasing, and which are quietly losing money.',
  'Where your cash is, what is overdue, and whether you can afford to hire.',
]

export default function DashboardPreview() {
  const { revenue, teamAvgMargin } = demoFixture
  const totalAR = revenue.arAging.reduce((sum, r) => sum + r.amount, 0)
  const weeks = revenue.weeklyRevenue
  const maxWeek = Math.max(...weeks.map((w) => w.revenue))
  const minWeek = Math.min(...weeks.map((w) => w.revenue))
  // scale bars from a 35% floor so the upward trend is visible (revenue range is narrow)
  const barHeight = (rev: number) => 35 + Math.round(((rev - minWeek) / (maxWeek - minWeek)) * 65)

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3">
            One of the systems I build
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            One screen instead of four logins.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            The systems I build feed one live dashboard, so you can finally answer:
          </p>
        </div>

        <div className="grid md:grid-cols-[1.3fr_1fr] gap-8 items-center">
          {/* Browser-framed dashboard preview */}
          <Link
            to="/demo"
            className="block rounded-xl border border-slate-200 shadow-xl shadow-slate-300/30 overflow-hidden bg-slate-50 hover:shadow-2xl hover:shadow-slate-300/40 transition-all group"
          >
            {/* Browser chrome */}
            <div className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-100 border-b border-slate-200">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="ml-3 text-xs text-slate-400">Coastline Cleaning Co. · live dashboard</span>
              <span className="ml-auto text-xs font-medium text-blue-600 group-hover:underline">See the live demo →</span>
            </div>

            <div className="p-5 space-y-4">
              {/* KPI strip */}
              <div className="grid grid-cols-4 gap-2.5">
                <div className="bg-white rounded-lg border border-slate-200 p-3">
                  <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wide">This Month</p>
                  <p className="text-base font-bold text-slate-900">{fmt(revenue.thisMonth)}</p>
                  <p className="text-[10px] font-medium text-emerald-600">▲ 12%</p>
                </div>
                <div className="bg-white rounded-lg border border-slate-200 p-3">
                  <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wide">Cash</p>
                  <p className="text-base font-bold text-slate-900">{fmt(revenue.cashPosition)}</p>
                </div>
                <div className="bg-amber-50 rounded-lg border border-amber-200 p-3">
                  <p className="text-[10px] font-medium text-amber-600 uppercase tracking-wide">Overdue AR</p>
                  <p className="text-base font-bold text-amber-900">{fmt(totalAR)}</p>
                </div>
                <div className="bg-white rounded-lg border border-slate-200 p-3">
                  <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wide">Margin</p>
                  <p className="text-base font-bold text-slate-900">{teamAvgMargin}%</p>
                </div>
              </div>

              {/* Alert line — keep these numbers in sync with the /demo alert (Demo.tsx) and demoFixture (teamAvgMargin / crews) */}
              <div className="bg-red-50 border border-red-200 rounded-lg px-3 py-2 flex items-center gap-2">
                <span className="text-red-500 text-xs">⚠️</span>
                <p className="text-[11px] text-red-700 font-medium">Jasmine's Crew margin is 16 points below team average. ~$2,200/mo in recoverable profit.</p>
              </div>

              {/* Mini bar chart */}
              <div className="bg-white rounded-lg border border-slate-200 p-4">
                <p className="text-[11px] font-semibold text-slate-600 mb-3">Weekly Revenue</p>
                <div className="flex items-end justify-between gap-1.5 h-20">
                  {weeks.map((w) => (
                    <div
                      key={w.week}
                      className="flex-1 bg-blue-500 rounded-t"
                      style={{ height: `${barHeight(w.revenue)}%` }}
                      title={`${w.week}: ${fmt(w.revenue)}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Link>

          {/* Questions it answers */}
          <div className="space-y-4">
            {answers.map((a) => (
              <div key={a} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-slate-700 leading-snug">{a}</p>
              </div>
            ))}
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all pt-2"
            >
              Walk through the live demo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
