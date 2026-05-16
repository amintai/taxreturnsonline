import { ArrowLeft, CheckCircle2, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import ITRFilingPackages from "./ITRPricingPackages";
import ItrDocuments from "./ItrDocuments";
import ItrBenefits from "./ItrBenifits";
import ItrFaq from "./ItrFaq";
import ItrSideForm from "./ItrSideForm";

const WHATSAPP = "919512397377";

const highlights = [
  "CA-assisted filing  not just software",
  "Filed within 24–48 hours",
  "Maximum deductions identified",
  "Refund status tracked for you",
];

const ItrReturn = () => {
  const navigate = useNavigate();
  const whatsappURL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi, I want to file my ITR. Please guide me.")}`;

  return (
    <>
      <Helmet>
        <title>ITR Filing Online — Expert CA Assistance | TaxReturnsOnline</title>
        <meta name="description" content="File your Income Tax Return online with expert CA support. Salaried, freelancer, or business — starting at ₹999. Fast, accurate, and 100% online." />
        <link rel="canonical" href="https://www.taxreturnsonline.in/our-services/itr-filling" />
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "ITR Filing Online",
          "provider": { "@type": "AccountingService", "name": "TaxReturnsOnline", "url": "https://www.taxreturnsonline.in" },
          "description": "CA-assisted Income Tax Return filing for salaried individuals, freelancers, and businesses. Starting at ₹999.",
          "url": "https://www.taxreturnsonline.in/our-services/itr-filling",
          "areaServed": "IN",
          "offers": [
            { "@type": "Offer", "name": "Salaried Individual ITR", "price": "999", "priceCurrency": "INR" },
            { "@type": "Offer", "name": "Capital Gain ITR", "price": "2499", "priceCurrency": "INR" },
            { "@type": "Offer", "name": "Business ITR", "price": "2999", "priceCurrency": "INR" }
          ]
        }`}</script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">

        {/* ── Hero Banner ── */}
        <div className="relative bg-gradient-to-br from-[#003f6e] via-[#005C9D] to-blue-500 text-white overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full" />
            <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl" />
            <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-green-400/10 rounded-full blur-xl" />
          </div>

          <div className="container mx-auto px-4 pt-8 pb-0 relative">
            {/* Back link */}
            <button
              onClick={() => navigate("/our-services")}
              className="flex items-center gap-2 text-blue-200 hover:text-white transition mb-10 text-sm w-fit"
            >
              <ArrowLeft size={15} /> Back to Services
            </button>

            <div className="flex flex-col lg:flex-row items-end gap-10">
              {/* ── Left copy ── */}
              <div className="flex-1 pb-12 text-left">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs font-medium mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Income Tax Return Filing  AY 2026–26
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
                  File Your ITR Online<br className="hidden md:block" />
                  <span className="text-green-400"> with a Dedicated CA</span>
                </h1>

                <p className="text-blue-100 text-base md:text-lg leading-relaxed mb-7 max-w-lg">
                  Salaried, freelancer, or business owner  our Chartered Accountants handle your return end-to-end.
                  Accurate, fast, and starting at just{" "}
                  <span className="text-white font-semibold">₹999</span>.
                </p>

                {/* Highlights */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5 text-sm text-blue-50">
                      <CheckCircle2 size={16} className="text-green-400 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => document.getElementById("itr-form").scrollIntoView({ behavior: "smooth" })}
                    className="bg-green-500 hover:bg-green-400 text-white font-semibold px-7 py-3 rounded-xl shadow-lg shadow-green-900/30 transition active:scale-95"
                  >
                    Get Started  ₹999 onwards
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

              {/* ── Right  image with stats overlay ── */}
              <div className="lg:w-[420px] shrink-0 hidden lg:block">
                <div className="relative rounded-t-2xl overflow-hidden shadow-2xl" style={{ height: '340px' }}>
                  <img
                    src="/images/services/itr-service.jpeg"
                    alt="CA filing ITR online"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 grid grid-cols-4 divide-x divide-white/20 bg-black/30 backdrop-blur-sm">
                    {[
                      { value: "10K+", label: "Returns Filed" },
                      { value: "₹999", label: "Starting at" },
                      { value: "48 hrs", label: "Turnaround" },
                      { value: "4.9★", label: "Rating" },
                    ].map(({ value, label }) => (
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

          {/* Pricing */}
          <section>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Choose Your Plan</h2>
              <p className="text-gray-500 mt-2">Transparent pricing  no hidden charges</p>
              <div className="w-12 h-1 bg-[#005C9D] mx-auto mt-3" />
            </div>
            <ITRFilingPackages />
          </section>

          {/* Documents + Side Form */}
          <section className="flex flex-col lg:flex-row gap-10" id="itr-form">
            <div className="flex-1">
              <ItrDocuments />
            </div>
            <div className="lg:w-80 xl:w-96 shrink-0">
              <div className="sticky top-24">
                <ItrSideForm />
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section>
            <ItrBenefits />
          </section>

          {/* FAQ */}
          <section>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
              <div className="w-12 h-1 bg-[#005C9D] mx-auto mt-3" />
            </div>
            <div className="max-w-2xl mx-auto">
              <ItrFaq />
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default ItrReturn;
