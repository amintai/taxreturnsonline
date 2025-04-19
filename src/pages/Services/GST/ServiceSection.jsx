import React from 'react'
import ServiceCard from './ServiceCard'

const services = [
    {
        title: "GST Registration",
        icon: "registration",
        color: "bg-yellow-500",
        description:
          "Become a Govt. registered taxpayer in India. GST expert of Ease My Tax will help you at every stage. Apply for GSTIN from any states in India.",
      },
      {
        title: "GST Return Filing",
        icon: "filing",
        color: "bg-orange-500",
        description:
          "Simplify compliance with GST expert assisted online GST return filing. Purchase plan and let us handle the GST Returns for you.",
      },
      {
        title: "GST Surrender/Cancel",
        icon: "cancel",
        color: "bg-red-500",
        description:
          "Your GST registration can be cancelled at anytime due to various reasons. You can easily cancel a GST registration online through Ease My Tax.",
      },
      {
        title: "GST Modification Update",
        icon: "update",
        color: "bg-blue-800",
        description:
          "Ease My Tax will help you fulfill all the formalities regarding the GST registration and amendment of GST registration.",
      },
      {
        title: "GST NIL Return Filing",
        icon: "nil-return",
        color: "bg-blue-500",
        description:
          "Let the country's leading business taxation experts Evaluate, Manage, and File your GST Nil Returns | Complete Digital Assistance at your Fingertips.",
      },
      {
        title: "GSTR-9 Annual Filing",
        icon: "annual",
        color: "bg-amber-600",
        description:
          "Our Legal Tax Experts are Never Late in Filing Annual GSTR-9 for You | Get 360° Professional Guidance in Each Step from Collecting Documents to GST Filing.",
      },
      {
        title: "GST LUT Filing",
        icon: "lut",
        color: "bg-indigo-600",
        description:
          "Launch your Export Business in the Foreign Market with GST LUT Filing from our Specialised Taxation Team at Online Legal India™ | Get Approval Quickly.",
      },
      {
        title: "GST E-WayBills",
        icon: "waybill",
        color: "bg-cyan-600",
        description:
          "Trusted by over 1,20,000+ Corporate Entities | 360° GST Online E-Way Bill Generation Assistance from anywhere in our Nation.",
      },
  ];

const ServiceSection = () => {
  return (
    <div className="py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">GST Services</h2>
          <div className="w-24 h-1 bg-blue-800 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              icon={service.icon}
              color={service.color}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceSection
