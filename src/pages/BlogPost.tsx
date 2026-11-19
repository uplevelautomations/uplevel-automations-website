import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OfferCta from '../components/OfferCta'
import NotFound from './NotFound'
import { POST_BY_SLUG, formatDate, relatedPosts } from '../lib/blog'

export default function BlogPost() {
  const { slug = '' } = useParams()
  const post = POST_BY_SLUG[slug]
  if (!post) return <NotFound />

  const related = relatedPosts(post)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20 px-6">
        <article className="max-w-3xl mx-auto">
          <nav className="text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
            <Link to="/blog" className="hover:text-slate-700">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span>{post.category}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">{post.title}</h1>
          <p className="text-sm text-slate-500 mb-8">
            By {post.author} · {formatDate(post.date)}
            {post.dateModified && post.dateModified !== post.date && (
              <> · Updated {formatDate(post.dateModified)}</>
            )}
            {' '}· {post.readingTime}
          </p>
          <div
            className="prose prose-slate max-w-none
              prose-h2:text-2xl prose-h2:font-bold prose-h2:text-slate-900 prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-lg prose-h3:font-semibold prose-h3:text-slate-900
              prose-p:leading-relaxed prose-li:leading-relaxed
              prose-a:text-blue-700 prose-strong:text-slate-900
              prose-blockquote:border-blue-600 prose-blockquote:text-slate-700"
            // Post HTML is written by us and committed to the repo, never user input.
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <OfferCta source={`blog:${post.slug}`} />

          {related.length > 0 && (
            <section className="mt-16">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Keep reading</h2>
              <ul className="space-y-4">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link to={`/blog/${r.slug}`} className="block hover:text-blue-700">
                      <span className="font-semibold text-slate-900">{r.title}</span>
                      <span className="block text-sm text-slate-500">{r.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>
      </main>
      <Footer />
    </div>
  )
}
