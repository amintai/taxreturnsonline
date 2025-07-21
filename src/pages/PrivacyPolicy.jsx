import { ArrowUp, Shield } from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
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
        <title>Privacy Policy - TaxReturnsOnline</title>
        <meta
          name="description"
          content="Read the Privacy Policy for TaxReturnsOnline to understand how we collect, use, and protect your data when using our services."
        />
        <link
          rel="canonical"
          href="https://www.taxreturnsonline.in/privacy-policy"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-white py-16">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-green-100 rounded-full shadow-md">
              <Shield className="h-10 w-10 text-green-700" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Learn how we collect, use, and safeguard your information at TaxReturnsOnline.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
            <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
              1. Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may collect personal information including your name, contact details, 
              financial data, and documents necessary for filing tax returns and providing 
              compliance services. This information is collected directly from you when 
              you register, upload documents, or interact with our team.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Your information is used solely for:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Filing Income Tax Returns and related compliance services.</li>
              <li>Improving our services and user experience.</li>
              <li>Communicating important updates, reminders, and alerts.</li>
              <li>Meeting legal and regulatory obligations.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
              3. Data Protection & Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We implement industry-standard security measures including encryption, 
              secure servers, and restricted access to protect your data. 
              However, no method of transmission over the internet is completely secure. 
              By using our services, you acknowledge these inherent risks.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
              4. Sharing of Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We do not sell or rent your personal data. Information may be shared only:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>With government portals for filings and compliance.</li>
              <li>With authorized team members for service delivery.</li>
              <li>When required by law or regulatory authorities.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
              5. Your Rights
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You may request access, correction, or deletion of your personal data 
              at any time by contacting us. We will make reasonable efforts to 
              accommodate your request in accordance with applicable laws.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
              6. Changes to this Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will 
              be posted on this page with the updated date. We encourage you to review 
              it periodically.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
              7. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed">
              For any questions or concerns regarding this Privacy Policy, please contact us at{" "}
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

export default PrivacyPolicy;
