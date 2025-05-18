import { useState } from "react";

const PricingPlans = () => {
  const plans = [
    {
      plan: "Starter Plan",
      price: "₹999",
      features: ["Company Name Check", "Basic Consultation"],
    },
    {
      plan: "Basic Pvt Ltd Registration",
      price: "₹2,999",
      extraFee: "+ Govt Fees Extra",
      features: ["2 DSC", "2 DIN", "MOA & AOA"],
    },
    {
      plan: "Standard Pvt Ltd Registration",
      price: "₹7,999",
      features: ["Everything in Basic", "PAN & TAN", "Bank Account Setup"],
      recommended: true,
    },
    {
      plan: "Premium Pvt Ltd Registration",
      price: "₹16,999",
      features: [
        "Everything in Standard",
        "GST Registration",
        "Startup India Registration",
      ],
    },
    {
      plan: "Ultimate Package",
      price: "₹29,999",
      features: [
        "Everything in Premium",
        "CA Support for 1 Year",
        "Annual Compliance Filing",
      ],
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
      // Here, you can trigger a form, API call, or modal instead of alert
    } else {
      alert("Please select a plan first.");
    }
  };

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-2">
        Our Fees
      </h2>
      <div className="w-24 h-1 bg-blue-800 mx-auto mb-4"></div>

      <div className="flex flex-wrap justify-center gap-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            onClick={() => handleSelect(index)}
            className={`cursor-pointer w-full sm:w-[calc(50%-1rem)] lg:w-[calc(20%-1rem)] border rounded-lg p-6 transition-all duration-200 ${
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
            <h3 className="text-2xl font-bold text-center mb-1">
              {plan.price}
            </h3>
            {plan.extraFee && (
              <p className="text-center text-gray-600 text-sm mb-3">
                {plan.extraFee}
              </p>
            )}
            <p className="text-center text-gray-700 mb-4">{plan.plan}</p>
            <ul className="list-none space-y-2">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2"
          onClick={handleRequestCallback}
        >
          Request Callback
        </button>
      </div>
    </section>
  );
};

export default PricingPlans;
