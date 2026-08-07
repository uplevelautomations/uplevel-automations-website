import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

interface ArticleLayoutProps {
  kicker: string
  title: string
  intro: ReactNode
  children: ReactNode
  /** Date line shown under the title, e.g. "Data through August 2026". */
  dateline?: string
}

/**
 * Shared layout for content pages (benchmarks, comparisons, answers).
 * Answer-first structure: the intro must contain the actual answer,
 * not a wind-up. Body content uses prose styling; data tables are
 * plain <table> elements styled here.
 */
export default function ArticleLayout({ kicker, title, intro, dateline, children }: ArticleLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20 px-6">
        <article className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">{kicker}</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">{title}</h1>
          {dateline && <p className="text-sm text-slate-500 mb-6">{dateline}</p>}
          <div className="text-lg text-slate-700 leading-relaxed mb-10 border-l-4 border-blue-600 pl-5">
            {intro}
          </div>
          <div
            className="prose prose-slate max-w-none
              prose-h2:text-2xl prose-h2:font-bold prose-h2:text-slate-900 prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-lg prose-h3:font-semibold prose-h3:text-slate-900
              prose-p:leading-relaxed prose-li:leading-relaxed
              prose-table:text-sm
              prose-strong:text-slate-900"
          >
            {children}
          </div>

          {/* Standing CTA */}
          <div className="mt-16 bg-slate-900 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Want these numbers for your company?</h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Service OS pulls your booking platform and QuickBooks into one screen, so you can answer
              these questions about your own operation in real time. Built by an operator who runs a
              cleaning company, not an agency.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/demo"
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                See the live demo
              </Link>
              <a
                href="https://cal.com/roy-banwell/30minaicall"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Book a 30-min call
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
