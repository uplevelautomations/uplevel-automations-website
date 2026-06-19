import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Opener from './components/Opener'
import DashboardPreview from './components/DashboardPreview'
import NoLeadLeftBehind from './components/NoLeadLeftBehind'
import Services from './components/Services'
import BuiltInMyBusiness from './components/BuiltInMyBusiness'
import AssessmentTeaser from './components/AssessmentTeaser'
import Footer from './components/Footer'

function App() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) element.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [location])

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Opener />
        <DashboardPreview />
        <NoLeadLeftBehind />
        <Services />
        <BuiltInMyBusiness />
        <About />
        <AssessmentTeaser />
      </main>
      <Footer />
    </div>
  )
}

export default App
