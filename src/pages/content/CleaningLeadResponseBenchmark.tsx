import { Link } from 'react-router-dom'
import ArticleLayout from '../../layouts/ArticleLayout'

// All figures from my cleaning company's lead log (every real lead, one per
// person, not-a-leads removed), Airlead call and text records, and the
// booking log. Source analysis in the roy-hq repo:
// Catalina Cleaning/1-Operations/growth/2026-sales-plan.md
// (sections "Speed to lead", "Why leads don't book", "The same reasons, per
// lead source", "Close rate by rep", 2026-10-27 to 2026-11-16).
// Each table states its own window and sample size. No people are named.
// Roy, 2026-11-20: never publish our own booking or close rates (only
// relative comparisons). Owners who close 40% would read ours as failure.

const lostReasons = [
  { reason: 'Never reached', share: '29%' },
  { reason: 'Went silent after talking to us', share: '26%' },
  { reason: 'Price', share: '24%' },
  { reason: 'Other', share: '7%' },
  { reason: 'Timing', share: '6%' },
  { reason: 'Chose a competitor', share: '3%' },
  { reason: 'Service we don’t offer', share: '2%' },
  { reason: 'Other small reasons (each about 1% or less)', share: '2%' },
]

const speed = [
  { source: 'Google Local Services Ads', reached: '86%', median: '2 min' },
  { source: 'Phone calls and texts', reached: '75%', median: '1 min' },
  { source: 'Website quote forms', reached: '59%', median: '11 min' },
  { source: 'All leads', reached: '75%', median: '2 min' },
]

export default function CleaningLeadResponseBenchmark() {
  return (
    <ArticleLayout
      kicker="Benchmark Report"
      title="What 935 Cleaning Leads Showed About Why Leads Don’t Book"
      dateline="Data: real leads to my cleaning company, September 1 through November 1, 2026. Each table lists its own window. Published November 2026."
      intro={
        <p>
          Across 935 real leads, the ones that got a real phone conversation were about three
          times as likely to book as the ones that never did. Who answered barely mattered: the
          owner and the team closed about the same once someone got the customer on the phone. The
          biggest losses were leads we never reached, leads who went quiet after talking to us, and
          price.
        </p>
      }
    >
      <h2>The headline numbers</h2>
      <ul>
        <li><strong>935</strong> real leads (September 1 to November 1, 2026), one per person, vendors, job applicants, wrong numbers and existing customers removed</li>
        <li><strong>About 3×</strong> as likely to book when the lead had a real phone conversation with us</li>
        <li><strong>2 minutes</strong> median wait for a first reply across all leads</li>
        <li><strong>79%</strong> of lost leads came down to three reasons: never reached, went silent, or price</li>
        <li><strong>41%</strong> of website quote forms arrived outside working hours</li>
      </ul>
      <p>
        Every number here comes from my own company's records: the lead log, every call and
        text in our CRM, and the booking log. Not a survey and not an industry estimate.
      </p>

      <h2>Reaching the lead is the biggest lever</h2>
      <p>
        The single biggest split in the data is whether anyone got the customer on the phone. A
        lead that had a real conversation was about three times as likely to book as one that
        never did.
      </p>
      <p>
        One honest caution: this is correlation, not proof. People who pick up the phone were
        often warmer to begin with. But it is also the part a business controls. You cannot book
        someone you never reach.
      </p>

      <h2>Who answers matters less than whether anyone does</h2>
      <p>
        I expected the owner to close far better than the team. On the same kind of lead, once
        someone had the customer on the phone, the owner and the team closed at about the same
        rate. The gap came to about one booking in 29 calls, which is noise. The owner looked
        better overall mostly because he worked fewer, warmer leads.
      </p>
      <p>
        The one real difference was recurring plans: the owner started far more of his bookings
        on a recurring plan. The sample is small, but it is the one place the owner sold
        differently.
      </p>

      <h2>Why leads don't book</h2>
      <p>
        432 leads that did not book in the 30 days to October 27, 2026, by the main reason they
        were lost:
      </p>
      <table>
        <thead>
          <tr>
            <th>Reason</th>
            <th>Share of lost leads</th>
          </tr>
        </thead>
        <tbody>
          {lostReasons.map((r) => (
            <tr key={r.reason}>
              <td>{r.reason}</td>
              <td>{r.share}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        The top three are 79% of all losses, and each needs a different fix. Never reached is
        speed and persistence. Went silent is follow-up after the first conversation. Price is
        the offer and how the quote is presented. Among leads that talked to us and still did
        not book, price was 32% to 42% of losses for every person on the team, owner included,
        and quotes were the same across people (medians of $353 to $400). Nobody was
        underselling. The price lands the same way for everyone.
      </p>
      <p>
        These reasons were assigned by an AI reading each conversation, call transcript and team
        note after a lead went 72 hours without booking. They have not been checked by hand yet,
        so treat the split as directional.
      </p>

      <h2>How fast leads get reached, by source</h2>
      <p>
        Share of leads reached within 15 minutes, counting only leads that arrived while someone
        was working (30 days to October 28, 2026):
      </p>
      <table>
        <thead>
          <tr>
            <th>Lead source</th>
            <th>Reached in 15 minutes</th>
            <th>Median wait</th>
          </tr>
        </thead>
        <tbody>
          {speed.map((s) => (
            <tr key={s.source}>
              <td>{s.source}</td>
              <td>{s.reached}</td>
              <td>{s.median}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Website forms are the slowest source by far, and part of that is when they arrive: 41% of
        website quote forms came in outside working hours (93 of 228). An automatic reply that
        goes out in seconds, day or night, is the cheapest fix for that gap.
      </p>

      <h2>The leads who never respond</h2>
      <p>
        Of 481 leads from late September to late October 2026, 28% never responded to anything:
        not a call, not a text. Leads we talked to in any way were more than three times as
        likely to book as the ones who never responded.
      </p>
      <p>
        How often leads book also varies a lot by where they came from. In the same window,
        Google Local Services Ads leads mostly did talk to us (81% of them) and still booked at
        under half the rate of Google Ads search leads. For that channel the problem is the
        conversation after contact, not reach.
      </p>

      <h2>What I would do with this</h2>
      <ol>
        <li>Answer every new lead within minutes, including nights and weekends, with an automatic first reply.</li>
        <li>Make several attempts on day one, including at least one call.</li>
        <li>Follow up after the first conversation, especially after sending a price.</li>
        <li>Keep following up with leads who never answered, for months, not days.</li>
        <li>Measure results by lead source, not just overall. Each source fails for a different reason.</li>
      </ol>
      <p>
        That is the system I now build for other cleaning companies. If you want to see where
        your own leads leak, the same questions are in{' '}
        <Link to="/answers/which-lead-source-produces-customers-who-stick">
          which lead source produces customers who stick
        </Link>
        .
      </p>

      <h2>How this was counted</h2>
      <ul>
        <li><strong>Real leads only.</strong> One per person. Vendors, job applicants, wrong numbers, existing customers and our own cleaners are removed.</li>
        <li><strong>Booked</strong> means any booking within 14 days of the lead. Leads after November 1 are left out because their 14 days were not up.</li>
        <li><strong>A real phone conversation</strong> means a call of 60 seconds or more.</li>
        <li><strong>Who worked a lead</strong> is the person with the most talk time on calls of 60 seconds or more, read from call records and, where those were missing, from the call transcript. Leads with no such call go to whoever sent the most texts and calls. 146 answered inbound calls had no name in either place, and those leads went to whoever texted them most.</li>
        <li><strong>Each table has its own window,</strong> stated above it. They come from separate reads of the same lead log, so totals differ slightly between sections.</li>
        <li><strong>Known gap:</strong> some Local Services Ads bookings are made under a different phone number and cannot be matched to the lead, so Local Services results are undercounted.</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <h3>How much does reaching a lead by phone matter?</h3>
      <p>
        A lot. Leads that had a real phone conversation were about three times as likely to book
        as leads that never did. That is correlation, since people who pick up are often warmer,
        but you cannot book a lead you never reach.
      </p>
      <h3>Why do most cleaning leads not book?</h3>
      <p>
        In 432 lost leads, the top reasons were never being reached (29%), going silent after
        talking to us (26%) and price (24%). Together that is 79% of losses.
      </p>
      <h3>Does the owner close better than the team?</h3>
      <p>
        Not by much. On the same kind of lead, once someone had the customer on the phone, the
        owner and the team closed at about the same rate.
      </p>
      <h3>How fast should a cleaning company reply to a lead?</h3>
      <p>
        Within minutes. Calls, texts and Local Services leads were reached in a median of 1 to 2 minutes, but
        website forms took 11 minutes and 41% arrived outside working hours. An automatic reply
        covers the hours nobody is working.
      </p>
    </ArticleLayout>
  )
}
