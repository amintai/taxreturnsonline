/* eslint-disable react/prop-types */
import { ChevronDown, ChevronUp } from 'lucide-react'
import React from 'react'
import Button from '../../../../components/Button'

const FaqSection = ({
    handleSubmit,
    formData,
    handleInputChange,
    handleCheckboxChange,
    toggleAccordion,
    expandedSection,
    loading,
    formRef,
}) => {
    return (
        <section className="py-8 px-4 max-w-7xl mx-auto text-left">
            <div className="flex flex-col md:flex-row gap-6">
                {/* Contact Form */}
                <div className="md:w-1/2 bg-white shadow-md rounded-md p-6 border border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Need Help with Online Tax Planning?</h2>
                    <p className="text-gray-600 mb-4">Fill Up the below Mentioned Form</p>

                    <form ref={formRef} onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 mb-2">Name <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Your Name"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 mb-2">Email <span className="text-red-500">*</span></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Your Email Address"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="mobile" className="block text-gray-700 mb-2">Mobile <span className="text-red-500">*</span></label>
                            <input
                                type="tel"
                                id="mobile"
                                name="mobile"
                                required
                                value={formData.mobile}
                                onChange={handleInputChange}
                                placeholder="Your Phone Number (Without 0 or +91)"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="state" className="block text-gray-700 mb-2">State <span className="text-red-500">*</span></label>
                            <select
                                id="state"
                                name="state"
                                required
                                value={formData.state}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                <option value="">State</option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="West Bengal">West Bengal</option>
                                {/* Add more states as needed */}
                            </select>
                        </div>

                        <div className="mb-6">
                            <label className="flex items-start">
                                <input
                                    type="checkbox"
                                    name="termsAccepted"
                                    checked={formData.termsAccepted}
                                    onChange={handleCheckboxChange}
                                    required
                                    className="mt-1 mr-2"
                                />
                                <span className="text-sm text-gray-600">
                                    I have read & agreed to the company's Terms and Conditions, disclaimer and refund policy, and also ready to accept calls, SMS, emails, etc.
                                </span>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-800 text-white font-medium rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors"
                        >
                            Request for Callback
                        </button>
                    </form>
                </div>

                {/* FAQ Accordion */}
                <div className="md:w-1/2">
                    <div className="mb-3">
                        <button
                            onClick={() => toggleAccordion('tax-planning-process')}
                            className={`w-full p-4 flex justify-between items-center text-left ${expandedSection === 'tax-planning-process' ? 'bg-blue-800 text-white' : 'bg-blue-800 text-white'} rounded-md`}
                        >
                            <span className="font-medium">What is the Tax Planning process?</span>
                            {expandedSection === 'tax-planning-process' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                        {expandedSection === 'tax-planning-process' && (
                            <div className="p-4 bg-gray-50 rounded-b-md border border-t-0 border-gray-200">
                                <p>Tax planning is the legal procedure of reducing the payable tax liabilities in a particular financial year. It includes the course of actions such as managing tax implications, deductible taxes, and a proper planning to identify the amount of tax due. It plays a critical role for the budget efficiency as well.</p>
                            </div>
                        )}
                    </div>

                    <div className="mb-3">
                        <button
                            onClick={() => toggleAccordion('tax-advisor')}
                            className={`w-full p-4 flex justify-between items-center text-left ${expandedSection === 'tax-advisor' ? 'bg-blue-800 text-white' : 'bg-blue-800 text-white'} rounded-md`}
                        >
                            <span className="font-medium">Who is a Tax Advisor? / Tax Planner / Financial Planner?</span>
                            {expandedSection === 'tax-advisor' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                        {expandedSection === 'tax-advisor' && (
                            <div className="p-4 bg-gray-50 rounded-b-md border border-t-0 border-gray-200">
                                <p>A tax advisor or tax planner is a financial expert who specializes in tax law, planning, and compliance. They help individuals and businesses optimize their tax positions, minimize liabilities within legal boundaries, and ensure compliance with tax regulations. Financial planners may include tax planning as part of their broader financial strategy services.</p>
                            </div>
                        )}
                    </div>

                    <div className="mb-3">
                        <button
                            onClick={() => toggleAccordion('tax-planning-procedure')}
                            className={`w-full p-4 flex justify-between items-center text-left ${expandedSection === 'tax-planning-procedure' ? 'bg-blue-800 text-white' : 'bg-blue-800 text-white'} rounded-md`}
                        >
                            <span className="font-medium">Who will manage my Tax Planning procedure?</span>
                            {expandedSection === 'tax-planning-procedure' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                        {expandedSection === 'tax-planning-procedure' && (
                            <div className="p-4 bg-gray-50 rounded-b-md border border-t-0 border-gray-200">
                                <p>Your tax planning procedure will be managed by our team of certified tax professionals and chartered accountants with extensive experience in tax law and financial advisory. They will provide personalized guidance based on your specific financial situation and goals.</p>
                            </div>
                        )}
                    </div>

                    <div className="mb-3">
                        <button
                            onClick={() => toggleAccordion('tax-responsibilities')}
                            className={`w-full p-4 flex justify-between items-center text-left ${expandedSection === 'tax-responsibilities' ? 'bg-blue-800 text-white' : 'bg-blue-800 text-white'} rounded-md`}
                        >
                            <span className="font-medium">What are the Responsibilities of our Tax Planners & Advisors?</span>
                            {expandedSection === 'tax-responsibilities' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                        {expandedSection === 'tax-responsibilities' && (
                            <div className="p-4 bg-gray-50 rounded-b-md border border-t-0 border-gray-200">
                                <p>Our tax planners and advisors are responsible for analyzing your financial situation, identifying tax-saving opportunities, ensuring compliance with tax laws, preparing and reviewing tax documents, representing clients before tax authorities if needed, and providing ongoing advice on financial decisions that may impact your tax status.</p>
                            </div>
                        )}
                    </div>

                    <div className="mb-3">
                        <Button
                            loading={loading}
                            onClick={() => toggleAccordion('benefits')}
                            className={`w-full p-4 flex justify-between items-center text-left ${expandedSection === 'benefits' ? 'bg-blue-800 text-white' : 'bg-blue-800 text-white'} rounded-md`}
                        >
                            <span className="font-medium">Benefits of availing Tax Consultancy from Ease My Tax™</span>
                            {expandedSection === 'benefits' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </Button>
                        {expandedSection === 'benefits' && (
                            <div className="p-4 bg-gray-50 rounded-b-md border border-t-0 border-gray-200">
                                <p>By choosing our tax consultancy services, you benefit from expert advice from certified professionals, personalized tax planning strategies, time and cost efficiency, minimization of tax liabilities through legal means, reduced risk of errors and penalties, and continuous support throughout the financial year.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FaqSection
