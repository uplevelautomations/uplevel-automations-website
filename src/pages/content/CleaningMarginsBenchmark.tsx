import ArticleLayout from '../../layouts/ArticleLayout'

// All figures computed from the Catalina Cleaning booking log
// (completed cleans, Feb 1 – Aug 1, 2026). Cleaners anonymized.
// Source data and methodology notes at the bottom of the page.
const cohort = [
  { name: 'Cleaner A', cleans: 20, margin: '58.7%', gpPerClean: 228, avgTicket: 389 },
  { name: 'Cleaner B', cleans: 40, margin: '49.0%', gpPerClean: 132, avgTicket: 270 },
  { name: 'Cleaner C', cleans: 74, margin: '46.4%', gpPerClean: 110, avgTicket: 236 },
  { name: 'Cleaner D', cleans: 125, margin: '45.1%', gpPerClean: 127, avgTicket: 281 },
  { name: 'Cleaner E', cleans: 50, margin: '44.3%', gpPerClean: 134, avgTicket: 302 },
  { name: 'Cleaner F', cleans: 60, margin: '43.8%', gpPerClean: 99, avgTicket: 227 },
  { name: 'Cleaner G', cleans: 66, margin: '43.5%', gpPerClean: 88, avgTicket: 203 },
  { name: 'Cleaner H', cleans: 28, margin: '43.4%', gpPerClean: 139, avgTicket: 320 },
  { name: 'Cleaner I', cleans: 20, margin: '41.8%', gpPerClean: 131, avgTicket: 314 },
  { name: 'Cleaner J', cleans: 164, margin: '38.9%', gpPerClean: 78, avgTicket: 201 },
  { name: 'Cleaner K', cleans: 26, margin: '36.3%', gpPerClean: 100, avgTicket: 276 },
]

export default function CleaningMarginsBenchmark() {
  return (
    <ArticleLayout
      kicker="Benchmark Report"
      title="What 920 Cleans Taught Me About Cleaning Company Margins"
      dateline="Data: 920 completed cleans, February through July 2026. Updated August 2026."
      intro={
        <p>
          Over six months my cleaning company completed 920 cleans, collected $240,513, and paid
          cleaners $130,296. That's a 45.8% average gross margin. But the average hides the real
          story: across cleaners working the same price book, gross margin ranged from 36.3% to
          58.7%, and gross profit per clean ranged from $78 to $228. Who does the work matters
          almost 3x more than what you charge for it.
        </p>
      }
    >
      <h2>The headline numbers</h2>
      <ul>
        <li><strong>920</strong> completed cleans in six months</li>
        <li><strong>$240,513</strong> collected revenue</li>
        <li><strong>$130,296</strong> paid out to cleaners</li>
        <li><strong>45.8%</strong> average gross margin (before lead costs and overhead)</li>
        <li><strong>$261</strong> average ticket</li>
        <li><strong>$119.80</strong> average gross profit per clean</li>
      </ul>
      <p>
        Every number on this page comes from my own company's booking log. Not a survey, not an
        industry report, not estimates. A webhook fires every time a clean is completed and logs
        the revenue and the cleaner payout. This is what the business actually did.
      </p>

      <h2>The margin spread is the whole game</h2>
      <p>
        Here is every cleaner who completed 20 or more cleans in the window, ranked by gross
        margin. Same company, same price book, same booking flow.
      </p>
      <table>
        <thead>
          <tr>
            <th>Cleaner</th>
            <th>Cleans</th>
            <th>Gross margin</th>
            <th>Gross profit / clean</th>
            <th>Avg ticket</th>
          </tr>
        </thead>
        <tbody>
          {cohort.map((c) => (
            <tr key={c.name}>
              <td>{c.name}</td>
              <td>{c.cleans}</td>
              <td>{c.margin}</td>
              <td>${c.gpPerClean}</td>
              <td>${c.avgTicket}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Three things jump out of this table that I could not see before I logged every clean:
      </p>
      <h3>1. My busiest cleaner was my least profitable big one</h3>
      <p>
        Cleaner J completed 164 cleans, more than anyone else, at a 38.9% margin and $78 gross
        profit per clean. Cleaner A completed 20 cleans at 58.7% and $228 per clean. One clean
        from A was worth almost three cleans from J. If you allocate jobs by availability instead
        of margin, you are quietly choosing the $78 outcome over the $228 one, hundreds of times
        a year.
      </p>
      <h3>2. Volume and profit are different lists</h3>
      <p>
        Rank these cleaners by cleans completed and you get one list. Rank them by gross profit
        per clean and you get a different list. Most owners only ever see the first list, because
        that's what the schedule shows. The second list is where the money is, and it only exists
        if you join payout data against revenue per job.
      </p>
      <h3>3. The spread is 22 points wide</h3>
      <p>
        36.3% to 58.7% is the difference between a business that struggles to cover overhead and
        one that throws off cash. Nothing about pricing changed between those two rows. The
        difference is job mix, payout structure, and who gets sent where. Those are dispatch
        decisions, and every one of them is invisible without per-clean margin data.
      </p>

      <h2>The number that embarrassed me: 3.7%</h2>
      <p>
        A cleaning company owner in a peer group asked me my one-time-to-recurring conversion
        rate. He said it should be around 20%. I didn't know mine. The data was sitting in my
        booking log, so I wrote the query.
      </p>
      <p>
        Out of 295 one-time customers (excluding move-in/move-out cleans, which are inherently
        one-off), 11 later booked a recurring cadence. That's <strong>3.7%</strong>, roughly a
        fifth of the peer benchmark. Every point of that gap is a customer I already paid to
        acquire, already served, and then let walk away. I would never have known this number
        without asking the question against real data, and I run the company.
      </p>

      <h2>What a cleaning company owner should take from this</h2>
      <ul>
        <li>
          <strong>Your average margin is not actionable. Your margin spread is.</strong> The
          average tells you the business is fine. The spread tells you which specific decisions
          are costing you money.
        </li>
        <li>
          <strong>Per-clean gross profit beats revenue as a dispatch signal.</strong> Sending
          your highest-margin cleaner to your highest-value jobs is a free raise.
        </li>
        <li>
          <strong>Measure conversion from one-time to recurring.</strong> If you don't know
          yours, it's probably worse than you think. Mine was.
        </li>
        <li>
          <strong>None of this requires new software you don't already have.</strong> The data
          lives in your booking platform and your accounting system. It just lives in two places,
          which is why nobody joins it.
        </li>
      </ul>

      <h2>Methodology</h2>
      <p>
        Data covers completed cleans from February 1 through August 1, 2026, logged by webhook
        from the booking platform at completion time. Gross margin is collected revenue minus
        cleaner payout, before lead costs, refunds, and overhead. The per-cleaner table includes
        only cleaners with 20 or more completed cleans and excludes multi-cleaner jobs and jobs
        with missing payout records, which is why the table's 673 cleans don't sum to the 920
        total. Cleaner names are anonymized; the underlying data is my company's production
        booking log. Questions about the data: roy@uplevelautomations.com.
      </p>
    </ArticleLayout>
  )
}
