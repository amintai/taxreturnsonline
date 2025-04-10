import { Check } from 'lucide-react';
import React from 'react'

const Pricing = () => {
    const packages = [
        {
            title: "Tax Planning for Salaried Individuals",
            price: "₹ 999",
            features: [
                "Efficient support from CA",
                "Annual tax planning from the Tax Experts",
                "Call/Email/Chat support",
                "1-time service",
            ],
        },
        {
            title: "NRI Tax Planning from Salary",
            price: "₹ 1499",
            features: [
                "Efficient support from CA",
                "Annual tax planning from the Tax Experts",
                "Call/Email/Chat support",
                "1-time service",
            ],
        },
        {
            title: "Advance Tax Payment & Planning",
            price: "₹ 1499",
            features: [
                "On-call support from CA",
                "Annual Direct+indirect tax planning from Tax Experts",
                "Computation of Advance Tax",
                "Call/Email/Chat support",
                "1-time service",
            ],
        },
        {
            title: "Tax Planning from House Property",
            price: "₹ 1499",
            features: [
                "Efficient support from CA",
                "Annual tax planning from Tax Experts",
                "Call/Email/Chat support",
                "1-time service",
            ],
        },
        {
            title: "Capital Gain Tax Planning (Long Term - Short Term)",
            price: "₹ 2499",
            features: [
                "Efficient support from CA",
                "Annual Direct+indirect tax planning from Tax Experts",
                "Call/Email/Chat support",
                "1-time service",
            ],
        },
        {
            title: "Tax Planning from Other Sources of Income",
            price: "₹ 2499",
            features: [
                "Efficient support from CA",
                "Yearly tax planning from Tax Experts",
                "Call/Email/Chat support",
                "1-time service",
            ],
        },
        {
            title: "ITR Tax Planning / Individual / Project Report",
            price: "₹ 1999",
            features: [
                "Efficient support from CA",
                "Yearly tax planning from Tax Experts",
                "Profit & Loss",
                "Balance Sheet Preparation",
                "Computation",
                "Call/Email/Chat support",
                "1-time service",
            ],
        },
        {
            title: "Tax Saving Plan after Financial Year End (Feb, Mar)",
            price: "₹ 1999",
            features: [
                "Efficient support from CA",
                "Yearly tax planning from Tax Experts",
                "Call/Email/Chat support",
                "1-time service",
            ],
        },
    ];

    return (
        <section className="py-12 px-4 bg-black text-white">
            <h2 className="text-3xl font-bold text-center mb-12">Select Packages</h2>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {packages.map((pkg, index) => (
                        <div key={index} className="bg-white text-black rounded-md overflow-hidden flex flex-col">
                            <div className="p-6 text-center flex-1 flex flex-col">
                                <h3 className="text-md font-semibold mb-3">{pkg.title}</h3>
                                <div className="text-green-500 text-3xl font-bold mb-6">{pkg.price}</div>
                                <ul className="text-left space-y-2 flex-1">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <Check size={16} className="mr-2 mt-1 text-green-500" />
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="px-6 pb-6 mt-auto">
                                <button className="w-full py-3 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 focus:outline-none transition-colors">
                                    Request Callback
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Pricing
