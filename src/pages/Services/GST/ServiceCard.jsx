import { ArrowRight } from 'lucide-react';
import React from 'react';

const ServiceCard = ({ title, image, color, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full">
      {/* Card Header */}
      <div className={`relative h-48 ${color}`}>
        <img
          src={image}
          alt="GST Background"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end p-4">
          <h3 className="text-white text-xl font-semibold drop-shadow-md">{title}</h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <p className="text-gray-600 text-sm mb-6">{description}</p>

        <div className="mt-auto flex justify-center">
          <a href='/contact-us' className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 flex items-center gap-2 transition-all">
            Contact Us <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
