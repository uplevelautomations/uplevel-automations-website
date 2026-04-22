import { Link } from 'react-router-dom'

export default function AssessmentTeaser() {
  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
          Ready to see what your numbers actually look like?
        </h2>
        <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
          Two ways in. Both take less than 5 minutes to get started.
        </p>

        <div className="grid sm:grid-cols-2 gap-5 mb-8 text-left">
          {/* Demo path */}
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 flex flex-col">
            <div className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">See it first</div>
            <h3 className="text-xl font-semibold text-white mb-3">Live Dashboard Demo</h3>
            <p className="text-slate-400 leading-relaxed mb-6 flex-grow">
              See exactly what your operations dashboard would look like — job profitability, crew performance, cash position, and a daily digest written by AI.
            </p>
            <Link
              to="/demo"
              onClick={() => window.dataLayer?.push({ event: 'cta_click', cta_text: 'View the demo', cta_location: 'bottom_cta' })}
              className="block text-center px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-all"
            >
              View the demo →
            </Link>
          </div>

          {/* Call path */}
          <div className="bg-white rounded-2xl p-8 flex flex-col">
            <div className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-3">Talk it through</div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">30-Minute Call</h3>
            <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
              Tell me which systems you're running and what you can't see clearly. I'll tell you exactly what we'd build and what it would cost.
            </p>
            <a
              href="https://cal.com/roy-banwell/30minaicall"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => window.dataLayer?.push({ event: 'cta_click', cta_text: 'Book a call', cta_location: 'bottom_cta' })}
              className="block text-center px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-all"
            >
              Book a call →
            </a>
          </div>
        </div>

        <p className="text-sm text-slate-600">Not sure which? Start with the demo.</p>
      </div>
    </section>
  )
}
