import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">404</p>
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">That page doesn't exist</h1>
      <p className="text-slate-600 max-w-md mb-8">
        The link may be old or mistyped. Everything on this site is reachable from the homepage.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Back to the homepage
        </Link>
        <Link
          to="/case-studies"
          className="bg-white border border-slate-200 hover:border-slate-300 text-slate-800 font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          See the case studies
        </Link>
      </div>
    </div>
  )
}
