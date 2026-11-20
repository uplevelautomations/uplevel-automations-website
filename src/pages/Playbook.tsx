// One free playbook, gated by name, email, phone and company. On submit the
// server emails the reader the PDF link and emails Roy the lead
// (server/api/playbook-download.ts); the page then shows the download button.
// Content per playbook: src/content/playbooks.ts.
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { type Playbook as PlaybookT } from '../content/playbooks'

const CALL_URL = 'https://cal.com/roy-banwell/30minaicall'

const track = (event: string, params: Record<string, unknown> = {}) => {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...params })
}

type Status = 'idle' | 'sending' | 'done' | 'error'

const field =
  'w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:border-blue-600 outline-none text-slate-900 placeholder:text-slate-400'

export default function Playbook({ playbook }: { playbook: PlaybookT }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', leads: '', website: '' })
  const [status, setStatus] = useState<Status>('idle')
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value })

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    track('playbook_submit', { playbook: playbook.slug })
    try {
      const res = await fetch('/api/playbook-download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, slug: playbook.slug }),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('done')
      track('playbook_unlocked', { playbook: playbook.slug })
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-28 pb-20 px-6">
        {/* Hero: the book and the form */}
        <section className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-start">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none pt-4">
            <div className="relative aspect-[8.5/11] w-[78%] mx-auto">
              {playbook.peek[1] && (
                <img
                  src={playbook.peek[1].src}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover rounded-md shadow-xl rotate-[7deg] translate-x-[16%] translate-y-[3%] opacity-95"
                />
              )}
              {playbook.peek[0] && (
                <img
                  src={playbook.peek[0].src}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover rounded-md shadow-xl rotate-[3deg] translate-x-[8%] translate-y-[1%]"
                />
              )}
              <img
                src={playbook.cover}
                alt={`Cover of ${playbook.title}`}
                className="relative w-full h-full object-cover rounded-md shadow-2xl -rotate-[2deg] ring-1 ring-black/5"
              />
            </div>
          </div>

          <div>
            <div className="font-mono text-xs tracking-[0.16em] uppercase text-blue-600 mb-4">
              Free playbook · {playbook.pages} pages
            </div>
            <h1 className="text-5xl md:text-6xl leading-[0.98] text-slate-900">
              {playbook.title}
              <span className="block italic text-slate-500 text-3xl md:text-4xl mt-3">{playbook.forWho}</span>
            </h1>
            <p className="text-lg text-slate-600 mt-6 max-w-xl">{playbook.pitch}</p>

            <div className="mt-8 bg-white rounded-2xl border border-slate-200 p-6 md:p-7 shadow-sm">
              {status === 'done' ? (
                <div>
                  <div className="font-mono text-xs tracking-[0.14em] uppercase text-blue-600 mb-2">It’s yours</div>
                  <h2 className="text-3xl text-slate-900 mb-2">Download the playbook</h2>
                  <p className="text-slate-600 mb-5">
                    I also emailed you the link, so it’s there when you need it.
                  </p>
                  <a
                    href={playbook.file}
                    target="_blank"
                    rel="noopener"
                    onClick={() => track('playbook_download', { playbook: playbook.slug })}
                    className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                  >
                    Download the PDF ↓
                  </a>
                  <p className="text-sm text-slate-500 mt-6 border-t border-slate-100 pt-5">
                    Want it built for you instead?{' '}
                    <a
                      href={CALL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => track('cta_click', { cta_text: 'Book a call', cta_location: `playbook_${playbook.slug}_done` })}
                      className="text-blue-600 font-medium hover:underline"
                    >
                      Book a free 50-minute call →
                    </a>
                  </p>
                </div>
              ) : (
                <form onSubmit={submit}>
                  <h2 className="font-sans text-lg font-semibold text-slate-900 mb-1">Where should I send it?</h2>
                  <p className="text-sm text-slate-500 mb-5">You get the download right here, and a copy by email.</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <input required autoComplete="name" placeholder="Your name" value={form.name} onChange={set('name')} className={field} />
                    <input required type="email" autoComplete="email" placeholder="Email" value={form.email} onChange={set('email')} className={field} />
                    <input required type="tel" autoComplete="tel" placeholder="Phone" value={form.phone} onChange={set('phone')} className={field} />
                    <input required autoComplete="organization" placeholder="Company name" value={form.company} onChange={set('company')} className={field} />
                    <select required value={form.leads} onChange={set('leads')} className={`${field} sm:col-span-2 ${form.leads ? '' : 'text-slate-400'}`}>
                      <option value="" disabled>New leads a month</option>
                      <option value="Under 25">Under 25</option>
                      <option value="25 to 100">25 to 100</option>
                      <option value="100 to 300">100 to 300</option>
                      <option value="300 or more">300 or more</option>
                    </select>
                    {/* Honeypot: hidden from people, filled by bots */}
                    <input
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      value={form.website}
                      onChange={set('website')}
                      className="hidden"
                      name="website"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full mt-4 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-60"
                  >
                    {status === 'sending' ? 'Unlocking…' : 'Get the free playbook'}
                  </button>
                  {status === 'error' && (
                    <p className="text-sm text-red-600 mt-3">That didn’t go through. Try again in a moment.</p>
                  )}
                  <p className="text-xs text-slate-400 mt-4">
                    No list, no newsletter. I may reach out once to see if it helped.{' '}
                    <Link to="/privacy" className="underline hover:text-slate-600">Privacy</Link>
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* What's inside */}
        <section className="max-w-6xl mx-auto mt-24">
          <div className="font-mono text-xs tracking-[0.16em] uppercase text-blue-600 mb-3">What’s inside</div>
          <h2 className="text-4xl md:text-5xl text-slate-900 max-w-2xl">Seven automations, in the order I’d build them</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden mt-10">
            {playbook.inside.map((s) => (
              <div key={s.n} className="bg-white p-6">
                <div className="font-serif text-4xl text-blue-600 leading-none">{s.n}</div>
                <div className="font-semibold text-slate-900 mt-3">{s.title}</div>
                <p className="text-sm text-slate-600 mt-1.5">{s.text}</p>
              </div>
            ))}
            <div className="bg-slate-900 p-6 text-slate-200">
              <div className="font-serif text-4xl text-blue-400 leading-none">+</div>
              <div className="font-semibold text-white mt-3">Measure it, then build it</div>
              <p className="text-sm text-slate-300 mt-1.5">Six numbers to watch and a three-week build order.</p>
            </div>
          </div>
        </section>

        {/* What you'll learn + who wrote it */}
        <section className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl text-slate-900 mb-5">What you’ll take away</h2>
            <ul className="space-y-3">
              {playbook.learn.map((l) => (
                <li key={l} className="flex gap-3 text-slate-700">
                  <span className="mt-2 w-2 h-2 rotate-45 bg-blue-600 shrink-0" />
                  {l}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-7 flex gap-5 items-start">
            <img src="/roy-headshot.png" alt="Roy Banwell" className="w-16 h-16 rounded-full object-cover shrink-0" />
            <div>
              <div className="font-semibold text-slate-900">Roy Banwell</div>
              <p className="text-slate-600 mt-2">
                I run a home cleaning company on AI agents and a small remote team. Everything in this playbook runs there
                or at a client’s, and I build the same systems for other cleaning companies.
              </p>
              <Link to="/proof" className="inline-block mt-3 text-blue-600 font-medium hover:underline">
                See what I’ve built →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
