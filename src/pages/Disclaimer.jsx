import { AlertCircle } from 'lucide-react';
import { Helmet } from 'react-helmet';
import LegalPageLayout from '../components/LegalPageLayout';

const sections = [
  {
    title: '1. General Information Only',
    content: 'The information provided on TaxReturnsOnline is for general guidance purposes only. While we strive to keep all content accurate and up to date, we make no representations or warranties of any kind  express or implied  about the completeness, accuracy, reliability, or suitability of the information on this website for any particular purpose.',
  },
  {
    title: '2. Not a Substitute for Professional Advice',
    content: 'Nothing on this website constitutes professional legal, tax, or financial advice. Every individual and business situation is unique. You should always consult with a qualified Chartered Accountant, tax advisor, or legal professional before making any decision or taking any action that may affect your finances, tax obligations, or compliance status.',
  },
  {
    title: '3. Accuracy of Tax Information',
    content: 'Tax laws, rates, and regulations in India change frequently. While our team works to keep information current, there may be a delay between regulatory changes and updates to our website. We recommend verifying all tax-related information with the Income Tax Department, GST Council, or MCA portals directly, or consulting our CA team for the latest guidance.',
  },
  {
    title: '4. Limitation of Liability',
    content: 'TaxReturnsOnline and its team shall not be liable for any direct, indirect, incidental, consequential, or punitive loss or damage arising from:',
    bullets: [
      'Reliance on information published on this website.',
      'Errors or omissions in content, even if we have been advised of the possibility of such damage.',
      'Loss of data, profits, or business opportunities arising from use of our services.',
      'Delays or failures caused by government portal outages or technical issues beyond our control.',
    ],
  },
  {
    title: '5. External Links',
    content: 'This website may contain links to third-party websites such as the Income Tax portal, GST portal, or MCA portal. These links are provided for convenience only. TaxReturnsOnline has no control over the content, availability, or accuracy of those sites and does not endorse or accept responsibility for them.',
  },
  {
    title: '6. Service Availability',
    content: 'We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice. We are not liable for any modification, suspension, or discontinuance of services. We will make reasonable efforts to notify clients of significant changes.',
  },
  {
    title: '7. Client Responsibility',
    content: 'The accuracy of all filings and submissions depends entirely on the information and documents provided by you. TaxReturnsOnline is not responsible for penalties, notices, or legal consequences arising from incorrect, incomplete, or fraudulent information provided by clients.',
  },
];

const Disclaimer = () => (
  <>
    <Helmet>
      <title>Disclaimer  TaxReturnsOnline</title>
      <meta name="description" content="Read the Disclaimer for TaxReturnsOnline to understand the limitations of our services and information provided on this website." />
      <link rel="canonical" href="https://www.taxreturnsonline.in/disclaimer" />
    </Helmet>

    <LegalPageLayout
      icon={AlertCircle}
      iconBg="bg-amber-100"
      iconColor="text-amber-600"
      title="Disclaimer"
      subtitle="Please read this disclaimer carefully before using our website and services."
      lastUpdated="May 2025"
      activePath="/disclaimer"
    >
      <div className="space-y-8">
        <p className="text-gray-500 text-sm leading-relaxed border-l-4 border-amber-400 pl-4">
          This disclaimer governs your use of TaxReturnsOnline. By using our website and services, you accept this disclaimer in full. If you disagree with any part of this disclaimer, do not use our website.
        </p>

        {sections.map(({ title, content, bullets }) => (
          <div key={title}>
            <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-amber-400 rounded-full inline-block" />
              {title}
            </h2>
            {content && <p className="text-gray-600 leading-relaxed text-sm mb-3">{content}</p>}
            {bullets && (
              <ul className="space-y-2">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </LegalPageLayout>
  </>
);

export default Disclaimer;
