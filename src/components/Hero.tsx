import { Link } from 'react-router-dom'
import GrowthChart from './GrowthChart'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-background to-background"></div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-blue-100/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-[5%] w-96 h-96 bg-blue-50/50 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: message */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
            I took my cleaning company from $13K to <span className="text-blue-600">$60K a month</span>, in 12 months.
          </h1>

          <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0">
            I did it with AI systems I built, not more office staff. Now I build the same systems for other cleaning companies, so you finally see your profit, crews, and cash in one screen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/demo"
              onClick={() => window.dataLayer?.push({ event: 'cta_click', cta_text: 'See the live demo', cta_location: 'hero' })}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all text-center shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5"
            >
              See the live demo →
            </Link>
            <a
              href="https://cal.com/roy-banwell/30minaicall"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => window.dataLayer?.push({ event: 'cta_click', cta_text: 'Book a 30-min Call', cta_location: 'hero' })}
              className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-lg border border-slate-200 transition-all hover:border-slate-300 text-center"
            >
              Book a 30-min call
            </a>
          </div>
        </div>

        {/* Right: the proof chart */}
        <div className="w-full max-w-lg mx-auto lg:mx-0">
          <GrowthChart />
        </div>
      </div>
    </section>
  )
}
