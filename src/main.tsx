import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, useLocation } from 'react-router-dom'
import AppRoutes from './routes'
import { META_BY_PATH, NOT_FOUND_META, SITE_ORIGIN } from './seo/meta'
import './index.css'

// (window.dataLayer is declared globally in src/pages/Assessment.tsx)

// Keeps the document head in sync during client-side navigation.
// Initial-load head tags are baked into each page's static HTML by
// scripts/prerender.mjs — this only handles in-app transitions.
function HeadSync() {
  const location = useLocation()

  useEffect(() => {
    const known = META_BY_PATH[location.pathname]
    const meta = known ?? NOT_FOUND_META
    document.title = meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', meta.description)
    // Only point the canonical at URLs that actually exist — an unmatched
    // client-side route must not canonicalize to itself.
    if (known && !known.noindex) {
      document
        .querySelector('link[rel="canonical"]')
        ?.setAttribute('href', `${SITE_ORIGIN}${location.pathname === '/' ? '/' : location.pathname}`)
    }

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'page_view',
      page_path: location.pathname,
      page_title: meta.title,
    })
  }, [location])

  return null
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeadSync />
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)
