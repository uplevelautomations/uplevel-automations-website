// Build-time prerender entry. Not shipped to the browser.
// scripts/prerender.mjs imports the compiled version of this file and
// calls render() once per route in src/seo/meta.ts.
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import AppRoutes from './routes'

// Re-exported so scripts/prerender.mjs can read route metadata from the
// compiled SSR bundle without needing a TypeScript loader.
export { ROUTES_META, NOT_FOUND_META, ORG_SCHEMA, SITE_ORIGIN } from './seo/meta'

export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>,
  )
}
