import { ArrowUp, AlertCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const Disclaimer = () => {
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
        <title>Disclaimer - TaxReturnsOnline</title>
        <meta
          name="description"
          content="Read the Disclaimer for TaxReturnsOnline to understand the limitations of our services and information provided on this website."
        />
        <link
          rel="canonical"
          href="https://www.taxreturnsonline.in/disclaimer"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-white py-16">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-yellow-100 rounded-full shadow-md">
              <AlertCircle className="h-10 w-10 text-yellow-700" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Disclaimer
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Please read this disclaimer carefully before using our website and services.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
            <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
              1. General Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The information provided on <strong>TaxReturnsOnline</strong> is for general guidance only. 
              While we strive to keep all information up to date and accurate, we make no representations or warranties of any kind, 
              express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
              2. Not Professional Advice
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Nothing on this website constitutes professional legal, tax, or financial advice. 
              You should consult with a qualified Chartered Accountant or relevant professional before making any decision or taking action that might affect your finances or compliance status.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
              3. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              In no event will <strong>TaxReturnsOnline</strong> or its team be liable for any loss or damage including, 
              without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever 
              arising from loss of data or profits, arising out of or in connection with the use of this website or our services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
              4. External Links
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Through this website, you may be able to link to other websites that are not under the control of <strong>TaxReturnsOnline</strong>. 
              We have no control over the nature, content, and availability of those sites. 
              The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
              5. Service Changes
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify or discontinue, temporarily or permanently, any part of our services without prior notice. 
              We are not liable for any modification, suspension, or discontinuance of our services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
              6. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this Disclaimer, please contact us at{" "}
              <a
                href="mailto:taxreturnsonline.in@gmail.com"
                className="text-green-600 font-medium hover:underline"
              >
                taxreturnsonline.in@gmail.com
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* Scroll To Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition-all z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default Disclaimer;
