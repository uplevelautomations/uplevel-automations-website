import { Link } from 'react-router-dom'

const points = [
  {
    title: 'Reply in seconds, not hours',
    body: 'Every new lead gets an instant, personal response, day or night, so you stop losing the ones who book whoever answers first.',
  },
  {
    title: 'Follow up until they decide',
    body: 'A text-and-email sequence follows up every lead for two weeks straight, automatically. No more "I meant to call them back."',
  },
  {
    title: 'Wake up your dead list',
    body: "The old leads sitting in your CRM that never booked. I re-engage them automatically — even a small rebook rate on a list that size is jobs you'd never have seen.",
  },
]

export default function NoLeadLeftBehind() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center">
          <div className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">
            The #1 thing I see in cleaning companies
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            You're sitting on a pile of dead leads.
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed mb-2">
            Leads come in, nobody replies fast enough, nobody follows up, and they quietly pile up in your CRM. Meanwhile you're answering booking calls at your kid's game because you're still the only one who can.
          </p>
          <p className="text-white font-medium text-lg max-w-2xl mx-auto mb-10">
            No Lead Left Behind fixes that. It's the system cleaning owners ask me for first.
          </p>

          <div className="grid md:grid-cols-3 gap-5 mb-10 text-left">
            {points.map((p) => (
              <div key={p.title} className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                <h3 className="text-white font-semibold mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            This isn't about saving time. It's <span className="text-white font-semibold">booked jobs from leads you already paid for</span>, off your plate, running while you work.
          </p>

          <a
            href="https://cal.com/roy-banwell/30minaicall"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => (window as any).dataLayer?.push({ event: 'cta_click', cta_text: 'No Lead Left Behind', cta_location: 'nllb_section' })}
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-all shadow-sm"
          >
            Stop losing leads — book a 30-min call
          </a>
          <p className="text-xs text-slate-500 mt-3">Builds start at $1,000. You own it.</p>
        </div>
      </div>
    </section>
  )
}
