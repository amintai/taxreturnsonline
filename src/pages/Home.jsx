import React from "react";
import { ArrowUp } from "lucide-react";
import Benefits from "./Services/GST/Benfits";
import Features from "../components/Features";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChoosUs";
import ServiceGrid from "../components/Services/ServiceGrid";

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
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <Hero />
      </section>

      <section className="bg-gradient-to-b ">
        <ServiceGrid />
      </section>
      <section className="py-16 bg-white">
        <Features />
      </section>

      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <Benefits />
      </section>

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
