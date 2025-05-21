/* eslint-disable react/prop-types */
import { Check, CalendarCheck, PhoneCall, Mail, User, Languages } from 'lucide-react';

const pricingData = [
  {
    tier: "Start Up",
    price: "Rs 799",
    features: [
      "Application filing for GSTIN",
      "Generate ARN & TRN number",
      "Call, Chat, Email Support",
      "Personally assigned GST Expert",
      "Consultation Available in 3 Languages including English"
    ],
    highlight: false,
    returnFiling: null
  },
  {
    tier: "Basic",
    price: "Rs 2499",
    features: [
      "GST Registration absolutely FREE",
      "Call, Chat, Email Support",
      "Personally assigned GST Expert",
      "Consultation Available in 3 Languages including English"
    ],
    highlight: true,
    returnFiling: {
      months: 3,
      text: "GST Return Filing for 3 Months"
    }
  },
  {
    tier: "Standard",
    price: "Rs 4999",
    features: [
      "GST Registration absolutely FREE",
      "Call, Chat, Email Support",
      "Personally assigned GST Expert",
      "Consultation Available in 3 Languages including English"
    ],
    highlight: true,
    returnFiling: {
      months: 6,
      text: "GST Return Filing for 6 Months"
    }
  },
  {
    tier: "Premium",
    price: "Rs 7999",
    features: [
      "GST Registration absolutely FREE",
      "Call, Chat, Email Support",
      "Personally assigned GST Expert",
      "Consultation Available in 3 Languages including English"
    ],
    highlight: true,
    returnFiling: {
      months: 12,
      text: "GST Return Filing for 12 Months"
    }
  }
];

const FeatureItem = ({ text }) => {
  const getIcon = (text) => {
    if (text.includes("Call, Chat, Email")) return <PhoneCall className="w-4 h-4 text-green-500 mr-2" />;
    if (text.includes("assigned")) return <User className="w-4 h-4 text-green-500 mr-2" />;
    if (text.includes("Consultation")) return <Languages className="w-4 h-4 text-green-500 mr-2" />;
    if (text.includes("Return Filing")) return <CalendarCheck className="w-4 h-4 text-green-500 mr-2" />;
    if (text.includes("Email")) return <Mail className="w-4 h-4 text-green-500 mr-2" />;
    return <Check className="w-4 h-4 text-green-500 mr-2" />;
  };

  return (
    <li className="flex items-start py-1">
      {getIcon(text)}
      <span className="text-sm">{text}</span>
    </li>
  );
};

const PricingPackages = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">GST Registration Packages</h2>
          <h3 className="text-xl mb-4">Professional Fees</h3>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingData.map((plan, index) => (
            <div 
              key={index} 
              className={`overflow-hidden rounded-lg ${
                plan.highlight 
                  ? "bg-white text-gray-800" 
                  : "bg-gray-100/95 text-gray-800"
              }`}
            >
              <div className="text-center py-6 px-4 bg-gray-100">
                <h3 className="text-xl font-semibold">{plan.tier}</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-green-600">{plan.price}</span>
                </div>
              </div>
              
              <div className="p-6">
                {plan.returnFiling && (
                  <div className="mb-4 font-medium text-center">
                    {plan.returnFiling.text}
                  </div>
                )}
                
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <FeatureItem key={idx} text={feature} />
                  ))}
                </ul>
              </div>
              
              <div className="p-0">
                <button className="w-full py-6 bg-green-500 hover:bg-green-600 text-white font-medium transition-colors">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPackages;
