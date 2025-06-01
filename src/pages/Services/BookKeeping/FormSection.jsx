import { ChevronDown, ChevronUp } from 'lucide-react'
import React from 'react'
import Button from '../../../components/Button'

const FormSection = ({
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
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Need Help with Online Bookkeeping?</h2>
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
                            Contact Us
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
                            <span className="font-medium">What is the Bookkeeping Process?</span>
                            {expandedSection === 'tax-planning-process' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                        {expandedSection === 'tax-planning-process' && (
                            <div className="p-4 bg-gray-50 rounded-b-md border border-t-0 border-gray-200">
                                <p>Bookkeeping is a concept of the modern accounting process maintaining data of financial transactions that include sales, purchases, receipts, and payments. It is used to Record, Analyze, and Prepare financial transactions, statements on a daily basis of a business entity. It is a set of corresponding entries that abide by the rules of GAAP (Generally Accepted Accounting Principles).</p>
                            </div>
                        )}
                    </div>

                    <div className="mb-3">
                        <button
                            onClick={() => toggleAccordion('tax-advisor')}
                            className={`w-full p-4 flex justify-between items-center text-left ${expandedSection === 'tax-advisor' ? 'bg-blue-800 text-white' : 'bg-blue-800 text-white'} rounded-md`}
                        >
                            <span className="font-medium">Is Bookkeeping mandatory?</span>
                            {expandedSection === 'tax-advisor' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                        {expandedSection === 'tax-advisor' && (
                            <div className="p-4 bg-gray-50 rounded-b-md border border-t-0 border-gray-200">
                                <p>Yes, It is mandatory to keep the record of each transaction. All the books record needs to keep safe for the last 7 years.</p>
                            </div>
                        )}
                    </div>

                    <div className="mb-3">
                        <button
                            onClick={() => toggleAccordion('tax-planning-procedure')}
                            className={`w-full p-4 flex justify-between items-center text-left ${expandedSection === 'tax-planning-procedure' ? 'bg-blue-800 text-white' : 'bg-blue-800 text-white'} rounded-md`}
                        >
                            <span className="font-medium">Why is Bookkeeping Essential?</span>
                            {expandedSection === 'tax-planning-procedure' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                        {expandedSection === 'tax-planning-procedure' && (
                            <div className="p-4 bg-gray-50 rounded-b-md border border-t-0 border-gray-200">
                                <ul>
                                    <li>
                                        Easier Audit Process
                                    </li>
                                    <li>
                                        Better Tax Prediction and Filing
                                    </li>
                                    <li>
                                        Financial Management
                                    </li>
                                    <li>
                                        Enhanced Cash-flow status
                                    </li>
                                    <li>
                                        Complaint with the Law
                                    </li>
                                    <li>
                                        Profit and Growth Tracking
                                    </li>
                                    <li>
                                        Decision Making Process
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="mb-3">
                        <button
                            onClick={() => toggleAccordion('tax-responsibilities')}
                            className={`w-full p-4 flex justify-between items-center text-left ${expandedSection === 'tax-responsibilities' ? 'bg-blue-800 text-white' : 'bg-blue-800 text-white'} rounded-md`}
                        >
                            <span className="font-medium">
                                What is the service charge, and how much will I need to pay?
                            </span>
                            {expandedSection === 'tax-responsibilities' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                        {expandedSection === 'tax-responsibilities' && (
                            <div className="p-4 bg-gray-50 rounded-b-md border border-t-0 border-gray-200">
                                <p>The pricing starts at Rs. 999/-, but the final cost may vary depending on your specific requirements, as determined by the experts.</p>
                            </div>
                        )}
                    </div>

                    <div className="mb-3">
                        <Button
                            onClick={() => toggleAccordion('benefits')}
                            loading={loading}
                            className={`w-full p-4 flex justify-between items-center text-left ${expandedSection === 'benefits' ? 'bg-blue-800 text-white' : 'bg-blue-800 text-white'} rounded-md`}
                        >
                            <span className="font-medium">Benefits of availing Tax Consultancy from Tax Returns Online™</span>
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
        </section >
    )
}

export default FormSection
