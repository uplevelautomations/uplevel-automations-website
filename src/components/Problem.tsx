import { Link } from 'react-router-dom'

const questions = [
  "Which of your techs is actually making you money — after labor and materials?",
  "Should you hire another tech right now, or fix how you're dispatching the ones you have?",
  "Which job types are you losing money on?",
  "Which lead source produces customers who stick vs. one-and-done?",
  "Can you afford to expand to a new area — or will that break cash flow in 60 days?",
  "Are your emergency call prices actually profitable, or are you subsidizing urgency?",
  "Which customers cost you more than they generate?",
  "Is that truck actually paying for itself?",
]

export default function Problem() {
  return (
    <section id="problem" className="relative py-24 px-6 overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-slate-50"></div>

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            You should be able to answer these in 30 seconds.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Most service business owners can't. Not because they're not paying attention — because the answer lives across QuickBooks, their field service tool, and a spreadsheet someone updates manually.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-3 mb-10">
          {questions.map((q, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-5 border border-slate-200 border-l-4 border-l-amber-400 shadow-sm"
            >
              <p className="text-slate-700 font-medium leading-snug">{q}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 text-center">
          <p className="text-white text-lg font-medium mb-2">
            Every one of these requires data from at least two systems that don't talk to each other.
          </p>
          <p className="text-slate-400 mb-6">
            That's what the Service OS solves. See it running on a real business.
          </p>
          <Link
            to="/demo"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-all shadow-sm"
          >
            See the dashboard demo
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
