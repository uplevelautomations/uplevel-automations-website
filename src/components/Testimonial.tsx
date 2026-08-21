// Alex Ray, CBUS Cleaning Company (Columbus, OH).
// Approved in writing 2026-08-21 to be named and quoted. Consent record and the
// pre-trimmed variants of this quote live in the Roy HQ repo at
// Claude Code for UpLevel/1-sales/crm/clients/cbus-cleaning/testimonial/.
// Do not edit the quoted text — it is verbatim as he approved it.

export default function Testimonial() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-6 text-center">
          A cleaning owner who bought it
        </div>

        <figure className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12">
          <blockquote className="space-y-5 text-lg md:text-xl text-slate-700 leading-relaxed">
            <p>
              "I reached out to Roy because my cleaning business was growing but it was taking over my life. Every call, every problem, every decision, all ran through me and everything was manual. I knew I needed better processes to get to the next level without burning out.
            </p>
            <p>
              He did a free audit of my processes and gave me a report on where I could add automation.
            </p>
            <p>
              I started with a lead follow up automation which has{' '}
              <span className="font-semibold text-slate-900">already generated 12 new bookings in just the first month</span>{' '}
              and I plan on automating more processes in my business very soon. If you run a cleaning business and want to grow without constantly working more hours, reach out to Roy for a free process audit."
            </p>
          </blockquote>

          <figcaption className="mt-8 pt-6 border-t border-slate-200">
            <div className="font-semibold text-slate-900">Alex Ray</div>
            <div className="text-slate-500 text-sm">Owner, CBUS Cleaning Company — Columbus, OH</div>
          </figcaption>
        </figure>

        <div className="mt-8 text-center">
          <a
            href="https://cal.com/roy-banwell/30minaicall"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              (window as any).dataLayer?.push({
                event: 'cta_click',
                cta_text: 'Free process audit',
                cta_location: 'testimonial_section',
              })
            }
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-all shadow-sm"
          >
            Book a 30-min call to schedule your free process audit
          </a>
          <p className="text-xs text-slate-500 mt-3">
            That's the same audit Alex started with. Free, and there's no obligation after it.
          </p>
        </div>
      </div>
    </section>
  )
}
