import ComparisonTable from "./ComparisionDoc";
import HeroSection from "./HeroSection";
import PricingPlans from "./PricingPlan";
import RequiredDocuments from "./ReuirementDoc";

const LLP = () => {
  return (
    <div>
      <HeroSection />
      <RequiredDocuments />
      <PricingPlans />
      <ComparisonTable />
    </div>
  );
};

export default LLP;
