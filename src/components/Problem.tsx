import { Link } from 'react-router-dom'

const questions = [
  "Which of your cleaners or crews is actually making you money, after labor and supplies?",
  "Should you hire another cleaner right now, or fix how you're routing the crews you have?",
  "Which job types are quietly losing money: one-time cleans, deep cleans, move-outs?",
  "Which lead source brings recurring clients, and which just brings one-and-done cleans?",
  "Can you take on more recurring work without hiring, or are your crews already maxed out?",
  "How many recurring clients did you lose last month, and which crew were they assigned to?",
  "Which crews are racking up callbacks and redos that quietly eat your margin?",
  "Which clients cost you more than they pay you, once you count cancellations and complaints?",
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
            Most cleaning company owners can't. Not because they're not paying attention — because the answer lives across QuickBooks, your scheduling tool (Jobber, Housecall Pro, BookingKoala), and a spreadsheet someone updates by hand. So you stay the bottleneck: the only one who can quote a job, the one the office texts at 7pm, the one who sees the whole picture.
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
            I can answer all of them for my own cleaning company right now — because I built the system to do it. Now I build it for other cleaning companies.
          </p>
          <Link
            to="/demo"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-all shadow-sm"
          >
            See the live demo
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
