import { useState } from 'react'
import Logo from './Logo'
import { Link, useNavigate, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [toolsOpen, setToolsOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (id: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(id)
      if (element) element.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(`/#${id}`)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f7f2e9]/85 backdrop-blur-md border-b border-slate-200/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-slate-900 inline-flex items-center" aria-label="UpLevel">
            <Logo size={30} />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium"
          >
            Pricing
          </button>
          <Link
            to="/proof"
            className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium"
          >
            Proof
          </Link>
          <Link
            to="/answers"
            className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium"
          >
            Answers
          </Link>

          {/* Tools Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setToolsOpen(true)}
            onMouseLeave={() => setToolsOpen(false)}
          >
            <button
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium flex items-center gap-1"
            >
              Tools
              <svg
                className={`w-4 h-4 transition-transform ${toolsOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {toolsOpen && (
              <div className="absolute top-full left-0 pt-2 w-56">
                <div className="bg-white rounded-lg shadow-lg border border-slate-200 py-2">
                <Link
                  to="/ai-readiness"
                  className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                >
                  <div className="font-medium">Where to start quiz</div>
                  <div className="text-xs text-slate-500 mt-0.5">60 seconds, one recommendation</div>
                </Link>
                <Link
                  to="/personal-assistant"
                  className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                >
                  <div className="font-medium">AI Assistant Kit</div>
                  <div className="text-xs text-slate-500 mt-0.5">Free: set up your own AI assistant</div>
                </Link>
                <Link
                  to="/process-mapper"
                  className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                >
                  <div className="font-medium">Process Mapper</div>
                  <div className="text-xs text-slate-500 mt-0.5">Document a workflow in minutes</div>
                </Link>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => scrollToSection('footer')}
            className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium"
          >
            Contact
          </button>
          <a
            href="https://cal.com/roy-banwell/30minaicall"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => window.dataLayer?.push({ event: 'cta_click', cta_text: 'Book a call', cta_location: 'navbar' })}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all shadow-sm hover:shadow-md"
          >
            Book a call
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-600 hover:text-slate-900"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-6 py-4 space-y-4">
            <button
              onClick={() => { setMobileMenuOpen(false); scrollToSection('services') }}
              className="block py-2 text-slate-700 hover:text-blue-600 font-medium"
            >
              Pricing
            </button>
            <Link
              to="/proof"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 hover:text-blue-600 font-medium"
            >
              Proof
            </Link>
            <Link
              to="/answers"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 hover:text-blue-600 font-medium"
            >
              Answers
            </Link>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider pt-2">Tools</div>
            <Link
              to="/ai-readiness"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 hover:text-blue-600 font-medium"
            >
              Where to start quiz
            </Link>
            <Link
              to="/personal-assistant"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 hover:text-blue-600 font-medium"
            >
              AI Assistant Kit (free)
            </Link>
            <Link
              to="/process-mapper"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 hover:text-blue-600 font-medium"
            >
              Process Mapper
            </Link>
            <div className="pt-4 border-t border-slate-200">
              <a
                href="https://cal.com/roy-banwell/30minaicall"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                Book a call
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
