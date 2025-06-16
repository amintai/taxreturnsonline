import React, { useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import useEmailJS from "../../../../hooks/emailService";
import { toast } from "react-toastify";
import Button from "../../../../components/Button";

const SideForm = () => {
  const [expandedSection, setExpandedSection] = useState("benefits");

  // Define form state
  const [formData, setFormData] = useState({
    companyType: "",
    companyName: "",
    email: "",
    mobile: "",
    state: "",
    annualTurnover: "",
    termsAccepted: false,
  });

  const toggleAccordion = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const { loading, error, success, sendEmail } = useEmailJS();
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    sendEmail(formRef)
      .then(() => {
        toast.success("Callback request submitted successfully");
        // Reset form
        setFormData({
          companyType: "",
          companyName: "",
          email: "",
          mobile: "",
          state: "",
          annualTurnover: "",
          termsAccepted: false,
        });
      })
      .catch(() => {
        toast.error("Failed to send message, please try again later.");
      });
  };

  return (
    <section className="py-8 px-4 max-w-6xl mx-auto text-left">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Side - Company Information */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Need Help with Annual Compliance & Filing?
          </h2>
          <p className="text-gray-600 mb-4">Fill Up the below Mentioned Form</p>
          <p className="text-gray-700 mb-4">
            The Companies Act, 2013 of Indian Govt. legally mandates every
            entity in the country to follow the declarations of the Annual
            Compliance. For the Private Limited Companies (Pvt. Ltd.), One
            Person Companies (OPC), or Limited Liability Partnerships (LLP),
            Annual Compliance acts as a regular update to the Govt. that the
            entity is conducting its business under the particular Act.
          </p>

          <div className="bg-green-600 p-4 rounded-md mb-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              Benefits of Filing from Tax Returns Online™
            </h3>
          </div>
          <ul className="list-disc ml-5 mb-6 space-y-1 text-gray-700">
            <li>Our customer service is available in English and Hindi</li>
            <li>Free Annual Compliance Drafting</li>
            <li>Avail of Free Consultations - contact us to learn more</li>
            <li>Statutory Audit with Audit Fees</li>
            <li>
              Point-to-point update for upcoming compliances & requirements
            </li>
            <li>Call, Chat, E-mail, support</li>
            <li>Avail of your service at an the most competitive price</li>
            <li>
              25+ Experienced chartered accountants are ready to serve you
            </li>
          </ul>

          <div className="bg-green-600 p-4 rounded-md mb-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              Why Choose Us for Your Annual Compliance?
            </h3>
          </div>
          <ul className="list-disc ml-5 mb-6 space-y-1 text-gray-700">
            <li>
              25+ highly experienced chartered accountants are ready to serve
              you
            </li>
            <li>Professional and experienced CAs will handle your accounts</li>
            <li>Flawless accounting services</li>
          </ul>
        </div>

        {/* Right Side - Registration Form */}
        <div className="md:w-1/2 bg-white shadow-md rounded-md p-6 border border-gray-200">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Need Help with Annual Compliance & Filing?
            </h2>
            <div>
              <label
                htmlFor="companyType"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Type of Company <span className="text-red-500">*</span>
              </label>
              <select
                id="companyType"
                name="companyType"
                required
                value={formData.companyType}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Type of Company</option>
                <option value="pvt-ltd">Private Limited Company</option>
                <option value="opc">One Person Company</option>
                <option value="llp">Limited Liability Partnership</option>
                <option value="partnership">Partnership Firm</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                required
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Your Company Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email Address"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Mobile <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                required
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="Your Phone Number (Without 0 or +91)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                State <span className="text-red-500">*</span>
              </label>
              <select
                id="state"
                name="state"
                required
                value={formData.state}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">State</option>
                <option value="ap">Andhra Pradesh</option>
                <option value="delhi">Delhi</option>
                <option value="gujarat">Gujarat</option>
                <option value="karnataka">Karnataka</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="tamil-nadu">Tamil Nadu</option>
                <option value="telangana">Telangana</option>
                <option value="west-bengal">West Bengal</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="annualTurnover"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Annual Turnover Range <span className="text-red-500">*</span>
              </label>
              <select
                id="annualTurnover"
                name="annualTurnover"
                required
                value={formData.annualTurnover}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Annual Turnover Range</option>
                <option value="0-40L">0 - 40 Lacs</option>
                <option value="40L-1CR">40 Lacs - 1 Crore</option>
                <option value="1-5CR">1 - 5 Crore</option>
                <option value="5-10CR">5 - 10 Crore</option>
                <option value="10CR+">Above 10 Crore</option>
              </select>
            </div>

            <div className="flex items-start py-2">
              <input
                type="checkbox"
                id="termsAccepted"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleCheckboxChange}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label
                htmlFor="termsAccepted"
                className="ml-2 block text-sm text-gray-600"
              >
                I have read & agreed to the company's Terms and Conditions,
                disclaimer and refund policy, and also ready to accept calls,
                SMS, emails, etc.
              </label>
            </div>

            <Button
              type="submit"
              loading={loading}
              className="w-full py-3 bg-blue-800 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
            >
              Request for Callback
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SideForm;
