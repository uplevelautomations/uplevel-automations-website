import { Link } from 'react-router-dom'
import ArticleLayout from '../../layouts/ArticleLayout'

export default function AnswerCleanerProfitability() {
  return (
    <ArticleLayout
      kicker="Answers · People"
      title="Which of My Cleaners Is Actually Making Me Money?"
      dateline="Computed from 920 real cleans in my own company. Updated August 2026."
      intro={
        <p>
          Compute gross profit per clean for each cleaner: collected revenue minus what you paid
          them, divided by their completed cleans. When I ran this on my own company's last 920
          cleans, the answer surprised me. My busiest cleaner, 164 cleans, was my least profitable
          major cleaner at $78 gross profit per clean. Another cleaner with 20 cleans ran $228 per
          clean. Same price book. The spread between my best and worst was almost 3x.
        </p>
      }
    >
      <h2>Why you can't answer this from your booking platform</h2>
      <p>
        Your booking platform knows revenue per job and who did the job. Your payroll or payout
        records know what each cleaner actually cost you. The question lives in the join. Most
        owners look at revenue per cleaner, which ranks cleaners by how busy they are, not by
        what they earn you. Those are different lists, and dispatching from the wrong list costs
        real money on every job.
      </p>

      <h2>How to compute it</h2>
      <ul>
        <li><strong>Per cleaner:</strong> sum collected revenue on their completed jobs, subtract everything you paid them for those jobs, divide by job count.</li>
        <li><strong>Only count completed jobs.</strong> Cancellations and no-shows distort both sides.</li>
        <li><strong>Trace refunds and redos back to the cleaner who caused them.</strong> A $200 refund erases the margin of two good cleans.</li>
        <li><strong>Require a minimum sample.</strong> Under about 20 jobs, one big ticket swings the number too much to act on.</li>
      </ul>

      <h2>What it looked like in my company</h2>
      <p>
        Across 11 cleaners with 20+ completed cleans over six months, gross margin ranged from
        36.3% to 58.7% and gross profit per clean ranged from $78 to $228. The full anonymized
        table, with methodology, is in{' '}
        <Link to="/benchmarks/cleaning-company-margins">the margins benchmark report</Link>.
      </p>

      <h2>What to do with the answer</h2>
      <ul>
        <li><strong>Send your highest-margin cleaners to your highest-value jobs.</strong> That reallocation is free.</li>
        <li><strong>Look at the bottom of the list before hiring.</strong> Sometimes "we need another cleaner" is actually "our schedule is full of low-margin assignments."</li>
        <li><strong>Coach with the number, not the vibe.</strong> A cleaner at $88 per clean next to peers at $130 on similar jobs is a specific conversation, not a general one.</li>
        <li><strong>Recheck quarterly.</strong> Pay changes, job mix drifts, and the list reshuffles.</li>
      </ul>
    </ArticleLayout>
  )
}
