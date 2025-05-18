/* eslint-disable react/prop-types */
const PricingCard = ({ tier, price, description, bgColor }) => {
  return (
    <div className={`rounded-lg p-6 text-center transition-transform hover:scale-105 ${bgColor}`}>
      <h3 className="text-lg font-medium mb-2">{tier}:</h3>
      <p className="text-2xl font-bold mb-2">{price}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default PricingCard;
