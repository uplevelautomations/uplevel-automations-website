import { Fragment, useState } from 'react'
import { demoFixture, type RecentJob } from '../../data/demoFixture'

const fmt = (n: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)

const marginStyles = {
  top: { bar: 'bg-emerald-500', text: 'text-emerald-700', badge: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  good: { bar: 'bg-blue-400', text: 'text-blue-700', badge: '' },
  ok: { bar: 'bg-slate-300', text: 'text-slate-600', badge: '' },
  alert: { bar: 'bg-red-500', text: 'text-red-700', badge: 'bg-red-50 text-red-700 border-red-200' },
}

const jobMarginColor = (m: number) => {
  if (m >= 50) return 'text-emerald-700'
  if (m >= 40) return 'text-blue-700'
  if (m >= 30) return 'text-amber-700'
  return 'text-red-600 font-bold'
}

function RecentJobsTable({ jobs, techStatus }: { jobs: RecentJob[]; techStatus: string }) {
  const isAlert = techStatus === 'alert'
  const bg = isAlert ? 'bg-red-50/60' : 'bg-slate-50'
  const border = isAlert ? 'border-red-100' : 'border-slate-100'
  const header = isAlert ? 'text-red-500' : 'text-slate-400'

  return (
    <tr>
      <td colSpan={5} className="px-5 pb-4 pt-0">
        <div className={`rounded-lg ${bg} border ${border} overflow-hidden`}>
          <table className="w-full text-xs">
            <thead>
              <tr className={`border-b ${border}`}>
                <th className={`text-left px-4 py-2 font-semibold uppercase tracking-wide ${header}`}>Date</th>
                <th className={`text-left px-4 py-2 font-semibold uppercase tracking-wide ${header}`}>Job Type</th>
                <th className={`text-left px-4 py-2 font-semibold uppercase tracking-wide ${header}`}>Customer</th>
                <th className={`text-right px-4 py-2 font-semibold uppercase tracking-wide ${header}`}>Revenue</th>
                <th className={`text-right px-4 py-2 font-semibold uppercase tracking-wide ${header}`}>Margin</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, i) => (
                <tr key={i} className={`border-t ${border}`}>
                  <td className="px-4 py-2 text-slate-500">{job.date}</td>
                  <td className="px-4 py-2 text-slate-700 font-medium">{job.type}</td>
                  <td className="px-4 py-2 text-slate-500">{job.customer}</td>
                  <td className="px-4 py-2 text-right text-slate-600">{fmt(job.revenue)}</td>
                  <td className={`px-4 py-2 text-right font-semibold ${jobMarginColor(job.margin)}`}>{job.margin}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </td>
    </tr>
  )
}

export default function TechModule() {
  const [expandedTech, setExpandedTech] = useState<string | null>(null)
  const { crews, teamAvgMargin } = demoFixture

  return (
    <div className="space-y-6">
      {/* Crew table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-700">Crew Performance — This Month</p>
            <p className="text-xs text-slate-400 mt-0.5">Gross margin after labor & supplies · Source: Jobber</p>
          </div>
          <span className="text-xs text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full">Click row to expand</span>
        </div>

        {/* Desktop table */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Crew</th>
                <th className="text-right px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Jobs</th>
                <th className="text-right px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Revenue</th>
                <th className="text-right px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Avg Job</th>
                <th className="text-right px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Margin</th>
              </tr>
            </thead>
            <tbody>
              {crews.map((tech, i) => {
                const styles = marginStyles[tech.status]
                const isExpanded = expandedTech === tech.name
                const isLast = i === crews.length - 1

                return (
                  <Fragment key={tech.name}>
                    <tr
                      onClick={() => setExpandedTech(isExpanded ? null : tech.name)}
                      className={`border-b cursor-pointer transition-colors ${
                        isLast && !isExpanded ? 'border-b-0' : 'border-slate-50'
                      } ${
                        tech.status === 'alert'
                          ? isExpanded ? 'bg-red-50/60' : 'bg-red-50/40 hover:bg-red-50/70'
                          : isExpanded ? 'bg-slate-50' : 'hover:bg-slate-50'
                      }`}
                    >
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-slate-900">{tech.name}</span>
                          {tech.status === 'top' && (
                            <span className="px-1.5 py-0.5 text-xs font-medium rounded border bg-emerald-50 text-emerald-700 border-emerald-200">Top</span>
                          )}
                          {tech.status === 'alert' && (
                            <span className="px-1.5 py-0.5 text-xs font-medium rounded border bg-red-50 text-red-700 border-red-200">Review</span>
                          )}
                        </div>
                      </td>
                      <td className="px-5 py-4 text-right text-slate-600">{tech.jobs}</td>
                      <td className="px-5 py-4 text-right text-slate-600">{fmt(tech.revenue)}</td>
                      <td className="px-5 py-4 text-right text-slate-600">{fmt(tech.avgJobValue)}</td>
                      <td className="px-5 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <div className="w-16 bg-slate-100 rounded-full h-1.5">
                            <div
                              className={`h-1.5 rounded-full ${styles.bar}`}
                              style={{ width: `${Math.min(tech.margin, 100)}%` }}
                            />
                          </div>
                          <span className={`font-semibold w-10 text-right ${styles.text}`}>{tech.margin}%</span>
                          <span className="text-slate-300 text-xs">{isExpanded ? '▴' : '▾'}</span>
                        </div>
                      </td>
                    </tr>
                    {isExpanded && (
                      <RecentJobsTable jobs={tech.recentJobs} techStatus={tech.status} />
                    )}
                  </Fragment>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="sm:hidden divide-y divide-slate-100">
          {crews.map((tech) => {
            const styles = marginStyles[tech.status]
            const isExpanded = expandedTech === tech.name

            return (
              <div
                key={tech.name}
                className={`${tech.status === 'alert' ? 'bg-red-50/40' : ''}`}
                onClick={() => setExpandedTech(isExpanded ? null : tech.name)}
              >
                <div className="px-5 py-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-900">{tech.name}</span>
                      {tech.status === 'top' && (
                        <span className="px-1.5 py-0.5 text-xs font-medium rounded border bg-emerald-50 text-emerald-700 border-emerald-200">Top</span>
                      )}
                      {tech.status === 'alert' && (
                        <span className="px-1.5 py-0.5 text-xs font-medium rounded border bg-red-50 text-red-700 border-red-200">Review</span>
                      )}
                    </div>
                    <span className={`font-bold text-base ${styles.text}`}>{tech.margin}% {isExpanded ? '▴' : '▾'}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs text-slate-500">
                    <div><span className="block text-slate-400">Jobs</span>{tech.jobs}</div>
                    <div><span className="block text-slate-400">Revenue</span>{fmt(tech.revenue)}</div>
                    <div><span className="block text-slate-400">Avg Job</span>{fmt(tech.avgJobValue)}</div>
                  </div>
                </div>
                {isExpanded && (
                  <div className="px-5 pb-4">
                    <div className="rounded-lg bg-slate-50 border border-slate-100 divide-y divide-slate-100">
                      {tech.recentJobs.map((job, i) => (
                        <div key={i} className="px-3 py-2.5 flex items-center justify-between">
                          <div>
                            <p className="text-xs font-medium text-slate-700">{job.type}</p>
                            <p className="text-xs text-slate-400">{job.date} · {job.customer}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs font-semibold text-slate-700">{fmt(job.revenue)}</p>
                            <p className={`text-xs font-bold ${jobMarginColor(job.margin)}`}>{job.margin}%</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Team average */}
      <div className="bg-slate-50 rounded-xl border border-slate-200 px-5 py-4 flex items-center justify-between">
        <span className="text-sm text-slate-600">Team average margin · gross, after labor & materials</span>
        <span className="text-lg font-bold text-slate-900">{teamAvgMargin}%</span>
      </div>
    </div>
  )
}
