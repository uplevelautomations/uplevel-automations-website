// Route table shared by the browser entry (src/main.tsx) and the
// prerender entry (src/entry-server.tsx). Add new pages here and in
// src/seo/meta.ts — the prerenderer builds one static HTML file per
// meta entry.
import { Routes, Route, Navigate } from 'react-router-dom'
import { REDIRECTS } from './seo/meta'
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
import Answers from './pages/content/Answers'
import AnswerCleanerProfitability from './pages/content/AnswerCleanerProfitability'
import AnswerRecurringConversion from './pages/content/AnswerRecurringConversion'
import AnswerAffordToHire from './pages/content/AnswerAffordToHire'
import CleaningMarginsBenchmark from './pages/content/CleaningMarginsBenchmark'
import FsmProfitReporting from './pages/content/FsmProfitReporting'
import NotFound from './pages/NotFound'

export default function AppRoutes() {
  return (
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
      {Object.entries(REDIRECTS).map(([from, to]) => (
        <Route key={from} path={from} element={<Navigate to={to} replace />} />
      ))}
      <Route path="/demo" element={<Demo />} />
      <Route path="/answers" element={<Answers />} />
      <Route path="/answers/which-cleaner-is-most-profitable" element={<AnswerCleanerProfitability />} />
      <Route path="/answers/one-time-to-recurring-conversion-rate" element={<AnswerRecurringConversion />} />
      <Route path="/answers/can-i-afford-to-hire-another-cleaner" element={<AnswerAffordToHire />} />
      <Route path="/benchmarks/cleaning-company-margins" element={<CleaningMarginsBenchmark />} />
      <Route path="/compare/fsm-job-profitability-reporting" element={<FsmProfitReporting />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
