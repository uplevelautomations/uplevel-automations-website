import { useState } from 'react'

// Same Apps Script endpoint the assessment posts to; rows land in the
// lead sheet tagged by `type` so benchmark opt-ins are filterable.
const SHEETS_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbzs806_T0UUwSAMwZa_ppjAobgf4STx_85d3pGjGCc28fr4GTRnG6RkBAm-BhMVBy-XaA/exec'

interface EmailCaptureProps {
  /** Tag written to the sheet, e.g. "benchmark_report_optin". */
  source: string
  heading: string
  blurb: string
}

export default function EmailCapture({ source, heading, blurb }: EmailCaptureProps) {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.includes('@')) return
    setDone(true)
    window.dataLayer?.push({ event: 'email_capture', capture_source: source })
    fetch(SHEETS_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: source, timestamp: new Date().toISOString(), email }),
    }).catch(() => {
      // no-cors fire-and-forget; nothing actionable client-side
    })
  }

  return (
    <div className="not-prose my-10 bg-blue-50 border border-blue-100 rounded-2xl p-6">
      {done ? (
        <p className="text-slate-800 font-medium">
          You're on the list. Updated numbers land in your inbox when the data refreshes.
        </p>
      ) : (
        <>
          <h3 className="text-lg font-semibold text-slate-900 mb-1">{heading}</h3>
          <p className="text-sm text-slate-600 mb-4">{blurb}</p>
          <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              aria-label="Email address"
              className="flex-1 px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Send me updates
            </button>
          </form>
        </>
      )}
    </div>
  )
}
