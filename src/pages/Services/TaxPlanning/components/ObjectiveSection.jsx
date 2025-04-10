import React from 'react'

const ObjectiveSection = () => {
    return (
        <section className="py-12 px-4 bg-white">
            <h2 className="text-3xl font-bold text-center mb-12">Objectives of Tax Planning</h2>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Objective 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                            <img src="/images/services/economic-growth.jpeg" alt="Growth Icon" className="w-10 h-10 object-contain" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Healthy Economical Growth</h3>
                        <p className="text-sm text-gray-600">
                            Proper tax planning helps an individual or organization to save an excessive payable amount of taxes, which is helpful for an economical stability.
                        </p>
                    </div>

                    {/* Objective 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                            <img src="/images/services/tax-liability.jpeg" alt="Reduction Icon" className="w-10 h-10 object-contain" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Reduction of Tax Liability</h3>
                        <p className="text-sm text-gray-600">
                            The tax planners can professionally structure the ways to minimize the taxable amounts while remaining ethical and within legal boundaries.
                        </p>
                    </div>

                    {/* Objective 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                            <img src="/images/services/legal-issue.jpeg" alt="Legal Icon" className="w-10 h-10 object-contain" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Avoiding Legal Issues</h3>
                        <p className="text-sm text-gray-600">
                            Through the expert tax planner's inputs, an organization or individual can keep away the legal provisions in terms of tax deductions.
                        </p>
                    </div>

                    {/* Objective 4 */}
                    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                            <img src="/images/services/economic-stability.jpeg" alt="Stability Icon" className="w-10 h-10 object-contain" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Economic Stability</h3>
                        <p className="text-sm text-gray-600">
                            A well designed yearly tax plan ensures all the liable taxes are paid on time, bringing a productive economical status for the particular taxpayers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ObjectiveSection
