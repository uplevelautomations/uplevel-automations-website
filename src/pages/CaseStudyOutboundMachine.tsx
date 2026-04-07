import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function CaseStudyOutboundMachine() {
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
            <span className="text-slate-900">The Outbound Machine</span>
          </div>
          <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full mb-4">
            Case Study
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
            How I Built My Own Sales Development Team Out of MCP Servers
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            A full sales development team finds prospects, enriches them, sends cold emails AND LinkedIn DMs, comments on prospects' posts, classifies every reply, and drafts the responses. Mine does all of that for under $350 a month. I approve every reply from a Telegram chat on my phone.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <span>Built for: My consulting business</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Total stack cost: under $350/month</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Reply handling: 24/7</span>
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
              Cold outreach is high-volume, repetitive, and expensive to staff. A single sales development rep costs $5,000 to $10,000 a month fully loaded. An outbound agency runs $3,000 to $8,000 a month and you don't own the data or the systems. Both options assume you're willing to hand over judgment to someone else.
            </p>
            <p className="text-slate-600 leading-relaxed">
              I needed to find prospects, enrich them, send personalized cold emails, route the replies, and respond fast enough to convert interest into calls. Without hiring anyone. Without losing visibility. And without paying agency margins on top of tool costs.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What I Built</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              I built a full outbound pipeline that strings together a handful of tools and an AI orchestrator. Claude Code is the CRM and the brain. Every other tool is a specialized component it talks to through an API or a custom MCP server.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              The lead source is a saved search in LinkedIn Sales Navigator. When I want to launch a campaign, I describe the ICP in natural language. Claude pulls fresh prospects from that saved search, enriches them with Apollo for owner identification and mobile numbers, and pushes the verified leads into an Instantly cold email campaign. Five sender accounts send 75 emails a day each, weekdays only, US business hours.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              In parallel, the same prospects get worked on LinkedIn through Unipile. Claude sends 30 personalized connection requests a day, follows up with DMs to existing connections, and (this is the part nobody else does) fetches the prospects' recent posts, drafts intelligent comments on the ones worth engaging with, and pushes the drafts to my Telegram for approval before posting. I'm in the prospect's feed before I'm in their inbox.
            </p>
            <p className="text-slate-600 leading-relaxed">
              When a reply comes in (email or LinkedIn), a webhook hits a Railway service. Claude reads the reply, classifies sentiment, strips signatures, and drafts a response in my voice. The draft gets pushed to my Telegram with four buttons: Send, Skip, Regenerate, and Edit. I tap one. The response goes out.
            </p>
          </section>

          <section className="mb-16">
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-6 text-center">System Architecture</h3>
              <div className="space-y-4 text-sm">
                <div className="bg-white rounded-lg p-4 border border-slate-200 text-center max-w-md mx-auto">
                  <div className="font-medium text-slate-900 text-sm">Sales Navigator (saved search)</div>
                  <div className="text-slate-500 text-xs">The single source of truth for who I target</div>
                </div>
                <div className="text-center text-slate-400">↓</div>
                <div className="bg-white rounded-lg p-4 border border-slate-200 text-center max-w-md mx-auto">
                  <div className="font-medium text-slate-900 text-sm">Apollo Enrichment</div>
                  <div className="text-slate-500 text-xs">Owner ID + verified email + mobile numbers</div>
                </div>
                <div className="text-center text-slate-400">↓</div>
                <div className="bg-white rounded-lg p-4 border border-slate-200 text-center max-w-md mx-auto">
                  <div className="font-medium text-slate-900 text-sm">Claude Code (orchestrator)</div>
                  <div className="text-slate-500 text-xs">Filters, dedupes, splits across channels</div>
                </div>
                <div className="text-center text-slate-400">↓ runs in parallel ↓</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white rounded-lg p-4 border border-slate-200 text-center">
                    <div className="font-medium text-slate-900 text-sm">Cold email (Instantly)</div>
                    <div className="text-slate-500 text-xs">5 senders · 75/day each · weekdays 8-5 ET</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-slate-200 text-center">
                    <div className="font-medium text-slate-900 text-sm">LinkedIn drip (Unipile)</div>
                    <div className="text-slate-500 text-xs">30 connects + 10-15 DMs + 10+ post comments / day</div>
                  </div>
                </div>
                <div className="text-center text-slate-400">↓ reply received (any channel) ↓</div>
                <div className="bg-white rounded-lg p-4 border border-slate-200 text-center max-w-md mx-auto">
                  <div className="font-medium text-slate-900 text-sm">Railway webhook handler</div>
                  <div className="text-slate-500 text-xs">Classifies sentiment, cleans signatures, drafts response</div>
                </div>
                <div className="text-center text-slate-400">↓</div>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 text-center max-w-md mx-auto">
                  <div className="font-medium text-blue-900 text-sm">Telegram inline buttons</div>
                  <div className="text-blue-600 text-xs">Send · Skip · Regenerate · Edit. I approve every reply.</div>
                </div>
              </div>
              <p className="text-center text-xs text-slate-500 mt-6">
                Sourcing, enrichment, sending, LinkedIn engagement, and reply handling all automated. The only human touchpoint is approving the draft.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Why The Reply Bot Matters Most</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The biggest unlock isn't sourcing or sending. Those are commodity now. The unlock is reply handling at the speed of inbound interest. When someone replies saying "tell me more," the response window is minutes, not hours.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Before this system, every reply was a context switch. I'd see a notification, open Instantly or LinkedIn, read the thread, type a response, send it. Five minutes per reply, dozens of times a day. Most days I'd batch them and let interested prospects go cold while I waited for a free hour.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Now the draft is already written when I see the notification. I read it, tap Send, and the reply is out in 10 seconds. From the prospect's side it looks like I have a sales team. From my side it costs nothing.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The LinkedIn Differentiator</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Most cold outreach systems stop at email. Mine doesn't. The LinkedIn drip is run by Unipile, which is the only LinkedIn API I've found that exposes both post-fetching and post-commenting endpoints. That unlocks a workflow nobody else does at scale: programmatically commenting on prospects' actual posts before I ever pitch them.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Every day, Claude pulls the recent posts from my saved Sales Navigator list, scores them for "good engagement opportunity," drafts a thoughtful comment for each, and pushes them to my Telegram. I tap approve. The comment goes live under the prospect's post within seconds.
            </p>
            <p className="text-slate-600 leading-relaxed">
              By the time I send the connection request or DM, the prospect has already seen my name in their notifications. Connection acceptance rates went from "eh" to "consistent." That's the part of the funnel where most outbound dies, and it's the part nobody automates because the tooling didn't exist until recently.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The Cost Stack</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Tool</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Purpose</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Monthly cost</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { tool: 'Instantly Hypergrowth', use: 'Cold email sending + reply tracking', cost: '$78' },
                    { tool: 'Instantly Growth Leads', use: 'Lead credits (email + phone)', cost: '$47' },
                    { tool: 'Apollo Basic', use: 'Owner ID + mobile enrichment', cost: '$49' },
                    { tool: 'Unipile', use: 'LinkedIn DMs, connections, and post commenting', cost: '~$53' },
                    { tool: 'Sales Navigator', use: 'ICP saved searches + InMail credits', cost: '$120' },
                    { tool: 'Railway', use: 'Always-on reply webhook handler', cost: '~$5' },
                    { tool: 'Claude Code', use: 'CRM + orchestration + drafting', cost: '$0 (already had)' },
                  ].map((row) => (
                    <tr key={row.tool} className="border-b border-slate-100">
                      <td className="py-3 px-4 font-medium text-slate-900">{row.tool}</td>
                      <td className="py-3 px-4 text-slate-600">{row.use}</td>
                      <td className="py-3 px-4 text-slate-600 font-mono">{row.cost}</td>
                    </tr>
                  ))}
                  <tr className="border-b-2 border-slate-300 bg-blue-50">
                    <td className="py-3 px-4 font-bold text-slate-900">Total</td>
                    <td className="py-3 px-4 text-slate-600">Full outbound stack</td>
                    <td className="py-3 px-4 font-bold text-blue-700 font-mono">under $350/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Cost Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left py-3 px-4 font-semibold text-slate-900"></th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">In-House SDR</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Outbound Agency</th>
                    <th className="text-left py-3 px-4 font-semibold text-blue-700 bg-blue-50 rounded-t-lg">This System</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: 'Monthly cost', a: '$5,000-10,000', b: '$3,000-8,000', c: 'under $350' },
                    { label: 'Channels', a: 'Email + phone', b: 'Email mostly', c: 'Email + LinkedIn DMs + LinkedIn comments' },
                    { label: 'Reply latency', a: 'Hours', b: 'Hours-days', c: '10 seconds' },
                    { label: 'You own the data', a: 'Yes', b: 'No', c: 'Yes' },
                    { label: 'You own the systems', a: 'No', b: 'No', c: 'Yes' },
                    { label: 'Ramp time', a: '1-3 months', b: '2-6 weeks', c: 'Same day' },
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
                { tool: 'Sales Navigator', role: 'ICP saved searches (lead source)' },
                { tool: 'Apollo.io', role: 'Enrichment (owner ID + mobile)' },
                { tool: 'Instantly.ai', role: 'Cold email sending + reply tracking' },
                { tool: 'Unipile', role: 'LinkedIn DMs, connections, post commenting' },
                { tool: 'Railway', role: 'Webhook handler + always-on hosting' },
                { tool: 'Claude API', role: 'Sentiment, signature stripping, drafting' },
                { tool: 'Telegram Bot API', role: 'Inline button approval flow' },
                { tool: 'Custom MCP servers', role: 'Instantly + Unipile exposed as Claude tools' },
                { tool: 'Claude Code', role: 'CRM, orchestration, campaign management' },
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
              The biggest land mine was the reply webhook. The first version looked healthy: Instantly sent webhooks, Railway returned 200 status codes, no errors anywhere. But every single reply was being silently discarded. The webhook handler was checking for `first_name` while Instantly was sending `firstName`. Field name mismatch. Snake case vs camel case. Hours of "everything looks fine" before I noticed nothing was reaching Telegram.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              The second land mine was deduplication. The first campaign launch silently dropped most of my leads because they already existed in the workspace from earlier test lists. Fixed by setting <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">skip_if_in_workspace: false</code>.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The third was reply text. Email signatures and quoted prior messages were polluting the sentiment analysis. The fix was a small parser that strips signatures and quoted text before the AI sees the reply.
            </p>
          </section>

          <section className="mb-16">
            <div className="bg-slate-900 rounded-xl p-8 md:p-10 text-center">
              <h2 className="text-2xl font-bold text-white mb-3">
                Want this for your business?
              </h2>
              <p className="text-slate-400 mb-6 max-w-xl mx-auto leading-relaxed">
                Works for any B2B service business that needs cold outbound. Especially good if you're tired of either paying SDR salaries or watching agency campaigns underperform.
              </p>
              <a
                href="https://cal.com/roy-banwell/ai-strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => (window as any).dataLayer?.push({ event: 'cal_booking_click', booking_source: 'case_study_outbound_cta' })}
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
