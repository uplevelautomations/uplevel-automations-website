import { Link } from 'react-router-dom'
import ArticleLayout from '../../layouts/ArticleLayout'

export default function AnswerRealCac() {
  return (
    <ArticleLayout
      kicker="Answers · Marketing"
      title="What's My Real Cost Per Customer by Channel, and Is It Sustainable?"
      dateline="From the ad-spend tracking I built in my own company. Updated August 2026."
      intro={
        <p>
          Pull actual spend from each ad platform's API, divide by customers (not leads) honestly
          attributed to that channel, and compare against what a customer from that channel earns
          you in gross profit over six months. When I wired my own version of this, my real cost
          per lead came out at $22, less than half what my old reporting claimed, because the
          old number was built on estimated spend and misattributed leads.
        </p>
      }
    >
      <h2>Why the platform dashboard number is wrong</h2>
      <p>
        Ad platforms report cost per conversion using their own definition of a conversion, which
        is usually a click or a form fill, not a paying customer. Meanwhile your CRM's lead
        source field has its own problems, covered in{' '}
        <Link to="/answers/which-lead-source-produces-customers-who-stick">the lead source
        answer</Link>. Multiply a wrong numerator by a wrong denominator and you get a cost per
        customer that can be off by 2x in either direction. Mine was.
      </p>

      <h2>How to compute the real number</h2>
      <ul>
        <li><strong>Numerator: actual dollars out,</strong> pulled from the ad platform's API or invoices for the period. Not budgets, not estimates.</li>
        <li><strong>Denominator: new paying customers</strong> first-touch attributed to the channel in the same period. Not leads, not quotes.</li>
        <li><strong>Sustainability test:</strong> compare against gross profit per customer from that channel at 6 months. A channel is sustainable when a customer earns back their acquisition cost within your cash comfort window, and unsustainable the moment you're buying one-off customers at recurring-customer prices.</li>
        <li><strong>Recheck quarterly.</strong> Channel costs drift, and one seasonal quarter can flatter a channel that bleeds the rest of the year.</li>
      </ul>

      <h2>The pattern that changed my budget</h2>
      <p>
        The gap between my reported and real cost per lead came from two compounding errors:
        spend attributed to the wrong period, and leads credited to the wrong channel. Fixing
        attribution moved money between channels immediately. The rule I took from it: never
        make a budget decision on a cost number you haven't reconciled against the bank
        statement, because the dashboard number is an advertisement for the platform reporting
        it.
      </p>
    </ArticleLayout>
  )
}
