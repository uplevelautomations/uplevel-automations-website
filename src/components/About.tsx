export default function About() {
  const stats = [
    { value: "40%", label: "Tasks Automated" },
    { value: "2x", label: "Admin Productivity via AI" }
  ]

  return (
    <section id="about" className="py-24 px-6 bg-slate-50 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[280px_1fr] gap-12 items-start">
          {/* Left column - Photo and stats */}
          <div>
            {/* Photo */}
            <img
              src="/roy-headshot.png"
              alt="Roy Banwell"
              className="w-full aspect-square max-w-[280px] mx-auto md:mx-0 rounded-2xl object-cover"
            />

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

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
                That experience is what I bring to other service business owners. I've been in AI for over four years and I know what actually works for small businesses vs. what's just hype. I map your operations, find the tasks AI can take off your plate, and help you build it.
              </p>
            </div>

            <a
              href="https://www.linkedin.com/in/roybanwell/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-white border border-slate-200 rounded-lg text-slate-700 hover:border-slate-300 hover:bg-slate-50 font-medium transition-all"
            >
              <svg className="w-5 h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
