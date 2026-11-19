import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OfferCta from '../components/OfferCta'
import { POSTS, formatDate } from '../lib/blog'

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Blog</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
            Lead follow-up and automation for cleaning companies
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed mb-12">
            What I learned running a cleaning company with AI systems, and building the same systems for
            other cleaning owners. Real numbers from real businesses, no generic advice.
          </p>

          {POSTS.length === 0 ? (
            <p className="text-slate-500">First posts are on the way.</p>
          ) : (
            <ul className="space-y-6">
              {POSTS.map((post) => (
                <li key={post.slug}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="block bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-sm transition"
                  >
                    <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">
                      {post.category}
                    </p>
                    <h2 className="text-xl font-bold text-slate-900 mb-2">{post.title}</h2>
                    <p className="text-slate-600 leading-relaxed mb-3">{post.description}</p>
                    <p className="text-sm text-slate-500">
                      {formatDate(post.date)} · {post.readingTime}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <OfferCta source="blog_index" />
        </div>
      </main>
      <Footer />
    </div>
  )
}
