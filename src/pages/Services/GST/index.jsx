import HeroComponent from "./HeroComponent";
import ServiceSection from "./ServiceSection";
import DocumentRequired from "../ImportExportCode/components/Documents";
import Benefits from "./Benfits";
import PricingPackages from "./PricingPacakges";

const GstRegistration = () => {
  return (
    <div>
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
          <HeroComponent />
          <ServiceSection />

          <div className="text-center py-8 px-4">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              GST Registration - Overview
            </h1>
            <div className="w-32 h-1 bg-blue-800 mx-auto mt-2"></div>

            <div className="w-24 h-1 bg-iec-green mx-auto mb-4"></div>
            <p className="text-sm md:text-base max-w-4xl mx-auto text-gray-700">
              Businesses must register as regular taxable persons under the
              Goods and Services Tax (GST) if their annual revenue exceeds the
              threshold limit of Rs. 40 lakhs (in case of goods), Rs. 20 lakhs
              (in case of services), or Rs. 10 lakhs, as applicable. GST
              registration is the term for it.
            </p>
            <p className="mt-4 text-sm md:text-base max-w-4xl mx-auto text-gray-700">
              It is mandatory to generate the GSTIN if annual turnover exceeds
              the above prescribed limit. If the company conducts business
              without registering for GST, it is an offence and faces severe
              penalties.
            </p>
            <p className="mt-4 text-sm md:text-base max-w-4xl mx-auto text-gray-700">
              It typically takes 4 to 6 working days to register for GST. In 3
              simple steps, Team Tax Returns Online can assist you in obtaining
              GST registration more quickly.
            </p>
          </div>
        </div>

        <DocumentRequired />
        <Benefits />
        <PricingPackages />
      </div>
    </div>
  );
};

export default GstRegistration;
