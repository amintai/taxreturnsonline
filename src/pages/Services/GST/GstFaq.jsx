import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is GST registration?",
    answer:
      "GST (Goods and Services Tax) registration is the process of obtaining a unique GSTIN from the government. It is mandatory for businesses whose annual turnover exceeds ₹40 lakhs (goods) or ₹20 lakhs (services).",
  },
  {
    question: "Who needs GST registration in India?",
    answer:
      "Any business with annual turnover above ₹40 lakhs for goods or ₹20 lakhs for services must register. It is also mandatory for e-commerce sellers, inter-state suppliers, and businesses liable to pay tax under reverse charge.",
  },
  {
    question: "What is the penalty for not registering for GST?",
    answer:
      "Operating without GST registration when required attracts a penalty of 10% of the tax amount owed, subject to a minimum of ₹10,000. In cases of deliberate tax evasion, the penalty can be 100% of the tax due.",
  },
  {
    question: "How long does GST registration take?",
    answer:
      "GST registration typically takes 4–6 working days after all documents are submitted correctly. Our CA team handles the entire process to ensure there are no delays.",
  },
  {
    question: "What documents are required for GST registration?",
    answer:
      "You need PAN card, Aadhaar card, proof of business address, bank account details, and a passport-size photograph. For companies, additional documents like the Certificate of Incorporation are required.",
  },
  {
    question: "Can I cancel my GST registration?",
    answer:
      "Yes, GST registration can be cancelled if your turnover falls below the threshold or if you close your business. We assist with the cancellation process to ensure compliance.",
  },
];

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-gray-800">{question}</span>
        <ChevronDown
          size={18}
          className={
            "text-[#005C9D] shrink-0 transition-transform duration-200 " +
            (open ? "rotate-180" : "")
          }
        />
      </button>
      {open && (
        <div className="px-5 pb-4 bg-white">
          <p className="text-sm text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

const GstFaq = () => (
  <div className="space-y-3">
    {faqs.map((faq) => (
      <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
    ))}
  </div>
);

export default GstFaq;
