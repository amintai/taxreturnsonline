import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Helmet } from 'react-helmet';

const faqs = [
  {
    q: 'What does an accounting service include?',
    a: 'Our accounting services cover bookkeeping, financial statement preparation, GST & TDS filing, payroll processing, and regulatory compliance — everything your business needs to stay financially organised.',
  },
  {
    q: 'Why do startups and small businesses need accounting services?',
    a: 'Professional accounting ensures accurate records, maximises tax savings, and gives you real financial visibility — freeing you to focus on growth instead of paperwork.',
  },
  {
    q: 'How often should bookkeeping be done?',
    a: 'Ideally monthly. Regular bookkeeping prevents errors from piling up, keeps your GST filings accurate, and ensures you always have up-to-date financial data.',
  },
  {
    q: 'Can you handle GST and TDS compliance for my business?',
    a: 'Yes. Our team manages GST return filing (GSTR-1, GSTR-3B), TDS computation and returns (24Q, 26Q), and keeps you compliant with all deadlines.',
  },
  {
    q: 'Are online accounting services reliable?',
    a: 'Absolutely. We use secure, cloud-based tools and assign a dedicated CA to your account — giving you the expertise of a traditional CA firm with the convenience of a fully online process.',
  },
  {
    q: 'What is the pricing for accounting services?',
    a: 'Our plans start at ₹2,999/month depending on transaction volume and services required. Contact us for a custom quote tailored to your business.',
  },
];

const AccountingFaq = () => {
  const [open, setOpen] = useState(null);

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(({ q, a }) => ({
            "@type": "Question",
            "name": q,
            "acceptedAnswer": { "@type": "Answer", "text": a }
          }))
        })}</script>
      </Helmet>
      <div className="space-y-3">
        {faqs.map(({ q, a }, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <button
              className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className="font-medium text-gray-900 text-sm">{q}</span>
              <ChevronDown
                size={18}
                className={`text-gray-400 shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
              />
            </button>
            {open === i && (
              <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-50">
                {a}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default AccountingFaq;
