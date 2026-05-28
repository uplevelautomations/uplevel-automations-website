import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid,
} from 'recharts'
import { demoFixture } from '../../data/demoFixture'

const fmt = (n: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)

const pct = (n: number) => `${(n * 100).toFixed(1)}%`

type Status = 'top' | 'good' | 'ok' | 'alert'

const statusStyle = (s: Status) => {
  switch (s) {
    case 'top':
      return { dot: 'bg-emerald-500', text: 'text-emerald-700', bg: 'bg-emerald-50 border-emerald-200', label: 'Top' }
    case 'good':
      return { dot: 'bg-blue-500', text: 'text-blue-700', bg: 'bg-blue-50 border-blue-200', label: 'Good' }
    case 'ok':
      return { dot: 'bg-amber-500', text: 'text-amber-700', bg: 'bg-amber-50 border-amber-200', label: 'Watch' }
    default:
      return { dot: 'bg-red-500', text: 'text-red-700', bg: 'bg-red-50 border-red-200', label: 'Alert' }
  }
}

const channelColors = {
  googleAds: '#2563eb',
  gbp: '#10b981',
  angi: '#f59e0b',
  website: '#8b5cf6',
}

const deltaLabel = (n: number) => {
  if (n > 0) return { text: `▲ ${n}`, color: 'text-emerald-600' }
  if (n < 0) return { text: `▼ ${Math.abs(n)}`, color: 'text-red-600' }
  return { text: '—', color: 'text-slate-400' }
}

export default function MarketingModule() {
  const { marketing } = demoFixture
  const { channels, weeklyLeadsByChannel, trendInsight, localSEO, organic } = marketing

  return (
    <div className="space-y-6">

      {/* Summary callout */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-5 py-4">
        <p className="text-xs font-medium text-emerald-700 uppercase tracking-wide mb-1">This Month</p>
        <p className="text-sm font-semibold text-emerald-900">{marketing.summary}</p>
      </div>

      {/* Channel KPI strip — 4 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {channels.map((c) => {
          const s = statusStyle(c.status)
          return (
            <div key={c.name} className="bg-white rounded-xl border border-slate-200 p-5">
              <div className="flex items-start justify-between mb-3">
                <p className="text-sm font-semibold text-slate-900 leading-snug">{c.name}</p>
                <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 text-xs font-medium rounded border ${s.bg} ${s.text} ml-2 flex-shrink-0`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                  {s.label}
                </span>
              </div>

              <p className="text-2xl font-bold text-slate-900 mb-1">
                {c.spend > 0 ? fmt(c.spend) : 'Organic'}
              </p>
              <p className="text-xs text-slate-400 mb-3">
                {c.spend > 0 ? 'spent this month' : 'no ad spend'}
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs pt-3 border-t border-slate-100">
                <div>
                  <p className="text-slate-400 mb-0.5">Leads</p>
                  <p className="font-semibold text-slate-700">{c.leads}</p>
                </div>
                {'cpl' in c && c.cpl ? (
                  <div>
                    <p className="text-slate-400 mb-0.5">CPL</p>
                    <p className="font-semibold text-slate-700">${c.cpl}</p>
                  </div>
                ) : 'actions' in c && c.actions ? (
                  <div>
                    <p className="text-slate-400 mb-0.5">Actions</p>
                    <p className="font-semibold text-slate-700">{c.actions.toLocaleString()}</p>
                  </div>
                ) : 'sessions' in c && c.sessions ? (
                  <div>
                    <p className="text-slate-400 mb-0.5">Sessions</p>
                    <p className="font-semibold text-slate-700">{c.sessions}</p>
                  </div>
                ) : null}
                {'roas' in c && c.roas ? (
                  <div className="col-span-2 pt-2 border-t border-slate-50">
                    <p className="text-slate-400 mb-0.5">ROAS</p>
                    <p className={`font-bold ${s.text}`}>{c.roas}×</p>
                  </div>
                ) : 'convRate' in c && c.convRate ? (
                  <div className="col-span-2 pt-2 border-t border-slate-50">
                    <p className="text-slate-400 mb-0.5">Conv rate</p>
                    <p className={`font-bold ${s.text}`}>{pct(c.convRate)}</p>
                  </div>
                ) : null}
              </div>
            </div>
          )
        })}
      </div>

      {/* Weekly trend chart */}
      <div className="bg-white rounded-xl border border-slate-200 p-5">
        <div className="flex items-center justify-between mb-1">
          <p className="text-sm font-semibold text-slate-700">Leads by Channel — 8 weeks</p>
          <span className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">Google Ads · GBP · Angi · Website</span>
        </div>
        <p className="text-xs text-slate-400 mb-4">Source: Ads + GBP + Angi + GA4</p>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={weeklyLeadsByChannel} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid stroke="#f1f5f9" vertical={false} />
            <XAxis dataKey="week" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} width={28} />
            <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: 12 }} />
            <Legend wrapperStyle={{ fontSize: 11, paddingTop: 8 }} iconType="circle" iconSize={8} />
            <Line type="monotone" dataKey="googleAds" name="Google Ads" stroke={channelColors.googleAds} strokeWidth={2} dot={{ r: 3 }} isAnimationActive={false} />
            <Line type="monotone" dataKey="gbp" name="GBP" stroke={channelColors.gbp} strokeWidth={2} dot={{ r: 3 }} isAnimationActive={false} />
            <Line type="monotone" dataKey="angi" name="Angi" stroke={channelColors.angi} strokeWidth={2} dot={{ r: 3 }} isAnimationActive={false} />
            <Line type="monotone" dataKey="website" name="Website" stroke={channelColors.website} strokeWidth={2} dot={{ r: 3 }} isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
        <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg px-4 py-3">
          <p className="text-xs text-blue-700"><span className="font-semibold">Insight: </span>{trendInsight}</p>
        </div>
      </div>

      {/* Local Visibility — two columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        {/* Local Rankings — BrightLocal */}
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold text-slate-700">Local Rankings</p>
            <span className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">BrightLocal</span>
          </div>

          <div className="flex items-baseline gap-3 mb-1">
            <p className="text-4xl font-bold text-slate-900">#{localSEO.avgPackPosition}</p>
            <p className="text-sm font-medium text-emerald-600">▲ {Math.abs(localSEO.avgPositionDelta)} positions</p>
          </div>
          <p className="text-xs text-slate-400 mb-4">Avg local pack position · 30-day improvement</p>

          <div className="grid grid-cols-3 gap-2 mb-4 pt-3 border-t border-slate-100">
            <div>
              <p className="text-xs text-slate-400 mb-0.5">In top 3</p>
              <p className="text-lg font-bold text-emerald-600">{localSEO.keywordsInTop3}</p>
            </div>
            <div>
              <p className="text-xs text-slate-400 mb-0.5">In top 10</p>
              <p className="text-lg font-bold text-blue-600">{localSEO.keywordsInTop10}</p>
            </div>
            <div>
              <p className="text-xs text-slate-400 mb-0.5">Tracked</p>
              <p className="text-lg font-bold text-slate-700">{localSEO.keywordsTracked}</p>
            </div>
          </div>

          <p className="text-xs text-slate-500 font-medium mb-2 uppercase tracking-wide">Top traffic keywords</p>
          <div className="space-y-1.5 mb-4">
            {localSEO.topKeywords.map((kw) => {
              const d = deltaLabel(kw.delta)
              return (
                <div key={kw.keyword} className="flex items-center justify-between text-xs">
                  <span className="text-slate-700 truncate flex-1 mr-2">{kw.keyword}</span>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="font-semibold text-slate-900">#{kw.position}</span>
                    <span className={`${d.color} font-medium w-10 text-right`}>{d.text}</span>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-slate-400">Citation health</span>
            <span className="font-semibold text-emerald-700">{pct(localSEO.citationAccuracy)} accurate · {localSEO.citationCount} directories</span>
          </div>

          <div className="mt-3 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
            <p className="text-xs text-emerald-800 font-medium">{localSEO.goalLine}</p>
          </div>
        </div>

        {/* Organic Traffic — Search Console + GA4 */}
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold text-slate-700">Organic Traffic</p>
            <span className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">Search Console + GA4</span>
          </div>

          <div className="flex items-baseline gap-3 mb-1">
            <p className="text-4xl font-bold text-slate-900">{(organic.impressions / 1000).toFixed(1)}k</p>
            <p className="text-sm font-medium text-emerald-600">▲ {pct(organic.impressionsDelta)}</p>
          </div>
          <p className="text-xs text-slate-400 mb-4">Impressions · MoM</p>

          <div className="grid grid-cols-3 gap-2 mb-4 pt-3 border-t border-slate-100">
            <div>
              <p className="text-xs text-slate-400 mb-0.5">Clicks</p>
              <p className="text-lg font-bold text-slate-700">{organic.clicks.toLocaleString()}</p>
              <p className="text-xs text-emerald-600 font-medium mt-0.5">▲ {pct(organic.clicksDelta)}</p>
            </div>
            <div>
              <p className="text-xs text-slate-400 mb-0.5">CTR</p>
              <p className="text-lg font-bold text-slate-700">{pct(organic.ctr)}</p>
            </div>
            <div>
              <p className="text-xs text-slate-400 mb-0.5">Pages</p>
              <p className="text-lg font-bold text-slate-700">{organic.topPages.length * 30}+</p>
            </div>
          </div>

          <p className="text-xs text-slate-500 font-medium mb-2 uppercase tracking-wide">Top landing pages</p>
          <div className="space-y-1.5">
            {organic.topPages.map((p) => (
              <div key={p.path} className="flex items-center justify-between text-xs">
                <span className="text-slate-700 truncate flex-1 mr-2 font-mono text-[11px]">{p.path}</span>
                <span className="font-semibold text-slate-900 flex-shrink-0">{p.clicks} clicks</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
