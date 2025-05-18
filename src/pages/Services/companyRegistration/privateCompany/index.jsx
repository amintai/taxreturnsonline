import ComparisonTable from "../ComparisionTable";
import HeroSection from "./HeroSection";
import PricingPlans from "./PricingPlans";
import RequiredDocuments from "./RequiredDocuments";

const PrivateCompany = () => {
  return (
    <div>
      <HeroSection />
      <div className="text-center py-8 px-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Fastest Private Limited (Pvt. Ltd.) Company Registration In India |
          Same Day Process
        </h1>
        {/* <div className="w-32 h-1 bg-blue-800 mx-auto mt-2"></div> */}
        <div className="w-24 h-1 bg-blue-800 mx-auto mb-4"></div>
        <p className="text-sm md:text-base max-w-4xl mx-auto text-gray-700">
          Register your startup company as private limited with Online Legal
          India™ at the lowest Fees. Online Legal India is an MCA (Ministry of
          Corporate Affairs) & MSME registered company in India. Our experienced
          (10 Yrs+) CA/CS will draft & complete all the documentations on the
          same day.
        </p>
      </div>
      <div className="text-center">
        <h1 className="text-xl font-bold mb-2">Overview</h1>
        {/* <div className="w-32 h-1 bg-blue-800 mx-auto mt-2"></div> */}
        <div className="w-24 h-1 bg-blue-800 mx-auto mb-4"></div>
        <p className="max-w-4xl mx-auto text-gray-700">
          Private Limited Company in India is one of the popular forms of
          business entities. Approximately 90% of companies in India are
          registered under Private Limited Company. There are more than 150,000
          companies that are being registered on a yearly basis. It is a
          separate legal entity with limited liability and perpetual existence
          incorporated now under the Companies Act, 2013.
        </p>
      </div>{" "}
      <ComparisonTable />
      <RequiredDocuments />
      <PricingPlans />
    </div>
  );
};

export default PrivateCompany;
