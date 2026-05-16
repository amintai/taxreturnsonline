import React from "react";
import { ArrowUp } from "lucide-react";
import Benefits from "./Services/GST/Benfits";
import Features from "../components/Features";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChoosUs";
import ServiceGrid from "../components/Services/ServiceGrid";
import { Helmet } from "react-helmet";

const Home = () => {
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Helmet>
        <title>File ITR Online in India — CA-Assisted Tax Filing | TaxReturnsOnline</title>
        <meta name="description" content="File your Income Tax Return online with expert Chartered Accountants. GST registration, company incorporation, bookkeeping & compliance — fast, secure, starting at ₹999." />
        <meta name="keywords" content="ITR filing online India, income tax return filing, CA assisted ITR, GST registration, company registration India, tax planning, bookkeeping service" />
        <link rel="canonical" href="https://www.taxreturnsonline.in/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "TaxReturnsOnline",
          "url": "https://www.taxreturnsonline.in",
          "telephone": "+91-9512397377",
          "email": "support@taxreturnsonline.in",
          "address": { "@type": "PostalAddress", "addressLocality": "Ahmedabad", "addressRegion": "Gujarat", "addressCountry": "IN" },
          "description": "CA-assisted online tax filing, GST, company registration and compliance services across India.",
          "priceRange": "₹999 - ₹34,999",
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500", "bestRating": "5" }
        })}</script>
      </Helmet>

      <section className="bg-gradient-to-b from-blue-50 to-white">
        <Hero />
      </section>

      <section className="bg-gradient-to-b ">
        <ServiceGrid />
      </section>
      <section className="py-16 bg-white">
        <Features />
      </section>

      {/* <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <Benefits />
      </section> */}

      {/* <CAExpertsSection /> */}

      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <WhyChooseUs />
      </section>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default Home;
