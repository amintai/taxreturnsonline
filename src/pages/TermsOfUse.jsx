import { ArrowUp, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const TermsOfUse = () => {
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
        <title>Terms of Use - TaxReturnsOnline</title>
        <meta
          name="description"
          content="Read the Terms of Use for TaxReturnsOnline to understand your rights and responsibilities when using our online tax filing services."
        />
        <link
          rel="canonical"
          href="https://www.taxreturnsonline.in/terms-of-use"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-white py-16">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-green-100 rounded-full shadow-md">
              <FileText className="h-10 w-10 text-green-700" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Terms of Use
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Understand your rights and responsibilities while using our online tax filing services.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
            <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using <strong>TaxReturnsOnline</strong>, you agree to comply with and be bound by these Terms of Use.
              If you do not agree, please do not use our website or services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
              2. Scope of Services
            </h2>
            <p className="text-gray-700 leading-relaxed">
              TaxReturnsOnline provides online tax filing assistance, compliance support, and related services.
              All filings are based on information you provide. It is your responsibility to ensure the accuracy and completeness of data submitted.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
              3. User Responsibilities
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Provide accurate and complete personal and financial information.</li>
              <li>Do not use the site for unlawful purposes or transmit harmful content.</li>
              <li>Ensure your account credentials remain confidential.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
              4. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We make every effort to ensure accuracy but are not liable for errors or penalties resulting from
              incorrect data provided by you or delays on government portals.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
              5. Intellectual Property
            </h2>
            <p className="text-gray-700 leading-relaxed">
              All content on this website (logos, text, graphics) is owned by TaxReturnsOnline and protected under applicable laws.
              You may not reuse our content without prior written permission.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
              6. Amendments
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to update these Terms of Use at any time. Changes will be effective upon posting on this page.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
              7. Contact
            </h2>
            <p className="text-gray-700 leading-relaxed">
              For questions about these terms, please contact us at{" "}
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

export default TermsOfUse;
