import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowLeft, CheckCircle2, MessageCircle } from "lucide-react";
import TypesOfCompanyReg from "./TypesOfCompanyReg";
import ComparisonTable from "./ComparisionTable";
import CompanyRegistrationInfo from "./CompanyRegistrationInfo";
import CompanySideForm from "./CompanySideForm";
import CompanyDocuments from "./CompanyDocuments";
import CompanyBenefits from "./CompanyBenefits";

const WHATSAPP = "919512397377";

const highlights = [
  "100% online  no office visits",
  "DSC, DIN & MCA filing handled",
  "PAN, TAN & GST registration included",
  "Dedicated CA from start to finish",
];

const stats = [
  { value: "1,000+", label: "Companies Registered" },
  { value: "₹6,999", label: "Starting at" },
  { value: "7–10 days", label: "Turnaround" },
  { value: "4.9★", label: "Rating" },
];

const CompanyRegistration = () => {
  const navigate = useNavigate();
  const whatsappURL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi, I want to register a company. Please guide me.")}`;

  return (
    <>
      <Helmet>
        <title>Company Registration Online  Expert CA Assistance | TaxReturnsOnline</title>
        <meta name="description" content="Register your Private Limited, LLP, OPC or Partnership firm online with expert CA support. 100% paperless, starting at ₹6,999." />
        <link rel="canonical" href="https://www.taxreturnsonline.in/our-services/company-registration" />
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Company Registration Online",
          "provider": { "@type": "AccountingService", "name": "TaxReturnsOnline", "url": "https://www.taxreturnsonline.in" },
          "description": "Online company registration for Private Limited, LLP, OPC and Partnership firms. 100% paperless, CA-assisted, starting at ₹6,999.",
          "url": "https://www.taxreturnsonline.in/our-services/company-registration",
          "areaServed": "IN",
          "offers": [{ "@type": "Offer", "name": "Company Registration", "price": "6999", "priceCurrency": "INR" }]
        }`}</script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">

        {/* ── Hero ── */}
        <div className="relative bg-gradient-to-br from-[#003f6e] via-[#005C9D] to-blue-500 text-white overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full" />
            <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl" />
            <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-green-400/10 rounded-full blur-xl" />
          </div>

          <div className="container mx-auto px-4 pt-8 pb-0 relative">
            <button
              onClick={() => navigate("/our-services")}
              className="flex items-center gap-2 text-blue-200 hover:text-white transition mb-10 text-sm w-fit"
            >
              <ArrowLeft size={15} /> Back to Services
            </button>

            <div className="flex flex-col lg:flex-row items-end gap-10">
              {/* Left copy */}
              <div className="flex-1 pb-12 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs font-medium mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Company Registration & Incorporation
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
                  Register Your Company<br className="hidden md:block" />
                  <span className="text-green-400"> the Right Way</span>
                </h1>

                <p className="text-blue-100 text-base md:text-lg leading-relaxed mb-7 max-w-lg">
                  Private Limited, LLP, OPC, or Partnership  our CA experts handle the entire incorporation process online.
                  Fast, paperless, and starting at just{" "}
                  <span className="text-white font-semibold">₹6,999</span>.
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5 text-sm text-blue-50">
                      <CheckCircle2 size={16} className="text-green-400 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => document.getElementById("company-form").scrollIntoView({ behavior: "smooth" })}
                    className="bg-green-500 hover:bg-green-400 text-white font-semibold px-7 py-3 rounded-xl shadow-lg shadow-green-900/30 transition active:scale-95"
                  >
                    Get Started  ₹6,999 onwards
                  </button>
                  <a
                    href={whatsappURL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 py-3 rounded-xl font-medium transition active:scale-95"
                  >
                    <MessageCircle size={17} /> Ask on WhatsApp
                  </a>
                </div>
              </div>

              {/* Right  image with stats overlay */}
              <div className="lg:w-[420px] shrink-0 hidden lg:block">
                <div className="relative rounded-t-2xl overflow-hidden shadow-2xl" style={{ height: '340px' }}>
                  <img
                    src="/images/services/comapny-registration.jpeg"
                    alt="Company Registration"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 grid grid-cols-4 divide-x divide-white/20 bg-black/30 backdrop-blur-sm">
                    {stats.map(({ value, label }) => (
                      <div key={label} className="py-3 text-center">
                        <div className="text-base font-bold text-white leading-none">{value}</div>
                        <div className="text-[10px] text-blue-200 mt-1">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Main content ── */}
        <div className="container mx-auto px-4 py-12 space-y-16">

          {/* Types of company */}
          <section>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Types of Company Registration</h2>
              <p className="text-gray-500 mt-2 text-sm">Choose the structure that fits your business</p>
              <div className="w-12 h-1 bg-[#005C9D] mx-auto mt-3" />
            </div>
            <TypesOfCompanyReg />
          </section>

          {/* Documents + Side Form */}
          <section className="flex flex-col lg:flex-row gap-10" id="company-form">
            <div className="flex-1 space-y-10">
              <CompanyDocuments />
            </div>

            {/* Sticky side form */}
            <div className="lg:w-80 xl:w-96 shrink-0">
              <div className="sticky top-24">
                <CompanySideForm />
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section>
            <CompanyBenefits />
          </section>

          {/* Comparison table */}
          <section>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Structure Comparison</h2>
              <p className="text-gray-500 mt-2 text-sm">Compare business structures to find the right fit</p>
              <div className="w-12 h-1 bg-[#005C9D] mx-auto mt-3" />
            </div>
            <ComparisonTable />
          </section>

          {/* How we help */}
          <section>
            <CompanyRegistrationInfo />
          </section>

        </div>
      </div>
    </>
  );
};

export default CompanyRegistration;
