import { demoFixture } from '../../data/demoFixture'

const fmt = (n: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)

export default function DigestModule() {
  const { ownerName, date, yesterdayRevenue, cashPosition, outstandingInvoices, overdueCount, topPerformer, alert } =
    demoFixture.digest

  return (
    <div className="space-y-6">
      {/* Explanation */}
      <div className="bg-slate-50 rounded-xl border border-slate-200 px-5 py-4">
        <p className="text-sm font-semibold text-slate-700">Your numbers, before you open an app.</p>
        <p className="text-xs text-slate-500 mt-1">
          Every morning, the OS emails the owner a plain-language snapshot pulled from all connected systems. No login required.
        </p>
      </div>

      {/* Email card */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        {/* Email header */}
        <div className="bg-slate-50 border-b border-slate-200 px-5 py-3">
          <div className="flex items-center gap-2 flex-wrap text-xs text-slate-500">
            <span className="font-medium text-slate-700">From:</span>
            <span>Ridgeline OS &lt;digest@ridgelineservices.com&gt;</span>
          </div>
          <div className="flex items-center gap-2 flex-wrap text-xs text-slate-500 mt-1">
            <span className="font-medium text-slate-700">Subject:</span>
            <span>Your daily briefing — {date}</span>
          </div>
        </div>

        {/* Email body */}
        <div className="px-5 py-5 space-y-5">
          <p className="text-sm text-slate-700">
            Good morning, <span className="font-semibold">{ownerName}</span>.
          </p>
          <p className="text-xs text-slate-500 -mt-3">Here's your Ridgeline Services snapshot for {date}.</p>

          {/* Stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-slate-50 rounded-lg border border-slate-200 px-4 py-3">
              <p className="text-xs text-slate-500 mb-1">Yesterday's revenue</p>
              <p className="text-lg font-bold text-slate-900">{fmt(yesterdayRevenue)}</p>
            </div>
            <div className="bg-slate-50 rounded-lg border border-slate-200 px-4 py-3">
              <p className="text-xs text-slate-500 mb-1">Cash position</p>
              <p className="text-lg font-bold text-slate-900">{fmt(cashPosition)}</p>
            </div>
            <div className="bg-amber-50 rounded-lg border border-amber-200 px-4 py-3">
              <p className="text-xs text-amber-600 mb-1">Outstanding invoices</p>
              <p className="text-lg font-bold text-amber-800">{fmt(outstandingInvoices)}</p>
              <p className="text-xs text-amber-600 mt-0.5">{overdueCount} invoices past due</p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-100" />

          {/* Top performer */}
          <div className="flex items-start gap-3">
            <span className="text-emerald-500 text-base mt-0.5">✅</span>
            <div>
              <p className="text-sm font-semibold text-slate-800">
                Top performer ({topPerformer.label}): {topPerformer.name}
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                {topPerformer.margin}% margin — highest on the team.
              </p>
            </div>
          </div>

          {/* Alert */}
          <div className="flex items-start gap-3">
            <span className="text-red-500 text-base mt-0.5">⚠️</span>
            <div>
              <p className="text-sm font-semibold text-slate-800">Alert: {alert.name}</p>
              <p className="text-xs text-slate-500 mt-0.5">
                {alert.margin}% margin across {alert.jobs} jobs. Review job costing.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-100" />

          {/* Footer */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400">
            <span>✓ QuickBooks synced 2h ago</span>
            <span>✓ ServiceTitan synced 1h ago</span>
            <span>✓ Gmail active</span>
          </div>
        </div>
      </div>

      {/* CTA note */}
      <p className="text-xs text-slate-400 text-center">
        This email is auto-generated every morning. No manual work. No logins required.
      </p>
    </div>
  )
}
