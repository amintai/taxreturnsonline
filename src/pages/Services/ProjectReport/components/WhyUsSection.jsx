import React from "react";
import { Award, Users, Shield, Clock, Timer, Star } from "lucide-react";

const features = [
  {
    icon: <Award className="text-green-600" size={24} />,
    title: "Recognized by Govt. of India"
  },
  {
    icon: <Users className="text-green-600" size={24} />,
    title: "1 Lakh+ Happy Customers Across India"
  },
  {
    icon: <Award className="text-green-600" size={24} />,
    title: "ISO 9001: 2015 Certified"
  },
  {
    icon: <Shield className="text-green-600" size={24} />,
    title: "Personal Data Security & Trust"
  },
  {
    icon: <Timer className="text-green-600" size={24} />,
    title: "10+ Years Experienced CA/CS"
  },
  {
    icon: <Clock className="text-green-600" size={24} />,
    title: "Quick Services Assured"
  },
  {
    icon: <Award className="text-green-600" size={24} />,
    title: "Challenging Prices across India"
  },
  {
    icon: <Users className="text-green-600" size={24} />,
    title: "Quick Response Team"
  },
  {
    icon: <Star className="text-green-600" size={24} />,
    title: "Excellent Reviews & Ratings"
  }
];

const WhyUsSection = () => {
  return (
    <div className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Us?
          <div className="h-1 w-32 bg-green-500 mx-auto mt-2"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center">
                {feature.icon}
              </div>
              <p className="font-medium">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;