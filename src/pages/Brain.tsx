import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Brain() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-background to-background"></div>
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-blue-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-[5%] w-96 h-96 bg-blue-50/50 rounded-full blur-3xl"></div>

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Free download
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
            Create an AI second brain that helps you get work done.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Most AI tools don't know who you are and can't touch your systems. So they answer questions instead of doing work. This kit changes that. Free.
          </p>
          <a
            href="/ONBOARDING.md"
            download
            onClick={() => window.dataLayer?.push({ event: 'cta_click', cta_text: 'Download the AI Brain Kit', cta_location: 'hero' })}
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5"
          >
            Download the AI Brain Kit
          </a>
          <p className="mt-4 text-sm text-slate-400">Requires Claude (Pro or Max, $20/mo). Works on Mac and PC.</p>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-base font-semibold text-slate-500 uppercase tracking-wide mb-8">Why your AI isn't as useful as it should be</p>
          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mt-0.5">
                <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">It has no memory of you.</h3>
                <p className="text-slate-600 leading-relaxed">Every session starts from scratch. It doesn't know your clients, your priorities, or how you work. So you either re-explain everything at the start of each conversation, or accept generic answers that don't fit your situation.</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mt-0.5">
                <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">It can't do anything in your world.</h3>
                <p className="text-slate-600 leading-relaxed">It can write and think, but it's not connected to your email, calendar, or systems. So you get answers you still have to act on yourself. It's a better search engine, not a second brain.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">What a second brain actually changes.</h2>
          <p className="text-slate-600 leading-relaxed text-lg mb-6">
            A second brain gives your AI both things it's missing: a context file that teaches it who you are, how you work, your clients, your tools, and your priorities. Plus connections to the systems you actually use.
          </p>
          <p className="text-slate-600 leading-relaxed text-lg">
            Once it's set up, it can check your calendar, scan your email, review your pipeline, and tell you what needs attention today. Not just answer questions. Actually do work.
          </p>
        </div>
      </section>

      {/* What you end up with */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">What you end up with.</h2>
          <ul className="space-y-4">
            {[
              { label: 'A context file', desc: 'your business, clients, priorities, and how you work. Claude knows all of it without asking.' },
              { label: 'A memory system', desc: 'a rolling log of what\'s happening day to day, automatically updated.' },
              { label: 'Connected tools', desc: 'email, calendar, your systems. Optional, but guided setup is included.' },
              { label: 'A daily briefing', desc: 'pulls everything together each morning so you know exactly what to focus on. Also optional.' },
            ].map(({ label, desc }) => (
              <li key={label} className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <p className="text-slate-700"><span className="font-semibold">{label}:</span> {desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Setup steps */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">How to get started.</h2>
          <p className="text-slate-500 mb-10">Five minutes of setup, then the kit walks you through everything else.</p>
          <div className="space-y-6">
            {[
              {
                n: '1',
                title: 'Get a Claude subscription.',
                desc: <>Go to <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">claude.ai</a> and sign up for Pro or Max ($20/mo). You need a paid plan for the features the kit uses.</>,
              },
              {
                n: '2',
                title: 'Download the Claude desktop app.',
                desc: <>Go to <a href="https://claude.ai/download" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">claude.ai/download</a>, install it, and sign in.</>,
              },
              {
                n: '3',
                title: 'Create a folder on your computer.',
                desc: 'This is where your brain will live. Desktop or Documents works fine. Name it whatever you want: "AI Brain," your business name, anything.',
              },
              {
                n: '4',
                title: 'Download the kit and drop the file in your folder.',
                desc: 'One file. Drag it into the folder you just created.',
              },
              {
                n: '5',
                title: 'Open the Code tab and start your session.',
                desc: 'Open the Claude desktop app. At the top you\'ll see Chat, Projects, and Code. Click Code. Start a new session, select your folder when prompted, and type: "Read ONBOARDING.md and follow the instructions in it."',
              },
              {
                n: '6',
                title: 'Talk for about 2 hours.',
                desc: 'Claude asks you questions about your work, your clients, your tools, your goals. It builds your brain file by file as you go. No tech skills needed. Just talk.',
              },
            ].map(({ n, title, desc }) => (
              <div key={n} className="flex gap-5">
                <div className="flex-shrink-0 w-8 h-8 border-2 border-slate-300 text-slate-500 rounded-full flex items-center justify-center font-semibold text-sm">
                  {n}
                </div>
                <div className="pt-0.5">
                  <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16 px-6 bg-blue-600">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Download the kit. Free.</h2>
          <p className="text-blue-100 mb-8">One file. Five minutes to set up. Then talk for about two hours and you're done.</p>
          <a
            href="/ONBOARDING.md"
            download
            onClick={() => window.dataLayer?.push({ event: 'cta_click', cta_text: 'Download the AI Brain Kit', cta_location: 'bottom' })}
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg transition-all hover:bg-blue-50 hover:-translate-y-0.5 shadow-lg"
          >
            Download the AI Brain Kit
          </a>
          <p className="mt-4 text-blue-200 text-sm">Requires Claude Pro or Max ($20/mo). Works on Mac and PC.</p>
        </div>
      </section>

      {/* Help CTAs */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-3 text-center">Want help?</h2>
          <p className="text-slate-500 text-center mb-10">Two ways to work with me directly.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-slate-200 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Help setting this up</h3>
              <p className="text-slate-600 text-sm mb-5 leading-relaxed">I'll set up your brain with you, connect your tools, and make sure it's working. $150/hr.</p>
              <a
                href="https://cal.com/roy-banwell/30minaicall"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => window.dataLayer?.push({ event: 'cta_click', cta_text: 'Book a setup session', cta_location: 'help' })}
                className="inline-block w-full text-center px-5 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors text-sm"
              >
                Book a setup session
              </a>
            </div>
            <div className="border border-slate-200 rounded-xl p-6 bg-slate-50">
              <h3 className="font-semibold text-slate-900 mb-2">AI for your whole business</h3>
              <p className="text-slate-600 text-sm mb-5 leading-relaxed">I audit your operations, find where AI creates the most leverage, and build the systems. Start with a free assessment.</p>
              <a
                href="https://cal.com/roy-banwell/30minaicall"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => window.dataLayer?.push({ event: 'cta_click', cta_text: 'Get a free assessment', cta_location: 'help' })}
                className="inline-block w-full text-center px-5 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                Get a free assessment
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
