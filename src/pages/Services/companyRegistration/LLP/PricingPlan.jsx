import { useState } from "react";

const PricingPlans = () => {
  const plans = [
    {
      plan: "Consultation Fee",
      price: "₹999",
      features: [
        "Expert advice from Highly Experienced CA/CS",
        "Complete guide for registration",
        "Covers process, documents, benefits, tax, compliance & timeline",
      ],
      buttonLabel: "Request Callback",
    },
    {
      plan: "Basic LLP Package",
      price: "₹5,499",
      features: [
        "Registering a LLP with MCA",
        "LLPIN, PAN, TAN",
        "MCA Processing & Filing",
        "Form FILIP",
        "Allotment of 2 DPIN",
        "GST Registration",
      ],
      buttonLabel: "Buy Now",
    },
    {
      plan: "Smart LLP Package",
      price: "₹14,999",
      features: [
        "Registering a LLP with MCA",
        "LLPIN, PAN, TAN",
        "MCA Processing & Filing",
        "Form FILIP",
        "Allotment of 2 DPIN",
        "GST Registration",
        "Income Tax Return Filing",
        "Form 11 (Annual Return)",
        "Form 8 (Statement of Accounts)",
        "DIR-3 eKYC of Directors",
      ],
      recommended: true,
      buttonLabel: "Buy Now",
    },
    {
      plan: "Mega LLP Package",
      price: "₹24,999",
      features: [
        "Registering a LLP with MCA",
        "LLPIN, PAN, TAN",
        "MCA Processing & Filing",
        "Form FILIP",
        "Allotment of 2 DPIN",
        "GST Registration",
        "Trademark Application",
        "Income Tax Return Filing",
        "Form 11 (Annual Return)",
        "Form 8 (Statement of Accounts)",
        "DIR-3 eKYC of Directors",
        "12 months GST Return Filing",
        "12 months DIR-3 eKYC of Directors",
      ],
      buttonLabel: "Buy Now",
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelect = (index) => {
    setSelectedPlan(index);
  };

  const handleRequestCallback = () => {
    if (selectedPlan !== null) {
      const chosen = plans[selectedPlan];
      alert(`Callback requested for plan: ${chosen.plan} at ${chosen.price}`);
    } else {
      alert("Please select a plan first.");
    }
  };

  return (
    <section className="mb-12 max-w-5xl mx-auto px-4 py-8 rounded-lg">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-2">
        Select Packages
      </h2>
      <div className="w-24 h-1 bg-blue-800 mx-auto mb-4"></div>

      <div className="flex flex-wrap justify-center gap-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            onClick={() => handleSelect(index)}
            className={`cursor-pointer w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] border rounded-lg p-6 transition-all duration-200 flex flex-col justify-between min-h-[480px] ${
              selectedPlan === index
                ? "border-orange-500 bg-orange-50 shadow-md"
                : "bg-white"
            }`}
          >
            {plan.recommended && (
              <div className="text-center mb-2 text-orange-600 font-bold text-sm">
                Recommended
              </div>
            )}
            <div>
              <h3 className="text-2xl font-bold text-center mb-1">
                {plan.price}
              </h3>
              <p className="text-center text-gray-700 mb-4 font-semibold">
                {plan.plan}
              </p>
              <ul className="list-none space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex justify-center">
              <button
                onClick={
                  plan.buttonLabel === "Request Callback"
                    ? handleRequestCallback
                    : undefined
                }
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm"
              >
                {plan.buttonLabel}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;
