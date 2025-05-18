import React, { useRef, useState } from "react";
import FormSection from "./FormSection";
import BenefitsGrid from "./BenifitsGrid";
import useEmailJS from "../../../hooks/emailService";

const BookKeeping = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    state: "",
    termsAccepted: false,
  });

  const [expandedSection, setExpandedSection] = useState(
    "tax-planning-process"
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      termsAccepted: e.target.checked,
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

  const toggleAccordion = (section) => {
    if (expandedSection === section) {
      setExpandedSection("");
    } else {
      setExpandedSection(section);
    }
  };

  return (
    <div>
      <section className="py-10 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Outsource your Accounting Service
        </h1>
        <div className="w-32 h-1 bg-blue-800 mx-auto mt-2"></div>

        <p className="mt-2 text-md md:text-lg text-gray-600 max-w-4xl mx-auto">
          Let India’s Recommended Accountants Organize, Prepare and Analyze your
          Financial Transactions | Easy & Quick Cloud-based Bookkeeping
          Procedure
        </p>
      </section>

      <FormSection
        formRef={formRef}
        loading={loading}
        expandedSection={expandedSection}
        formData={formData}
        handleCheckboxChange={handleCheckboxChange}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        toggleAccordion={toggleAccordion}
      />

      <BenefitsGrid />
    </div>
  );
};

export default BookKeeping;
