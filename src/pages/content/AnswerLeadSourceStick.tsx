import { Link } from 'react-router-dom'
import ArticleLayout from '../../layouts/ArticleLayout'

export default function AnswerLeadSourceStick() {
  return (
    <ArticleLayout
      kicker="Answers · Marketing"
      title="Which Lead Source Produces Customers Who Actually Stick Around?"
      dateline="From the lead-source tracking I built in my own company. Updated August 2026."
      intro={
        <p>
          Classify every customer by where they truly came from, then measure repeat bookings by
          source over months. The trap is the first half: when I built this for my own company, I
          found that 80% of my "website leads" actually started as missed phone calls that later
          came through the website form. My booking form was taking credit for my phone number.
          Until attribution is honest, retention-by-source is fiction.
        </p>
      }
    >
      <h2>Why the source field in your CRM is lying to you</h2>
      <p>
        Lead source is usually recorded as "whatever channel touched the customer last before
        booking." A customer who found you on Google, called, got no answer, then booked through
        the estimate link you texted back gets logged as a website lead. Multiply that across
        months and your reporting says the website converts great and the phone barely matters,
        while the truth is the reverse. Any budget decision made on that data moves money to the
        wrong place.
      </p>

      <h2>How to get an honest answer</h2>
      <ul>
        <li><strong>Reclassify by first touch, not last form.</strong> Cross-reference call logs against form submissions. A form fill within a day or two of a missed call from the same number is a phone lead you recovered, not a website lead.</li>
        <li><strong>Then measure stickiness per source:</strong> for each acquisition channel, what share of customers booked again within 90 days? What's their average number of cleans at 6 months?</li>
        <li><strong>Weight by margin, not bookings.</strong> A source that sends ten $150 one-offs is worth less than one that sends three biweekly customers. Gross profit per customer at 6 months is the honest scoreboard.</li>
        <li><strong>Watch refund and complaint rates by source too.</strong> Some channels attract customers who dispute; that cost belongs to the channel.</li>
      </ul>

      <h2>What to do with the answer</h2>
      <p>
        Once source data is honest, the moves are mechanical: shift spend toward the channels
        whose customers stick, fix the leak the analysis exposes (in my case, missed calls, which
        is why the recovery flow exists), and feed the sticky-source margin numbers into your
        cost-per-customer math, which is the next question:{' '}
        <Link to="/answers/real-cost-per-customer-by-channel">what's my real cost per customer
        by channel?</Link>
      </p>
    </ArticleLayout>
  )
}
