import { Link } from 'react-router-dom'
import ArticleLayout from '../../layouts/ArticleLayout'

export default function AnswerRecurringProfitability() {
  return (
    <ArticleLayout
      kicker="Answers · Job Mix"
      title="Are Recurring Customers Actually More Profitable Than One-Time?"
      dateline="How I test this against my own booking data. Updated August 2026."
      intro={
        <p>
          Per visit, usually no: recurring cleans are priced below one-time cleans everywhere.
          Per customer, almost always yes, and it isn't close, because a recurring customer pays
          their acquisition cost once and then delivers margin every cycle with no new marketing
          spend. The honest comparison is gross profit per customer over 6 to 12 months,
          acquisition cost included, not margin per visit.
        </p>
      }
    >
      <h2>The per-visit comparison misleads</h2>
      <p>
        A one-time deep clean carries a bigger ticket and often a bigger per-visit margin. Stop
        there and one-time work looks like the better business. But the one-time customer's
        acquisition cost lands entirely on that single visit, while a biweekly customer amortizes
        the same cost across 26 visits a year. Unless your per-visit recurring margin is actually
        negative, frequency wins on any horizon past a few months.
      </p>

      <h2>How to run the real comparison</h2>
      <ul>
        <li><strong>Group customers by type:</strong> recurring cadence vs one-time, excluding move-in/move-out (those customers are leaving; they were never a fair comparison).</li>
        <li><strong>Compute gross profit per customer</strong> over 6 and 12 months: all collected revenue minus all payouts for their jobs.</li>
        <li><strong>Subtract acquisition cost per customer by channel,</strong> from <Link to="/answers/real-cost-per-customer-by-channel">the real-CAC analysis</Link>.</li>
        <li><strong>Check retention inside the recurring group.</strong> A "recurring" customer who churns after two visits is a one-time customer with extra steps. Cohort them by start month.</li>
      </ul>

      <h2>What this means for strategy</h2>
      <p>
        If recurring wins on the per-customer view, and in my experience it does, then one-time
        jobs are best understood as paid auditions for recurring relationships. That reframe is
        why my own 3.7% one-time-to-recurring conversion rate, against a peer-reported benchmark
        around 20%, was such an expensive discovery: I was winning auditions and never making the
        offer. The full story and the dollar math are in{' '}
        <Link to="/answers/one-time-to-recurring-conversion-rate">the conversion answer</Link>{' '}
        and <Link to="/benchmarks/cleaning-company-margins">the benchmark report</Link>.
      </p>
    </ArticleLayout>
  )
}
