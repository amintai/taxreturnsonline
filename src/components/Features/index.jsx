/* eslint-disable react/prop-types */
import { Upload, UserCheck, FileCheck, BadgeCheck, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WHATSAPP_NUMBER = "919512397377";

const steps = [
  {
    step: "01",
    icon: Upload,
    title: "Share Your Documents",
    description:
      "Upload Form 16, bank statements, or any income proofs securely through WhatsApp or our portal. Takes under 5 minutes.",
    color: "#005C9D",
  },
  {
    step: "02",
    icon: UserCheck,
    title: "CA Reviews & Prepares",
    description:
      "A dedicated Chartered Accountant reviews your documents, identifies every deduction you qualify for, and prepares your return.",
    color: "#02BC6B",
  },
  {
    step: "03",
    icon: FileCheck,
    title: "You Approve & We File",
    description:
      "Review the draft return, approve it, and we file it directly on the Income Tax portal. You get the acknowledgement instantly.",
    color: "#005C9D",
  },
  {
    step: "04",
    icon: BadgeCheck,
    title: "Refund Tracked for You",
    description:
      "We monitor your refund status and keep you updated until the money hits your account. No follow-up needed from your end.",
    color: "#02BC6B",
  },
];

const Features = () => {
  const navigate = useNavigate();
  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I want to file my ITR. Please guide me.")}`;

  return (
    <div className="container mx-auto px-4">
      {/* Section header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-block px-3 py-1 bg-blue-50 text-[#005C9D] text-sm font-medium rounded-full mb-3">
          Simple 4-Step Process
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          From Documents to Filed Return  We Handle Everything
        </h2>
        <p className="text-gray-500 text-lg">
          No tax jargon. No back-and-forth. Just a smooth, CA-guided experience from start to finish.
        </p>
        <div className="w-16 h-1 bg-green-500 mx-auto mt-5" />
      </div>

      {/* Steps grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map(({ step, icon: Icon, title, description, color }) => (
          <div
            key={step}
            className="relative bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
          >
            <span className="absolute top-4 right-4 text-4xl font-black text-gray-400 select-none group-hover:text-gray-500 transition-colors">
              {step}
            </span>
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style={{ backgroundColor: `${color}15` }}
            >
              <Icon size={22} style={{ color }} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
          </div>
        ))}
      </div>

      {/* CTA row */}
      <div className="mt-12 text-center flex flex-wrap justify-center gap-4">
        <button
          onClick={() => navigate("/our-services/itr-filling")}
          className="inline-flex items-center gap-2 bg-[#005C9D] hover:bg-[#004a80] text-white px-7 py-3 rounded-lg font-semibold transition-all shadow-md active:scale-95"
        >
          Start Filing  ₹999 onwards
        </button>
        <a
          href={whatsappURL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 border-2 border-green-600 text-green-700 hover:bg-green-50 px-7 py-3 rounded-lg font-semibold transition-all active:scale-95"
        >
          <MessageCircle size={18} />
          Ask a CA on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Features;
