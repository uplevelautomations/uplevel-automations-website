// Free playbooks, gated: the reader gives name, email, phone and company,
// then gets the PDF on the page and by email (server/api/playbook-download.ts).
// Every playbook is about AI automations a cleaning company can run, built
// from what Roy runs in his own company. Source HTML and render script for
// each PDF live in roy-hq: Claude Code for UpLevel/3-marketing/playbooks/<slug>/.
//
// The PDF sits at an unlisted path under /playbooks/files/ (served with
// X-Robots-Tag: noindex). Adding a playbook = one entry here, its files in
// public/playbooks/files/, and a meta entry in src/seo/meta.ts.

export interface Playbook {
  slug: string
  title: string
  forWho: string
  pitch: string
  pages: number
  /** Public path of the PDF (unlisted, noindex). */
  file: string
  cover: string
  peek: { src: string; alt: string }[]
  inside: { n: string; title: string; text: string }[]
  learn: string[]
}

export const PLAYBOOKS: Playbook[] = [
  {
    slug: 'ai-lead-follow-up',
    title: 'The AI Lead Follow-Up Playbook',
    forWho: 'for cleaning companies',
    pitch:
      'Seven automations that make sure no lead gets dropped, in the order I’d build them. Each one is running in my own cleaning company or a client’s, with the real numbers behind it.',
    pages: 13,
    file: '/playbooks/files/ai-lead-follow-up-r7k2m9.pdf',
    cover: '/playbooks/files/ai-lead-follow-up-cover.png',
    peek: [
      { src: '/playbooks/files/ai-lead-follow-up-p3.png', alt: 'Page 3: where cleaning leads actually leak, from 935 real leads' },
      { src: '/playbooks/files/ai-lead-follow-up-p8.png', alt: 'Page 8: the AI reader that works out what each lead is owed' },
    ],
    inside: [
      { n: '01', title: 'Instant reply, day or night', text: 'Leads and emails answered within minutes, at any hour.' },
      { n: '02', title: 'The junk filter', text: 'AI sets aside vendors, applicants and robots, only when it’s sure.' },
      { n: '03', title: 'The 15-minute nudge', text: 'Untouched leads tag whoever is on shift, in your team chat.' },
      { n: '04', title: 'The AI reader', text: 'Reads every conversation and says what’s owed: a call, a price, a reply.' },
      { n: '05', title: 'Fewer, better pings', text: 'The rules that took us from 208 messages a day to pings people act on.' },
      { n: '06', title: 'Non-responders to automation', text: 'When your team stops chasing, and the drip takes over.' },
      { n: '07', title: 'Waking up old leads safely', text: 'The order that keeps your texting account from getting locked.' },
    ],
    learn: [
      'Where 935 real cleaning leads leaked, and which losses automation can help with',
      'The exact rules, thresholds and guardrails, not just the idea',
      'What to measure, and my before and after numbers, including the one that got worse',
      'A three-week build order',
    ],
  },
]

export const playbookBySlug = (slug: string) => PLAYBOOKS.find((p) => p.slug === slug)
