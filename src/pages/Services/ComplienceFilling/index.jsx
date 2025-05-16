import HeroSection from "./components/HeroSection";
import ImageBanner from "./components/ImageBanner";
import PriceComparison from "./components/PriceComparision";
import SideForm from "./components/SideForm";

const AnnualComplienceFilling = () => {
  return (
    <div>
      <ImageBanner />
      <HeroSection />

      <SideForm />
      <div className="min-h-screen bg-white">
        <div className="container mx-auto py-10 px-4">
          <PriceComparison />
        </div>
      </div>
    </div>
  );
};

export default AnnualComplienceFilling;
