import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

// The 14 questions, grouped as in the Service OS framing. Questions with
// a `to` link have a published answer page; the rest publish over time.
const groups: { name: string; questions: { q: string; to?: string }[] }[] = [
  {
    name: 'People',
    questions: [
      { q: 'Which of my cleaners is actually making me money?', to: '/answers/which-cleaner-is-most-profitable' },
      { q: 'Can I afford to hire another cleaner right now?', to: '/answers/can-i-afford-to-hire-another-cleaner' },
      { q: 'Should I let this cleaner go or coach them?' },
      { q: 'Which cleaner should I send on a high-value job?' },
    ],
  },
  {
    name: 'Job Mix & Pricing',
    questions: [
      { q: 'Which types of jobs should I chase, and which should I stop taking?' },
      { q: 'Which job types am I underpricing relative to actual time and cost?' },
      { q: 'Are recurring customers actually more profitable than one-time?' },
      { q: "What's my one-time to recurring conversion rate?", to: '/answers/one-time-to-recurring-conversion-rate' },
    ],
  },
  {
    name: 'Marketing',
    questions: [
      { q: 'Which lead source produces customers who stick around?' },
      { q: "What's my real cost per customer by channel, and is it sustainable?" },
    ],
  },
  {
    name: 'Cash & Growth',
    questions: [
      { q: 'Will hiring break my cash flow?' },
      { q: 'Should I expand to a new area or squeeze more out of my current one?' },
      { q: 'Which customers cost more than they generate?' },
      { q: 'Is my equipment actually paying for itself?' },
    ],
  },
]

export default function Answers() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Answers</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
            The Questions Cleaning Company Owners Can't Answer
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            An owner's job is resource allocation. Every decision, whether to hire, fire, expand,
            or cut, is a bet. The problem: answering any of the questions below requires data from
            at least two systems, usually your booking platform plus QuickBooks. Nobody joins that
            data manually, so the bets get made on gut.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-12">
            I run a cleaning company, and I couldn't answer most of these either until I built the
            system that joins the data. Each answer below shows how to compute the number, what it
            looked like in my own company, and what to do with it.
          </p>

          {groups.map((g) => (
            <section key={g.name} className="mb-10">
              <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">{g.name}</h2>
              <ul className="space-y-3">
                {g.questions.map((item) => (
                  <li key={item.q} className="bg-white rounded-lg shadow-sm px-5 py-4">
                    {item.to ? (
                      <Link to={item.to} className="flex items-center justify-between group">
                        <span className="text-slate-900 font-medium group-hover:text-blue-600 transition-colors">
                          {item.q}
                        </span>
                        <span className="text-blue-600 font-semibold text-sm shrink-0 ml-4">Read the answer →</span>
                      </Link>
                    ) : (
                      <span className="flex items-center justify-between">
                        <span className="text-slate-600">{item.q}</span>
                        <span className="text-slate-400 text-sm shrink-0 ml-4">Answer coming</span>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <p className="text-slate-600">
            Want the numbers behind these answers? Start with{' '}
            <Link to="/benchmarks/cleaning-company-margins" className="text-blue-600 font-medium hover:underline">
              what 920 cleans taught me about cleaning company margins
            </Link>
            .
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
