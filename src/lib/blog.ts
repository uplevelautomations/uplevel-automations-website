// Blog posts: one JSON file per post in src/content/blog/<slug>.json.
// Same shape as the Catalina Cleaning blog (catalina-cleaning/src/lib/blog.ts)
// so the same pipeline can write posts for either site.
//
// Posts are bundled at build time with import.meta.glob, so every post is
// prerendered to static HTML and listed in sitemap.xml (via src/seo/meta.ts).
// Adding a post = adding a JSON file. No route or meta edits needed.

export interface BlogPost {
  slug: string
  title: string
  description: string
  category: string
  date: string // YYYY-MM-DD
  dateModified?: string // YYYY-MM-DD, set when a post is substantively refreshed
  author: string
  readingTime: string
  content: string // HTML string, written by us (never user input)
}

const REQUIRED: (keyof BlogPost)[] = [
  'slug',
  'title',
  'description',
  'category',
  'date',
  'author',
  'readingTime',
  'content',
]

const modules = import.meta.glob<BlogPost>('../content/blog/*.json', {
  eager: true,
  import: 'default',
})

function validate(file: string, post: BlogPost): BlogPost {
  for (const key of REQUIRED) {
    if (!post[key] || typeof post[key] !== 'string') {
      throw new Error(`blog: ${file} is missing "${key}"`)
    }
  }
  const expectedSlug = file.split('/').pop()!.replace(/\.json$/, '')
  if (post.slug !== expectedSlug) {
    throw new Error(`blog: ${file} has slug "${post.slug}" but the file name says "${expectedSlug}"`)
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(post.date)) {
    throw new Error(`blog: ${file} date must be YYYY-MM-DD, got "${post.date}"`)
  }
  return post
}

/** All posts, newest first. Throws at build time if a post is malformed. */
export const POSTS: BlogPost[] = Object.entries(modules)
  .map(([file, post]) => validate(file, post))
  .sort((a, b) => b.date.localeCompare(a.date))

export const POST_BY_SLUG: Record<string, BlogPost> = Object.fromEntries(
  POSTS.map((p) => [p.slug, p]),
)

/** Up to `limit` other posts, same category first. */
export function relatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const others = POSTS.filter((p) => p.slug !== post.slug)
  const sameCategory = others.filter((p) => p.category === post.category)
  const rest = others.filter((p) => p.category !== post.category)
  return [...sameCategory, ...rest].slice(0, limit)
}

export function formatDate(iso: string): string {
  // Parse as a calendar date, not a timestamp, so the day never shifts by time zone.
  const [y, m, d] = iso.split('-').map(Number)
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ]
  return `${months[m - 1]} ${d}, ${y}`
}

const stripTags = (html: string) =>
  html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim()

/**
 * Pull the FAQ section out of a post so it can be emitted as FAQPage schema.
 * Convention (same as Catalina): an <h2>Frequently Asked Questions</h2>,
 * then one <h3> per question with its answer below it. Regex only, so it
 * runs identically in the browser and in the prerenderer.
 */
export function extractFaqs(content: string): { question: string; answer: string }[] {
  const section = content.match(
    /<h2[^>]*>\s*(?:Frequently Asked Questions|FAQs?)[^<]*<\/h2>([\s\S]*?)(?=<h2|$)/i,
  )
  if (!section) return []
  const parts = section[1].split(/<h3[^>]*>/i).slice(1)
  return parts
    .map((part) => {
      const [q, ...rest] = part.split(/<\/h3>/i)
      return { question: stripTags(q), answer: stripTags(rest.join('')) }
    })
    .filter((f) => f.question && f.answer)
}
