import { Globe, Award, ShieldCheck, DollarSign, List } from "lucide-react";

const IecBenefits = () => {
  const benefits = [
    {
      icon: <Globe className="w-10 h-10 text-iec-blue" />,
      title: "International Market Reach",
      description: "Import Export Code helps you in order to take your business to the international market. Not only that, it will increase your revenue as well as growth."
    },
    {
      icon: <Award className="w-10 h-10 text-iec-blue" />,
      title: "Niryat Bandhu Scheme",
      description: "The goal of this project of DGFT (Main Objective is to help Entrepreneurs, Exporters, Importers, and students) Govt of India Support them to expand and provide certification in Export & Import Management."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-iec-blue" />,
      title: "Reduces the Risk of Illegal Transportation",
      description: "IEC helps you to get rid of any illegal transportation or fraudulent imports and exports. IEC registration is a document registration which helps the officials to control and manage the transaction in a better manner which is considered as part of customs business."
    },
    {
      icon: <DollarSign className="w-10 h-10 text-iec-blue" />,
      title: "Easy Avail Benefit of Govt. Schemes",
      description: "Import-Export Code registration is of utmost importance as it lets suppliers operating in the international market to avail benefits or subsidies declared by the Customs, Export Promotion Council and other several authorities."
    },
    {
      icon: <List className="w-10 h-10 text-iec-blue" />,
      title: "Other Benefits",
      description: "Companies that register for the Import Export Code could make the most of several other benefits offered by customs, the Export Promotion Council, and the Director General of Foreign Trade."
    }
  ];

  return (
<div className="my-12 bg-gray-50 py-12">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex flex-col md:flex-row gap-10">
      
      {/* Left Section */}
      <div className="md:w-1/3">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 leading-snug">
          Advantages of IEC for Import Export Businesses
        </h2>
        <img 
          src="/images/services/logistic-iec.jpeg" 
          alt="Import Export Logistics" 
          className="rounded-lg shadow-md mt-4"
        />
      </div>

      {/* Right Section */}
      <div className="md:w-2/3 space-y-5">
        {benefits.map((benefit, index) => (
          <div 
            key={index} 
            className="flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Icon */}
            <div className="w-10 h-10 flex items-center justify-center bg-iec-blue/10 text-iec-blue rounded-full">
              {benefit.icon}
            </div>
            
            {/* Content */}
            <div>
              <h3 className="text-md font-semibold text-gray-800">{benefit.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

  );
};

export default IecBenefits;