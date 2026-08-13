import { Link } from 'react-router-dom'
import LegalPage, { LegalList, LegalSection } from '../components/LegalPage'

const sections: LegalSection[] = [
  {
    id: 'agreement',
    heading: 'The agreement',
    body: (
      <>
        <p>
          These terms govern your use of <strong>uplevelautomations.com</strong> and the free
          tools on it. By using the site, you agree to them. If you do not agree, please do not
          use the site.
        </p>
        <p>
          "We" and "us" mean UpLevel Automations, a business operated by Roy Banwell out of
          Miami, Florida. "You" means you, or the company you are acting for.
        </p>
      </>
    ),
  },
  {
    id: 'what-we-provide',
    heading: 'What this site provides',
    body: (
      <>
        <p>The site does three things:</p>
        <LegalList
          items={[
            <>
              <strong>Information.</strong> Case studies, proof pages, and write-ups about
              systems we have built.
            </>,
            <>
              <strong>Free tools.</strong> The AI Readiness Assessment and the Process Mapper.
            </>,
            <>
              <strong>A way to start a conversation.</strong> Booking a call about paid work.
            </>,
          ]}
        />
        <p>
          Nothing on this site is an offer to enter a contract, and nothing on it is
          professional, legal, financial, or tax advice.
        </p>
      </>
    ),
  },
  {
    id: 'free-tools',
    heading: 'The free tools, and their limits',
    body: (
      <>
        <p>
          The assessment and the Process Mapper are provided free and{' '}
          <strong>as is</strong>. They are lead generation and diagnostic tools, not a
          professional audit of your business.
        </p>
        <p>
          The Process Mapper is powered by a large language model.{' '}
          <strong>
            AI generated output can be wrong, incomplete, or confidently mistaken.
          </strong>{' '}
          The process map it produces reflects what you told it, filtered through a model. Check
          it before you rely on it, and do not make hiring, financial, or operational decisions
          on the strength of it alone.
        </p>
        <p>
          Do not enter confidential or regulated information into these tools. See the{' '}
          <Link to="/privacy">Privacy Policy</Link> for where that data goes.
        </p>
        <p>
          We may change, limit, or discontinue the free tools at any time without notice.
        </p>
      </>
    ),
  },
  {
    id: 'no-guarantee',
    heading: 'No guarantee of results',
    body: (
      <>
        <p>
          This site describes results achieved in a specific cleaning company and for specific
          clients. Those are real numbers from real deployments. They are{' '}
          <strong>not a promise of what you will get</strong>.
        </p>
        <p>
          Outcomes depend on your data quality, your team, your tools, your market, and how much
          of the system you actually adopt. Nothing here should be read as a guarantee of
          revenue, savings, bookings, or any other result.
        </p>
      </>
    ),
  },
  {
    id: 'paid-work',
    heading: 'Paid engagements',
    body: (
      <>
        <p>
          Paid work is governed by a written Statement of Work signed for that specific project.
          The SOW defines scope, price, deliverables, timeline, and what is excluded.
        </p>
        <p>
          <strong>
            If anything in these terms conflicts with a signed SOW, the SOW controls for that
            engagement.
          </strong>{' '}
          These terms fill the gaps, they do not override the deal.
        </p>
      </>
    ),
  },
  {
    id: 'fees',
    heading: 'Fees, payment, and third party costs',
    body: (
      <>
        <p>Unless your SOW says otherwise:</p>
        <LegalList
          items={[
            'Projects are quoted at a fixed price and paid upfront before work begins.',
            'A support window is included after delivery, as stated in your SOW. In scope bugs and tuning during that window are on us.',
            'Work outside the agreed scope is quoted and agreed separately, at the hourly rate stated in your SOW or a rate agreed in writing before that work starts.',
            'Third party platform costs, such as your CRM or messaging provider, are billed to you directly by that vendor. We do not mark them up and we do not resell them.',
          ]}
        />
        <p>
          You are responsible for maintaining your own subscriptions to those third party
          platforms. If they lapse, the systems we built on top of them stop working, and that is
          outside our control.
        </p>
      </>
    ),
  },
  {
    id: 'your-responsibilities',
    heading: 'What we need from you',
    body: (
      <>
        <p>
          Delivery depends on your input. For a project to land on time you need to provide
          access to the relevant systems, the data exports we ask for, and timely sign-off on
          the things that need your approval.
        </p>
        <p>
          You confirm that you have the right to give us access to any system or data you hand
          over, and that doing so does not breach a contract or law that binds you.
        </p>
      </>
    ),
  },
  {
    id: 'ip',
    heading: 'Intellectual property',
    body: (
      <>
        <p>
          The content of this site, including text, design, case studies, and code, belongs to
          UpLevel Automations. You may read it, quote it with attribution, and share links to
          it. You may not republish it wholesale or present it as your own.
        </p>
        <p>
          Ownership of what we build for you is defined in your SOW. Where a build is delivered
          into infrastructure you own, such as your own repository or hosting account, it is
          yours. We keep ownership of the general methods, templates, and know-how we bring to
          every engagement, and we may reuse them.
        </p>
      </>
    ),
  },
  {
    id: 'acceptable-use',
    heading: 'Acceptable use',
    body: (
      <>
        <p>Do not:</p>
        <LegalList
          items={[
            'Submit false information, or someone else\'s personal information, through the tools.',
            'Attempt to break, overload, scrape, or reverse engineer the site or its API endpoints.',
            'Use the tools to build a competing product, or to extract our prompts and methods.',
            'Use the site for anything unlawful.',
          ]}
        />
        <p>We may block access to anyone doing these things.</p>
      </>
    ),
  },
  {
    id: 'third-parties',
    heading: 'Third party services',
    body: (
      <p>
        The site links to and depends on services we do not control, including Cal.com, Google,
        Anthropic, and Resend. We are not responsible for their availability, their content, or
        their terms. Your use of those services is between you and them.
      </p>
    ),
  },
  {
    id: 'warranties',
    heading: 'Disclaimer of warranties',
    body: (
      <p>
        The site and the free tools are provided as is and as available, without warranties of
        any kind, whether express or implied, including any implied warranty of
        merchantability, fitness for a particular purpose, or non-infringement. We do not
        warrant that the site will be uninterrupted, error free, or that any content or AI
        generated output is accurate. Warranties for paid work, if any, are those stated in your
        SOW.
      </p>
    ),
  },
  {
    id: 'liability',
    heading: 'Limitation of liability',
    body: (
      <>
        <p>
          To the fullest extent permitted by law, we are not liable for indirect, incidental,
          special, consequential, or punitive damages, or for lost profits, lost revenue, lost
          data, or business interruption, arising out of your use of the site or the free tools.
        </p>
        <p>
          For any claim relating to the site or the free tools, our total liability is capped at
          one hundred US dollars. For a paid engagement, our total liability is capped at the
          amount you actually paid us for that engagement, unless the SOW states otherwise.
        </p>
        <p>
          Some jurisdictions do not allow these exclusions, so parts of this section may not
          apply to you.
        </p>
      </>
    ),
  },
  {
    id: 'indemnity',
    heading: 'Indemnification',
    body: (
      <p>
        You agree to indemnify and hold harmless UpLevel Automations and Roy Banwell from claims
        and costs arising out of your misuse of the site, your breach of these terms, or your
        having given us access to systems or data you did not have the right to share.
      </p>
    ),
  },
  {
    id: 'termination',
    heading: 'Termination',
    body: (
      <p>
        We may suspend or end your access to the site or the free tools at any time, for any
        reason. Termination of an engagement is handled under the applicable SOW. The sections
        on intellectual property, disclaimers, liability, indemnification, severability and
        waiver, and governing law survive.
      </p>
    ),
  },
  {
    id: 'severability',
    heading: 'Severability and waiver',
    body: (
      <p>
        If any part of these terms is found unenforceable, that part is limited or removed to
        the minimum extent necessary and the rest stays in force. If we do not enforce a
        provision straight away, that is not a waiver of it, and it does not stop us enforcing
        it later.
      </p>
    ),
  },
  {
    id: 'governing-law',
    heading: 'Governing law and disputes',
    body: (
      <p>
        These terms are governed by the laws of the <strong>State of Florida</strong>, without
        regard to its conflict of laws principles. Any dispute arising under these terms shall be
        brought exclusively in the state or federal courts located in{' '}
        <strong>Miami-Dade County, Florida</strong>, and both parties consent to that
        jurisdiction.
      </p>
    ),
  },
  {
    id: 'changes',
    heading: 'Changes to these terms',
    body: (
      <p>
        We may update these terms. The date at the top shows the current version, and continuing
        to use the site after a change means you accept it. Changes do not retroactively alter a
        signed SOW.
      </p>
    ),
  },
  {
    id: 'contact',
    heading: 'Contact',
    body: (
      <>
        <p>Questions about these terms:</p>
        <LegalList
          items={[
            <>
              Email: <a href="mailto:roy@uplevelautomations.com">roy@uplevelautomations.com</a>
            </>,
            <>
              Phone: <a href="tel:+13013857585">+1 (301) 385-7585</a>
            </>,
            <>UpLevel Automations, Miami, Florida, United States</>,
          ]}
        />
      </>
    ),
  },
]

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="The rules for using this site and its free tools, and how they relate to paid work."
      updated="August 13, 2026"
      sections={sections}
    />
  )
}
