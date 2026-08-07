// Build-time prerenderer.
//
// Runs after `vite build` (client → dist/) and
// `vite build --ssr src/entry-server.tsx --outDir dist-ssr`.
//
// For every route in src/seo/meta.ts it renders the React tree to HTML,
// injects per-route head tags (title, description, canonical, Open Graph,
// Twitter card, JSON-LD), and writes dist/<route>/index.html. Also emits:
//   dist/404.html             — served with a 404 status by the server
//   dist/sitemap.xml          — generated from the same route list
//   dist/routes-manifest.json — known-route list for server/index.ts
//
// Why prerender instead of SSR or a framework migration: the AI answer
// engine crawlers (GPTBot, ClaudeBot, PerplexityBot) do not execute
// JavaScript, so they must receive real HTML. These are ~11 static
// marketing routes; build-time rendering covers them completely with no
// runtime cost and no framework rewrite.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const distDir = resolve(root, 'dist')
const ssrEntry = resolve(root, 'dist-ssr', 'entry-server.js')

const { render, ROUTES_META, NOT_FOUND_META, ORG_SCHEMA, SITE_ORIGIN } = await import(
  pathToFileURL(ssrEntry).href
)

const template = readFileSync(resolve(distDir, 'index.html'), 'utf-8')

const HEAD_RE = /<!--head-meta-start-->[\s\S]*?<!--head-meta-end-->/
const APP_RE = /<div id="root">[\s\S]*?<\/div>/

if (!HEAD_RE.test(template) || !APP_RE.test(template)) {
  throw new Error('prerender: index.html is missing the head-meta markers or the #root div')
}

const escapeAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
// </script> inside JSON-LD would terminate the tag early.
const jsonLd = (obj) => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`

function headBlock(meta) {
  const canonical = `${SITE_ORIGIN}${meta.path === '/' ? '/' : meta.path}`
  const schemas = [ORG_SCHEMA, ...(meta.schema ?? [])]
  return [
    `<title>${escapeAttr(meta.title)}</title>`,
    `<meta name="description" content="${escapeAttr(meta.description)}">`,
    `<link rel="canonical" href="${canonical}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="UpLevel Automations">`,
    `<meta property="og:url" content="${canonical}">`,
    `<meta property="og:title" content="${escapeAttr(meta.title)}">`,
    `<meta property="og:description" content="${escapeAttr(meta.description)}">`,
    `<meta property="og:image" content="${SITE_ORIGIN}/roy-headshot.png">`,
    `<meta name="twitter:card" content="summary">`,
    `<meta name="twitter:title" content="${escapeAttr(meta.title)}">`,
    `<meta name="twitter:description" content="${escapeAttr(meta.description)}">`,
    `<meta name="twitter:image" content="${SITE_ORIGIN}/roy-headshot.png">`,
    ...schemas.map(jsonLd),
  ].join('\n  ')
}

function writePage(meta, outFile) {
  const appHtml = render(meta.path)
  if (!appHtml || appHtml.length < 500) {
    throw new Error(
      `prerender: route ${meta.path} rendered only ${appHtml.length} chars — ` +
        `a component is probably not SSR-safe. Refusing to ship a thin page.`,
    )
  }
  const page = template
    .replace(HEAD_RE, headBlock(meta))
    .replace(APP_RE, `<div id="root">${appHtml}</div>`)
  mkdirSync(dirname(outFile), { recursive: true })
  writeFileSync(outFile, page)
  console.log(`  ${meta.path.padEnd(40)} → ${outFile.replace(root + '/', '')} (${appHtml.length} chars)`)
}

console.log('Prerendering routes:')
for (const meta of ROUTES_META) {
  const outFile =
    meta.path === '/'
      ? resolve(distDir, 'index.html')
      : resolve(distDir, meta.path.slice(1), 'index.html')
  writePage(meta, outFile)
}
writePage(NOT_FOUND_META, resolve(distDir, '404.html'))

// sitemap.xml — same route list, so it can never drift from reality.
const today = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES_META.filter((m) => !m.noSitemap)
  .map(
    (m) => `  <url>
    <loc>${SITE_ORIGIN}${m.path === '/' ? '/' : m.path}</loc>
    <lastmod>${today}</lastmod>
  </url>`,
  )
  .join('\n')}
</urlset>
`
writeFileSync(resolve(distDir, 'sitemap.xml'), sitemap)
console.log('  sitemap.xml written')

// Known-route manifest for the Express server's 404 handling.
writeFileSync(
  resolve(distDir, 'routes-manifest.json'),
  JSON.stringify({ routes: ROUTES_META.map((m) => m.path), redirects: { '/brain': '/personal-assistant' } }, null, 2),
)
console.log('  routes-manifest.json written')
