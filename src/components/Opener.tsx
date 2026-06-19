const symptoms = [
  'Still taking booking calls at dinner, because no one else can quote the job.',
  'Hot leads going cold because nobody followed up in time.',
  "No straight answer on what's actually making, or losing, you money.",
]

export default function Opener() {
  return (
    <section id="problem" className="relative py-24 px-6 overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-slate-50"></div>

      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
          You can't step away, because you are the business.
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed mb-10">
          You've gotten this far on hustle and duct tape. But every quote, every fire, every late invoice still runs through you. To double it, triple it, or just take a real week off, you need systems that run without you.
        </p>

        <div className="max-w-xl mx-auto space-y-3 text-left mb-10">
          {symptoms.map((s) => (
            <div key={s} className="bg-white rounded-xl px-5 py-4 border border-slate-200 border-l-4 border-l-amber-400 shadow-sm">
              <p className="text-slate-700 font-medium leading-snug">{s}</p>
            </div>
          ))}
        </div>

        <p className="text-lg font-semibold text-slate-900 max-w-2xl mx-auto">
          That's what I build: systems that take the business off your back, so it runs without you in the room.
        </p>
      </div>
    </section>
  )
}
