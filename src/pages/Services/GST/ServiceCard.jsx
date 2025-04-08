import { ArrowRight } from 'lucide-react'
import React from 'react'

const ServiceCard = ({
    title,
    icon,
    color,
    description
}) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className={`${color} p-6 relative h-48`}>
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="relative z-10 h-full flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white">{title}</h3>
                </div>
            </div>
            <div className="p-6">
                <p className="text-gray-600 mb-6 text-sm">{description}</p>
                <button
                    variant="link"
                    className="text-green-500 hover:text-green-600 p-0 flex items-center gap-1 font-medium"
                >
                    Click Here <ArrowRight className="h-4 w-4" />
                </button>
            </div>
        </div>
    )
}

export default ServiceCard
