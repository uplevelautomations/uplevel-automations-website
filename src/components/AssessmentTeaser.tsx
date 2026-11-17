// Closing call to action for the homepage. (File name kept from the old assessment teaser.)
export default function AssessmentTeaser() {
  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-3xl mx-auto text-center">
        <div className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">
          Taking 3 new builds for December
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
          Let's find the jobs hiding in your leads.
        </h2>
        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
          Tell me how leads come in and what happens to them today. I'll tell you exactly what I'd build, what it costs, and how fast it pays for itself.
        </p>
        <a
          href="https://cal.com/roy-banwell/30minaicall"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => window.dataLayer?.push({ event: 'cta_click', cta_text: 'Book a 30-min call', cta_location: 'bottom_cta' })}
          className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-600/25"
        >
          Book a 30-min call →
        </a>
        <p className="text-sm text-slate-500 mt-4">Free, no obligation.</p>
      </div>
    </section>
  )
}
