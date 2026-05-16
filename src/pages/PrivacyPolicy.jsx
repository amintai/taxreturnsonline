import { Shield } from 'lucide-react';
import { Helmet } from 'react-helmet';
import LegalPageLayout from '../components/LegalPageLayout';

const sections = [
  {
    title: '1. Information We Collect',
    content: 'We collect personal information including your name, contact details, PAN, Aadhaar, financial data, and documents necessary for filing tax returns and providing compliance services. This information is collected directly from you when you register, upload documents, or interact with our team via WhatsApp, email, or our website.',
  },
  {
    title: '2. How We Use Your Information',
    bullets: [
      'Filing Income Tax Returns, GST returns, and related compliance services.',
      'Communicating important updates, filing reminders, and deadline alerts.',
      'Improving our services and personalising your experience.',
      'Meeting legal and regulatory obligations under Indian law.',
    ],
  },
  {
    title: '3. Data Protection & Security',
    content: 'We implement industry-standard security measures including encryption, secure servers, and restricted access controls to protect your data. Your financial documents are handled only by authorised CA team members. No method of transmission over the internet is completely secure  by using our services, you acknowledge these inherent risks.',
  },
  {
    title: '4. Sharing of Information',
    content: 'We do not sell, rent, or trade your personal data. Information may be shared only in the following circumstances:',
    bullets: [
      'With government portals (Income Tax, GST, MCA) for filings and compliance.',
      'With authorised CA team members for service delivery.',
      'When required by law, court order, or regulatory authorities.',
    ],
  },
  {
    title: '5. Data Retention',
    content: 'We retain your personal data for as long as necessary to provide our services and comply with legal obligations. Tax-related records are typically retained for 7 years as required under the Income Tax Act. You may request deletion of your data subject to applicable legal requirements.',
  },
  {
    title: '6. Your Rights',
    content: 'You have the right to access, correct, or request deletion of your personal data at any time. To exercise these rights, contact us at support@taxreturnsonline.in. We will respond within 30 days in accordance with applicable laws.',
  },
  {
    title: '7. Cookies',
    content: 'Our website may use cookies to improve your browsing experience and analyse site traffic. You can disable cookies in your browser settings, though this may affect some functionality of the site.',
  },
  {
    title: '8. Changes to this Policy',
    content: 'We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date. Continued use of our services after changes constitutes acceptance of the revised policy.',
  },
];

const PrivacyPolicy = () => (
  <>
    <Helmet>
      <title>Privacy Policy  TaxReturnsOnline</title>
      <meta name="description" content="Read the Privacy Policy for TaxReturnsOnline to understand how we collect, use, and protect your data." />
      <link rel="canonical" href="https://www.taxreturnsonline.in/privacy-policy" />
    </Helmet>

    <LegalPageLayout
      icon={Shield}
      iconBg="bg-green-100"
      iconColor="text-green-500"
      title="Privacy Policy"
      subtitle="Learn how we collect, use, and safeguard your information at TaxReturnsOnline."
      lastUpdated="May 2025"
      activePath="/privacy-policy"
    >
      <div className="space-y-8">
        <p className="text-gray-500 text-sm leading-relaxed border-l-4 border-[#005C9D] pl-4">
          At TaxReturnsOnline, your privacy is our priority. This policy explains how we handle your personal and financial information when you use our CA-assisted tax and compliance services.
        </p>

        {sections.map(({ title, content, bullets }) => (
          <div key={title}>
            <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-[#005C9D] rounded-full inline-block" />
              {title}
            </h2>
            {content && <p className="text-gray-600 leading-relaxed text-sm mb-3">{content}</p>}
            {bullets && (
              <ul className="space-y-2">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
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

export default PrivacyPolicy;
