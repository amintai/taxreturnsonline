import React, { useRef, useState } from "react";
import FaqSection from "./components/FaqSection";
import ObjectiveSection from "./components/ObjectiveSection";
import HowWeWork from "./components/HowWeWork";
import Pricing from "./components/Pricing";
import HeroSection from "./components/HeroSection";
import ImageBanner from "./components/ImageBanner";
import useEmailJS from "../../../hooks/emailService";
import { toast } from "react-toastify";

const TaxPlanning = () => {
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
        toast.success("Request for callback submitted successfully!");
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

  const toggleAccordion = (section) => {
    if (expandedSection === section) {
      setExpandedSection("");
    } else {
      setExpandedSection(section);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <ImageBanner />
      <HeroSection />

      <FaqSection
        formRef={formRef}
        loading={loading}
        expandedSection={expandedSection}
        formData={formData}
        handleCheckboxChange={handleCheckboxChange}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        toggleAccordion={toggleAccordion}
      />

      <ObjectiveSection />

      <HowWeWork />
      <Pricing />
    </div>
  );
};

export default TaxPlanning;
