import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer id="footer" className="py-16 px-6 bg-slate-900 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="font-semibold text-white text-lg block mb-3">
              UpLevel Automations
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Built in my business first.<br />
              200+ customers a month. 1,000+ leads a month. Same admin team.
            </p>
          </div>

          {/* Site links */}
          <div>
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">Site</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/proof" className="text-slate-400 hover:text-white transition-colors">
                  Proof
                </Link>
              </li>
              <li>
                <Link to="/ai-readiness" className="text-slate-400 hover:text-white transition-colors">
                  AI Readiness Assessment
                </Link>
              </li>
              <li>
                <Link to="/process-mapper" className="text-slate-400 hover:text-white transition-colors">
                  Process Mapper
                </Link>
              </li>
            </ul>
          </div>

          {/* Data & answers */}
          <div>
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">Data &amp; Answers</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/benchmarks/cleaning-company-margins" className="text-slate-400 hover:text-white transition-colors">
                  Margins Benchmark Report
                </Link>
              </li>
              <li>
                <Link to="/answers" className="text-slate-400 hover:text-white transition-colors">
                  Questions Owners Can't Answer
                </Link>
              </li>
              <li>
                <Link to="/compare/fsm-job-profitability-reporting" className="text-slate-400 hover:text-white transition-colors">
                  FSM Reporting Compared
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-slate-400 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">Contact</div>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:roy@uplevelautomations.com"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  roy@uplevelautomations.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+13013857585"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  +1 (301) 385-7585
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/roybanwell/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://cal.com/roy-banwell/30minaicall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Book a Call
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <div>&copy; 2026 UpLevel Automations. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
