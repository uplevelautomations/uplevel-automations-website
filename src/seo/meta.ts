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

function articleSchema(path: string, headline: string, description: string, datePublished: string): object[] {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline,
      description,
      url: `${SITE_ORIGIN}${path}`,
      datePublished,
      dateModified: datePublished,
      author: { '@id': PERSON_ID },
      publisher: { '@id': ORG_ID },
    },
  ]
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
  {
    path: '/answers',
    title: "The Questions Cleaning Company Owners Can't Answer | UpLevel Automations",
    description:
      'Fourteen questions every cleaning company owner should be able to answer, with real answers computed from a working cleaning company.',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: "The Questions Cleaning Company Owners Can't Answer",
        url: `${SITE_ORIGIN}/answers`,
        // 14 questions on the page, but two share one answer URL — an
        // ItemList counts pages, so 13.
        numberOfItems: 13,
        itemListElement: [
          'which-cleaner-is-most-profitable',
          'can-i-afford-to-hire-another-cleaner',
          'fire-or-coach-a-cleaner',
          'which-cleaner-for-high-value-jobs',
          'which-jobs-to-stop-taking',
          'which-jobs-am-i-underpricing',
          'are-recurring-customers-more-profitable',
          'one-time-to-recurring-conversion-rate',
          'which-lead-source-produces-customers-who-stick',
          'real-cost-per-customer-by-channel',
          'expand-to-new-area-or-squeeze',
          'which-customers-should-i-fire',
          'is-my-equipment-paying-for-itself',
        ].map((slug, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: `${SITE_ORIGIN}/answers/${slug}`,
        })),
      },
    ],
  },
  {
    path: '/answers/which-cleaner-is-most-profitable',
    title: 'Which of My Cleaners Is Actually Making Me Money? | UpLevel Automations',
    description:
      'How to compute gross profit per clean by cleaner, and what 920 real cleans showed: a 3x spread between the best and worst cleaner on the same price book.',
    ogType: 'article',
    schema: articleSchema(
      '/answers/which-cleaner-is-most-profitable',
      'Which of My Cleaners Is Actually Making Me Money?',
      'How to compute gross profit per clean by cleaner, with real data from 920 cleans.',
      '2026-08-07',
    ),
  },
  {
    path: '/answers/one-time-to-recurring-conversion-rate',
    title: "What's My One-Time to Recurring Conversion Rate? | UpLevel Automations",
    description:
      'How to compute one-time to recurring conversion for a cleaning company. Peers benchmark around 20%. Mine measured 3.7%, and this is what that gap costs.',
    ogType: 'article',
    schema: articleSchema(
      '/answers/one-time-to-recurring-conversion-rate',
      "What's My One-Time to Recurring Conversion Rate?",
      'How to compute one-time to recurring conversion, with a real measured baseline of 3.7% vs the ~20% peer benchmark.',
      '2026-08-07',
    ),
  },
  {
    path: '/answers/can-i-afford-to-hire-another-cleaner',
    title: 'Can I Afford to Hire Another Cleaner Right Now? | UpLevel Automations',
    description:
      'A two-part test for cleaning company hiring: is the marginal work actually profitable, and can your cash survive the ramp?',
    ogType: 'article',
    schema: articleSchema(
      '/answers/can-i-afford-to-hire-another-cleaner',
      'Can I Afford to Hire Another Cleaner Right Now?',
      'A two-part hiring test: marginal job profitability plus cash runway through the ramp.',
      '2026-08-07',
    ),
  },
  {
    path: '/answers/fire-or-coach-a-cleaner',
    title: 'Should I Let This Cleaner Go or Coach Them? | UpLevel Automations',
    description:
      'A 90-day scoring system for the fire-or-coach call: rebooking rate, complaints, refunds traced to the cleaner, and retention. With real numbers.',
    ogType: 'article',
    schema: articleSchema(
      '/answers/fire-or-coach-a-cleaner',
      'Should I Let This Cleaner Go or Coach Them?',
      'A 90-day outcome scoring system for the fire-or-coach decision.',
      '2026-08-07',
    ),
  },
  {
    path: '/answers/which-cleaner-for-high-value-jobs',
    title: 'Which Cleaner Should I Send on a High-Value Job? | UpLevel Automations',
    description:
      'Dispatch by margin and rebooking rank, not availability. The spread between my best and worst cleaner runs $78 to $228 gross profit per clean.',
    ogType: 'article',
    schema: articleSchema(
      '/answers/which-cleaner-for-high-value-jobs',
      'Which Cleaner Should I Send on a High-Value Job?',
      'Dispatch high-value jobs by margin and quality ranking, not availability.',
      '2026-08-07',
    ),
  },
  {
    path: '/answers/which-jobs-to-stop-taking',
    title: 'Which Jobs Should I Chase, and Which Should I Stop Taking? | UpLevel Automations',
    description:
      'Rank job types by gross profit per actual hour, refunds included, then weight by what each job leads to. Revenue per job is the wrong ranking.',
    ogType: 'article',
    schema: articleSchema(
      '/answers/which-jobs-to-stop-taking',
      'Which Types of Jobs Should I Chase, and Which Should I Stop Taking?',
      'Rank job types by gross profit per actual hour, refunds included.',
      '2026-08-07',
    ),
  },
  {
    path: '/answers/which-jobs-am-i-underpricing',
    title: 'Which Job Types Am I Underpricing? | UpLevel Automations',
    description:
      'Where underpricing hides: duration drift, guessed add-ons, flat rates meeting outlier homes, and redo risk. How to run the audit against real data.',
    ogType: 'article',
    schema: articleSchema(
      '/answers/which-jobs-am-i-underpricing',
      'Which Job Types Am I Underpricing Relative to Actual Time and Cost?',
      'A pricing audit: gross profit per actual hour by job type.',
      '2026-08-07',
    ),
  },
  {
    path: '/answers/are-recurring-customers-more-profitable',
    title: 'Are Recurring Customers Actually More Profitable? | UpLevel Automations',
    description:
      'Per visit, usually no. Per customer, almost always yes. The honest comparison is gross profit per customer over 6 to 12 months, acquisition cost included.',
    ogType: 'article',
    schema: articleSchema(
      '/answers/are-recurring-customers-more-profitable',
      'Are Recurring Customers Actually More Profitable Than One-Time?',
      'Per visit no, per customer yes: how to run the honest comparison.',
      '2026-08-07',
    ),
  },
  {
    path: '/answers/which-lead-source-produces-customers-who-stick',
    title: 'Which Lead Source Produces Customers Who Stick? | UpLevel Automations',
    description:
      'Fix attribution first: 80% of my "website leads" started as missed phone calls. Then measure repeat rate and margin per customer by source.',
    ogType: 'article',
    schema: articleSchema(
      '/answers/which-lead-source-produces-customers-who-stick',
      'Which Lead Source Produces Customers Who Actually Stick Around?',
      'Honest first-touch attribution, then retention and margin by source.',
      '2026-08-07',
    ),
  },
  {
    path: '/answers/real-cost-per-customer-by-channel',
    title: 'My Real Cost Per Customer by Channel | UpLevel Automations',
    description:
      'Actual spend from the ad platform API divided by honestly attributed customers. My real cost per lead was $22, less than half what my reporting claimed.',
    ogType: 'article',
    schema: articleSchema(
      '/answers/real-cost-per-customer-by-channel',
      "What's My Real Cost Per Customer by Channel, and Is It Sustainable?",
      'Real spend over honestly attributed customers, tested against 6-month gross profit.',
      '2026-08-07',
    ),
  },
  {
    path: '/answers/expand-to-new-area-or-squeeze',
    title: 'Expand to a New Area or Squeeze My Current One? | UpLevel Automations',
    description:
      'Real per-market margins from my company: home market at 47.4% across 380 cleans while my smallest market ran 22% after refunds. Density beats expansion.',
    ogType: 'article',
    schema: articleSchema(
      '/answers/expand-to-new-area-or-squeeze',
      'Should I Expand to a New Area or Squeeze More Out of My Current One?',
      'Per-market gross margins from a real cleaning company, and the expansion decision rule.',
      '2026-08-07',
    ),
  },
  {
    path: '/answers/which-customers-should-i-fire',
    title: 'Which Customers Cost More Than They Generate? | UpLevel Automations',
    description:
      'Margin per customer with refunds, discounts, redos, and distance netted in. Reprice first, fix the operational cause second, exit deliberately last.',
    ogType: 'article',
    schema: articleSchema(
      '/answers/which-customers-should-i-fire',
      'Which Customers Cost More Than They Generate?',
      'Customer-level margin: how to find net-negative customers and what to do first.',
      '2026-08-07',
    ),
  },
  {
    path: '/answers/is-my-equipment-paying-for-itself',
    title: 'Is My Equipment Actually Paying for Itself? | UpLevel Automations',
    description:
      'Revenue per asset vs full monthly cost: the three-number test for trucks, machines, and specialty gear in a service business.',
    ogType: 'article',
    schema: articleSchema(
      '/answers/is-my-equipment-paying-for-itself',
      'Is My Equipment Actually Paying for Itself?',
      'The revenue-per-asset test: dependent gross profit against full monthly cost.',
      '2026-08-07',
    ),
  },
  {
    path: '/benchmarks/cleaning-company-margins',
    title: 'Cleaning Company Margins: What 920 Real Cleans Showed | UpLevel Automations',
    description:
      'Benchmark data from 920 completed cleans: 45.8% average gross margin and a 22-point margin spread across cleaners on the same price book.',
    ogType: 'article',
    schema: articleSchema(
      '/benchmarks/cleaning-company-margins',
      'What 920 Cleans Taught Me About Cleaning Company Margins',
      'Benchmark data from 920 completed cleans: 45.8% average gross margin and a 22-point spread across cleaners on the same price book.',
      '2026-08-07',
    ),
  },
  {
    path: '/compare/fsm-job-profitability-reporting',
    title: 'Housecall Pro vs Jobber vs ServiceTitan: Profitability Reporting',
    description:
      'What FSM reporting can and cannot tell you about job profitability, and which owner questions need accounting data joined in. By an operator.',
    ogType: 'article',
    schema: articleSchema(
      '/compare/fsm-job-profitability-reporting',
      'Housecall Pro vs Jobber vs ServiceTitan: Which Reporting Actually Answers Job Profitability?',
      'What FSM reporting can and cannot answer about job profitability, from an operator running the stack.',
      '2026-08-07',
    ),
  },
  {
    path: '/privacy',
    title: 'Privacy Policy | UpLevel Automations',
    description:
      'What uplevelautomations.com collects, why, and which third parties receive it, including how the Process Mapper sends what you type to an AI provider.',
  },
  {
    path: '/terms',
    title: 'Terms of Service | UpLevel Automations',
    description:
      'The rules for using uplevelautomations.com and its free tools, how they relate to paid engagements, and the governing law.',
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
