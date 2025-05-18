
import React, { useState } from 'react';
import PriceComparisonTabs from './PriceComparisionTabs';
import DocumentsList from './DocumentList';
import PricingCard from './PriceCard';

// Data for company types
const companyTypes = [
  { 
    id: "pvt-ltd", 
    name: "Pvt. Ltd. Company / One Person Company",
    complianceDocuments: [
      { id: "1", name: "ADT – 1: Auditor Appointment" },
      { id: "2", name: "AOC – 4: Annual Return Filing (within 30 days of Company's AGM)" },
      { id: "3", name: "MGT – 7: Annual Return Filing (within 60 days of Company's AGM)" },
      { id: "4", name: "DIR – 3: KYC of the Company Director(s)" },
      { id: "5", name: "INC – 20A: Declaration for the commencement of business" },
      { id: "6", name: "Financial statement preparation" },
      { id: "7", name: "Income Tax Return Filings" }
    ],
    requiredDocuments: [
      { id: "1", name: "Directors' Board Meeting minutes" },
      { id: "2", name: "Profit & Loss Balance Sheet of Pvt. Ltd./OPC" },
      { id: "3", name: "Conclusions from the Annual General Meeting (AGM)" },
      { id: "4", name: "Audit report" },
      { id: "5", name: "Financial statement preparation" },
      { id: "6", name: "Income Tax Return Filings" }
    ],
    pricing: {
      basic: {
        price: "Rs. 14,999 only",
        description: "+ 18% GST for the turnover upto 20 lakhs"
      },
      standard: {
        price: "Rs. 24,999 only",
        description: "+ 18% GST for the turnover of 20 - 50 lakhs"
      },
      premium: {
        price: "Rs. 34,999 only",
        description: "+ 18% GST for the turnover of 51 - 100 lakhs"
      }
    }
  },
  {
    id: "llp", 
    name: "Limited Liability Partnership (LLP)",
    complianceDocuments: [
      { id: "1", name: "Form 8: Statement of Accounts" },
      { id: "2", name: "Form 11: Annual Return of LLP" },
      { id: "3", name: "Financial statement preparation" },
      { id: "4", name: "Income Tax Return Filings" },
      { id: "5", name: "DIR-3 Kyc of the Directors" },
    ],
    requiredDocuments: [
      { id: "1", name: "Conclusions from the Annual General Meeting (AGM)" },
      { id: "2", name: "Profit & Loss Balance Sheet of LLP" },
      { id: "3", name: "Audit report" },
      { id: "4", name: "DSC of the Partners" },
      { id: "5", name: "Incorporation documents (PAN Card, Certificate of Incorporation)" }
    ],
    pricing: {
      basic: {
        price: "Rs. 7,999 only",
        description: "+ 18% GST for the turnover upto 20 lakhs"
      },
      standard: {
        price: "Rs. 14,999 only",
        description: "+ 18% GST for the turnover of 20 - 50 lakhs"
      },
      premium: {
        price: "Rs. 24,999 only",
        description: "+ 18% GST for the turnover of 51 - 100 lakhs"
      }
    }
  },
  {
    id: "section-8", 
    name: "Section 8 company",
    complianceDocuments: [
      { id: "1", name: "ADT – 1: Auditor Appointment" },
      { id: "2", name: "AOC – 4: Annual Return Filing (within 30 days of Company's AGM)" },
      { id: "3", name: "MGT – 7: Annual Return Filing (within 60 days of Company's AGM)" },
      { id: "4", name: "DIR – 3: KYC of the Company Director(s)" },
      { id: "5", name: "INC – 20A: Declaration for the commencement of business" },
      { id: "6", name: "Financial statement preparation" },
      { id: "7", name: "Income Tax Return Filings" }
    ],
    requiredDocuments: [
      { id: "1", name: "Directors' Board Meeting minutes" },
      { id: "2", name: "Profit & Loss Balance Sheet" },
      { id: "3", name: "Conclusions from the Annual General Meeting (AGM)" },
      { id: "4", name: "Audit report" },
      { id: "5", name: "DSC of the Directors" },
      { id: "6", name: "Incorporation documents (PAN Card, Certificate of Incorporation)" }
    ],
    pricing: {
      basic: {
        price: "Rs. 14,999 only",
        description: "+ 18% GST for the turnover upto 20 lakhs"
      },
      standard: {
        price: "Rs. 24,999 only",
        description: "+ 18% GST for the turnover of 20 - 50 lakhs"
      },
      premium: {
        price: "Rs. 34,999 only",
        description: "+ 18% GST for the turnover of 51 - 100 lakhs"
      }
    }
  },
  {
    id: "plc", 
    name: "Public Limited Company",
    complianceDocuments: [
      { id: "1", name: "ADT – 1: Auditor Appointment" },
      { id: "2", name: "AOC – 4: Annual Return Filing (within 30 days of Company's AGM)" },
      { id: "3", name: "MGT – 7: Annual Return Filing (within 60 days of Company's AGM)" },
      { id: "4", name: "DIR – 3: KYC of the Company Director(s)" },
      { id: "5", name: "INC – 20A: Declaration for the commencement of business" },
      { id: "6", name: "Financial statement preparation" },
      { id: "7", name: "Income Tax Return Filings" }
    ],
    requiredDocuments: [
      { id: "1", name: "Directors' Board Meeting minutes" },
      { id: "2", name: "Profit & Loss Balance Sheet" },
      { id: "3", name: "Conclusions from the Annual General Meeting (AGM)" },
      { id: "4", name: "Audit report" },
      { id: "5", name: "DSC of the Directors" },
      { id: "6", name: "Incorporation documents (PAN Card, Certificate of Incorporation)" }
    ],
    pricing: {
      basic: {
        price: "Rs. 14,999 only",
        description: "+ 18% GST for the turnover upto 20 lakhs"
      },
      standard: {
        price: "Rs. 24,999 only",
        description: "+ 18% GST for the turnover of 20 - 50 lakhs"
      },
      premium: {
        price: "Rs. 34,999 only",
        description: "+ 18% GST for the turnover of 51 - 100 lakhs"
      }
    }
  }
];

const PriceComparison = () => {
  const [activeTab, setActiveTab] = useState("pvt-ltd");

  console.log("companyTypes",companyTypes)
  const activeCompany = companyTypes.find(company => company.id === activeTab);

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800">
        Business Compliance & Pricing
      </h1>
      
      <PriceComparisonTabs
        companyTypes={companyTypes}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              {activeCompany?.name}
            </h2>
            
            <DocumentsList
              title="Compliance Requirements" 
              documents={activeCompany?.complianceDocuments || []} 
            />
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Required Documents
            </h2>
            
            <DocumentsList 
              title="" 
              documents={activeCompany?.requiredDocuments || []} 
            />
          </div>
        </div>
        
        <div className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <PricingCard
              tier="Basic" 
              price={activeCompany?.pricing.basic.price || ""} 
              description={activeCompany?.pricing.basic.description || ""} 
              bgColor="bg-orange-100" 
            />
            
            <PricingCard 
              tier="Standard" 
              price={activeCompany?.pricing.standard.price || ""} 
              description={activeCompany?.pricing.standard.description || ""} 
              bgColor="bg-green-100" 
            />
            
            <PricingCard 
              tier="Premium" 
              price={activeCompany?.pricing.premium.price || ""} 
              description={activeCompany?.pricing.premium.description || ""} 
              bgColor="bg-blue-100" 
            />
          </div>
          
          <p className="text-sm text-gray-500 text-center mt-4">
            *(Exclusive of govt fees & Audit fees)
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceComparison;
