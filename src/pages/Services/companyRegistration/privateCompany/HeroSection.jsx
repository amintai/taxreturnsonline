import { Check } from "lucide-react";
import ContactForm from "./ContactForm";

const HeroSection = () => {
  return (
    <div className="bg-green-100 py-16 px-4 md:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-start gap-10">
        <div className="lg:w-7/12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Register Your <span className="text-orange-500">Private Limited Company</span>
            <br />Quickly and Hassle-Free!
          </h1>
          <p className="mb-6 text-gray-800">
            Get expert CA/CS assistance to register your Private Limited Company online, anywhere in India.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start gap-2">
              <Check className="text-orange-500 mt-1 flex-shrink-0" />
              <span>Free Expert Consultation</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="text-orange-500 mt-1 flex-shrink-0" />
              <span>Company PAN & TAN Included</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="text-orange-500 mt-1 flex-shrink-0" />
              <span>DIN & DSC for 2 Directors</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="text-orange-500 mt-1 flex-shrink-0" />
              <span>MOA, AOA, and Incorporation Certificate</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="text-orange-500 mt-1 flex-shrink-0" />
              <span>Transparent Pricing – No Hidden Charges</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="text-orange-500 mt-1 flex-shrink-0" />
              <span>100% Online Process</span>
            </div>
          </div>
        </div>
        
        <div className="lg:w-5/12 w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
