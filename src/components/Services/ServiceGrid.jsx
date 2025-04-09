import React from 'react'
import ServiceCard from './ServiceCard'
import { serviceData } from './serviceData'


const ServiceGrid = () => {
    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold">Our Services</h2>
                    <div className="w-16 h-1 bg-green-500 mx-auto mt-2"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {serviceData.map((service) => (
                        <ServiceCard
                            key={service.id}
                            id={service.id}
                            title={service.title}
                            description={service.description}
                            imageUrl={service.imageUrl}
                        />
                    ))}

                    <div className="bg-green-100 p-6 flex flex-col justify-center items-center text-center rounded-lg">
                        <h3 className="text-xl font-bold mb-4">How We Can Help You?</h3>
                        <p className="mb-6">
                            Connect with our experts to get more details about your selected service.
                        </p>
                        <button className="bg-white hover:bg-gray-100 text-black font-medium py-2 px-4 rounded-md flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <a href='tel:+91 8866397377'>Contact Now</a> 
                        </button>
                    </div>
                </div>

                <div className="mt-16 flex justify-center items-center gap-8 flex-wrap">
                    <img src="/trustpilot.png" alt="Trustpilot" className="h-16" />
                    <div className="text-gray-600 text-lg italic">
                        "We were fully equipped with technology and knew how to guide us and get our work done with innocent steps."
                    </div>
                    <div className="text-gray-600 text-lg italic">
                        "Thanks for addressing client grievances in time and giving you counsel with righteous way."
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceGrid
