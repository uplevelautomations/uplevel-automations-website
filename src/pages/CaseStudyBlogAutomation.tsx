import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function CaseStudyBlogAutomation() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
            <Link to="/" className="hover:text-slate-900">Home</Link>
            <span>/</span>
            <Link to="/case-studies" className="hover:text-slate-900">Case Studies</Link>
            <span>/</span>
            <span className="text-slate-900">Automated SEO Blog</span>
          </div>
          <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full mb-4">
            Case Study
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
            How We Built a Fully Automated SEO Blog for a Cleaning Company
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            A residential cleaning company needed consistent blog content to build organic search traffic. We built a system that writes, publishes, and manages SEO blog posts twice a week with zero human input. Here's exactly how it works and what it cost.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>Industry: Residential Cleaning</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Florida, Texas, California, Georgia, DMV</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Built in 1 week</span>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="border-t border-slate-200" />
      </div>

      {/* Content */}
      <article className="py-16 px-6">
        <div className="max-w-3xl mx-auto">

          {/* The Client */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The Client</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The client is a residential cleaning company operating across Florida, Texas, California, Georgia, and the DC metro area. They generate roughly 70 leads per week, almost entirely through Google Local Services Ads.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The business was growing, but 95% of its leads came from a single paid channel. There was no organic search presence, no blog, and no content strategy. If ad costs went up or lead quality dropped, there was no fallback.
            </p>
          </section>

          {/* The Problem */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The Problem</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The owner knew SEO could diversify their lead sources, but didn't have time to write blog posts, didn't want to hire a content writer, and didn't want to pay an agency $2,000-5,000/month for mediocre content.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The question was: could we build a system that handles the entire content pipeline autonomously, from topic selection to publishing, with no ongoing human input?
            </p>
          </section>

          {/* What We Built */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What We Built</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We built two things for this project. First, a custom website from scratch using Claude Code (an AI coding tool). Second, a fully automated blog pipeline that runs on its own.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">The Website</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              The entire website was built using Claude Code, an AI-powered development tool. This includes 33+ pages: a homepage, 5 service pages, 12 service area pages, an About page, FAQ, Reviews, Contact, and a full blog section. The site is built on Next.js, deployed on Railway, and auto-deploys every time new content is pushed.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              The site was built with SEO in mind from the start: structured data (schema markup) on every page, a dynamically generated sitemap, Google Analytics with custom conversion events, and Google Search Console integration.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">The Blog Automation</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              The automation runs on n8n, an open-source workflow platform. Every Monday and Thursday at 9am, it:
            </p>
            <ol className="space-y-3 mb-6">
              {[
                'Pulls the next unpublished topic from a Google Sheet queue',
                'Sends a detailed prompt to Claude (Anthropic\'s AI) with SEO instructions, brand voice guidelines, and content structure requirements',
                'Receives a 1,500-2,200 word blog post back as structured JSON with title, meta description, category, and full HTML content',
                'Pushes the file directly to GitHub, which triggers an automatic website deploy',
                'Updates the Google Sheet to mark the topic as published with the date and live URL',
              ].map((step, i) => (
                <li key={i} className="flex gap-3 text-slate-600 leading-relaxed">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <p className="text-slate-600 leading-relaxed">
              The entire pipeline runs in about 90 seconds. No human reviews the content, picks the topic, or touches the publish button.
            </p>
          </section>

          {/* Architecture Diagram */}
          <section className="mb-16">
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-6 text-center">System Architecture</h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 text-sm">
                {[
                  { label: 'Google Sheet', sub: 'Topic Queue', icon: '📋' },
                  { label: 'Claude AI', sub: 'Content Generation', icon: '🤖' },
                  { label: 'GitHub', sub: 'Version Control', icon: '📦' },
                  { label: 'Railway', sub: 'Auto-Deploy', icon: '🚀' },
                  { label: 'Live Site', sub: 'Published Post', icon: '🌐' },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3 md:gap-4">
                    <div className="bg-white rounded-lg p-3 border border-slate-200 text-center min-w-[110px] shadow-sm">
                      <div className="text-xl mb-1">{step.icon}</div>
                      <div className="font-medium text-slate-900 text-xs">{step.label}</div>
                      <div className="text-slate-500 text-xs">{step.sub}</div>
                    </div>
                    {i < 4 && (
                      <svg className="w-4 h-4 text-slate-400 flex-shrink-0 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                    {i < 4 && (
                      <svg className="w-4 h-4 text-slate-400 flex-shrink-0 md:hidden rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-center text-xs text-slate-500 mt-6">
                Orchestrated by n8n, running on a schedule. No human in the loop.
              </p>
            </div>
          </section>

          {/* The Prompt */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The Prompt Engineering</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The quality of the output depends entirely on the prompt. A generic "write a blog post about cleaning" produces generic content that won't rank. The prompt we built includes specific instructions for:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                'SEO structure: keyword placement in title, H2s, first paragraph, and meta description',
                'Content differentiation: specific product recommendations, pro tips, common mistakes sections, and professional experience references',
                'Brand voice: writing as a knowledgeable friend, not a robot',
                'Internal linking: connecting blog posts to service pages and related content',
                'FAQ sections: structured Q&A format that targets featured snippets',
                'Readability: short paragraphs, bulleted lists, bold key takeaways',
              ].map((item, i) => (
                <li key={i} className="flex gap-2 text-slate-600 leading-relaxed">
                  <span className="text-blue-600 mt-1">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-600 leading-relaxed mb-6">
              Here's a simplified version of the prompt structure. The production version is customized for this specific business, their service areas, their internal linking structure, and their brand voice.
            </p>
            <div className="bg-slate-900 rounded-xl p-6 overflow-x-auto">
              <pre className="text-sm text-slate-300 whitespace-pre-wrap leading-relaxed font-mono">{`You are a senior content strategist writing for [Company Name],
a [business type] serving [service areas].

Write a blog post about: "[Topic]"
Primary keyword: "[Keyword]"

REQUIREMENTS:
- 1,500-2,200 words
- Include 2+ specific product recommendations with reasoning
- Include at least 1 "pro tip" only a professional would know
- Include a "common mistakes" section
- Include a FAQ section with 3-4 questions
- Use the primary keyword 4-6 times naturally
- Short paragraphs (2-3 sentences max)
- Conclude with a soft CTA to your services

OUTPUT FORMAT:
Return valid JSON with: title, description, category,
readingTime, and content (full HTML).`}</pre>
            </div>
            <p className="text-sm text-slate-500 mt-3">
              The full production prompt is roughly 3x longer and includes specific service page slugs, local area references, and detailed HTML formatting instructions.
            </p>
          </section>

          {/* Topic Seeding */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Topic Strategy</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We seeded the Google Sheet with 65 blog topics across 9 categories, giving the system roughly 8 months of content without needing any input. Topics were selected based on:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                'High-intent search queries for residential cleaning services',
                'Seasonal cleaning topics that align with when people search',
                'Local SEO keywords targeting specific service areas',
                'Common customer questions the team hears on calls',
                'Long-tail keywords with lower competition but clear intent',
              ].map((item, i) => (
                <li key={i} className="flex gap-2 text-slate-600 leading-relaxed">
                  <span className="text-blue-600 mt-1">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-600 leading-relaxed">
              Each topic in the sheet includes the topic title, target keyword, category, slug, and optional service area for local targeting. When the queue runs low, seeding another batch is a one-time task.
            </p>
          </section>

          {/* Results / Numbers */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The Numbers</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                { label: 'Blog posts per week', value: '2', sub: 'Monday and Thursday at 9am' },
                { label: 'Topics pre-loaded', value: '65', sub: '~8 months of content queued' },
                { label: 'Words per post', value: '1,500-2,200', sub: 'Long-form, SEO-optimized' },
                { label: 'Human input required', value: 'Zero', sub: 'Fully autonomous after setup' },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-lg p-5 border border-slate-200">
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm font-medium text-slate-700 mt-1">{stat.label}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Cost Comparison */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Cost Comparison</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Content agencies typically charge per article or per month for blog management. Here's what this same output would cost through traditional channels vs. the automated system:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left py-3 px-4 font-semibold text-slate-900"></th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Content Agency</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Freelance Writer</th>
                    <th className="text-left py-3 px-4 font-semibold text-blue-700 bg-blue-50 rounded-t-lg">This System</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: 'Monthly cost', agency: '$2,000-5,000', freelance: '$800-2,000', system: '~$15-25' },
                    { label: 'Posts per month', agency: '4-8', freelance: '4-8', system: '8-9' },
                    { label: 'Cost per post', agency: '$250-625', freelance: '$100-250', system: '~$2-3' },
                    { label: 'Your time per post', agency: '30-60 min review', freelance: '30-60 min review', system: '0 min' },
                    { label: 'Annual cost', agency: '$24,000-60,000', freelance: '$9,600-24,000', system: '~$200-300' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-slate-100">
                      <td className="py-3 px-4 font-medium text-slate-700">{row.label}</td>
                      <td className="py-3 px-4 text-slate-600">{row.agency}</td>
                      <td className="py-3 px-4 text-slate-600">{row.freelance}</td>
                      <td className="py-3 px-4 text-blue-700 font-medium bg-blue-50">{row.system}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-3">
              System cost includes Claude API usage (~$0.15-0.25 per post) and n8n Cloud hosting (~$20/month). Does not include one-time setup cost.
            </p>
          </section>

          {/* Tech Stack */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Tech Stack</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { tool: 'n8n Cloud', role: 'Workflow automation and scheduling' },
                { tool: 'Claude (Anthropic)', role: 'AI content generation' },
                { tool: 'Google Sheets', role: 'Topic queue and status tracking' },
                { tool: 'GitHub API', role: 'File push and version control' },
                { tool: 'Next.js + Railway', role: 'Website and auto-deployment' },
                { tool: 'Claude Code', role: 'Built the entire website' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 p-3 rounded-lg bg-white border border-slate-200">
                  <div>
                    <div className="text-sm font-medium text-slate-900">{item.tool}</div>
                    <div className="text-xs text-slate-500">{item.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* How to Replicate */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How to Replicate This</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              If you want to build this system for your own business, here's what's involved:
            </p>

            <div className="space-y-4">
              {[
                {
                  step: '1. Set up your website for blog content',
                  detail: 'Your site needs a blog section that can render posts from files or a CMS. This project uses JSON files pushed to a Git repo, but you could also use WordPress, Webflow, or any platform that accepts content via API.',
                },
                {
                  step: '2. Create an n8n Cloud account',
                  detail: 'n8n is the automation platform that orchestrates the workflow. You\'ll need a cloud account or a self-hosted instance. Connect it to Google Sheets (OAuth), set up HTTP request nodes for the Claude API and GitHub API.',
                },
                {
                  step: '3. Get a Claude API key',
                  detail: 'Sign up at Anthropic\'s console and load API credits. Each blog post costs roughly $0.15-0.25 in API usage. At 8 posts/month, that\'s about $1.50-2.00/month.',
                },
                {
                  step: '4. Build your topic queue',
                  detail: 'Create a Google Sheet with columns for topic, keyword, category, slug, status, published_date, and URL. Research keywords relevant to your business and fill in 30-60 topics.',
                },
                {
                  step: '5. Write the prompt',
                  detail: 'This is the hardest part. The prompt needs to encode your brand voice, SEO strategy, content structure, internal linking strategy, and output format. A weak prompt produces generic content that won\'t rank.',
                },
                {
                  step: '6. Build the n8n workflow',
                  detail: 'Connect the nodes: Schedule Trigger, Google Sheets (read), Code (build prompt), HTTP Request (Claude API), Code (parse response), HTTP Request (GitHub push), Google Sheets (update status). Configure error handling and retries.',
                },
                {
                  step: '7. Test end-to-end',
                  detail: 'Run the workflow manually and verify: the post appears on your site, the content is well-structured, internal links work, the sheet gets updated, and the slug matches your URL structure.',
                },
                {
                  step: '8. Activate and monitor',
                  detail: 'Set the schedule, activate the workflow, and check the execution logs weekly for the first month. After that, it runs on its own.',
                },
              ].map((item, i) => (
                <div key={i} className="border border-slate-200 rounded-lg p-4">
                  <div className="font-medium text-slate-900 mb-1">{item.step}</div>
                  <div className="text-sm text-slate-600 leading-relaxed">{item.detail}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-amber-800 leading-relaxed">
                <strong>Honest note:</strong> The setup is the hard part. If you're comfortable with APIs, workflow automation, and prompt engineering, you can build this yourself. If terms like "OAuth," "API endpoint," or "JSON schema" aren't familiar, the setup will be frustrating. That's not a knock on you. It's just a different skill set.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="mb-16">
            <div className="bg-slate-900 rounded-xl p-8 md:p-10 text-center">
              <h2 className="text-2xl font-bold text-white mb-3">
                Want this built for your business?
              </h2>
              <p className="text-slate-400 mb-6 max-w-xl mx-auto leading-relaxed">
                We build custom automation systems for service businesses. If you want a blog pipeline like this, or you're curious what else can be automated in your operations, let's talk.
              </p>
              <a
                href="https://cal.com/roy-banwell/ai-strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => window.dataLayer?.push({ event: 'cal_booking_click', booking_source: 'case_study_cta' })}
                className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all shadow-sm hover:shadow-md"
              >
                Book a Strategy Call
              </a>
              <p className="text-xs text-slate-500 mt-3">
                Free, 30 minutes. No pitch deck, just a conversation about your business.
              </p>
            </div>
          </section>

        </div>
      </article>

      <Footer />
    </div>
  )
}
