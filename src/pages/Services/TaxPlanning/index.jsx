import React, { useState } from 'react';
import FaqSection from './components/FaqSection';
import ObjectiveSection from './components/ObjectiveSection';
import HowWeWork from './components/HowWeWork';
import Pricing from './components/Pricing';
import HeroSection from './components/HeroSection';
import ImageBanner from './components/ImageBanner';

const TaxPlanning = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    state: '',
    termsAccepted: false
  });

  const [expandedSection, setExpandedSection] = useState('tax-planning-process');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Request for callback submitted successfully!');
    setFormData({
      name: '',
      email: '',
      mobile: '',
      state: '',
      termsAccepted: false
    });
  };

  const toggleAccordion = (section) => {
    if (expandedSection === section) {
      setExpandedSection('');
    } else {
      setExpandedSection(section);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <ImageBanner />
      <HeroSection />

      <FaqSection 
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
