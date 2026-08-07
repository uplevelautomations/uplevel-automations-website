import { Link } from 'react-router-dom'
import ArticleLayout from '../../layouts/ArticleLayout'

export default function AnswerEquipmentRoi() {
  return (
    <ArticleLayout
      kicker="Answers · Cash & Growth"
      title="Is My Equipment Actually Paying for Itself?"
      dateline="The revenue-per-asset view for service businesses. Updated August 2026."
      intro={
        <p>
          Attribute revenue to each significant asset (a truck, a machine, specialty gear) by the
          jobs it serviced, then compare against its full monthly cost: payment, insurance, fuel,
          maintenance, and storage. The asset pays for itself when it either services revenue
          nothing else could reach, or its per-month cost is under the gross profit of the jobs
          that genuinely depend on it. Most owners can't answer this because job records and
          asset costs live in different systems.
        </p>
      }
    >
      <h2>The test in three numbers</h2>
      <ul>
        <li><strong>True monthly cost:</strong> everything from your accounting system, including the depreciation or payment you stopped noticing.</li>
        <li><strong>Dependent revenue:</strong> gross profit from jobs that genuinely require this asset. Be strict: revenue a smaller or cheaper setup could have serviced doesn't count.</li>
        <li><strong>Utilization:</strong> days used per month. An asset used four days a month at high margin can still beat one used daily at thin margin, but only the math knows.</li>
      </ul>

      <h2>Where the answer gets uncomfortable</h2>
      <p>
        In lighter-equipment businesses like residential cleaning, the "equipment" question is
        really a vehicle question, and the honest answer is often that a vehicle exists for
        convenience, not profit. In heavier trades, the classic failure is the specialty machine
        bought for a job category that never reached volume, quietly costing hundreds a month
        against a category generating a few jobs a quarter. Either way the fix is the same
        discipline as every other answer on <Link to="/answers">this list</Link>: join the cost
        record to the job record and let the per-month number decide.
      </p>

      <h2>The decision rule</h2>
      <ul>
        <li><strong>Dependent gross profit clears cost with room: keep,</strong> and consider whether more of that job category is worth chasing.</li>
        <li><strong>Marginal: change the job mix it serves</strong> before replacing it. Sometimes the asset is fine and the pricing on its jobs is the problem, per <Link to="/answers/which-jobs-am-i-underpricing">the underpricing audit</Link>.</li>
        <li><strong>Underwater with no path: sell it.</strong> The monthly cost you stop paying is margin that arrives without selling a single new job.</li>
      </ul>
    </ArticleLayout>
  )
}
