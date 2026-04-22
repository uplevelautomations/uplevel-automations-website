import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { demoFixture, type InvoiceDetail } from '../../data/demoFixture'

const fmt = (n: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)

const statusStyles = {
  ok: { row: 'bg-emerald-50 border-emerald-100', text: 'text-emerald-700', dot: 'bg-emerald-400' },
  warn: { row: 'bg-amber-50 border-amber-200', text: 'text-amber-700', dot: 'bg-amber-400' },
  alert: { row: 'bg-red-50 border-red-200', text: 'text-red-700', dot: 'bg-red-500' },
}

function InvoiceTable({ invoices, status }: { invoices: InvoiceDetail[]; status: string }) {
  const textColor = status === 'alert' ? 'text-red-700' : 'text-amber-700'
  const borderColor = status === 'alert' ? 'border-red-100' : 'border-amber-100'
  const headerColor = status === 'alert' ? 'text-red-500' : 'text-amber-500'

  return (
    <div className={`mt-2 border-t ${borderColor} pt-3`}>
      <table className="w-full text-xs">
        <thead>
          <tr>
            <th className={`text-left pb-2 font-semibold uppercase tracking-wide ${headerColor}`}>Customer</th>
            <th className={`text-left pb-2 font-semibold uppercase tracking-wide ${headerColor}`}>Invoice</th>
            <th className={`text-left pb-2 font-semibold uppercase tracking-wide ${headerColor}`}>Date</th>
            <th className={`text-right pb-2 font-semibold uppercase tracking-wide ${headerColor}`}>Amount</th>
            <th className={`text-right pb-2 font-semibold uppercase tracking-wide ${headerColor}`}>Days Out</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((inv) => (
            <tr key={inv.invoiceNum} className={`border-t ${borderColor}`}>
              <td className={`py-2 font-medium ${textColor}`}>
                {inv.customer}
                {inv.note && (
                  <span className="ml-1.5 text-xs px-1 py-0.5 bg-red-100 text-red-600 rounded">
                    {inv.note}
                  </span>
                )}
              </td>
              <td className={`py-2 ${textColor} opacity-70`}>{inv.invoiceNum}</td>
              <td className={`py-2 ${textColor} opacity-70`}>{inv.date}</td>
              <td className={`py-2 text-right font-semibold ${textColor}`}>{fmt(inv.amount)}</td>
              <td className={`py-2 text-right font-bold ${textColor}`}>{inv.daysOverdue}d</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function RevenueModule() {
  const [expandedRow, setExpandedRow] = useState<string | null>(null)
  const { arAging, weeklyRevenue } = demoFixture.revenue

  return (
    <div className="space-y-6">
      {/* Revenue chart */}
      <div className="bg-white rounded-xl border border-slate-200 p-5">
        <p className="text-sm font-semibold text-slate-700 mb-4">Weekly Revenue — Last 8 Weeks</p>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={weeklyRevenue} barSize={28}>
            <XAxis
              dataKey="week"
              tick={{ fontSize: 11, fill: '#94a3b8' }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: '#94a3b8' }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
              width={44}
            />
            <Tooltip
              formatter={(value: number) => [fmt(value), 'Revenue']}
              contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: 12 }}
            />
            <Bar dataKey="revenue" fill="#2563eb" radius={[4, 4, 0, 0]} isAnimationActive={false} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* AR aging */}
      <div className="bg-white rounded-xl border border-slate-200 p-5">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-semibold text-slate-700">Accounts Receivable Aging</p>
          <span className="text-xs text-slate-400">Click overdue rows to see invoices</span>
        </div>
        <div className="space-y-2">
          {arAging.map((row) => {
            const styles = statusStyles[row.status]
            const isClickable = row.invoiceDetails !== null
            const isExpanded = expandedRow === row.label

            return (
              <div
                key={row.label}
                className={`rounded-lg border px-4 py-3 transition-all ${styles.row} ${isClickable ? 'cursor-pointer hover:opacity-90' : ''}`}
                onClick={() => {
                  if (isClickable) {
                    setExpandedRow(isExpanded ? null : row.label)
                  }
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${styles.dot}`} />
                    <span className="text-sm text-slate-700">{row.label}</span>
                    {row.invoices && (
                      <span className={`text-xs font-medium ${styles.text}`}>
                        ({row.invoices} invoice{row.invoices > 1 ? 's' : ''})
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-bold ${styles.text}`}>{fmt(row.amount)}</span>
                    {isClickable && (
                      <span className={`text-xs ${styles.text} transition-transform ${isExpanded ? 'rotate-180' : ''} inline-block`}>
                        ▾
                      </span>
                    )}
                  </div>
                </div>

                {isExpanded && row.invoiceDetails && (
                  <InvoiceTable invoices={row.invoiceDetails} status={row.status} />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
