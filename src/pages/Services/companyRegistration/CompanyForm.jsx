import React, { useRef, useState } from "react";
import useEmailJS from "../../../hooks/emailService";
import Button from "../../../components/Button";

const CompanyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    state: "",
    companyType: "",
    agreeToTerms: false,
    captcha: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? e.target.checked : value,
    }));
  };

  const { loading, error, success, sendEmail } = useEmailJS();
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(formRef)
      .then(() => {
        alert("Your message has been sent!");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          message: "",
          termsAccepted: false,
        });
      })
      .catch(() => {
        alert("Failed to send message, please try again later.");
      });
  };

  const refreshCaptcha = () => {};

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Column - Service Information */}
      <div className="lg:col-span-2 space-y-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 border-b-4 border-orange-400 pb-2 w-max">
            Before Registering Your Company Directly under Govt. of India
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
            <div className="text-center">
              <div className="bg-gray-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Customer Support</h3>
              <p className="text-sm text-gray-600">
                Available in 6 Languages including English
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Expert Consultation</h3>
              <p className="text-sm text-gray-600">
                over Call, E-mail, Chat Support
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Trusted by Over</h3>
              <p className="text-sm text-gray-600">1000+ Clients</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">100% Paperless</h3>
              <p className="text-sm text-gray-600">Documentation</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Completely Secured</h3>
              <p className="text-sm text-gray-600">
                + Encrypted Company Incorporation Process
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">
                India's most efficient CA panel
              </h3>
              <p className="text-sm text-gray-600">
                ready to assist along the way
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-sm">
            <p>
              *Once you are Ready to Setup your Dream Company, you'll receive Rs
              999 adjustment from your selected company registration package
              from us
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 border-b-4 border-orange-400 pb-2 w-max">
            Our Company Registration Services
          </h2>
          <ul className="list-disc pl-5 space-y-4">
            <li>Private Limited Company Registration</li>
            <li>One Person Company (OPC) Registration</li>
            <li>Limited Liability Partnership (LLP) Registration</li>
            <li>Partnership Firm Registration</li>
            <li>Section 8 Company Registration (NGO)</li>
            <li>Producer Company Registration</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 border-b-4 border-orange-400 pb-2 w-max">
            Benefits of Company Registration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="bg-green-100 rounded-full p-2 mr-3 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-blue-800"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Limited Liability Protection</h3>
                <p className="text-sm text-gray-600">
                  Protects personal assets from business liabilities
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 rounded-full p-2 mr-3 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-blue-800"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Credibility & Trust</h3>
                <p className="text-sm text-gray-600">
                  Registered companies enjoy greater market trust
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 rounded-full p-2 mr-3 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-blue-800"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Perpetual Existence</h3>
                <p className="text-sm text-gray-600">
                  Company continues regardless of changes in ownership
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 rounded-full p-2 mr-3 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-blue-800"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Better Funding Options</h3>
                <p className="text-sm text-gray-600">
                  Easier access to loans and investor funding
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 rounded-full p-2 mr-3 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-blue-800"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Tax Benefits</h3>
                <p className="text-sm text-gray-600">
                  Various tax advantages available to registered companies
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 rounded-full p-2 mr-3 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-blue-800"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Global Business Opportunities</h3>
                <p className="text-sm text-gray-600">
                  Easier to expand internationally as a registered entity
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Contact Form */}
      <div className="lg:col-span-1">
        <div className="bg-white p-6 rounded-lg shadow-md sticky top-8">
          <h2 className="text-xl font-bold text-center mb-6">
            Our Expert CA Consulting Panel - Now Available!
          </h2>
          <p className="text-center mb-4">Fill Up the below Mentioned Form</p>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Name"
                required
              />
            </div>

            <div>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Mobile"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
                required
              />
            </div>

            <div>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled>
                  State
                </option>
                <option value="delhi">Delhi</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="karnataka">Karnataka</option>
                <option value="telangana">Telangana</option>
                <option value="tamil-nadu">Tamil Nadu</option>
                <option value="gujarat">Gujarat</option>
              </select>
            </div>

            <div>
              <select
                name="companyType"
                value={formData.companyType}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled>
                  Select Company Type
                </option>
                <option value="private-limited-company">
                  Private limited Company
                </option>
                <option value="one-person-company">One Person Company</option>
                <option value="llp">Limited Liability Partnership</option>
                <option value="partnership-firm">Partnership Firm</option>
                <option value="sole-proprietorship">Sole Proprietorship</option>
              </select>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="mt-1 mr-2"
                required
              />
              <label htmlFor="terms" className="text-xs text-gray-600">
                I have read & agreed to the company's Terms and Conditions,
                disclaimer and refund policy, and also ready to accept calls,
                SMS, emails, etc.
              </label>
            </div>

            <div className="flex space-x-2">
              <div className="bg-gray-100 p-2 text-center">
                <img
                  src="/lovable-uploads/60902d89-5eba-4f84-bb9c-43beb3ffb3a7.png"
                  alt="Captcha"
                  className="h-8"
                />
              </div>
              <button
                type="button"
                onClick={refreshCaptcha}
                className="p-2 bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <input
                type="text"
                name="captcha"
                value={formData.captcha}
                onChange={handleChange}
                className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the captcha here.."
                required
              />
            </div>

            <Button
              loading={loading}
              type="submit"
              className="w-full bg-blue-800 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded transition-colors"
            >
              Request for Callback
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyForm;
