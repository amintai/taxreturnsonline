import React from "react";
import ItrApplicationForm from "./ItrApplicationForm";
import ItrFaq from "./ItrFaq";
import ItrDocuments from "./ItrDocuments";
import ItrBenefits from "./ItrBenifits";
import ITRFilingPackages from "./ITRPricingPackages";

const ItrReturn = () => {
  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <a
          href="/our-services"
          className="flex items-center text-blue-800 hover:text-blue-800 mb-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Services
        </a>

        <div className="text-center py-8 px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            File Your Income Tax Return (ITR) Online with Tax Returns Online
          </h1>
          {/* <div className="w-32 h-1 bg-blue-800 mx-auto mt-2"></div> */}
          <div className="w-24 h-1 bg-blue-800 mx-auto mb-4"></div>
          <p className="text-sm md:text-base max-w-4xl mx-auto text-gray-700">
            Let our team of Chartered Accountants help you file your ITR online,
            accurately and quickly. Whether you're a salaried employee,
            freelancer, or business owner, we've got your tax filing covered.
          </p>
        </div>

        <ITRFilingPackages />

        <div className="flex flex-col lg:flex-row gap-8">
          {/* <div className="lg:w-1/2">
            <ItrApplicationForm />
          </div> */}
          {/* <div className="lg:w-1/2">
            <ItrFaq />
          </div> */}
        </div>

        <ItrDocuments />
        <ItrBenefits />
      </div>
    </div>
  );
};

export default ItrReturn;
