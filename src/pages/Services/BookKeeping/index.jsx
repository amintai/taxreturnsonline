import React, { useState } from 'react'
import FormSection from './FormSection'
import BenefitsGrid from './BenifitsGrid';

const BookKeeping = () => {

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
        <div>

            <section className="py-10 px-4 text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                    Outsource your Accounting Service
                </h1>
                <div className="w-32 h-1 bg-green-500 mx-auto mt-2"></div>

                <p className="mt-2 text-md md:text-lg text-gray-600 max-w-4xl mx-auto">
                    Let India’s Recommended Accountants Organize, Prepare and Analyze your Financial Transactions | Easy & Quick Cloud-based Bookkeeping Procedure
                </p>
            </section>

            <FormSection
                expandedSection={expandedSection}
                formData={formData}
                handleCheckboxChange={handleCheckboxChange}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                toggleAccordion={toggleAccordion}
            />

            <BenefitsGrid />
        </div>
    )
}

export default BookKeeping
