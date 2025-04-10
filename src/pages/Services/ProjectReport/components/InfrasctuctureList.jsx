import React from "react";
import { CheckCheck } from "lucide-react";

const infrastructureItems = [
  "The Place of the Project",
  "Required Raw Materials",
  "Target of Production or goal of the business",
  "Area required for the purpose",
  "Electricity Requirements",
  "Water requirements",
  "Requirement of Fuel except for electricity",
  "Employment requirements: skilled and unskilled",
  "Area of Technology",
  "Production process",
  "The volume of expected production",
  "Unit market selling price",
  "Whether Pollution treatment plants required"
];

const customerDetails = "After the production of goods where you will sell, or the consumers for services needs to mention clearly. Targeted customers or clients must be mentioned for your business. Mention B2B or B2C sales.";

const regionalOperations = "The planning for branches or already successful in opening branches in different regions must be mentioned. If the branch setup has been planned internationally, mention it.";

const InfrastructureList = () => {
  return (
    <div className="py-12 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-start gap-2">
              <CheckCheck className="text-orange-500 mt-1 flex-shrink-0" size={22} />
              <div>
                <h3 className="font-semibold text-xl mb-4">Infrastructure Facilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                  {infrastructureItems.map((item, index) => (
                    <div key={index} className="flex items-baseline">
                      <span className="text-green-700 font-medium mr-2">{index + 1}.</span>
                      <span className="text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <div className="flex items-start gap-2">
              <CheckCheck className="text-orange-500 mt-1 flex-shrink-0" size={22} />
              <div>
                <h3 className="font-semibold text-xl mb-2">Customer Details</h3>
                <p className="text-gray-700">{customerDetails}</p>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <div className="flex items-start gap-2">
              <CheckCheck className="text-orange-500 mt-1 flex-shrink-0" size={22} />
              <div>
                <h3 className="font-semibold text-xl mb-2">Regional Operations</h3>
                <p className="text-gray-700">{regionalOperations}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfrastructureList;