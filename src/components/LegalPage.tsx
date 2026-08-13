import { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export type LegalSection = {
  id: string
  heading: string
  body: ReactNode
}

type LegalPageProps = {
  title: string
  intro: string
  updated: string
  sections: LegalSection[]
}

export default function LegalPage({ title, intro, updated, sections }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-10 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
            {title}
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">{intro}</p>
          <p className="mt-4 text-sm text-slate-500">Last updated {updated}</p>
        </div>
      </section>

      {/* Body */}
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto lg:grid lg:grid-cols-[220px_1fr] lg:gap-12">
          {/* Contents */}
          <nav aria-label="On this page" className="mb-10 lg:mb-0">
            <div className="lg:sticky lg:top-28">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                On this page
              </div>
              <ol className="space-y-2 text-sm">
                {sections.map((section, i) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-slate-600 hover:text-slate-900 transition-colors leading-snug block"
                    >
                      <span className="text-slate-400 tabular-nums mr-2">{i + 1}.</span>
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section, i) => (
              <div key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                  <span className="text-slate-400 tabular-nums mr-2">{i + 1}.</span>
                  {section.heading}
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed [&_a]:text-blue-700 [&_a]:underline [&_a:hover]:text-blue-900 [&_strong]:text-slate-900 [&_strong]:font-semibold">
                  {section.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

/** Shared list styling so both legal pages stay visually identical. */
export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="text-slate-400 select-none mt-[2px]">&bull;</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
