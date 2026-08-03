type Deployment = {
  location: string
  profile: string
  status: 'live' | 'building'
  statusLabel: string
  headline: string
  body: string
}

const deployments: Deployment[] = [
  {
    location: 'Ohio',
    profile: 'Residential · about $50K/month',
    status: 'live',
    statusLabel: 'Live since July',
    headline: '1,430 leads pulled out of a spreadsheet',
    body: 'Years of leads had piled up in a Google Sheet that nobody ever worked. They are now in a paced follow-up sequence that runs every day. New website and Facebook leads get captured and answered without him touching anything.',
  },
  {
    location: 'Arizona',
    profile: 'Residential · about $40K/month',
    status: 'live',
    statusLabel: 'Live since July',
    headline: 'Every inbound lead finally caught',
    body: 'Website form, Google Local Services calls, phone, and email quote requests all land in one place and get followed up automatically. Before this he did all of it by hand, from his phone, wherever he happened to be.',
  },
  {
    location: 'New York',
    profile: 'Residential + commercial · about 20 cleaners',
    status: 'building',
    statusLabel: 'In build',
    headline: 'Same system, wired into Booking Koala',
    body: 'Lead capture off his existing booking software and lead forms, then the same follow-up and reactivation engine on top. Invoicing automation is the next build after it.',
  },
  {
    location: 'Arkansas',
    profile: 'Commercial cleaning',
    status: 'building',
    statusLabel: 'In build',
    headline: 'A different problem entirely',
    body: 'Supply requests get read straight out of his cleaning software and turned into a ready-to-send vendor order, split correctly between what he eats as cost and what he bills back to the client.',
  },
]

export default function ClientProof() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-12">
          <div className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3">
            Not just my own company
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Four cleaning companies hired me. Two of their systems are live right now.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Three of them bought No Lead Left Behind. The fourth bought something else entirely. I am not naming them here, because I would not put your lead numbers on my website either. What I will show you is exactly what got built and where each one stands today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {deployments.map((d) => (
            <div
              key={d.location}
              className="relative p-6 rounded-xl border border-slate-200 bg-white transition-all hover:shadow-md hover:border-slate-300 flex flex-col"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="font-semibold text-slate-900">{d.location}</div>
                  <div className="text-sm text-slate-500">{d.profile}</div>
                </div>
                <span
                  className={`shrink-0 inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${
                    d.status === 'live'
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      d.status === 'live' ? 'bg-emerald-500' : 'bg-slate-400'
                    }`}
                  />
                  {d.statusLabel}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-slate-900 mb-2">{d.headline}</h3>
              <p className="text-slate-600 leading-relaxed text-sm flex-grow">{d.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white border border-slate-200 rounded-xl p-6 md:p-7">
          <p className="text-slate-700 leading-relaxed">
            <span className="font-semibold text-slate-900">One of them found me because another one told him to call.</span>{' '}
            Cleaning owners talk to each other. That referral is the only marketing I have done for this build, and it is the reason I would rather show you a working system than a pitch deck.
          </p>
        </div>
      </div>
    </section>
  )
}
