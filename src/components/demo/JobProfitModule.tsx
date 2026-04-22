import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, Legend
} from 'recharts'
import { demoFixture } from '../../data/demoFixture'

const fmt = (n: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)

const marginColor = (margin: number) => {
  if (margin >= 55) return '#10b981' // emerald
  if (margin >= 40) return '#2563eb' // blue
  if (margin >= 30) return '#f59e0b' // amber
  return '#ef4444' // red
}

const marginLabel = (margin: number) => {
  if (margin >= 55) return { text: 'Best', color: 'text-emerald-700', bg: 'bg-emerald-50 border-emerald-200' }
  if (margin >= 40) return { text: 'Solid', color: 'text-blue-700', bg: 'bg-blue-50 border-blue-200' }
  if (margin >= 30) return { text: 'Watch', color: 'text-amber-700', bg: 'bg-amber-50 border-amber-200' }
  return { text: 'Low', color: 'text-red-700', bg: 'bg-red-50 border-red-200' }
}

export default function JobProfitModule() {
  const { jobTypes } = demoFixture

  return (
    <div className="space-y-6">

      {/* Insight callout */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl px-5 py-4">
        <p className="text-sm font-semibold text-blue-900">
          Emergency calls feel like wins — they're not.
        </p>
        <p className="text-xs text-blue-700 mt-1">
          Maintenance plans generate 61% margin. Emergency calls generate 29%. Most businesses chase the wrong work.
        </p>
      </div>

      {/* Bar chart */}
      <div className="bg-white rounded-xl border border-slate-200 p-5">
        <p className="text-sm font-semibold text-slate-700 mb-1">Revenue by Service Type</p>
        <p className="text-xs text-slate-400 mb-4">Source: ServiceTitan + QuickBooks</p>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart
            data={jobTypes}
            margin={{ top: 4, right: 4, left: 0, bottom: 0 }}
            barSize={28}
          >
            <XAxis
              dataKey="type"
              tick={{ fontSize: 11, fill: '#94a3b8' }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: '#94a3b8' }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
              width={40}
            />
            <Tooltip
              formatter={(value: number) => [fmt(value), 'Revenue']}
              contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: 12 }}
            />
            <Bar dataKey="revenue" isAnimationActive={false}>
              {jobTypes.map((entry) => (
                <Cell key={entry.type} fill={marginColor(entry.margin)} radius={4} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Detail cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {jobTypes.map((job) => {
          const label = marginLabel(job.margin)
          return (
            <div key={job.type} className="bg-white rounded-xl border border-slate-200 p-5">
              <div className="flex items-start justify-between mb-3">
                <p className="text-sm font-semibold text-slate-900 leading-snug">{job.type}</p>
                <span className={`px-1.5 py-0.5 text-xs font-medium rounded border ${label.bg} ${label.color} ml-2 flex-shrink-0`}>
                  {label.text}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div>
                  <p className="text-slate-400 mb-0.5">Jobs</p>
                  <p className="font-semibold text-slate-700">{job.jobs}</p>
                </div>
                <div>
                  <p className="text-slate-400 mb-0.5">Revenue</p>
                  <p className="font-semibold text-slate-700">{fmt(job.revenue)}</p>
                </div>
                <div>
                  <p className="text-slate-400 mb-0.5">Margin</p>
                  <p className={`font-bold ${label.color}`}>{job.margin}%</p>
                </div>
              </div>
              <div className="mt-3 bg-slate-100 rounded-full h-1.5">
                <div
                  className="h-1.5 rounded-full transition-all"
                  style={{ width: `${job.margin}%`, backgroundColor: marginColor(job.margin) }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
