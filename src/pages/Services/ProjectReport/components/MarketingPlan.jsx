import React from "react";
import { CheckCheck } from "lucide-react";

const marketingItems = [
  "Type of customers",
  "Target markets",
  "Nature of market",
  "Cost of marketing",
  "Market segmentation",
  "The objective of the sales",
  "Future prospects of the market",
  "Demand of the product in the different markets",
  "Market share of the proposed venture"
];

const MarketingPlan = () => {
  return (
    <div className="py-12 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-start gap-2">
              <CheckCheck className="text-orange-500 mt-1 flex-shrink-0" size={22} />
              <div>
                <h3 className="font-semibold text-xl mb-4">Marketing Plan</h3>
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2">
                    <div className="grid grid-cols-1 gap-y-3">
                      {marketingItems.slice(0, 5).map((item, index) => (
                        <div key={index} className="flex items-baseline">
                          <span className="text-green-700 font-medium mr-2">{index + 1}.</span>
                          <span className="text-gray-800">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="md:w-1/2 mt-4 md:mt-0">
                    <div className="grid grid-cols-1 gap-y-3">
                      {marketingItems.slice(5).map((item, index) => (
                        <div key={index} className="flex items-baseline">
                          <span className="text-green-700 font-medium mr-2">{index + 6}.</span>
                          <span className="text-gray-800">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-center">
                  <img 
                    src="/lovable-uploads/114f6dad-9462-45c4-8b8c-1f169bac1257.png" 
                    alt="Marketing Illustration" 
                    className="w-56 h-auto" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingPlan;