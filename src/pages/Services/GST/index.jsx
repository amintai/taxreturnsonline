import React from 'react'
import HeroComponent from './HeroComponent'
import ServiceSection from './ServiceSection'
import Header from '../../../components/Header'

const GstRegistration = () => {
    return (
        <div>
            <Header />
            <div className="min-h-screen py-8 bg-gray-50">
                <div className="container mx-auto px-4">
                    <a
                        href="/our-services"
                        className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        Back to Services
                    </a>
                    <HeroComponent />
                    <ServiceSection />
                </div>
            </div>
        </div>
    )
}

export default GstRegistration
