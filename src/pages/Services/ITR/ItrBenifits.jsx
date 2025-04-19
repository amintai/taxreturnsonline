import React from 'react';

const ItrBenefits = () => {
  const benefits = [
    "Helps in securing visa and travel approvals.",
    "Proof of income for loan & credit card applications.",
    "Enables carry forward of losses.",
    "Claim refunds on excess tax paid.",
    "Avoid late filing penalties under section 234F.",
    "Compliance with income tax laws builds financial credibility."
  ];

  return (
    <div className="my-12">
      <h2 className="text-xl font-semibold text-center mb-10 relative">
        Benefits of Filing ITR
        <div className="w-16 h-1 bg-blue-800 mx-auto mt-2"></div>
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-800 mt-2"></span>
      </h2>

      <ul className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
        {benefits.map((item, index) => (
          <li key={index} className="bg-white shadow-md p-4 rounded-md border-l-4 border-blue-600">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItrBenefits;
