export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-50 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[280px_1fr] gap-12 items-start">
          {/* Left column - Photo */}
          <div>
            <img
              src="/roy-headshot.png"
              alt="Roy Banwell"
              className="w-full aspect-square max-w-[280px] mx-auto md:mx-0 rounded-2xl object-cover"
            />
          </div>

          {/* Right column - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
              Who you'll be working with
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                I'm Roy Banwell. I co-own Catalina Cleaning, a Miami-based home cleaning company. Instead of hiring more admin staff to scale, I built an AI system that handles revenue tracking, cleaner performance scoring, lead routing, automated follow-ups, and daily operations. My VAs are twice as productive as they were six months ago and the business is growing without adding headcount.
              </p>

              <p>
                That experience is what I bring to other cleaning company owners. I've spent years building this stuff inside a real cleaning company, so I know what actually works on the ground vs. what's just hype. I map your operations, find the tasks AI can take off your plate, and help you build it.
              </p>
            </div>

            <a
              href="https://x.com/Roy_Banwell"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-white border border-slate-200 rounded-lg text-slate-700 hover:border-slate-300 hover:bg-slate-50 font-medium transition-all"
            >
              <svg className="w-5 h-5 text-slate-900" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              Follow on X
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
