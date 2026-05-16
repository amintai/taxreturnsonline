import { useNavigate } from "react-router-dom";

const strengths = [
  {
    icon: "images/icon-expert.svg",
    heading: "Qualified CAs, Not Algorithms",
    description:
      "Every return is handled by a licensed Chartered Accountant  not software. You get a real expert, not an automated form-filler.",
  },
  {
    icon: "images/icon-savings-2.svg",
    heading: "Maximum Refund, Guaranteed",
    description:
      "We identify every deduction under 80C, 80D, HRA, and more. Clients save an average of ₹12,000 more vs self-filing.",
  },
  {
    icon: "images/icon-support-3.svg",
    heading: "Filed in 24–48 Hours",
    description:
      "Once documents are received, your return is prepared and filed within 24–48 hours. No waiting weeks for a callback.",
  },
  {
    icon: "images/icon-security-3.svg",
    heading: "Bank-Grade Data Security",
    description:
      "Your PAN, Aadhaar, and financial data are encrypted and never shared with third parties. Your privacy is non-negotiable.",
  },
  {
    icon: "images/icon-convenience-3.svg",
    heading: "100% Online, Zero Visits",
    description:
      "Share documents on WhatsApp or email. We handle everything remotely  no office visits, no paperwork queues.",
  },
  {
    icon: "images/icon-trust-3.svg",
    heading: "10,000+ Returns Filed",
    description:
      "Salaried employees, freelancers, NRIs, business owners  we've filed for them all. Rated 4.9/5 by our clients.",
  },
];

function WhyChooseUs() {
  const navigate = useNavigate();

  return (
    <section className="container mx-auto px-4 py-16 text-center">
      {/* Header */}
      <span className="inline-block px-3 py-1 bg-blue-50 text-[#005C9D] text-sm font-medium rounded-full mb-4">
        Why TaxReturnsOnline
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        The Smarter Way to File Your Taxes
      </h2>
      <p className="text-gray-500 text-lg max-w-xl mx-auto mb-12">
        We combine CA expertise with a seamless online experience  so you get
        the best of both worlds.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {strengths.map(({ icon, heading, description }) => (
          <div
            key={heading}
            className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <img src={icon} alt="" className="w-12 h-12 mb-4" loading="lazy" />
            <h5 className="text-lg font-semibold text-gray-900 mb-2">{heading}</h5>
            <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12">
        <button
          onClick={() => navigate("/contact-us")}
          className="inline-flex items-center gap-2 bg-[#005C9D] hover:bg-[#004a80] text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-md active:scale-95"
        >
          Get a Free Consultation
        </button>
        <p className="text-xs text-gray-400 mt-3">
          No commitment · CA responds within 2 hours
        </p>
      </div>
    </section>
  );
}

export default WhyChooseUs;
