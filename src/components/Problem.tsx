export default function Problem() {
  const painPoints = [
    {
      number: "1",
      title: "The advice doesn't fit your business.",
      description: "Almost all the AI playbooks online are written by people who've never run a service business. They've never had to make payroll for contractors, handle a refund problem, or answer a phone at 6 AM. You can't copy-paste their advice and expect it to work in your operation."
    },
    {
      number: "2",
      title: "The tools are real. The integration is the job.",
      description: "ChatGPT is real. n8n is real. The MCP servers are real. Stitching them into a system that actually runs your operation is the part nobody talks about. That's where most AI projects die."
    },
    {
      number: "3",
      title: "You don't need a vendor. You need a peer.",
      description: "The consultants selling you AI haven't run a service business. The agencies have never had to make payroll for cleaners. I have. Every system I'd build for you is running in mine first."
    }
  ]

  return (
    <section id="problem" className="relative py-24 px-6 overflow-hidden scroll-mt-20">
      {/* Extended background from hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-slate-50"></div>


      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight text-center mb-16">
          Most AI advice is theory.<br className="hidden sm:block" /> You run a real business.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <span className="inline-block text-4xl font-bold text-blue-200 mb-4 group-hover:text-blue-300 transition-colors">
                {point.number}
              </span>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                {point.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
