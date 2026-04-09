import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function CaseStudyVACoaching() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
            <Link to="/" className="hover:text-slate-900">Home</Link>
            <span>/</span>
            <Link to="/proof" className="hover:text-slate-900">Proof</Link>
            <span>/</span>
            <span className="text-slate-900">VA Coaching System</span>
          </div>
          <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full mb-4">
            Case Study
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
            How I Built an AI That Coaches My VAs From Their Sales Calls
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Every night, an AI listens to every sales call my virtual assistants made that day, scores each conversation on six dimensions, and writes a weekly coaching report. The hardest part of managing remote staff is knowing what's actually happening on the phone. Now I know.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <span>Built for: My own cleaning company</span>
            </div>
            <div className="flex items-center gap-2">
              <span>VAs covered: 2</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Conversations scored: 80-100/week</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6">
        <div className="border-t border-slate-200" />
      </div>

      <article className="py-16 px-6">
        <div className="max-w-3xl mx-auto">

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The Problem</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              I have two virtual assistants who handle the front line of my cleaning business. They answer inbound calls, follow up on missed calls, qualify leads, send quotes, book jobs, and handle customer issues. They generate most of my revenue.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              I had no idea what they actually said on the phone. I could see how many calls they took, how fast they responded, and how many bookings they created. But I couldn't tell whether they were quoting prices over text instead of calling back, whether they were missing upsell opportunities, whether they sounded warm or robotic, or whether a customer who didn't book had a fixable objection.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Listening to even 10% of the calls myself would have eaten my entire week. I needed something that could listen to all of them and tell me what mattered.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What I Built</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              I built a nightly pipeline that pulls every call transcript from GoHighLevel, sends each one to Claude Opus 4.6 along with the related SMS thread, and gets back a structured score on six dimensions plus specific coaching notes that reference real moments from the conversation.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              At 11 PM Eastern, the system fetches every transcript GHL recorded that day, batches them by VA and customer thread, runs the analysis, and stores the results in SQLite. A daily Telegram message tells me how each VA scored. A weekly synthesis runs every Sunday and produces a coaching report ranking the top three things each VA should work on.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The key insight is that the AI references specific moments in the conversation. Instead of "your follow-through could be better," it says "on the call with Carla at 2:14 PM you quoted prices via text instead of calling her back. She booked with a competitor 40 minutes later."
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The 6 Scoring Dimensions</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { name: 'Responsiveness', desc: 'How fast they replied to inbound messages and missed calls' },
                { name: 'Listening', desc: 'Whether they understood what the customer actually needed' },
                { name: 'Sales', desc: 'Whether they advanced toward booking or just answered questions' },
                { name: 'Professionalism', desc: 'Tone, warmth, language, brand voice' },
                { name: 'Follow-through', desc: 'Whether they did what they said they\'d do' },
                { name: 'Phone discipline', desc: 'Whether they called back instead of texting when calling was the right move' },
              ].map((d) => (
                <div key={d.name} className="bg-white rounded-lg p-4 border border-slate-200">
                  <div className="font-semibold text-slate-900 text-sm mb-1">{d.name}</div>
                  <div className="text-sm text-slate-600">{d.desc}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-6 text-center">System Architecture</h3>
              <div className="space-y-4 text-sm">
                <div className="bg-white rounded-lg p-4 border border-slate-200 text-center max-w-md mx-auto">
                  <div className="font-medium text-slate-900 text-sm">GHL Webhook (call complete)</div>
                  <div className="text-slate-500 text-xs">Stores contact_id + messageId on Railway. Runs in milliseconds.</div>
                </div>
                <div className="text-center text-slate-400">↓ wait until 11 PM ET</div>
                <div className="bg-white rounded-lg p-4 border border-slate-200 text-center max-w-md mx-auto">
                  <div className="font-medium text-slate-900 text-sm">Sync transcript fetch</div>
                  <div className="text-slate-500 text-xs">Pulls every transcript from GHL API. Synchronous, in main thread.</div>
                </div>
                <div className="text-center text-slate-400">↓ only after every fetch completes</div>
                <div className="bg-white rounded-lg p-4 border border-slate-200 text-center max-w-md mx-auto">
                  <div className="font-medium text-slate-900 text-sm">Opus 4.6 analysis</div>
                  <div className="text-slate-500 text-xs">Scores each conversation on 6 dimensions. Returns structured JSON.</div>
                </div>
                <div className="text-center text-slate-400">↓</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-white rounded-lg p-3 border border-slate-200 text-center">
                    <div className="font-medium text-slate-900 text-xs">SQLite storage</div>
                    <div className="text-slate-500 text-xs">Scores + notes + history</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-slate-200 text-center">
                    <div className="font-medium text-slate-900 text-xs">Daily Telegram</div>
                    <div className="text-slate-500 text-xs">Per-VA scores + highlights</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-slate-200 text-center">
                    <div className="font-medium text-slate-900 text-xs">Dashboard view</div>
                    <div className="text-slate-500 text-xs">7-day rollup</div>
                  </div>
                </div>
                <div className="text-center text-slate-400">↓ every Sunday</div>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 text-center max-w-md mx-auto">
                  <div className="font-medium text-blue-900 text-sm">Weekly synthesis</div>
                  <div className="text-blue-600 text-xs">Top 3 coaching priorities per VA, week-over-week trends</div>
                </div>
              </div>
              <p className="text-center text-xs text-slate-500 mt-6">
                The two-step sync architecture exists because background threads silently failed in production. Lesson learned the hard way.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">A Real Example</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Here's the kind of coaching note Opus produces. This is paraphrased from a real one:
            </p>
            <div className="bg-slate-900 rounded-xl p-6">
              <div className="text-sm text-slate-300 leading-relaxed font-mono whitespace-pre-wrap">{`VA: Julie  ·  Customer: Carla M.  ·  Score: 62/100

Strengths
- Responded to inbound text within 4 minutes
- Asked the right qualification questions about square footage

Coaching moments
- At 2:14 PM Carla asked for pricing. Julie quoted via text instead
  of calling back. Carla booked a competitor at 2:54 PM.
- When Carla mentioned she had pets, Julie didn't mention the
  pet-friendly upcharge or ask about specific cleaning needs.
- Sign-off was "Let me know!" instead of a clear next step.

Top recommendation
- Phone discipline: when a customer asks for pricing on a $300+ job,
  call them. Texting price is the #1 leak point in the funnel.`}</div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The Numbers</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                { label: 'Conversations scored / week', value: '80-100', sub: 'Across both VAs' },
                { label: 'Scoring dimensions', value: '6', sub: 'Each scored 0-100' },
                { label: 'Run time', value: 'Nightly', sub: '11 PM ET, fully autonomous' },
                { label: 'Cost per analysis', value: '~$0.10', sub: 'Opus 4.6 API usage' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-lg p-5 border border-slate-200">
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm font-medium text-slate-700 mt-1">{stat.label}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Cost Comparison</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              The traditional way to coach a sales team is to have a senior person listen to call recordings and write notes. That doesn't scale and it doesn't happen.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left py-3 px-4 font-semibold text-slate-900"></th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Sales Coach</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Manual Review</th>
                    <th className="text-left py-3 px-4 font-semibold text-blue-700 bg-blue-50 rounded-t-lg">This System</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: 'Monthly cost', a: '$3,000-8,000', b: '20-30 hours of your time', c: '~$30 in API' },
                    { label: 'Coverage', a: '5-10% of calls', b: '5-10% of calls', c: '100% of calls' },
                    { label: 'Specific moment references', a: 'Sometimes', b: 'Sometimes', c: 'Always' },
                    { label: 'Trends over time', a: 'Manual', b: 'Manual', c: 'Automatic' },
                    { label: 'Time to first report', a: '1-2 weeks', b: 'Weekly', c: 'Daily' },
                  ].map((row) => (
                    <tr key={row.label} className="border-b border-slate-100">
                      <td className="py-3 px-4 font-medium text-slate-700">{row.label}</td>
                      <td className="py-3 px-4 text-slate-600">{row.a}</td>
                      <td className="py-3 px-4 text-slate-600">{row.b}</td>
                      <td className="py-3 px-4 text-blue-700 font-medium bg-blue-50">{row.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Tech Stack</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { tool: 'GHL API', role: 'Call transcripts + SMS threads' },
                { tool: 'Opus 4.6', role: 'Conversation analysis and scoring' },
                { tool: 'Railway', role: 'Always-on pipeline + persistent volume' },
                { tool: 'SQLite', role: 'Score history + coaching notes' },
                { tool: 'Telegram Bot API', role: 'Daily + weekly delivery' },
                { tool: 'Python', role: 'Pipeline orchestration' },
              ].map((item) => (
                <div key={item.tool} className="flex gap-3 p-3 rounded-lg bg-white border border-slate-200">
                  <div>
                    <div className="text-sm font-medium text-slate-900">{item.tool}</div>
                    <div className="text-xs text-slate-500">{item.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What It Took</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The hardest bug took eight hours to debug. Background threads in Python were silently failing on Railway when fetching transcripts from the GHL API. Same token, same URL, same messageId. The synchronous version worked. The threaded version returned empty. I never found the root cause.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              The fix was to stop fighting it and refactor the architecture: do all the transcript fetching synchronously in the main thread first, then run the analysis only after every fetch completes. Slower, but reliable.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The other big lesson was max_tokens. On busy days the response was getting truncated mid-JSON because the default limit was too low. Bumping it to 16,384 fixed the silent failures on high-volume days.
            </p>
          </section>

          <section className="mb-16">
            <div className="bg-slate-900 rounded-xl p-8 md:p-10 text-center">
              <h2 className="text-2xl font-bold text-white mb-3">
                Want this for your team?
              </h2>
              <p className="text-slate-400 mb-6 max-w-xl mx-auto leading-relaxed">
                Works for VAs, SDRs, customer success reps, support agents, anyone who talks to customers. If you record calls, this can listen to them.
              </p>
              <a
                href="https://cal.com/roy-banwell/30minaicall"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => (window as any).dataLayer?.push({ event: 'cal_booking_click', booking_source: 'case_study_va_coaching_cta' })}
                className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all shadow-sm hover:shadow-md"
              >
                Book a Strategy Call
              </a>
              <p className="text-xs text-slate-500 mt-3">
                Free, 30 minutes. No pitch deck.
              </p>
            </div>
          </section>

        </div>
      </article>

      <Footer />
    </div>
  )
}
