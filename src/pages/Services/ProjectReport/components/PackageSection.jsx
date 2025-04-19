import React from "react";
import { CheckCheck } from "lucide-react";

const PackageSection = () => {
  return (
    <div className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Packages for <span className="text-orange-500">Project Report</span> Preparation
          <div className="h-1 w-32 bg-blue-800 mx-auto mt-2"></div>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/lovable-uploads/65fb68d2-54a4-4b77-8746-c68c83dd1d85.png" 
              alt="Project Report Illustration" 
              className="w-48 md:w-64 h-auto" 
            />
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
              <div className="bg-blue-800 text-white py-3 px-4 rounded-t-lg mb-4">
                <h3 className="text-xl font-semibold">Onetime Charge</h3>
                <p className="text-2xl font-bold mt-1">₹6,999 <span className="text-sm font-normal">+18% GST</span></p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCheck className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                  <span>Project Report</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCheck className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                  <span>Call, Chat, Email Support</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCheck className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                  <span>No hidden charges</span>
                </div>
              </div>
              
              <button className="w-full bg-blue-800 hover:bg-green-700 text-white font-semibold py-3 rounded-md">
                Request a Call Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageSection;