import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Problem from './components/Problem'
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
        <About />
        <Problem />
        <Services />
        <BuiltInMyBusiness />
        <AssessmentTeaser />
      </main>
      <Footer />
    </div>
  )
}

export default App
