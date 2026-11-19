const CALL_URL = 'https://cal.com/roy-banwell/30minaicall'

type Tier = {
  name: string
  price: string
  tagline: string
  points: string[]
  guarantee?: string
  footnote?: string
  cta: string
  highlight?: boolean
}

const tiers: Tier[] = [
  {
    name: 'Plug-In',
    price: '$500',
    tagline: 'My No Lead Left Behind system, ready to plug in yourself.',
    points: [
      'The same lead follow-up I run in my own cleaning company, as a ready-made GoHighLevel setup',
      'A step-by-step guide to hook it up',
      'You set it up and you own it',
    ],
    cta: 'Get the Plug-In kit',
  },
  {
    name: 'Done-For-You',
    price: 'From $1,500',
    tagline: 'I build it for your business and make sure it works.',
    points: [
      'Sales: instant lead follow-up, re-engaging old leads and past clients, review requests',
      'Back office: scheduling, supply ordering, hiring, one build at a time',
      'Optional support after launch: $300/mo',
    ],
    guarantee: "If the system isn't working your leads end to end in 30 days, you get your money back.",
    cta: 'Book a call',
    highlight: true,
  },
  {
    name: 'Transformation',
    price: '$15,000',
    tagline: 'An AI-first rebuild of how your whole company runs.',
    points: [
      'Every core process redesigned around AI',
      'Your team trained on the systems',
      'Guaranteed by milestones, agreed up front',
    ],
    footnote: 'Limited to 2 per quarter.',
    cta: 'Apply',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Three ways to work together.
          </h2>
          <p className="text-slate-500 text-lg">
            Taking 3 new builds for December. Most owners start with Done-For-You.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                tier.highlight
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-slate-50 hover:shadow-md'
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-semibold">
                  Most popular
                </span>
              )}
              <h3 className={`text-lg font-semibold ${tier.highlight ? 'text-blue-100' : 'text-slate-500'}`}>
                {tier.name}
              </h3>
              <div className={`text-4xl font-bold mt-2 mb-3 ${tier.highlight ? 'text-white' : 'text-slate-900'}`}>
                {tier.price}
              </div>
              <p className={`mb-6 ${tier.highlight ? 'text-white' : 'text-slate-700'}`}>{tier.tagline}</p>

              <ul className="space-y-3 flex-grow">
                {tier.points.map((point) => (
                  <li
                    key={point}
                    className={`flex gap-2 text-sm leading-relaxed ${tier.highlight ? 'text-blue-100' : 'text-slate-600'}`}
                  >
                    <span className={tier.highlight ? 'text-white' : 'text-blue-600'}>✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {tier.guarantee && (
                <div className="mt-6 rounded-lg bg-white/10 border border-white/20 p-4 text-sm font-medium text-white">
                  30-day money-back guarantee. {tier.guarantee}
                </div>
              )}
              {tier.footnote && <p className="mt-6 text-xs text-slate-500">{tier.footnote}</p>}

              <a
                href={CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  window.dataLayer?.push({ event: 'cta_click', cta_text: tier.cta, cta_location: `pricing_${tier.name}` })
                }
                className={`mt-6 inline-block text-center px-5 py-3 rounded-lg font-medium transition-all ${
                  tier.highlight
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {tier.cta} →
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 mt-10">
          Proof it works: CBUS Cleaning booked 12 new jobs in month one from 1,430 old leads. NEAT saves its ops director about 5 hours a week.
        </p>
      </div>
    </section>
  )
}
