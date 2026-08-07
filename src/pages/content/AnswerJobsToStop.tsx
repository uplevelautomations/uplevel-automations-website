import { Link } from 'react-router-dom'
import ArticleLayout from '../../layouts/ArticleLayout'

export default function AnswerJobsToStop() {
  return (
    <ArticleLayout
      kicker="Answers · Job Mix"
      title="Which Types of Jobs Should I Chase, and Which Should I Stop Taking?"
      dateline="The job-mix analysis from my own cleaning company. Updated August 2026."
      intro={
        <p>
          Rank job types by gross profit per hour of cleaner time, after tracing refunds and redos
          back to the job type that caused them. Revenue per job flatters big-ticket work; profit
          per hour tells the truth. Then check what each job type leads to: a job that converts to
          recurring revenue is worth chasing at a thinner margin than a one-off that never comes
          back.
        </p>
      }
    >
      <h2>Revenue per job is the wrong ranking</h2>
      <p>
        A $450 move-out clean looks better than a $200 recurring visit until you count the hours,
        the supplies, the higher refund risk, and the fact that the move-out customer is leaving
        town. In my own data, move-out customers are inherently one-off, which is exactly why I
        exclude them when I measure <Link to="/answers/one-time-to-recurring-conversion-rate">
        one-time to recurring conversion</Link>. A job type's value is its margin per hour times
        what it leads to afterward.
      </p>

      <h2>How to run the analysis</h2>
      <ul>
        <li><strong>Group completed jobs by type</strong> (recurring, deep clean, move-out, add-ons) over at least three months.</li>
        <li><strong>Compute gross profit per job:</strong> collected revenue minus payout for that job.</li>
        <li><strong>Divide by actual hours, not estimated hours.</strong> Underestimated duration is where "good" job types quietly go bad.</li>
        <li><strong>Trace refunds and redos to job type.</strong> A category with a 5% refund rate needs its margin haircut by more than 5%, because a redo also burns a slot you could have sold.</li>
        <li><strong>Tag what each job led to:</strong> recurring conversion, referral, or nothing. That's the LTV column, and it changes the ranking.</li>
      </ul>

      <h2>The decision rule</h2>
      <ul>
        <li><strong>High margin per hour, leads to recurring: chase.</strong> Point marketing spend here.</li>
        <li><strong>Thin margin, leads to recurring: keep,</strong> treat as paid customer acquisition.</li>
        <li><strong>High ticket, low margin per hour, leads nowhere: raise the price or stop.</strong> This is usually the category owners defend hardest, because the invoice looks good.</li>
        <li><strong>High refund rate whatever the margin: fix the process or drop the category.</strong></li>
      </ul>

      <h2>Why this needs two systems</h2>
      <p>
        Your booking platform knows job type and revenue. Payouts, refunds, and true costs live
        in payroll and your payment processor. The join is where the answer is, which is why most
        owners rank job types by ticket size, the one number they can see, and quietly subsidize
        their worst category for years. The same join, run against my own 920 cleans, is what
        produced the margin numbers in{' '}
        <Link to="/benchmarks/cleaning-company-margins">the benchmark report</Link>.
      </p>
    </ArticleLayout>
  )
}
