import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    state: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    setFormData((prev) => ({ ...prev, agreed: e.target.checked }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreed) {
      toast.error("Please agree to the terms and conditions");
      return;
    }
    
    toast.success("Callback request submitted successfully");
    // Reset form
    setFormData({
      name: "",
      mobile: "",
      email: "",
      state: "",
      agreed: false,
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-center">We're here to help</h3>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Your Mobile Number"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email Address"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          >
            <option value="" disabled>State</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Delhi">Delhi</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="West Bengal">West Bengal</option>
            {/* Add more states as needed */}
          </select>
          <div className="flex items-start space-x-2">
            <input
                type="checkbox" 
              id="terms" 
              checked={formData.agreed}
              onChange={handleCheckboxChange}
              className="mt-1"
            />
            <label htmlFor="terms" className="text-xs text-gray-600">
              I have read & agreed to the company's Terms and Conditions, disclaimer and refund policy, and am ready to accept calls, SMS, emails, etc.
            </label>
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-800 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
          >
            Get a callback
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;