import { Link } from 'react-router-dom'
import ArticleLayout from '../../layouts/ArticleLayout'

export default function AnswerFireCustomers() {
  return (
    <ArticleLayout
      kicker="Answers · Cash & Growth"
      title="Which Customers Cost More Than They Generate?"
      dateline="The customer-level margin view from my own company. Updated August 2026."
      intro={
        <p>
          Compute margin per customer, not per job: all revenue collected from them, minus
          payouts on their jobs, minus refunds, discounts, and redos traced to them. A small set
          of customers will sit at or below zero. They're invisible in monthly revenue, because
          the P&amp;L aggregates them away, and they're usually the same customers consuming the
          most rescheduling, messaging, and management attention on top of the losses you can
          measure.
        </p>
      }
    >
      <h2>The costs that make a customer negative</h2>
      <ul>
        <li><strong>Refunds and redos.</strong> In my data a single $200 refund erases the margin of two good cleans. A customer with two refunds a year may be net negative even at full price.</li>
        <li><strong>Chronic rescheduling.</strong> Every late cancel is a slot you couldn't resell and often a payout you owed anyway.</li>
        <li><strong>Discount stacking.</strong> The customer acquired on a deal who never came off it, priced below your median gross margin indefinitely.</li>
        <li><strong>Distance.</strong> An outlying customer taxes every visit with drive time. The same dynamic that makes a whole market unprofitable, covered in <Link to="/answers/expand-to-new-area-or-squeeze">the expansion answer</Link>, applies to a single address.</li>
      </ul>

      <h2>How to find them</h2>
      <ul>
        <li>Rank customers by total gross profit over the trailing 12 months, refunds and discounts netted in.</li>
        <li>Flag everyone below zero, and everyone in the bottom decile with above-median incident counts.</li>
        <li>Sanity-check the list by hand. Data errors and one-off disasters don't deserve the same treatment as patterns.</li>
      </ul>

      <h2>Fire is the last option, not the first</h2>
      <ul>
        <li><strong>Reprice first.</strong> Most negative customers are mispriced, not evil. A rate correction either fixes the margin or ends the relationship politely on its own.</li>
        <li><strong>Fix the operational cause</strong> where the loss traces to your side: a repeated quality miss on their home is a <Link to="/answers/fire-or-coach-a-cleaner">cleaner question</Link>, not a customer question.</li>
        <li><strong>Exit deliberately when neither works:</strong> finish scheduled work, recommend an alternative, and keep it graceful. The savings aren't only the direct losses; it's the schedule slots and attention that go back to customers who pay for them.</li>
      </ul>
    </ArticleLayout>
  )
}
