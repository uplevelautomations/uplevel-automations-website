// Standing call to action for every content page (blog, answers, benchmarks,
// comparisons). Sells the current offer (relaunch 2026-11-16, source of truth:
// roy-hq Claude Code for UpLevel/5-strategy/RELAUNCH-OFFER-2026-11.md).
// Replaced the old "See the live demo" dashboard pitch. Updated 2026-11-20
// for the revised offer (no $500 kit; Foundation tier added).
const CAL_URL = 'https://cal.com/roy-banwell/30minaicall'

export default function OfferCta({ source }: { source: string }) {
  return (
    <div className="mt-16 bg-slate-900 rounded-2xl p-8 text-center">
      <h2 className="text-3xl text-white mb-3">Run your cleaning company on AI, not more office staff.</h2>
      <p className="text-slate-300 mb-6 max-w-xl mx-auto">
        I build the same systems I run in my own company: lead follow-up, scheduling, client issues, hiring.
        One build from $1,500, or the foundation plus your first build for $2,500. Every build comes with a
        30-day money-back guarantee.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href={CAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            (window as any).dataLayer?.push({ event: 'cal_booking_click', booking_source: source })
          }
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Book a call
        </a>
        <a
          href="/#pricing"
          className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          See pricing
        </a>
      </div>
    </div>
  )
}
