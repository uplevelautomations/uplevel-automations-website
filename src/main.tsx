import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import App from './App'
import Assessment from './pages/Assessment'
import ProcessMapper from './pages/ProcessMapper'
import CaseStudies from './pages/CaseStudies'
import CaseStudyBlogAutomation from './pages/CaseStudyBlogAutomation'
import CaseStudyDashboard from './pages/CaseStudyDashboard'
import CaseStudyVACoaching from './pages/CaseStudyVACoaching'
import Proof from './pages/Proof'
import PersonalAssistant from './pages/PersonalAssistant'
import Demo from './pages/Demo'
import './index.css'

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

const pageTitles: Record<string, string> = {
  '/': 'AI Operations Dashboards for Cleaning Companies | UpLevel Automations',
  '/ai-readiness': 'AI Readiness Assessment for Cleaning Companies | UpLevel Automations',
  '/process-mapper': 'Process Mapper for Cleaning Companies | UpLevel Automations',
  '/case-studies': 'Cleaning Company Case Studies | UpLevel Automations',
  '/case-studies/automated-seo-blog': 'Automated SEO Blog for a Cleaning Company | UpLevel Automations',
  '/case-studies/operations-dashboard': 'Cleaning Company Operations Dashboard | UpLevel Automations',
  '/case-studies/va-coaching': 'AI VA Coaching for Cleaning Companies | UpLevel Automations',
  '/proof': 'Proof: AI Systems Run in a Cleaning Company | UpLevel Automations',
  '/personal-assistant': 'AI Personal Assistant Kit | UpLevel Automations',
  '/demo': 'Cleaning Company Operations Dashboard Demo | UpLevel Automations',
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
        <Route path="/proof" element={<Proof />} />
        <Route path="/personal-assistant" element={<PersonalAssistant />} />
        <Route path="/brain" element={<Navigate to="/personal-assistant" replace />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
