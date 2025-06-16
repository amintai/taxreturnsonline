/* eslint-disable react/prop-types */
import {
  Check,
  CalendarCheck,
  PhoneCall,
  Mail,
  User,
  Languages,
} from "lucide-react";

const pricingData = [
  {
    tier: "Salaried Individual",
    price: "₹1199",
    features: [
      "Income from Salary",
      "Form 16 based Filing",
      "Call, Chat, Email Support",
      "Assigned CA for Filing",
    ],
    highlight: true,
    returnFiling: {
      text: "Basic ITR Filing for Salaried Employee",
    },
  },
  {
    tier: "Capital Gain ITR",
    price: "₹2499",
    features: [
      "Includes Stocks, Mutual Funds, Property Sales",
      "Capital Gain Computation",
      "Call, Chat, Email Support",
      "Assigned CA for Assistance",
    ],
    highlight: true,
    returnFiling: {
      text: "Capital Gains ITR with Investment Declarations",
    },
  },
  {
    tier: "Business ITR",
    price: "₹2999",
    features: [
      "Applicable for Freelancers, Proprietors, and Traders",
      "Books of Accounts Assistance",
      "Call, Chat, Email Support",
      "Expert CA Support",
    ],
    highlight: true,
    returnFiling: {
      text: "ITR Filing with P&L and Balance Sheet",
    },
  },
];

const FeatureItem = ({ text }) => {
  const getIcon = (text) => {
    if (text.includes("Call"))
      return <PhoneCall className="w-4 h-4 text-green-500 mr-2" />;
    if (text.includes("CA"))
      return <User className="w-4 h-4 text-green-500 mr-2" />;
    if (
      text.includes("Declaration") ||
      text.includes("Filing") ||
      text.includes("Computation")
    )
      return <CalendarCheck className="w-4 h-4 text-green-500 mr-2" />;
    if (text.includes("Support"))
      return <Mail className="w-4 h-4 text-green-500 mr-2" />;
    return <Check className="w-4 h-4 text-green-500 mr-2" />;
  };

  return (
    <li className="flex items-start py-1">
      {getIcon(text)}
      <span className="text-sm">{text}</span>
    </li>
  );
};

const ITRFilingPackages = () => {
  const getOriginalPrice = (discountedPrice) => {
    const numeric = Number(discountedPrice.replace(/[^\d]/g, ""));
    return `₹${Math.round(numeric * 1.2)}`;
  };
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">ITR Filing Packages</h2>
          <h3 className="text-xl mb-4">Affordable & Expert-Led Tax Filing</h3>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingData.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between overflow-hidden rounded-lg ${
                plan.highlight
                  ? "bg-white text-gray-800"
                  : "bg-gray-100/95 text-gray-800"
              }`}
            >
              {/* Header */}
              <div className="relative text-center py-6 px-4 bg-gray-100">
                <h3 className="text-xl font-semibold mb-2">{plan.tier}</h3>

                {/* Discount Badge */}
                <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  20% OFF
                </span>
                <div className="flex flex-col items-center">
                  <span className="text-base line-through text-gray-500">
                    {getOriginalPrice(plan.price)}
                  </span>
                  <span className="text-3xl font-bold text-green-600">
                    {plan.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow p-6 flex flex-col">
                {plan.returnFiling && (
                  <div className="mb-4 font-medium text-center">
                    {plan.returnFiling.text}
                  </div>
                )}

                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                    <FeatureItem key={idx} text={feature} />
                  ))}
                </ul>

                <div className="mt-auto">
                  <button className="w-full py-3 rounded-md bg-green-500 hover:bg-green-600 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 ease-in-out">
                    File ITR Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITRFilingPackages;
