// Index of the free playbooks (src/content/playbooks.ts).
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { PLAYBOOKS } from '../content/playbooks'

export default function Playbooks() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-28 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="font-mono text-xs tracking-[0.16em] uppercase text-blue-600 mb-3">Free playbooks</div>
          <h1 className="text-5xl md:text-6xl text-slate-900 max-w-3xl leading-[1]">
            AI automations for cleaning companies, written down
          </h1>
          <p className="text-lg text-slate-600 mt-5 max-w-2xl">
            Each playbook is one system I run in my own cleaning company: what it does, the rules that make it work,
            and the real numbers. Free. Copy them.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {PLAYBOOKS.map((p) => (
              <Link
                key={p.slug}
                to={`/playbooks/${p.slug}`}
                className="group bg-white rounded-2xl border border-slate-200 p-6 flex gap-6 items-center hover:border-blue-600 transition-colors"
              >
                <img src={p.cover} alt="" className="w-28 rounded shadow-md -rotate-2 group-hover:rotate-0 transition-transform" />
                <div>
                  <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-slate-400">{p.pages} pages</div>
                  <div className="text-2xl font-serif text-slate-900 mt-1 leading-tight">{p.title}</div>
                  <div className="text-blue-600 font-medium mt-3">Get it free →</div>
                </div>
              </Link>
            ))}
            <div className="rounded-2xl border border-dashed border-slate-300 p-6 flex items-center text-slate-500">
              Next: the after-the-clean playbook (feedback, unhappy clients, reviews). One new playbook a month.
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
