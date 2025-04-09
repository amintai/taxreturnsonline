import React, { useState } from 'react';

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
  "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", 
  "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Lakshadweep", "Puducherry"
];

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    state: '',
    termsAccepted: false
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleStateChange = (e) => {
    setFormData(prev => ({ ...prev, state: e.target.value }));
  };
  
  const handleTermsChange = (e) => {
    setFormData(prev => ({ ...prev, termsAccepted: e.target.checked }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Application submitted successfully!');
  };
  
  return (
    <div className="bg-white rounded-md shadow-md p-6 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Apply for Consultancy & Legal support with Import Export License (IEC) Registration</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-iec-green"
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-iec-green"
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
            placeholder="Your Phone Number (Without 0 or +91)"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-iec-green"
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-iec-green"
          >
            <option value="" disabled>Select a state</option>
            {indianStates.map((state) => (
              <option key={state} value={state}>{state}</option>
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
            I have read & agreed to the company's Terms and Conditions, disclaimer and refund policy and also ready to accept GST, cost, emails, etc.
          </label>
        </div>
        
        <button 
          type="submit" 
          className="w-full bg-iec-green hover:bg-iec-green/90 text-white px-4 py-2 rounded-md font-medium"
        >
          Get Started
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
