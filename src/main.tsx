import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import App from './App'
import Assessment from './pages/Assessment'
import ProcessMapper from './pages/ProcessMapper'
import CaseStudies from './pages/CaseStudies'
import CaseStudyBlogAutomation from './pages/CaseStudyBlogAutomation'
import CaseStudyDashboard from './pages/CaseStudyDashboard'
import CaseStudyVACoaching from './pages/CaseStudyVACoaching'
import CaseStudyOutboundMachine from './pages/CaseStudyOutboundMachine'
import Proof from './pages/Proof'
import Brain from './pages/Brain'
import './index.css'

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

const pageTitles: Record<string, string> = {
  '/': 'UpLevel Automations | AI Transformation Partner',
  '/ai-readiness': 'AI Readiness Assessment | UpLevel Automations',
  '/process-mapper': 'Process Mapper | UpLevel Automations',
  '/case-studies': 'Case Studies | UpLevel Automations',
  '/case-studies/automated-seo-blog': 'Automated SEO Blog Case Study | UpLevel Automations',
  '/case-studies/operations-dashboard': 'Operations Dashboard Case Study | UpLevel Automations',
  '/case-studies/va-coaching': 'VA Coaching System Case Study | UpLevel Automations',
  '/case-studies/outbound-machine': 'Outbound Machine Case Study | UpLevel Automations',
  '/proof': 'Proof | UpLevel Automations',
  '/brain': 'AI Second Brain Kit | UpLevel Automations',
}

function PageViewTracker() {
  const location = useLocation()

  useEffect(() => {
    const title = pageTitles[location.pathname] || 'UpLevel Automations'
    document.title = title

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'page_view',
      page_path: location.pathname,
      page_title: title,
    })
  }, [location])

  return null
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PageViewTracker />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ai-readiness" element={<Assessment />} />
        <Route path="/process-mapper" element={<ProcessMapper />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/automated-seo-blog" element={<CaseStudyBlogAutomation />} />
        <Route path="/case-studies/operations-dashboard" element={<CaseStudyDashboard />} />
        <Route path="/case-studies/va-coaching" element={<CaseStudyVACoaching />} />
        <Route path="/case-studies/outbound-machine" element={<CaseStudyOutboundMachine />} />
        <Route path="/proof" element={<Proof />} />
        <Route path="/brain" element={<Brain />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
