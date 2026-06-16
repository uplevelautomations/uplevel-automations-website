import { Link } from 'react-router-dom'

export default function AssessmentTeaser() {
  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
          Ready to see where AI fits your cleaning company?
        </h2>
        <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
          Start with the 2-minute assessment, or book a call. Both take less than 5 minutes to get going.
        </p>

        <div className="grid sm:grid-cols-2 gap-5 mb-8 text-left">
          {/* Assessment path (primary, lowest friction) */}
          <div className="bg-blue-600 rounded-2xl p-8 flex flex-col">
            <div className="text-blue-100 text-xs font-semibold uppercase tracking-widest mb-3">Start here · free</div>
            <h3 className="text-xl font-semibold text-white mb-3">AI Readiness Assessment</h3>
            <p className="text-blue-50 leading-relaxed mb-6 flex-grow">
              A 2-minute quiz built for cleaning companies. Get a readiness score and a plain-English map of where AI would actually save you time and money.
            </p>
            <Link
              to="/ai-readiness"
              onClick={() => window.dataLayer?.push({ event: 'cta_click', cta_text: 'Take the 2-min assessment', cta_location: 'bottom_cta' })}
              className="block text-center px-5 py-3 bg-white hover:bg-blue-50 text-blue-700 font-semibold rounded-lg transition-all"
            >
              Take the 2-min assessment →
            </Link>
          </div>

          {/* Call path */}
          <div className="bg-white rounded-2xl p-8 flex flex-col">
            <div className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-3">Talk it through</div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">30-Minute Call</h3>
            <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
              Tell me which tools you're running and what you can't see clearly. I'll tell you exactly what we'd build and what it would cost.
            </p>
            <a
              href="https://cal.com/roy-banwell/30minaicall"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => window.dataLayer?.push({ event: 'cta_click', cta_text: 'Book a 30-min call', cta_location: 'bottom_cta' })}
              className="block text-center px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-all"
            >
              Book a 30-min call →
            </a>
          </div>
        </div>

        <p className="text-sm text-slate-500">
          Want to see it first?{' '}
          <Link to="/demo" className="text-blue-400 hover:text-blue-300 font-medium underline underline-offset-2">
            See the live demo
          </Link>.
        </p>
      </div>
    </section>
  )
}
