import { Plus } from 'lucide-react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ id, title, description, imageUrl }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/our-services/${id}`);
    };

    return (
        <div
            className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg cursor-pointer group"
            onClick={handleCardClick}
        >
            <div className="h-48 overflow-hidden relative">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-contain p-4 transition-all duration-300 group-hover:blur-[2px]"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-orange-500 rounded-full p-2">
                        <Plus className="text-white" size={24} />
                    </div>
                </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold mt-2 text-left border-t-4 border-orange-400 pt-2 w-28">
                    {title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm text-left flex-grow">
                    {description}
                </p>
                <div
                    className="mt-4 text-left px-0 text-gray-700 hover:text-orange-500 font-medium transition-colors"
                >
                    Click Here
                </div>
            </div>
        </div>
    )
}

export default ServiceCard
