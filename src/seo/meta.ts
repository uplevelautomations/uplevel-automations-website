// Single source of truth for per-route SEO metadata.
// Consumed by:
//   - scripts/prerender.mjs  (build-time head injection + sitemap.xml)
//   - src/main.tsx           (client-side title/description updates on navigation)
//   - server/index.ts        (known-route list for 404 handling, via routes-manifest.json)
//
// Canonical host is www — the apex 301s here (see server/index.ts).

export const SITE_ORIGIN = 'https://www.uplevelautomations.com'

export interface RouteMeta {
  path: string
  title: string
  description: string
  /** Extra JSON-LD blocks for this route (org schema is added globally). */
  schema?: object[]
  /** Exclude from sitemap.xml (still prerendered). */
  noSitemap?: boolean
  /** Emit <meta name="robots" content="noindex"> and omit canonical/og:url. */
  noindex?: boolean
  /** Open Graph type; defaults to "website". */
  ogType?: 'website' | 'article'
}

/** Server-side 301s, also mirrored as <Navigate> routes in src/routes.tsx. */
export const REDIRECTS: Record<string, string> = {
  '/brain': '/personal-assistant',
}

const ORG_ID = `${SITE_ORIGIN}/#organization`
const PERSON_ID = `${SITE_ORIGIN}/#roy`

export const PERSON_SCHEMA = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Roy Banwell',
  jobTitle: 'Founder',
  worksFor: { '@id': ORG_ID },
  sameAs: [
    'https://x.com/Roy_Banwell',
    'https://www.linkedin.com/in/roybanwell/',
    'https://github.com/uplevelautomations',
  ],
}

/** Sitewide organization entity — emitted on every route. */
export const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': ORG_ID,
  name: 'UpLevel Automations',
  url: `${SITE_ORIGIN}/`,
  description:
    'AI operations dashboards and automation for cleaning companies. Built by an operator who runs a cleaning company.',
  founder: PERSON_SCHEMA,
  sameAs: [
    'https://x.com/Roy_Banwell',
    'https://www.linkedin.com/in/roybanwell/',
    'https://github.com/uplevelautomations',
  ],
  areaServed: 'United States',
  audience: {
    '@type': 'Audience',
    audienceType: 'Cleaning companies (residential and commercial)',
  },
  knowsAbout: [
    'Cleaning company operations',
    'Job profitability',
    'Crew performance',
    'AI automation',
    'Operations dashboards',
  ],
}

function caseStudySchema(path: string, headline: string, description: string): object[] {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline,
      description,
      url: `${SITE_ORIGIN}${path}`,
      author: { '@id': PERSON_ID },
      publisher: { '@id': ORG_ID },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Case Studies', item: `${SITE_ORIGIN}/case-studies` },
        { '@type': 'ListItem', position: 2, name: headline, item: `${SITE_ORIGIN}${path}` },
      ],
    },
  ]
}

export const ROUTES_META: RouteMeta[] = [
  {
    path: '/',
    title: 'UpLevel Automations | AI Operations Dashboards for Cleaning Companies',
    description:
      'I built an AI operations dashboard for my own cleaning company. Now I build it for other cleaning companies. See job profitability, crew performance, recurring vs one-time margin, and cash position in one place.',
  },
  {
    path: '/ai-readiness',
    title: 'AI Readiness Assessment for Cleaning Companies | UpLevel Automations',
    description:
      'A free 2-minute assessment for cleaning company owners. Find out where AI and automation can actually help your operation, and what to fix first.',
  },
  {
    path: '/process-mapper',
    title: 'Process Mapper for Cleaning Companies | UpLevel Automations',
    description:
      'Describe any process in your cleaning business and get a clean, structured process document back. Free tool for cleaning company owners.',
  },
  {
    path: '/case-studies',
    title: 'Cleaning Company Case Studies | UpLevel Automations',
    description:
      'Real systems built and running inside a working cleaning company: operations dashboard, automated SEO blog, AI VA coaching. What was built, why, and what changed.',
  },
  {
    path: '/case-studies/automated-seo-blog',
    title: 'Automated SEO Blog for a Cleaning Company | UpLevel Automations',
    description:
      'How an automated blog publishes three SEO posts a week for a cleaning company, and what it did to organic traffic. Full build write-up.',
    ogType: 'article',
    schema: caseStudySchema(
      '/case-studies/automated-seo-blog',
      'Automated SEO Blog for a Cleaning Company',
      'How an automated blog publishes three SEO posts a week for a cleaning company, and what it did to organic traffic.',
    ),
  },
  {
    path: '/case-studies/operations-dashboard',
    title: 'Cleaning Company Operations Dashboard | UpLevel Automations',
    description:
      'One screen for job profitability, crew performance, and cash position, replacing four platforms. Built for a real cleaning company doing 200+ cleans a month.',
    ogType: 'article',
    schema: caseStudySchema(
      '/case-studies/operations-dashboard',
      'Cleaning Company Operations Dashboard',
      'One screen for job profitability, crew performance, and cash position, replacing four platforms.',
    ),
  },
  {
    path: '/case-studies/va-coaching',
    title: 'AI VA Coaching for Cleaning Companies | UpLevel Automations',
    description:
      'An AI system that scores VA call transcripts and produces weekly coaching reports for a cleaning company sales team. Full build write-up.',
    ogType: 'article',
    schema: caseStudySchema(
      '/case-studies/va-coaching',
      'AI VA Coaching for Cleaning Companies',
      'An AI system that scores VA call transcripts and produces weekly coaching reports.',
    ),
  },
  {
    path: '/proof',
    title: 'Proof: AI Systems Run in a Real Cleaning Company | UpLevel Automations',
    description:
      'Every system we sell runs first inside a real cleaning company doing 200+ cleans a month. The dashboard, the daily briefing, the hiring bot, the blog automator — all live.',
  },
  {
    path: '/personal-assistant',
    title: 'AI Personal Assistant Kit | UpLevel Automations',
    description:
      'A free kit for setting up an AI personal assistant that manages email, calendar, and daily briefings for a business owner.',
  },
  {
    path: '/demo',
    title: 'Cleaning Company Operations Dashboard Demo | UpLevel Automations',
    description:
      'A live sample of the Service OS dashboard for a ~$800K/yr cleaning company: revenue, job profitability, crew performance, and marketing in one screen.',
  },
]

export const NOT_FOUND_META: RouteMeta = {
  path: '/404',
  title: 'Page Not Found | UpLevel Automations',
  description: 'That page does not exist. Head back to the homepage.',
  noSitemap: true,
  noindex: true,
}

/** Lookup used by the client-side navigation updater. */
export const META_BY_PATH: Record<string, RouteMeta> = Object.fromEntries(
  ROUTES_META.map((m) => [m.path, m]),
)
