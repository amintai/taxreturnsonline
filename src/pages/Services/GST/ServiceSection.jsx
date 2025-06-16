import React from 'react';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'GST Registration',
    icon: 'registration',
    color: 'bg-yellow-500',
    image: '/images/services/gst-registration.png',
    description:
      'Become a Govt. registered taxpayer in India. GST expert of Tax Returns Online will help you at every stage. Apply for GSTIN from any states in India.',
  },
  {
    title: 'GST Return Filing',
    icon: 'filing',
    color: 'bg-orange-500',
    image: '/images/services/gst-retrun-filing.jpg',
    description:
      'Simplify compliance with GST expert assisted online GST return filing. Purchase plan and let us handle the GST Returns for you.',
  },
  {
    title: 'GST Surrender/Cancel',
    icon: 'cancel',
    color: 'bg-red-500',
    image: '/images/services/gst-cancel.png',
    description:
      'Your GST registration can be cancelled at anytime due to various reasons. You can easily cancel a GST registration online through Tax Returns Online.',
  },
  {
    title: 'GST Modification Update',
    icon: 'update',
    color: 'bg-blue-800',
    image: '/images/services/gst-modification.jpg',
    description:
      'Tax Returns Online will help you fulfill all the formalities regarding the GST registration and amendment of GST registration.',
  },
  {
    title: 'GST NIL Return Filing',
    icon: 'nil-return',
    color: 'bg-blue-500',
    image: '/images/services/gst-nill-return.jpg',
    description:
      'Let the country’s leading business taxation experts Evaluate, Manage, and File your GST Nil Returns | Complete Digital Assistance at your Fingertips.',
  },
  {
    title: 'GSTR-9 Annual Filing',
    icon: 'annual',
    color: 'bg-amber-600',
    image: '/images/services/gst-annual.jpeg',
    description:
      'Our Legal Tax Experts are Never Late in Filing Annual GSTR-9 for You | Get 360° Professional Guidance in Each Step from Collecting Documents to GST Filing.',
  },
  {
    title: 'GST LUT Filing',
    icon: 'lut',
    color: 'bg-indigo-600',
    image: '/images/services/gst-lut-filing.jpg',
    description:
      'Launch your Export Business in the Foreign Market with GST LUT Filing from our Specialised Taxation Team at Tax Returns Online™ | Get Approval Quickly.',
  },
  {
    title: 'GST E-WayBills',
    icon: 'waybill',
    color: 'bg-cyan-600',
    image: '/images/services/gst-e-way-bill-guide.jpg',
    description:
      'Trusted by over 1,20,000+ Corporate Entities | 360° GST Online E-Way Bill Generation Assistance from anywhere in our Nation.',
  },
];

const ServiceSection = () => {
  return (
    <div className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">GST Services</h2>
          <div className="w-24 h-1 bg-blue-800 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              image={service.image}
              color={service.color}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
