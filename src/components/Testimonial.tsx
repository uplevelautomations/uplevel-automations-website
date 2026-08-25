// Two client testimonials, both approved in writing to be named and quoted:
//   Alex Ray, CBUS Cleaning Company (Columbus, OH) — approved 2026-08-21
//   Nick Beyer, NEAT Commercial Cleaning (NW Arkansas) — approved 2026-08-25
// Consent records and the pre-trimmed variants of each quote live in the Roy HQ
// repo under Claude Code for UpLevel/1-sales/crm/clients/<client>/testimonial/.
// Do not edit the quoted text — both are verbatim as approved.
//
// The pairing is deliberate: residential/revenue won next to commercial/cost
// saved. Between them they cover both halves of the market and both halves of
// the reason an owner buys.

export default function Testimonial() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-6 text-center">
          Cleaning owners who bought it
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

        <figure className="mt-6 bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12">
          <blockquote className="space-y-5 text-lg md:text-xl text-slate-700 leading-relaxed">
            <p>
              "Roy did a terrific job helping us create a "supply ordering" automation. It has been a huge unlock for my business -{' '}
              <span className="font-semibold text-slate-900">saving my Director of Operations roughly 5 hours of work per week</span>. Roy audited my business by meeting with me, the owner, and Rick, our Director of Operations. After the audit, he presented the short-term and long-term automations he could implement.
            </p>
            <p>
              My Director of Operations is incredibly happy carving out hours from his weekly tasks, so he can focus on true value-add work. It's not only cut out hours of work, but also improved accuracy and reduced typos, which previously cost us money. We are very happy with Roy's work, his delivery, and how he transitioned the project from start to finish."
            </p>
          </blockquote>

          <figcaption className="mt-8 pt-6 border-t border-slate-200">
            <div className="font-semibold text-slate-900">Nick Beyer</div>
            <div className="text-slate-500 text-sm">Owner, NEAT Commercial Cleaning — Northwest Arkansas</div>
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
            That's the same audit Alex and Nick both started with. Free, and there's no obligation after it.
          </p>
        </div>
      </div>
    </section>
  )
}
