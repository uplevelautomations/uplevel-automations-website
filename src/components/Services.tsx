import { Link } from 'react-router-dom'

type Service = {
  title: string
  description: string
  descriptionLink?: { text: string; href: string }
  price: string
  cta: string
  href: string
  isLink: boolean
  highlight?: boolean
}

export default function Services() {
  const services: Service[] = [
    {
      title: "AI Audit",
      description: "Not sure where to start? I map your cleaning operation, find the highest-impact fixes, and hand you a prioritized plan you can execute.",
      price: "Starting at $500",
      cta: "Book a 30-min call",
      href: "https://cal.com/roy-banwell/30minaicall",
      isLink: false,
    },
    {
      title: "No Lead Left Behind",
      description: "The build cleaning owners ask me for first. Instant lead response, a two-week follow-up sequence, and reactivation of the dead leads sitting in your CRM. Booked jobs from leads you already paid for.",
      price: "Starting at $1,000",
      cta: "Book a 30-min call",
      href: "https://cal.com/roy-banwell/30minaicall",
      isLink: false,
      highlight: true
    },
    {
      title: "Service OS",
      description: "Your scheduling tool, QuickBooks, and one more connected into one live dashboard: job profitability, crew performance, and cash position. You own it, no SaaS lock-in.",
      descriptionLink: { text: "See the live demo →", href: "/demo" },
      price: "Starting at $1,500",
      cta: "See the live demo",
      href: "/demo",
      isLink: true,
    },
    {
      title: "Custom AI Build",
      description: "Hiring funnels, invoicing and payment automation, recruiting, whatever's eating your week. Anything I've shipped in my own cleaning company I can ship in yours.",
      descriptionLink: { text: "See what I've built →", href: "/proof" },
      price: "Starting at $2,500",
      cta: "Book a 30-min call",
      href: "https://cal.com/roy-banwell/30minaicall",
      isLink: false
    }
  ]

  return (
    <section id="services" className="py-24 px-6 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Ways to work together.
          </h2>
          <p className="text-slate-500 text-lg">Start with No Lead Left Behind, then add the dashboard once you see the data. Not sure where to begin? Start with the audit.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 flex flex-col ${
                service.highlight
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-slate-50 hover:shadow-md'
              }`}
            >
              <h3 className={`text-xl font-semibold mb-3 ${service.highlight ? 'text-white' : 'text-slate-900'}`}>
                {service.title}
              </h3>
              <p className={`leading-relaxed flex-grow ${service.highlight ? 'text-blue-100' : 'text-slate-600'}`}>
                {service.description}
                {service.descriptionLink && (
                  <>
                    {' '}
                    <Link
                      to={service.descriptionLink.href}
                      className={`font-medium underline-offset-2 hover:underline ${service.highlight ? 'text-white' : 'text-blue-600'}`}
                    >
                      {service.descriptionLink.text}
                    </Link>
                  </>
                )}
              </p>
              <div className={`mt-4 text-sm font-semibold ${service.highlight ? 'text-white' : 'text-slate-900'}`}>
                {service.price}
              </div>
              <div className="mt-6">
                {service.isLink ? (
                  <Link
                    to={service.href}
                    className={`inline-block px-5 py-2.5 rounded-lg font-medium transition-all ${
                      service.highlight
                        ? 'bg-white text-blue-600 hover:bg-blue-50'
                        : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    {service.cta}
                  </Link>
                ) : (
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block px-5 py-2.5 rounded-lg font-medium transition-all ${
                      service.highlight
                        ? 'bg-white text-blue-600 hover:bg-blue-50'
                        : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    {service.cta}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
