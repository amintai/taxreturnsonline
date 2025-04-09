import React from 'react'

const HeroSection = () => {
    return (
        <div className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white p-5 sm:p-8 rounded-lg mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                Company Registration
            </h1>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Start your business journey with our complete company registration package. We handle incorporation, compliance setup, and all necessary registrations.
            </p>

            <div className="bg-orange-500 text-white p-3 sm:p-4 rounded-md inline-block">
                <h3 className="font-bold text-lg sm:text-xl mb-1">Avail Consultations from our Experienced CAs</h3>
                <p className="text-base sm:text-lg">@Rs 999! *</p>
            </div>
        </div>
    )
}

export default HeroSection
