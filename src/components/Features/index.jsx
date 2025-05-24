/* eslint-disable react/prop-types */
import React from "react";
import { Clock, MousePointer, Heart, Users, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Features = () => {
  const navigate = useNavigate();

  const phoneNumber = "918866397377"; // Replace with your WhatsApp number
  const message = "Hi, I need help with tax filing!";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Plans Tailored to Your Tax Needs, Expertly Delivered
        </h2>
        <p className="text-lg text-gray-600">
          We offer comprehensive tax solutions designed to meet your specific
          requirements, whether you're an individual, freelancer, or business
          owner.
        </p>
        <div className="w-24 h-1 bg-green-500 mx-auto mt-6"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuresData.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>

      <div className="mt-16 text-center space-y-4">
        {/* Primary Button: Get In Touch */}
        <button
          onClick={() => navigate("/contact-us")}
          className="inline-flex items-center justify-center bg-green-600 mr-5 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium shadow-sm transition-all duration-200"
        >
          Get In Touch
        </button>

        {/* Secondary Button: WhatsApp */}
        <a
          href={whatsappURL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-green-600 text-green-700 hover:bg-green-50 transition-all duration-200"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-medium">Connect on WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description, bgColor }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 group">
      <div
        className="mb-4 w-14 h-14 rounded-full flex items-center justify-center"
        style={{ backgroundColor: `${bgColor}25` }} // Adding 25 for 25% opacity
      >
        <Icon className="w-6 h-6" style={{ color: bgColor }} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const featuresData = [
  {
    icon: MousePointer,
    title: "Basic ITR Filing",
    description:
      "Hassle-free filing for individuals with straightforward income sources.",
    bgColor: "#005C9D",
  },
  {
    icon: Users,
    title: "Advanced Tax Planning",
    description:
      "Maximize your savings with personalized tax-saving strategies tailored to your financial profile.",
    bgColor: "#4D8DFF",
  },
  {
    icon: Heart,
    title: "Business Tax Solutions",
    description:
      "Expert tax filing and planning for freelancers, startups, and small businesses.",
    bgColor: "#740A76",
  },
  {
    icon: Clock,
    title: "Audit Assistance",
    description:
      "Comprehensive support for audits, ensuring compliance and smooth resolution.",
    bgColor: "#F03E3D",
  },
];

export default Features;
