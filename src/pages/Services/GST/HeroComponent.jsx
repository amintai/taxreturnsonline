import { Check } from 'lucide-react'
import React from 'react'

const HeroComponent = () => {
    return (
        <div className="bg-blue-800 w-full py-16 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Goods and Services Tax (GST) Compliance
                    </h1>
                    <div className="grid gap-4">
                        <div className="flex items-center gap-2">
                            <div className="bg-white rounded-full p-1">
                                <Check className="h-4 w-4 text-blue-800" />
                            </div>
                            <span className="text-white">Get help in GST Registration</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="bg-white rounded-full p-1">
                                <Check className="h-4 w-4 text-blue-800" />
                            </div>
                            <span className="text-white">Get help in GST Return Filing</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="bg-white rounded-full p-1">
                                <Check className="h-4 w-4 text-blue-800" />
                            </div>
                            <span className="text-white">Get help in GST Surrender/Cancel</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="bg-white rounded-full p-1">
                                <Check className="h-4 w-4 text-blue-800" />
                            </div>
                            <span className="text-white">Get help in GST Modification Update</span>
                        </div>
                    </div>
                    <div className="mt-8">
                        <button className="bg-blue-800 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-md">
                            Contact Us
                        </button>
                    </div>
                </div>
                <div className="hidden md:flex justify-center items-center">
                    <img
                        src="/images/services/gst-service-2.jpeg"
                        alt="GST Compliance"
                        className="max-w-full h-auto"
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroComponent
