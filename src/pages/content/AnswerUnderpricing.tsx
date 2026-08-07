import { Link } from 'react-router-dom'
import ArticleLayout from '../../layouts/ArticleLayout'

export default function AnswerUnderpricing() {
  return (
    <ArticleLayout
      kicker="Answers · Job Mix"
      title="Which Job Types Am I Underpricing Relative to Actual Time and Cost?"
      dateline="The pricing audit I run against my own booking data. Updated August 2026."
      intro={
        <p>
          Compare each job type's quoted price against what it actually consumed: real hours on
          site, real payout, drive time, supplies, and its refund rate. Underpricing hides
          wherever estimated time and actual time disagree. The tell isn't a spreadsheet, it's a
          pattern: the job type your best cleaners quietly avoid is almost always the one you've
          underpriced, because they feel the hourly math before you see it.
        </p>
      }
    >
      <h2>Where underpricing hides</h2>
      <ul>
        <li><strong>Duration drift.</strong> You priced a deep clean at 4 hours two years ago. Homes got bigger, standards got higher, and the real median is now 5. That's a 20% price cut you never agreed to.</li>
        <li><strong>Add-ons priced by guess.</strong> Ovens, fridges, windows, laundry. Small tickets, wildly variable time, almost never re-audited.</li>
        <li><strong>Flat rates meeting outlier homes.</strong> A flat-rate price book is fine until the distribution shifts. The biggest 10% of jobs can eat the margin of the other 90%.</li>
        <li><strong>Redo risk by category.</strong> A job type with elevated refunds is underpriced even if its sticker margin looks fine, because the price never included the cost of doing some of them twice.</li>
      </ul>

      <h2>How to run the audit</h2>
      <ul>
        <li>For each job type, pull completed jobs over 3+ months with collected revenue, payout, and actual duration.</li>
        <li>Compute <strong>gross profit per actual hour</strong> by type. Rank them. The bottom of the list is your underpricing shortlist.</li>
        <li>Cross-check with cleaner behavior: which types get declined, rescheduled, or complained about by your best people?</li>
        <li>Reprice the bottom category and remeasure a quarter later. One category at a time, so you can see the effect.</li>
      </ul>

      <h2>What the fix is worth</h2>
      <p>
        Repricing your worst category from a losing hourly rate to your median is usually worth
        more than a new marketing channel, because it applies to demand you already have. And it
        compounds with the job-mix decision in{' '}
        <Link to="/answers/which-jobs-to-stop-taking">which jobs to chase or stop</Link>: some
        underpriced categories deserve a raise, and some deserve to be dropped. The per-hour
        ranking tells you which is which. My own margin baseline for judging what "good" looks
        like is published in <Link to="/benchmarks/cleaning-company-margins">the benchmark
        report</Link>.
      </p>
    </ArticleLayout>
  )
}
