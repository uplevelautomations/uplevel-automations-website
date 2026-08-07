import { Link } from 'react-router-dom'
import ArticleLayout from '../../layouts/ArticleLayout'

// Real per-market data from the booking log, May 1 – Aug 1 2026.
// Small markets (<40 cleans) excluded from the table; see prose.
const markets = [
  { name: 'Home market (Miami)', cleans: 380, margin: '47.4%', refunds: '$2,898' },
  { name: 'Market B', cleans: 126, margin: '45.2%', refunds: '$301' },
  { name: 'Market C', cleans: 69, margin: '43.0%', refunds: '$163' },
  { name: 'Market D', cleans: 42, margin: '48.6%', refunds: '$205' },
]

export default function AnswerExpandOrSqueeze() {
  return (
    <ArticleLayout
      kicker="Answers · Cash & Growth"
      title="Should I Expand to a New Area or Squeeze More Out of My Current One?"
      dateline="Real per-market margins from my own company, May through July 2026. Updated August 2026."
      intro={
        <p>
          Compute gross margin per clean for every market you serve, and only expand when your
          home market is holding margin at capacity. In my company's last three months, my home
          market ran 47.4% gross margin across 380 cleans while one of my smallest expansion
          markets ran 36% gross, and only 22% after refunds. Growth that loses ten points of margin isn't
          growth. It's buying revenue with profit.
        </p>
      }
    >
      <h2>My actual market table</h2>
      <p>
        Three months of completed cleans, gross margin after cleaner payout, markets with 40 or
        more cleans:
      </p>
      <table>
        <thead>
          <tr>
            <th>Market</th>
            <th>Cleans</th>
            <th>Gross margin</th>
            <th>Refunds</th>
          </tr>
        </thead>
        <tbody>
          {markets.map((m) => (
            <tr key={m.name}>
              <td>{m.name}</td>
              <td>{m.cleans}</td>
              <td>{m.margin}</td>
              <td>{m.refunds}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Below that cutoff sit a tail of small markets, and the tail is where the lesson lives.
        One of them ran 36% gross margin on a handful of cleans, and after refunds its net margin
        was 22%. At that rate every clean I sell there earns roughly half what the same clean
        earns at home. Without per-market numbers, that market just looks like more revenue on
        the top line. With them, it's obviously a subsidy, paid out of my best market's profit.
      </p>

      <h2>The decision framework</h2>
      <ul>
        <li><strong>Squeeze first when home margin is strong and the calendar has room.</strong> More density in a proven market means shorter drives, fuller routes, and zero new acquisition infrastructure.</li>
        <li><strong>Expansion needs a margin thesis, not a revenue thesis.</strong> Know why the new market's margin will match home: cleaner pay rates, competitive pricing, and lead costs all move by geography.</li>
        <li><strong>Set a probation window.</strong> Give a new market a fixed number of cleans to reach target margin. Mine taught me that a market can stay "almost working" indefinitely if nobody defines what working means.</li>
        <li><strong>Count refunds against the market,</strong> not against bad luck. Remote markets are harder to quality-control, and the refund line is where that shows up first.</li>
      </ul>

      <h2>Why owners get this backwards</h2>
      <p>
        Expansion is visible and exciting. Density is invisible and profitable. The booking
        platform reports revenue by month, not margin by market, so the subsidy stays hidden in
        the average, exactly like the cleaner spread in{' '}
        <Link to="/benchmarks/cleaning-company-margins">the benchmark report</Link>. The
        per-market join is the same recipe: revenue and payouts by job, grouped by geography
        instead of by cleaner.
      </p>
    </ArticleLayout>
  )
}
