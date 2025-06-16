import React from "react";
import HeroSection from "./HeroSection";
import CompanyForm from "./CompanyForm";
import {
  Building,
  CreditCard,
  FileCheck,
  FileSpreadsheet,
  FileText,
  User,
} from "lucide-react";
import ComparisonTable from "./ComparisionTable";
import CompanyRegistrationInfo from "./CompanyRegistrationInfo";
import TypesOfCompanyReg from "./TypesOfCompanyReg";

const CompanyRegistration = () => {
  const documents = [
    {
      icon: <User className="w-12 h-12 text-iec-blue" />,
      title: "Two Colour Photographs of Person/Individual/ Company Director",
      image: "/images/services/passport-size.jpeg",
    },
    {
      icon: <CreditCard className="w-12 h-12 text-iec-blue" />,
      title: "PAN Card of firm/ directors/partners and directors",
      image: "/images/services/pan-card.jpeg",
    },
    {
      icon: <FileText className="w-12 h-12 text-iec-blue" />,
      title: "Identity Proof (Voter ID/ Driving License/ Passport)",
      image: "/images/services/voter-id-card.jpeg",
    },
    {
      icon: <FileCheck className="w-12 h-12 text-iec-blue" />,
      title: "Copy of Electricity Bill",
      image: "/images/services/passbook.jpeg",
    },
    {
      icon: <Building className="w-12 h-12 text-iec-blue" />,
      title: "Proof of Registered Office",
      image: "/images/services/office-proof.jpeg",
    },
    {
      icon: <FileSpreadsheet className="w-12 h-12 text-iec-blue" />,
      title: "No Objection Certificate",
      image: "/images/services/itr-service.jpeg",
    },
  ];

  return (
    <>
      <div className="min-h-screen py-6 sm:py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <a
            href="/our-services"
            className="flex items-center text-blue-800 hover:text-blue-800 text-sm sm:text-base mb-6"
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

          <HeroSection />
          <CompanyForm />
          <h2 className="mt-20 text-xl font-semibold text-center mb-10 relative">
            Overview of Online Company Registration in India{" "}
            <div className="w-16 h-1 bg-orange-500 mx-auto mt-2"></div>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-iec-green mt-2"></span>
          </h2>

          <p className="text-gray-600 mt-2 text-sm text-left flex-grow">
            Company registration is an important process for a proprietor to
            build a business. There are different types of Companies in India,
            so businessmen need to select the right type of company for their
            business. Companies in India are controlled under the Ministry of
            Corporate affairs. Registering a company is effortless through
            Tax Returns Online, as it is processed completely online. At least
            two members are needed to proceed as directors and shareholders. To
            register a company one needs the Director’s PAN card, address proof,
            and the bank account details with address proof of the registered
            office.
          </p>

          <h3 className="text-xl font-semibold text-center mb-10 relative">
            Company Incorporation
          </h3>
          <p className="text-gray-600  text-sm text-left flex-grow">
            Company incorporation is the lawful process to set up a legal
            organization or company. A corporation is an emerging lawful entity
            that is resulted from the detachment of the company’s assets and
            earnings from its owners and investors.
          </p>
          <p className="text-gray-600 mt-2 text-sm text-left flex-grow">
            We provide quick and inexpensive company registration through a 100%
            online procedure. Our services are trustworthy as thousands of
            companies in India have been registered through us.
          </p>
        </div>

        <h2 className="mt-20 text-xl font-semibold text-center mb-10 relative">
          Documents required to get the Company registered
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-2"></div>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-iec-green mt-2"></span>
        </h2>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 max-w-4xl mx-auto mt-8">
          {documents.map((doc, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 border-2 border-iec-blue rounded-full overflow-hidden flex items-center justify-center mb-3">
                <img
                  src={doc.image}
                  alt={doc.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm">{doc.title}</p>
            </div>
          ))}
        </div>

        <TypesOfCompanyReg />
        <ComparisonTable />

        <CompanyRegistrationInfo />
      </div>
    </>
  );
};

export default CompanyRegistration;
