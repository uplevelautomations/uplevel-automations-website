import { Link } from 'react-router-dom'
import ArticleLayout from '../../layouts/ArticleLayout'

export default function AnswerHighValueDispatch() {
  return (
    <ArticleLayout
      kicker="Answers · People"
      title="Which Cleaner Should I Send on a High-Value Job?"
      dateline="Based on margin and quality data from my own company. Updated August 2026."
      intro={
        <p>
          Send the cleaner who ranks high on both gross profit per clean and rebooking rate, not
          the one who happens to be free. In my company the spread between cleaners on the same
          price book runs from $78 to $228 gross profit per clean, so on a $400 deep clean the
          dispatch decision alone can be worth more than a hundred dollars. High-value jobs are
          exactly where that spread bites hardest.
        </p>
      }
    >
      <h2>Availability is not a dispatch strategy</h2>
      <p>
        Most scheduling works on whoever has the open slot. That's fine for routine jobs. But a
        high-ticket job carries more revenue at risk, a customer more likely to become recurring
        if impressed, and a bigger refund if it goes wrong. Assigning it by availability treats a
        $450 move-out clean and a $150 touch-up as the same decision. They are not.
      </p>

      <h2>The two rankings you need</h2>
      <ul>
        <li>
          <strong>Margin ranking: gross profit per clean, per cleaner.</strong> Revenue minus
          payout on their completed jobs, divided by job count. How to build it, with my real
          numbers, is in <Link to="/answers/which-cleaner-is-most-profitable">the cleaner
          profitability answer</Link>.
        </li>
        <li>
          <strong>Quality ranking: rebooking rate and refund history over 90 days.</strong> The
          cleaner who gets requested again by name is your safest hands for a customer you want
          to keep. The scoring approach is in{' '}
          <Link to="/answers/fire-or-coach-a-cleaner">the fire-or-coach answer</Link>.
        </li>
      </ul>
      <p>
        The cleaner at the top of both lists is your high-value default. When margin and quality
        disagree, quality wins for a first-time customer, because the prize on a high-value job
        is the recurring relationship, and margin wins for an established customer who already
        knows your service.
      </p>

      <h2>What this is worth</h2>
      <p>
        Say your top cleaner nets you $228 on a big job and your weakest nets $78 on the same
        ticket. If you dispatch two high-value jobs a week, choosing well is worth roughly
        $15,000 a year, with zero new revenue, zero new hires, and zero price changes. It's the
        cheapest raise you'll ever give yourself, and it's invisible unless per-cleaner margin
        exists somewhere you can see it at dispatch time.
      </p>
    </ArticleLayout>
  )
}
