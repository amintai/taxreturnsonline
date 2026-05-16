import { ArrowUp, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>About Us - TaxReturnsOnline</title>
        <meta
          name="description"
          content="Meet CA Almas Tai and CA Sabina Tai, a husband-wife duo of Chartered Accountants offering trusted tax, finance, and business advisory services."
        />
        <link rel="canonical" href="https://www.taxreturnsonline.in/about-us" />
      </Helmet>

      {/* Hero section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-green-100 rounded-full shadow-md">
              <Users className="h-10 w-10 text-green-700" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            About Us
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
            Your trusted partners in tax filing, compliance, and financial growth.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl shadow-md p-8 md:p-12 space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">
              Welcome to TaxReturnsOnline!
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We are <strong>CA Almas Tai</strong> and <strong>CA Sabina Tai</strong>,
              a husband-wife duo of qualified Chartered Accountants, committed
              to providing reliable, insightful, and ethical financial services.
              With our combined expertise and a shared passion for excellence,
              we aim to make accounting, taxation, and business advisory simpler
              and more effective for individuals, professionals, and businesses alike.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our goal is to build long-term relationships based on trust,
              transparency, and results. Whether you're looking for tax
              planning, financial consulting, or compliance support, we’re here
              to guide you with integrity and professionalism.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Together, we bring not only deep knowledge of finance but also a
              personal touch to every client interactionbecause for us, it’s
              not just about numbers, it’s about people.
            </p>
            <p className="text-gray-700 leading-relaxed font-medium">
              Let’s grow togetherprofessionally and financially.
            </p>
          </div>
        </div>
      </section>

      {/* Legal & Policies Section */}
      <section className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            Our Policies & Legal Information
          </h2>
          <p className="text-gray-700 mb-8 leading-relaxed max-w-3xl">
            To ensure complete transparency and trust, we’ve clearly documented our
            terms of use, privacy practices, and important disclaimers. Please take
            a moment to review them:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              to="/terms-of-use"
              className="flex flex-col items-center text-center bg-white rounded-xl shadow hover:shadow-lg p-6 border border-gray-100 hover:border-green-200 transition"
            >
              <span className="text-3xl mb-3">📄</span>
              <h3 className="font-semibold text-gray-800 mb-1">Terms of Use</h3>
              <p className="text-sm text-gray-600">
                Understand your rights & responsibilities.
              </p>
            </Link>

            <Link
              to="/privacy-policy"
              className="flex flex-col items-center text-center bg-white rounded-xl shadow hover:shadow-lg p-6 border border-gray-100 hover:border-green-200 transition"
            >
              <span className="text-3xl mb-3">🔒</span>
              <h3 className="font-semibold text-gray-800 mb-1">Privacy Policy</h3>
              <p className="text-sm text-gray-600">
                How we collect, use, and protect your data.
              </p>
            </Link>

            <Link
              to="/disclaimer"
              className="flex flex-col items-center text-center bg-white rounded-xl shadow hover:shadow-lg p-6 border border-gray-100 hover:border-green-200 transition"
            >
              <span className="text-3xl mb-3">⚠️</span>
              <h3 className="font-semibold text-gray-800 mb-1">Disclaimer</h3>
              <p className="text-sm text-gray-600">
                Important notes on usage & risks.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Scroll To Top */}
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

export default AboutUs;
