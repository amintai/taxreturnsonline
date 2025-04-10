import React from "react";
import { Check } from "lucide-react";
import ContactForm from "./ContactForm";

const HeroSection = () => {
  return (
    <div className="bg-green-100 py-16 px-4 md:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-start gap-10">
        <div className="lg:w-7/12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Prepare <span className="text-orange-500">Project Report</span> for Bank Loan
            <br />To Start a New Business!
          </h1>
          <p className="mb-6 text-gray-800">
            Professional CA/CS is dedicated for you to prepare a Project Report to avail an Easy Loan
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start gap-2">
              <Check className="text-orange-500 mt-1 flex-shrink-0" />
              <span>10 Years+ experienced CA/CS</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="text-orange-500 mt-1 flex-shrink-0" />
              <span>ISO 9001:2015 Certified</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="text-orange-500 mt-1 flex-shrink-0" />
              <span>1 Lakh+ Satisfied Clients</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="text-orange-500 mt-1 flex-shrink-0" />
              <span>Challenging Low Cost Across India</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="text-orange-500 mt-1 flex-shrink-0" />
              <span>Guaranteed Quality Services</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="text-orange-500 mt-1 flex-shrink-0" />
              <span>No Hidden Charges</span>
            </div>
          </div>
{/*           
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-2">
                <img 
                  src="https://www.trustpilot.com/favicon.ico" 
                  alt="Trustpilot" 
                  className="h-6 w-6 mr-2" 
                />
                <span className="font-semibold">Trustpilot</span>
              </div>
              <div className="flex items-center">
                <div className="flex text-green-500">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <span className="ml-2 text-sm font-medium">
                  Rated 4.5/5 from <br /> 31,216 Reviews
                </span>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-2">
                <img 
                  src="https://www.google.com/favicon.ico" 
                  alt="Google" 
                  className="h-6 w-6 mr-2" 
                />
                <span className="font-semibold">Google</span>
              </div>
              <div className="flex items-center">
                <div className="flex text-yellow-500">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <span className="ml-2 text-sm font-medium">
                  Rated 4.6/5 from <br /> 34,57 Reviews
                </span>
              </div>
            </div>
          </div> */}
        </div>
        
        <div className="lg:w-5/12 w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;