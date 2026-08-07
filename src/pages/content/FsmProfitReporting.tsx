import { Link } from 'react-router-dom'
import ArticleLayout from '../../layouts/ArticleLayout'

export default function FsmProfitReporting() {
  return (
    <ArticleLayout
      kicker="Comparison"
      title="Housecall Pro vs Jobber vs ServiceTitan: Which Reporting Actually Answers Job Profitability?"
      dateline="Written by an operator who runs a cleaning company. Updated August 2026."
      intro={
        <p>
          Short answer: none of them, on their own. Housecall Pro, Jobber, and ServiceTitan all
          report what a job billed and what its direct labor cost. That's job costing, and it's
          useful. But real profitability questions, like which crew member actually makes you
          money or whether you can afford to hire, need your accounting data joined against your
          job data. The FSM has one half and QuickBooks has the other, and no report inside
          either tool sees both.
        </p>
      }
    >
      <h2>What FSM reporting is genuinely good at</h2>
      <p>
        I run a field service platform in my own cleaning company, so this isn't a teardown. All
        three of these tools earn their subscription on the operational side:
      </p>
      <ul>
        <li><strong>Revenue per job, per customer, per service type.</strong> All three do this well.</li>
        <li><strong>Direct labor assigned to a job.</strong> If your pay structure is simple, job costing gets you close to gross margin per job.</li>
        <li><strong>Scheduling density and utilization.</strong> Who worked, when, how full the calendar is.</li>
        <li>
          <strong>Scale fit differs.</strong> Housecall Pro and Jobber aim at owner-operated
          shops; ServiceTitan is built for larger multi-crew operations and prices accordingly.
          Which tier of reporting depth you need depends on headcount more than feature lists.
        </li>
      </ul>

      <h2>The questions FSM reports can't answer</h2>
      <p>
        These are questions I could not answer when my own data lived only in the booking
        platform. Each one needs at least two systems:
      </p>
      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>What the FSM knows</th>
            <th>What it's missing</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Which crew member is actually making me money?</td>
            <td>Jobs completed, hours, billed revenue</td>
            <td>True payout cost per person, refunds and redos traced back to them</td>
          </tr>
          <tr>
            <td>Can I afford to hire right now?</td>
            <td>Schedule utilization</td>
            <td>Cash position, AR aging, payroll runway (accounting system)</td>
          </tr>
          <tr>
            <td>Which job types should I stop taking?</td>
            <td>Revenue by service type</td>
            <td>Fully loaded cost including drive time, supplies, refund rate by type</td>
          </tr>
          <tr>
            <td>Which lead source produces customers who stick?</td>
            <td>Lead source tags on jobs</td>
            <td>Ad spend by channel, repeat rate and LTV over months (marketing + accounting)</td>
          </tr>
          <tr>
            <td>Are recurring customers actually more profitable?</td>
            <td>Booking frequency</td>
            <td>Margin per visit after payout, acquisition cost amortized across visits</td>
          </tr>
        </tbody>
      </table>
      <p>
        Run down that list in your own business. In my experience, and in the discovery calls I
        do with other service company owners, the pause after each of these questions is long.
        The data exists. It's just split across systems that don't talk.
      </p>

      <h2>Why the gap exists</h2>
      <p>
        FSM vendors build for dispatchers and technicians, because that's who uses the product
        every day. Accounting systems build for bookkeepers and the IRS. Owner questions sit
        exactly in the join between the two, and neither vendor owns the join. That's not a flaw
        in Housecall Pro or Jobber or ServiceTitan. It's a structural gap in where the data
        lives.
      </p>
      <p>
        In my own company, closing that gap looked like this: a booking-platform webhook logs
        every completed clean with its revenue and cleaner payout, and that log joins against
        accounting and marketing data on one screen. Six months of it produced numbers I ran the
        company for years without knowing, including a 22-point gross margin spread between
        cleaners on the same price book. I published the full dataset in{' '}
        <Link to="/benchmarks/cleaning-company-margins">the margins benchmark report</Link>.
      </p>

      <h2>How to evaluate any FSM's reporting before you buy</h2>
      <ul>
        <li>Ask the sales rep to show you gross profit per job <strong>after actual payouts</strong>, not estimated labor.</li>
        <li>Ask where refunds show up. If the answer is "in your payment processor," margin reports overstate.</li>
        <li>Ask how you'd see margin by crew member across six months. If the answer involves CSV exports, that's the gap.</li>
        <li>Ask what the report shows the morning you have to decide on a hire. Utilization isn't cash.</li>
      </ul>
      <p>
        If the tool you're on today handles dispatch well, keep it. The reporting gap is real,
        but the fix isn't switching FSMs. It's joining the FSM's data with your accounting
        system's data, which these platforms support through their accounting integrations, and
        the data to do it is exportable from all of them.
      </p>
    </ArticleLayout>
  )
}
