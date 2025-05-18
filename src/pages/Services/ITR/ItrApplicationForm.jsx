import React, { useRef, useState } from "react";
import useEmailJS from "../../../hooks/emailService";
import Button from "../../../components/Button";
import { toast } from "react-toastify";

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry",
];

const ItrApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    state: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStateChange = (e) => {
    setFormData((prev) => ({ ...prev, state: e.target.value }));
  };

  const handleTermsChange = (e) => {
    setFormData((prev) => ({ ...prev, termsAccepted: e.target.checked }));
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
          name: "",
          email: "",
          mobile: "",
          state: "",
          termsAccepted: false,
        });
      })
      .catch(() => {
        toast.error("Failed to send message, please try again later.");
      });
  };

  return (
    <div className="bg-white rounded-md shadow-md p-6 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">
        Apply for Income Tax Return Filing
      </h2>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 text-sm font-medium">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 text-sm font-medium">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label htmlFor="mobile" className="block mb-1 text-sm font-medium">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            id="mobile"
            name="mobile"
            type="text"
            placeholder="Your Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label htmlFor="state" className="block mb-1 text-sm font-medium">
            Select State <span className="text-red-500">*</span>
          </label>
          <select
            id="state"
            value={formData.state}
            onChange={handleStateChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600"
          >
            <option value="" disabled>
              Select a state
            </option>
            {indianStates.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            id="terms"
            checked={formData.termsAccepted}
            onChange={handleTermsChange}
            required
            className="mt-1 h-4 w-4"
          />
          <label htmlFor="terms" className="text-sm">
            I agree to the Terms and Conditions, and consent to receive updates
            and communication.
          </label>
        </div>

        <Button
          type="submit"
          loading={loading}
          className="w-full bg-blue-800 hover:bg-blue-800 text-white px-4 py-2 rounded-md font-medium"
        >
          Submit Application
        </Button>
      </form>
    </div>
  );
};

export default ItrApplicationForm;
