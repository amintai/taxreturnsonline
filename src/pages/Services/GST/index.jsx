import { ArrowLeft, CheckCircle2, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import ServiceSection from "./ServiceSection";
import Benefits from "./Benfits";
import PricingPackages from "./PricingPacakges";
import GstDocuments from "./GstDocuments";
import GstSideForm from "./GstSideForm";
import GstFaq from "./GstFaq";

const WHATSAPP = "919512397377";

const highlights = [
  "GST Registration in 4–6 working days",
  "Expert CA handles all paperwork",
  "Return filing & compliance support",
  "Available in 3 languages",
];

const stats = [
  { value: "5,000+", label: "GST Registrations" },
  { value: "₹1,499", label: "Starting at" },
  { value: "4–6 days", label: "Turnaround" },
  { value: "4.9★", label: "Rating" },
];

const GstRegistration = () => {
  const navigate = useNavigate();
  const whatsappURL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi, I need help with GST Registration. Please guide me.")}`;

  return (
    <>
      <Helmet>
        <title>GST Registration & Filing  Expert CA Assistance | TaxReturnsOnline</title>
        <meta name="description" content="Get GST registration, return filing, cancellation and compliance support from expert CAs. Fast, online, starting at ₹1,499." />
        <link rel="canonical" href="https://www.taxreturnsonline.in/our-services/gst-registration" />
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "GST Registration & Filing",
          "provider": { "@type": "AccountingService", "name": "TaxReturnsOnline", "url": "https://www.taxreturnsonline.in" },
          "description": "GST registration, return filing, cancellation and compliance services by expert CAs. Starting at ₹1,499.",
          "url": "https://www.taxreturnsonline.in/our-services/gst-registration",
          "areaServed": "IN",
          "offers": [
            { "@type": "Offer", "name": "GST Registration", "price": "1499", "priceCurrency": "INR" },
            { "@type": "Offer", "name": "GST Filing 3 Months", "price": "2999", "priceCurrency": "INR" },
            { "@type": "Offer", "name": "GST Filing 12 Months", "price": "7999", "priceCurrency": "INR" }
          ]
        }`}</script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">

        {/* ── Hero ── */}
        <div className="relative bg-gradient-to-br from-[#003f6e] via-[#005C9D] to-blue-500 text-white overflow-hidden">
          {/* Decorative blobs */}
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
                  GST Registration & Compliance
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
                  GST Registration &<br className="hidden md:block" />
                  <span className="text-green-400"> Compliance Made Easy</span>
                </h1>

                <p className="text-blue-100 text-base md:text-lg leading-relaxed mb-7 max-w-lg">
                  From registration to return filing, cancellation to amendments  our CA experts handle your complete GST compliance.
                  Starting at just{" "}
                  <span className="text-white font-semibold">₹1,499</span>.
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
                    onClick={() => document.getElementById("gst-form").scrollIntoView({ behavior: "smooth" })}
                    className="bg-green-500 hover:bg-green-400 text-white font-semibold px-7 py-3 rounded-xl shadow-lg shadow-green-900/30 transition active:scale-95"
                  >
                    Get Started  ₹1,499 onwards
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
                    src="/images/services/gst-service-2.jpeg"
                    alt="GST Registration"
                    className="w-full h-full object-cover object-center"
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

          {/* GST Services grid */}
          <section>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our GST Services</h2>
              <p className="text-gray-500 mt-2 text-sm">End-to-end GST compliance under one roof</p>
              <div className="w-12 h-1 bg-[#005C9D] mx-auto mt-3" />
            </div>
            <ServiceSection minimal />
          </section>

          {/* Overview + Side Form */}
          <section className="flex flex-col lg:flex-row gap-10" id="gst-form">
            {/* Overview */}
            <div className="flex-1 space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">GST Registration  Overview</h2>
              <div className="w-12 h-1 bg-[#005C9D]" />
              <p className="text-gray-600 leading-relaxed">
                Businesses must register under GST if their annual revenue exceeds the threshold limit 
                ₹40 lakhs for goods, ₹20 lakhs for services, or ₹10 lakhs in special category states.
                GST registration is mandatory beyond these limits.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Operating without GST registration when required is an offence and attracts severe penalties 
                10% of the tax amount owed, subject to a minimum of ₹10,000.
              </p>
              <p className="text-gray-600 leading-relaxed">
                It typically takes 4–6 working days to complete GST registration. Our team handles the entire
                11-step process  from document collection to GSTIN generation  so you don't have to.
              </p>

              {/* Documents */}
              <GstDocuments />
            </div>

            {/* Sticky side form */}
            <div className="lg:w-80 xl:w-96 shrink-0">
              <div className="sticky top-24">
                <GstSideForm />
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section>
            <Benefits />
          </section>

          {/* Pricing */}
          <section>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">GST Packages & Pricing</h2>
              <p className="text-gray-500 mt-2 text-sm">Transparent pricing — no hidden charges</p>
              <div className="w-12 h-1 bg-[#005C9D] mx-auto mt-3" />
            </div>
            <PricingPackages />
          </section>

          {/* FAQ */}
          <section>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
              <div className="w-12 h-1 bg-[#005C9D] mx-auto mt-3" />
            </div>
            <div className="max-w-2xl mx-auto">
              <GstFaq />
            </div>
          </section>

          {/* Internal links */}
          <section className="bg-blue-50 rounded-2xl p-6">
            <p className="text-sm font-semibold text-gray-700 mb-3">Related Services</p>
            <div className="flex flex-wrap gap-3">
              <a href="/our-services/company-registration" className="text-sm text-[#005C9D] hover:underline bg-white border border-blue-100 px-4 py-2 rounded-lg">Registering a new company?</a>
              <a href="/tax-compliance/annual-complience-filling" className="text-sm text-[#005C9D] hover:underline bg-white border border-blue-100 px-4 py-2 rounded-lg">Annual Compliance Filing</a>
              <a href="/our-services/itr-filling" className="text-sm text-[#005C9D] hover:underline bg-white border border-blue-100 px-4 py-2 rounded-lg">ITR Filing</a>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default GstRegistration;
