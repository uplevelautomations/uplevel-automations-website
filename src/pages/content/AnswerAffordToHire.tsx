import { Link } from 'react-router-dom'
import ArticleLayout from '../../layouts/ArticleLayout'

export default function AnswerAffordToHire() {
  return (
    <ArticleLayout
      kicker="Answers · People"
      title="Can I Afford to Hire Another Cleaner Right Now?"
      dateline="The framework I use in my own cleaning company. Updated August 2026."
      intro={
        <p>
          "Can I afford to hire" is really two questions. First, is the demand real: is your
          schedule full of profitable work, or just full? Second, can your cash survive the ramp:
          a new cleaner costs money from day one and earns full margin only after training,
          mistakes, and slow first weeks. Your booking platform answers neither by itself,
          because the first needs margin per job and the second needs your bank position and AR,
          which live in your accounting system.
        </p>
      }
    >
      <h2>Step 1: check whether the demand is profitable, not just present</h2>
      <p>
        A full calendar feels like a hiring signal. But when I ranked my own cleaners by gross
        profit per clean, the spread ran from $78 to $228 on the same price book. A schedule can
        be full of $78 work. Before adding capacity, look at what the marginal jobs actually
        earn:
      </p>
      <ul>
        <li>Pull gross profit per clean for the jobs you're turning away or deferring. If the overflow is low-margin work, hiring buys you more of it.</li>
        <li>Check whether rebalancing beats hiring: moving high-value jobs to high-margin cleaners raises profit with zero new payroll. I wrote up how to run that ranking in <Link to="/answers/which-cleaner-is-most-profitable">the cleaner profitability answer</Link>.</li>
      </ul>

      <h2>Step 2: model the ramp against real cash, not revenue</h2>
      <ul>
        <li><strong>Cost from day one:</strong> onboarding time, supplies, and pay for training cleans that bill nothing or get redone.</li>
        <li><strong>A realistic ramp:</strong> assume partial productivity for the first several weeks and at least one redo or refund. In my data a single $200 refund erases the margin of two good cleans.</li>
        <li><strong>Cash, not P&L:</strong> the question is whether your bank balance plus incoming AR covers the extra payroll during the ramp. If your AR aging is long, revenue on the books doesn't pay Friday's payroll.</li>
      </ul>

      <h2>A worked example with my numbers</h2>
      <p>
        My average gross profit per clean runs about $120. A new cleaner at full ramp doing 8
        cleans a week earns the business roughly $960 a week in gross profit. Assume a 4-week
        ramp at half productivity: during that month they generate around $1,900 in gross profit
        while you carry full onboarding time, supplies, and likely one redo. If the jobs they'd
        absorb are down at my bottom-of-roster $78 per clean instead of $120, the same ramp
        produces about $1,250, and the payback on the hire stretches by weeks. Same hire, same
        wage. The difference is entirely which jobs the schedule hands them, which is why the
        demand check comes before the cash check.
      </p>

      <h2>The one-line test</h2>
      <p>
        If the work you'd hand a new hire earns your median gross profit per clean or better, and
        your cash position covers payroll through a slow ramp without touching a credit line, hire.
        If either half fails, the cheaper move is fixing dispatch or job mix first. Both halves of
        that sentence are computable today from systems you already pay for. They're just two
        different systems, which is exactly why the question feels unanswerable from either one.
      </p>
      <p>
        The margin numbers I use for the demand half are published in{' '}
        <Link to="/benchmarks/cleaning-company-margins">the benchmark report</Link>.
      </p>
    </ArticleLayout>
  )
}
