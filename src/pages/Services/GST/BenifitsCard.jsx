import { Check } from 'lucide-react';

const BenefitsCard = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center p-6 text-center transition-all hover:shadow-lg rounded-lg hover:scale-105">
      <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-green-100">
        <Check className="h-6 w-6 text-green-500" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default BenefitsCard;
