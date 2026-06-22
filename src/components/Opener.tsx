const symptoms = [
  'Still taking booking calls at dinner, because no one else can quote the job.',
  'Hot leads going cold because nobody followed up in time.',
  "No straight answer on what's actually making, or losing, you money.",
]

export default function Opener() {
  return (
    <section id="problem" className="py-20 px-6 bg-slate-50 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: the message */}
          <div>
            <div className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3">
              The reality
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-tight mb-5">
              You can't step away, because you are the business.
            </h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              You've gotten this far on hustle and duct tape. But every quote, every fire, every late invoice still runs through you. To double it, triple it, or just take a real week off, you need systems that run without you.
            </p>
          </div>

          {/* Right: the symptoms */}
          <div className="space-y-3">
            {symptoms.map((s) => (
              <div key={s} className="bg-white rounded-xl px-5 py-4 border border-slate-200 border-l-4 border-l-amber-400 shadow-sm">
                <p className="text-slate-700 font-medium leading-snug">{s}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-lg font-semibold text-slate-900 mt-10 max-w-3xl">
          That's what I build: systems that take the business off your back, so it runs without you in the room.
        </p>
      </div>
    </section>
  )
}
