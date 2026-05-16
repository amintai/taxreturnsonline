import { FileText } from 'lucide-react';
import { Helmet } from 'react-helmet';
import LegalPageLayout from '../components/LegalPageLayout';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: 'By accessing or using TaxReturnsOnline, you agree to comply with and be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any part of these terms, please do not use our website or services.',
  },
  {
    title: '2. Scope of Services',
    content: 'TaxReturnsOnline provides CA-assisted online tax filing, GST compliance, company registration, bookkeeping, and related financial services. All filings and submissions are based entirely on the information and documents you provide. It is your sole responsibility to ensure the accuracy, completeness, and timeliness of all data submitted to us.',
  },
  {
    title: '3. User Responsibilities',
    bullets: [
      'Provide accurate, complete, and up-to-date personal and financial information.',
      'Ensure all documents shared with us are genuine and legally valid.',
      'Do not use the site for unlawful purposes or transmit harmful, fraudulent, or misleading content.',
      'Keep your contact details and communication channels updated.',
      'Respond promptly to requests for additional information or clarification.',
    ],
  },
  {
    title: '4. Service Fees & Payments',
    content: 'Service fees are communicated upfront before work begins. Fees are non-refundable once the filing or service has been initiated, except in cases of error on our part. Government fees, if any, are charged separately and are not included in our professional fees unless explicitly stated.',
  },
  {
    title: '5. Limitation of Liability',
    content: 'We make every effort to ensure accuracy and timely filing. However, TaxReturnsOnline is not liable for:',
    bullets: [
      'Errors, penalties, or notices resulting from incorrect or incomplete information provided by you.',
      'Delays caused by government portal downtime or technical issues beyond our control.',
      'Consequences arising from changes in tax laws or regulations after your filing.',
    ],
  },
  {
    title: '6. Intellectual Property',
    content: 'All content on this website  including logos, text, graphics, and service descriptions  is owned by TaxReturnsOnline and protected under applicable Indian intellectual property laws. You may not reproduce, distribute, or use our content without prior written permission.',
  },
  {
    title: '7. Confidentiality',
    content: 'We treat all client information as strictly confidential. Our team members are bound by confidentiality obligations. We will not disclose your information to third parties except as required for service delivery or by law.',
  },
  {
    title: '8. Governing Law',
    content: 'These Terms of Use are governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat.',
  },
  {
    title: '9. Amendments',
    content: 'We reserve the right to update these Terms of Use at any time. Changes will be effective upon posting on this page. Continued use of our services after any changes constitutes your acceptance of the revised terms.',
  },
];

const TermsOfUse = () => (
  <>
    <Helmet>
      <title>Terms of Use  TaxReturnsOnline</title>
      <meta name="description" content="Read the Terms of Use for TaxReturnsOnline to understand your rights and responsibilities when using our services." />
      <link rel="canonical" href="https://www.taxreturnsonline.in/terms-of-use" />
    </Helmet>

    <LegalPageLayout
      icon={FileText}
      iconBg="bg-blue-100"
      iconColor="text-blue-600"
      title="Terms of Use"
      subtitle="Understand your rights and responsibilities when using our CA-assisted tax and compliance services."
      lastUpdated="May 2025"
      activePath="/terms-of-use"
    >
      <div className="space-y-8">
        <p className="text-gray-500 text-sm leading-relaxed border-l-4 border-[#005C9D] pl-4">
          Please read these terms carefully. By using TaxReturnsOnline, you enter into a binding agreement with us. These terms govern your use of our website and all services we provide.
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
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
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

export default TermsOfUse;
