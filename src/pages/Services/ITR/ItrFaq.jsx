import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Helmet } from "react-helmet";

const faqs = [
  {
    q: "Who needs to file an ITR?",
    a: "Any individual whose gross income exceeds the basic exemption limit (₹2.5L / ₹3L for seniors), or who wants to claim a refund, has foreign assets, or has carried forward losses must file an ITR.",
  },
  {
    q: "What documents are required for ITR filing?",
    a: "PAN card, Aadhaar, Form 16 or salary slips, bank statements, investment proofs (80C, 80D), and TDS certificates (Form 26AS) are typically needed.",
  },
  {
    q: "Can I file ITR without Form 16?",
    a: "Yes. You can file using your salary details, bank statement, and Form 26AS from the IT portal. Our CAs handle this regularly.",
  },
  {
    q: "What is the last date to file ITR?",
    a: "For most individuals, the due date is July 31 of the assessment year. Late filing attracts a penalty of up to ₹5,000 under Section 234F.",
  },
  {
    q: "How long does it take to file my return?",
    a: "Once you share all documents, our CA prepares and files your return within 24–48 hours.",
  },
  {
    q: "Is it mandatory to file ITR for zero income?",
    a: "Not mandatory, but filing a nil return is useful for visa applications, loan processing, and building a financial track record.",
  },
];

const ItrFaq = () => {
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
        <div
          key={i}
          className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
        >
          <button
            className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-medium text-gray-900 text-sm">{q}</span>
            <ChevronDown
              size={18}
              className={`text-gray-400 shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
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

export default ItrFaq;
