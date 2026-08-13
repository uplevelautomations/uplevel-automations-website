import { Link } from 'react-router-dom'
import ArticleLayout from '../../layouts/ArticleLayout'

export default function AnswerRecurringConversion() {
  return (
    <ArticleLayout
      kicker="Answers · Job Mix"
      title="What's My One-Time to Recurring Conversion Rate?"
      dateline="Computed from 295 one-time customers in my own company. Updated August 2026."
      intro={
        <p>
          Take every customer whose first completed clean was a one-time booking (excluding
          move-in/move-out, which are inherently one-off), and count how many later booked a
          recurring cadence. Peers in my industry group say around 20% is healthy. When another
          owner asked me mine, I didn't know it. I wrote the query against my own booking log the
          same day: 11 of 295 customers, which is 3.7%. Roughly a fifth of the benchmark.
        </p>
      }
    >
      <h2>Why this number matters more than lead volume</h2>
      <p>
        A one-time customer who converts to recurring multiplies the return on money you already
        spent. You paid to acquire them once, and every recurring visit after conversion arrives
        with zero acquisition cost. At my average of roughly $120 gross profit per clean, one
        conversion to a biweekly cadence is worth thousands per year. The gap between my 3.7% and
        the 20% benchmark is not a marketing problem. It's follow-up revenue I already earned the
        right to and didn't collect.
      </p>

      <h2>How to compute it</h2>
      <ul>
        <li>For each customer, find their <strong>first completed clean</strong>.</li>
        <li><strong>Exclude move-in/move-out cleans.</strong> Those customers are moving. They were never a recurring opportunity, and counting them flatters the rate.</li>
        <li>If that first clean was one-time, check whether any later completed clean has a recurring frequency attached.</li>
        <li>Converted customers divided by one-time customers is the rate. Bucket it by quarter so recent quarters, where conversions haven't had time to happen, don't drag the trend.</li>
      </ul>

      <h2>Why owners don't know this number</h2>
      <p>
        The booking platform knows each booking's frequency, but the question is about a
        customer's trajectory across bookings over months. That's a join across the customer's
        whole history, and no stock report in any booking platform I've used draws it. The data
        was sitting in my own system for years. Nobody had written the question against it.
      </p>

      <h2>What to do with the answer</h2>
      <ul>
        <li><strong>If you're under 10%:</strong> you likely have no conversion motion at all. A post-clean follow-up sequence with a concrete recurring offer is the first move.</li>
        <li><strong>Time the ask to the clean.</strong> The best moment is right after a clean they were happy with, not weeks later.</li>
        <li><strong>Watch the quarterly trend, not the single number.</strong> The point is whether changes you make move it.</li>
        <li><strong>Price the gap.</strong> Each point of conversion is customers times visits times your gross profit per clean. Mine made the case for fixing follow-up better than any marketing pitch could.</li>
      </ul>
      <p>
        The margin data that pairs with this metric is in{' '}
        <Link to="/benchmarks/cleaning-company-margins">the benchmark report</Link>.
      </p>
    </ArticleLayout>
  )
}
