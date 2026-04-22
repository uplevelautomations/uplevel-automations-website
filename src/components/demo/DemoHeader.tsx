import { demoFixture } from '../../data/demoFixture'

const otherConnectors = [
  { name: 'Housecall Pro' },
  { name: 'Jobber' },
  { name: 'Service Autopilot' },
  { name: 'Stripe' },
  { name: 'Google Sheets' },
  { name: 'Excel' },
  { name: 'HubSpot' },
  { name: 'GoHighLevel' },
  { name: 'Xero' },
]

export default function DemoHeader() {
  const { business, connectors } = demoFixture

  return (
    <div className="bg-white border-b border-slate-200">
      {/* Main header row */}
      <div className="px-6 py-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-lg font-bold text-slate-900">{business.name}</h1>
              <span className="px-2 py-0.5 bg-amber-50 text-amber-700 text-xs font-medium rounded-full border border-amber-200">
                Demo
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">Last synced: {business.lastSynced}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs text-slate-400 hidden sm:block">Connected:</span>
            {connectors.map((c) => (
              <div key={c.name} className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                <span className="text-xs text-slate-600 font-medium">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Connector compatibility bar */}
      <div className="border-t border-slate-100 bg-slate-50 px-6 py-2">
        <div className="max-w-5xl mx-auto flex items-center gap-2 overflow-x-auto scrollbar-hide">
          <span className="text-xs text-slate-400 flex-shrink-0">Also works with:</span>
          <div className="flex items-center gap-1 flex-shrink-0">
            {otherConnectors.map((c, i) => (
              <span key={c.name} className="flex items-center gap-1">
                <span className="text-xs text-slate-500 whitespace-nowrap">{c.name}</span>
                {i < otherConnectors.length - 1 && (
                  <span className="text-slate-300 text-xs">·</span>
                )}
              </span>
            ))}
            <span className="text-slate-300 text-xs ml-1">·</span>
            <span className="text-xs text-blue-600 font-medium whitespace-nowrap ml-1">+ any tool with an API</span>
          </div>
        </div>
      </div>
    </div>
  )
}
