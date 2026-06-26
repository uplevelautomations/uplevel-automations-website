// Rebuild of Roy's real Stripe "Gross volume" chart, on-brand and responsive.
// Jan 2025 -> May 2026: flat under ~$20K, then climbs to ~$60K/month after AI automation.
const PURPLE = [12, 11, 16, 13, 21, 14, 22, 21, 38, 30, 33, 41, 48, 46, 40, 52, 60] // $K, monthly
const DASHED = [10, 9, 11, 10, 12, 9, 11, 10, 13, 12, 11, 13, 12, 9, 8, 11, 13] // previous period

// plot geometry
const L = 44
const R = 452
const T = 44
const B = 300
const xs = (i: number) => L + (i / (PURPLE.length - 1)) * (R - L)
const ys = (v: number) => B - (v / 80) * (B - T)

const toPath = (data: number[]) => data.map((v, i) => `${xs(i)},${ys(v)}`).join(' ')

const gridY = [0, 20, 40, 60, 80]
const ARROW_AT = 6 // index where the climb begins

export default function GrowthChart() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-400/20 p-6">
      <p className="text-sm font-medium text-slate-500">Gross volume</p>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-slate-900">$466K</span>
        <span className="text-base font-semibold text-emerald-600">+215.41%</span>
      </div>
      <p className="text-sm text-slate-400 mb-2">$148K previous period</p>

      <svg viewBox="0 0 500 330" className="w-full" role="img" aria-label="Monthly revenue flat near 13K through early 2025, then climbing to 60K by May 2026">
        <defs>
          <marker id="redArrow" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#ef4444" />
          </marker>
        </defs>

        {/* gridlines + right labels */}
        {gridY.map((g) => (
          <g key={g}>
            <line x1={L} y1={ys(g)} x2={R} y2={ys(g)} stroke="#f1f5f9" strokeWidth="1" />
            <text x={R + 8} y={ys(g) + 4} fontSize="12" fill="#94a3b8">${g}K</text>
          </g>
        ))}

        {/* previous period (dashed) */}
        <polyline points={toPath(DASHED)} fill="none" stroke="#cbd5e1" strokeWidth="2.5" strokeDasharray="2 5" strokeLinecap="round" strokeLinejoin="round" />

        {/* this period (solid) */}
        <polyline points={toPath(PURPLE)} fill="none" stroke="#7c3aed" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />

        {/* AI automation marker */}
        <text x="150" y="98" fontSize="13" fontWeight="600" fill="#ef4444" textAnchor="middle">AI automation</text>
        <text x="150" y="115" fontSize="13" fontWeight="600" fill="#ef4444" textAnchor="middle">started here</text>
        <line x1="168" y1="130" x2={xs(ARROW_AT) - 2} y2={ys(PURPLE[ARROW_AT]) - 10} stroke="#ef4444" strokeWidth="3" markerEnd="url(#redArrow)" />

        {/* x labels */}
        <text x={L} y="322" fontSize="12" fill="#94a3b8">Jan 2025</text>
        <text x={R} y="322" fontSize="12" fill="#94a3b8" textAnchor="end">May 2026</text>
      </svg>

      <p className="text-xs text-slate-400 mt-3 text-center">Real monthly volume from my own Stripe.</p>
    </div>
  )
}
