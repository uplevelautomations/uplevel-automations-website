import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Assessment from './pages/Assessment'
import ProcessMapper from './pages/ProcessMapper'
import CaseStudies from './pages/CaseStudies'
import CaseStudyBlogAutomation from './pages/CaseStudyBlogAutomation'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ai-readiness" element={<Assessment />} />
        <Route path="/process-mapper" element={<ProcessMapper />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/automated-seo-blog" element={<CaseStudyBlogAutomation />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
