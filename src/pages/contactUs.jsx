import { useRef, useState } from "react";
import useEmailJS from "../hooks/emailService";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
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

  const navigate = useNavigate();


  return (
    <section className="max-w-3xl mx-auto py-10 px-4">
      <a
        onClick={() => navigate(-1)}
        className=" cursor-pointer flex items-center text-blue-800 hover:text-blue-800 mb-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Go Back
      </a>

      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        Contact Us
      </h1>
      <p className="text-gray-600 mb-8 text-center">
        Have a question or need help? Fill out the form below and we'll get back
        to you shortly.
      </p>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-md p-6 border border-gray-200"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="mobile" className="block text-gray-700 mb-2">
            Mobile
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div className="mb-4">
          <label className="flex items-start text-sm text-gray-600">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
              className="mt-1 mr-2"
            />
            I agree to the privacy policy and terms of service.
          </label>
        </div>

        <Button
          type="submit"
          loading={loading}
          className={`w-full py-3 rounded-md transition-colors flex justify-center items-center gap-2 ${
            loading
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-800 hover:bg-blue-700 text-white"
          }`}
        >
          {loading && (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              ></path>
            </svg>
          )}
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </section>
  );
};

export default ContactUs;
