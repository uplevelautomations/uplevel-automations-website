import LegalPage, { LegalList, LegalSection } from '../components/LegalPage'

const processors = [
  {
    name: 'Google (Tag Manager and Analytics)',
    purpose: 'Website traffic and usage measurement',
    data: 'Device, browser, approximate location, pages viewed, plus the activity values described under "Information collected automatically"',
  },
  {
    name: 'Google (Apps Script and Sheets)',
    purpose: 'Storing assessment, Process Mapper, and email opt-in submissions',
    data: 'Name, email, phone, your answers, your full Process Mapper transcript',
  },
  {
    name: 'Google Fonts',
    purpose: 'Serving the typeface used on this site',
    data: 'IP address, browser type',
  },
  {
    name: 'Anthropic',
    purpose: 'Powering the Process Mapper conversation',
    data: 'What you type into the Process Mapper',
  },
  {
    name: 'Resend',
    purpose: 'Sending your results and notifying us',
    data: 'Name, email, your submission contents',
  },
  {
    name: 'Cal.com',
    purpose: 'The booking calendar, which is embedded on the assessment results page',
    data: 'IP and browser of anyone who loads a page with the calendar, plus whatever you enter if you book',
  },
  {
    name: 'Your browser vendor (voice input only)',
    purpose: 'Speech to text, if you use the microphone in the Process Mapper',
    data: 'The audio you dictate, as described under "Voice input"',
  },
  {
    name: 'Railway',
    purpose: 'Hosting this website and its server',
    data: 'Standard server and request logs',
  },
]

const sections: LegalSection[] = [
  {
    id: 'who-we-are',
    heading: 'Who we are',
    body: (
      <>
        <p>
          UpLevel Automations builds AI operations dashboards and automation for service
          businesses. This policy explains what we collect through{' '}
          <strong>uplevelautomations.com</strong>, why we collect it, and who it goes to.
        </p>
        <p>
          If you are an existing client, information we handle inside a paid engagement is
          governed by your Statement of Work and any separate confidentiality agreement, not
          by this policy.
        </p>
      </>
    ),
  },
  {
    id: 'what-you-give-us',
    heading: 'Information you give us',
    body: (
      <>
        <p>We receive what you enter into the site. The places that happens:</p>
        <LegalList
          items={[
            <>
              <strong>AI Readiness Assessment.</strong> Your name and email, your phone number
              and how you heard about us if you provide them, and your answers to the ten
              questions. We also record the score the assessment calculates.
            </>,
            <>
              <strong>Process Mapper.</strong> Your name and email, plus everything you write
              in the conversation. That typically includes your business name, business type,
              team size, the tools you use, and a description of how one of your processes
              actually runs.
            </>,
            <>
              <strong>Email opt-ins.</strong> If you ask us to send you something, such as the
              cleaning margins benchmark report, we receive the email address you give us.
            </>,
            <>
              <strong>Booking a call.</strong> Whatever you enter into the Cal.com booking
              form, which is at minimum your name and email.
            </>,
            <>
              <strong>Contacting us directly.</strong> Anything you send by email or phone.
            </>,
          ]}
        />
      </>
    ),
  },
  {
    id: 'incomplete-submissions',
    heading: 'Incomplete submissions',
    body: (
      <>
        <p>
          You should know this one because it is not obvious. If you enter your name and email
          into the Process Mapper and then leave without finishing,{' '}
          <strong>
            we still receive what you entered up to that point, along with a notification that
            you stopped
          </strong>
          . We use this to follow up and to understand where the tool loses people.
        </p>
        <p>
          If you would rather we delete an abandoned session, email us and we will remove it.
        </p>
      </>
    ),
  },
  {
    id: 'automatic',
    heading: 'Information collected automatically',
    body: (
      <>
        <p>
          Like most websites, we collect basic technical information when you visit: IP
          address, browser and device type, referring page, pages viewed, and time on page.
          This reaches us through Google Tag Manager and Google Analytics, and through standard
          server logs.
        </p>
        <p>
          <strong>Our analytics also record a few values taken from what you do</strong>, not
          just which pages you loaded. Specifically: that you started or finished the
          assessment, the score it produced and whether you qualified, that you started or
          finished the Process Mapper, the name of the process you mapped, which page an email
          opt-in came from, and that you clicked through to the booking calendar. These sit in
          Google Analytics alongside the technical data above.
        </p>
        <p>
          We do not use any of this to build advertising profiles, and this site's code contains
          no advertising or retargeting pixels.
        </p>
      </>
    ),
  },
  {
    id: 'ai-processing',
    heading: 'AI processing',
    body: (
      <>
        <p>
          The Process Mapper is powered by a large language model provided by{' '}
          <strong>Anthropic</strong>. What you type into that tool is sent to Anthropic's API so
          it can respond and produce your process map.
        </p>
        <p>
          Because of this, treat the Process Mapper the way you would treat any third party
          tool.{' '}
          <strong>
            Do not paste customer lists, employee records, payment details, passwords, or
            anything you are contractually required to keep confidential.
          </strong>{' '}
          Describe your process, not your data.
        </p>
      </>
    ),
  },
  {
    id: 'voice-input',
    heading: 'Voice input',
    body: (
      <>
        <p>
          The Process Mapper has an optional microphone button so you can talk instead of type.
          If you use it, your browser handles the speech to text, not us.
        </p>
        <p>
          <strong>
            In most browsers, including Chrome and Edge, that means your audio is sent to your
            browser vendor's speech recognition service to be transcribed.
          </strong>{' '}
          We never receive the audio itself. We only receive the text it produces, which then
          goes to exactly the same places as anything else you type into the tool.
        </p>
        <p>
          The microphone only runs while you have switched it on. If you would rather no audio
          leave your device, do not use the button and type instead.
        </p>
      </>
    ),
  },
  {
    id: 'how-we-use',
    heading: 'How we use your information',
    body: (
      <LegalList
        items={[
          'To generate and send the results you asked for, such as your assessment score or your process map PDF.',
          'To follow up about working together, including by email or phone.',
          'To understand which parts of the site and tools work and which do not.',
          'To operate, secure, and troubleshoot the website.',
          'To meet legal or tax obligations.',
        ]}
      />
    ),
  },
  {
    id: 'sharing',
    heading: 'Who we share it with',
    body: (
      <>
        <p>
          <strong>We do not sell your personal information, and we do not rent or trade it.</strong>{' '}
          We share it only with the service providers that make the site run, and only for the
          purposes listed here.
        </p>
        <div className="overflow-x-auto -mx-1">
          <table className="w-full text-sm border-collapse mt-2">
            <thead>
              <tr className="border-b border-slate-300">
                <th className="text-left font-semibold text-slate-900 py-2 pr-4 align-bottom">
                  Provider
                </th>
                <th className="text-left font-semibold text-slate-900 py-2 pr-4 align-bottom">
                  Why
                </th>
                <th className="text-left font-semibold text-slate-900 py-2 align-bottom">
                  What it sees
                </th>
              </tr>
            </thead>
            <tbody>
              {processors.map((p) => (
                <tr key={p.name} className="border-b border-slate-200 align-top">
                  <td className="py-2 pr-4 text-slate-900 font-medium">{p.name}</td>
                  <td className="py-2 pr-4">{p.purpose}</td>
                  <td className="py-2">{p.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          We may also disclose information if required by law, or in connection with a sale or
          transfer of the business.
        </p>
      </>
    ),
  },
  {
    id: 'cookies',
    heading: 'Cookies and tracking',
    body: (
      <>
        <p>
          We use Google Tag Manager and Google Analytics, which set cookies to measure traffic
          and understand how the site is used. These are analytics cookies, not advertising
          cookies.
        </p>
        <p>
          You can block or delete cookies in your browser settings, or install Google's{' '}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
          >
            Analytics opt-out add-on
          </a>
          . The site works fine without them.
        </p>
      </>
    ),
  },
  {
    id: 'retention',
    heading: 'How long we keep it',
    body: (
      <>
        <p>
          Assessment and Process Mapper submissions are kept for as long as they are useful for
          following up and improving the tools, unless you ask us to delete them. Analytics data
          follows Google's standard retention. Email correspondence is kept as part of our
          normal business records.
        </p>
        <p>Ask us to delete your information and we will, subject to any legal obligation to retain it.</p>
      </>
    ),
  },
  {
    id: 'your-rights',
    heading: 'Your choices and rights',
    body: (
      <>
        <p>Whatever jurisdiction you are in, you can ask us to:</p>
        <LegalList
          items={[
            'Tell you what information we hold about you.',
            'Correct anything that is wrong.',
            'Delete your information.',
            'Stop contacting you. Every marketing email has an unsubscribe link, and you can simply reply and say stop.',
          ]}
        />
        <p>
          Email <a href="mailto:roy@uplevelautomations.com">roy@uplevelautomations.com</a> and we
          will handle it. We do not charge for this and we will not make it difficult. If you are
          in California, the EU, or the UK, you may have additional statutory rights, and the
          same email address is the way to exercise them.
        </p>
      </>
    ),
  },
  {
    id: 'security',
    heading: 'Security',
    body: (
      <p>
        The site is served over HTTPS, and access to submission data is limited to Roy Banwell
        and the service providers listed above. No system is perfectly secure, so we cannot
        guarantee absolute security, which is another reason not to send sensitive data through
        the free tools.
      </p>
    ),
  },
  {
    id: 'children',
    heading: "Children's privacy",
    body: (
      <p>
        This is a business to business website. It is not directed at children under 13, and we
        do not knowingly collect their information. If you believe a child has submitted
        information, contact us and we will delete it.
      </p>
    ),
  },
  {
    id: 'changes',
    heading: 'Changes to this policy',
    body: (
      <p>
        If we change what we collect or who we share it with, we will update this page and the
        date at the top. Material changes will be reflected here before they take effect.
      </p>
    ),
  },
  {
    id: 'contact',
    heading: 'Contact',
    body: (
      <>
        <p>Questions about privacy, or a request about your data:</p>
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

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="What this site collects, why, and who it goes to. Written to be read, not to be hidden behind."
      updated="August 13, 2026"
      sections={sections}
    />
  )
}
