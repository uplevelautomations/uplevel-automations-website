import { Link } from 'react-router-dom'
import ArticleLayout from '../../layouts/ArticleLayout'

export default function AnswerFireOrCoach() {
  return (
    <ArticleLayout
      kicker="Answers · People"
      title="Should I Let This Cleaner Go or Coach Them?"
      dateline="The scoring system I run in my own cleaning company. Updated August 2026."
      intro={
        <p>
          Score the cleaner on outcomes over a rolling 90 days, not on the last incident. The four
          signals that matter: rebooking rate on their jobs, complaints, refunds traced to them,
          and customer retention after their cleans. Coach when one signal dips and the others
          hold. Exit when refunds and complaints agree with each other. In my company, tracing
          refunds to specific people surfaced 19 refunds totaling $4,785 tied to cleaners I would
          have kept booking on gut feel.
        </p>
      }
    >
      <h2>Why gut feel gets this wrong</h2>
      <p>
        The cleaner you like isn't necessarily the cleaner customers rebook. And the one customer
        who complained loudly last week isn't necessarily a pattern. Both errors are expensive:
        keeping a quality problem burns customers you paid to acquire, and firing a good cleaner
        over one bad day costs you their entire future margin. The fix is a rolling window of
        outcomes, so one incident can't dominate and slow decay can't hide.
      </p>

      <h2>The four signals, and where they live</h2>
      <table>
        <thead>
          <tr>
            <th>Signal</th>
            <th>What it tells you</th>
            <th>Where the data is</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rebooking rate</td>
            <td>Do customers ask for them again?</td>
            <td>Booking platform</td>
          </tr>
          <tr>
            <td>Complaints</td>
            <td>Frequency and severity, not vibes</td>
            <td>CRM / messages, logged incidents</td>
          </tr>
          <tr>
            <td>Refunds traced to them</td>
            <td>The direct cost of their quality</td>
            <td>Payment processor joined to job records</td>
          </tr>
          <tr>
            <td>Customer retention after their cleans</td>
            <td>Do their customers quietly disappear?</td>
            <td>Booking history over months</td>
          </tr>
        </tbody>
      </table>
      <p>
        Notice that no single system holds all four. That's why almost nobody runs this analysis,
        and why quality problems survive: the refund lives in Stripe, the complaint lives in your
        inbox, and the missing rebooking is invisible unless you look for it.
      </p>

      <h2>The decision rule I use</h2>
      <ul>
        <li><strong>One signal down, rest healthy: coach.</strong> Name the specific pattern with dates and jobs. Specific coaching works; general coaching doesn't.</li>
        <li><strong>Refunds and complaints both elevated over 90 days: exit.</strong> When two independent signals agree, the pattern is real, and each additional clean has negative expected value.</li>
        <li><strong>All quiet but margin low: that's a pay or job-mix issue, not a quality issue.</strong> See <Link to="/answers/which-cleaner-is-most-profitable">the profitability answer</Link>. Don't fire someone for a dispatch problem you created.</li>
        <li><strong>Log incidents when they happen.</strong> A 90-day window only works if the incidents are recorded when they occur, not reconstructed from memory during the decision.</li>
      </ul>

      <h2>What it changed for me</h2>
      <p>
        Composite scoring turned my roster conversation from "who annoyed me recently" into a
        ranked list with dollar amounts attached. The 19 refunds worth $4,785 all traced to a
        small set of people. Without the join between payments and job assignments, I would have
        kept sending them into customers' homes, and the refunds would have kept looking like a
        cost of doing business instead of a fixable roster decision.
      </p>
    </ArticleLayout>
  )
}
