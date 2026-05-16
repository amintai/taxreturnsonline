import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Helmet } from 'react-helmet';

const faqs = [
  {
    q: 'What is Import Export Code (IEC)?',
    a: 'IEC is a 10-digit business identification number issued by the Directorate General of Foreign Trade (DGFT), Ministry of Commerce, Government of India. It is mandatory for any business or individual wanting to import or export goods from India.',
  },
  {
    q: 'When is IEC required?',
    a: 'IEC is required whenever a business or individual wants to import goods into India or export goods from India. Banks also require IEC for processing foreign trade payments.',
  },
  {
    q: 'Who can apply for IEC?',
    a: 'Any business entity — companies, LLPs, partnerships, proprietorships, HUFs, trusts, NGOs, and individuals — engaged in import or export activities can apply for an IEC.',
  },
  {
    q: 'What is the government fee for IEC registration?',
    a: 'The government fee for IEC registration is ₹500. Our professional service charges start at ₹1,999, which includes document preparation, DGFT filing, and follow-up until the IEC is issued.',
  },
  {
    q: 'How long does IEC registration take?',
    a: 'IEC registration typically takes 3–5 working days after all documents are submitted. In some cases, it can be issued within 1–2 days.',
  },
  {
    q: 'Does IEC need to be renewed?',
    a: 'No. IEC has lifetime validity and does not require annual renewal. However, it must be updated if there are changes in business details like address, directors, or bank account.',
  },
];

const IecFaq = () => {
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

export default IecFaq;

const IecFaq = () => {
  const [open, setOpen] = useState(null);

  return (
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
  );
};

export default IecFaq;
