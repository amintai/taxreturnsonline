import { ThumbsUp } from 'lucide-react'
import React from 'react'

const HowWeWork = () => {
    return (
        <section className="py-12 px-4 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-2">How we work?</h2>
            <div className="max-w-6xl mx-auto mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                    {/* Step 1 */}
                    <div className="bg-green-700 text-white p-6 rounded-md text-center h-full flex flex-col justify-between">
                        <div>
                            <h3 className="text-base font-semibold mb-3">Fill the Form to Complete the Payment</h3>
                            <p className="text-sm">→</p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-green-700 text-white p-6 rounded-md text-center h-full flex flex-col justify-between">
                        <div>
                            <h3 className="text-base font-semibold mb-3">Receive the Call from our Specialised Taxation Expert Panel</h3>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-green-700 text-white p-6 rounded-md text-center h-full flex flex-col justify-between">
                        <div>
                            <h3 className="text-base font-semibold mb-3">Explain your queries to the Tax Expert & submit the details</h3>
                            <p className="text-sm">→</p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="bg-green-700 text-white p-6 rounded-md text-center h-full flex flex-col justify-between">
                        <div>
                            <h3 className="text-base font-semibold mb-3">The Tax Planners will analyze and conduct an error-free Tax Computation</h3>
                            <p className="text-sm">→</p>
                        </div>
                    </div>

                    {/* Step 5 */}
                    <div className="bg-green-700 text-white p-6 rounded-md text-center h-full flex flex-col justify-between">
                        <div>
                            <h3 className="text-base font-semibold mb-3">We will suggest the Legal & Financial compliances to minimize the Tax Liability</h3>
                            <p className="text-sm">→</p>
                        </div>
                    </div>

                    {/* Step 6 */}
                    <div className="bg-green-700 text-white p-6 rounded-md text-center h-full flex flex-col justify-between">
                        <div>
                            <h3 className="text-base font-semibold mb-3">Finalizing the Tax Planning from your end</h3>
                            <ThumbsUp className="mx-auto mt-2" size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowWeWork
