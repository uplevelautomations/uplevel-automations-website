import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

// Load .env BEFORE importing handlers (they need env vars)
dotenv.config()

import { chatHandler } from './api/chat'
import { extractProcessDataHandler } from './api/extract-process-data'
import { generatePdfHandler } from './api/generate-pdf'
import { sendEmailHandler } from './api/send-email'
import { sendAssessmentEmailHandler } from './api/send-assessment-email'
import { sendAbandonAlertHandler } from './api/send-abandon-alert'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3001

const distPath = path.join(__dirname, '..', 'dist')

// Prerendered-route manifest written by scripts/prerender.mjs.
// Falls back to an empty manifest so a dev server without a build
// still boots (API-only usage).
let manifest: { routes: string[]; redirects: Record<string, string> } = {
  routes: [],
  redirects: {},
}
try {
  manifest = JSON.parse(fs.readFileSync(path.join(distPath, 'routes-manifest.json'), 'utf-8'))
} catch {
  // In production a missing manifest means every marketing route would
  // 404 — fail the boot loudly instead of serving a broken site.
  if (process.env.NODE_ENV === 'production' || process.env.RAILWAY_ENVIRONMENT) {
    throw new Error('routes-manifest.json missing from dist/ — did the build run scripts/prerender.mjs?')
  }
  console.warn('routes-manifest.json not found — run the full build for prerendered pages')
}

// Canonical host: www. Redirect the apex (and anything else) to it,
// preserving path and query. The apex previously hard-404ed on all
// subpaths, killing any inbound link or AI citation to an apex URL.
const CANONICAL_HOST = 'www.uplevelautomations.com'
app.use((req, res, next) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') return next()
  const host = req.headers.host?.toLowerCase()
  if (host === 'uplevelautomations.com') {
    return res.redirect(301, `https://${CANONICAL_HOST}${req.originalUrl}`)
  }
  next()
})

// Trailing-slash URLs 301 to the canonical slash-less form so the same
// page never lives at two URLs. Leading double-slashes are collapsed
// first: redirecting to a path like `//evil.com` would be treated by
// browsers as a protocol-relative URL to another host (open redirect).
app.use((req, res, next) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') return next()
  if (req.path.length > 1 && req.path.endsWith('/')) {
    const query = req.originalUrl.slice(req.path.length)
    const target = req.path.slice(0, -1).replace(/^\/{2,}/, '/')
    return res.redirect(301, target + query)
  }
  next()
})

app.use(cors())
app.use(express.json())

// API Routes
app.post('/api/chat', chatHandler)
app.post('/api/extract-process-data', extractProcessDataHandler)
app.post('/api/generate-pdf', generatePdfHandler)
app.post('/api/send-email', sendEmailHandler)
app.post('/api/send-assessment-email', sendAssessmentEmailHandler)
app.post('/api/send-abandon-alert', sendAbandonAlertHandler)

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' })
})

// Legacy-path redirects (also handled client-side by react-router for
// in-app navigation; this covers direct hits and crawlers).
for (const [from, to] of Object.entries(manifest.redirects)) {
  app.get(from, (_req, res) => res.redirect(301, to))
}

function sendNotFound(res: express.Response) {
  const notFoundPage = path.join(distPath, '404.html')
  if (fs.existsSync(notFoundPage)) {
    return res.status(404).sendFile(notFoundPage)
  }
  res.status(404).send('Not Found')
}

// Direct requests for prerendered .html files (e.g. /proof/index.html,
// /404.html) would be duplicate-content URLs answering 200 — 404 them;
// the canonical route URLs below are the only way to reach page HTML.
app.use((req, res, next) => {
  if (req.path.endsWith('.html')) return sendNotFound(res)
  next()
})

// Static assets (JS/CSS/images). `index: false` + `redirect: false` so
// route HTML is served only by the explicit handlers below —
// express.static's defaults would serve directory indexes and add
// trailing-slash 301s that conflict with the canonical URLs.
app.use(express.static(distPath, { index: false, redirect: false }))

// Prerendered pages. Express serves HEAD for app.get routes automatically.
for (const route of manifest.routes) {
  const file =
    route === '/'
      ? path.join(distPath, 'index.html')
      : path.join(distPath, route.slice(1), 'index.html')
  app.get(route, (_req, res) => res.sendFile(file))
}

// Everything else is a real 404 — with a real 404 status. The previous
// catch-all returned index.html with a 200 for every URL on the
// internet, an unbounded soft-404 surface.
app.use((req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    return res.status(405).set('Allow', 'GET, HEAD').send('Method Not Allowed')
  }
  sendNotFound(res)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
