import React from 'react'

const HeroSection = () => {
    return (
        <div className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white p-8 rounded-lg mb-8">
            <h1 className="text-3xl font-bold mb-4">
                Company Registration
            </h1>
            <p className="text-lg mb-6">
                Start your business journey with our complete company registration package. We handle incorporation, compliance setup, and all necessary registrations.
            </p>

            <div className="bg-orange-500 text-white p-4 rounded-md inline-block">
                <h3 className="font-bold text-xl mb-1">Avail Consultations from our Experienced CAs</h3>
                <p className="text-lg">@Rs 999! *</p>
            </div>
        </div>
    )
}

export default HeroSection
