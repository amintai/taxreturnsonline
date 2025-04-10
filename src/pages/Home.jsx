import Benefits from "../components/Benifits";
import OurExperts from "../components/Experts";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChoosUs";
import ServiceGrid from "../components/Services/ServiceGrid"

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <ServiceGrid />
      <Benefits />
      {/* <OurExperts /> */}
      <WhyChooseUs />
    </>
  );
};

export default Home;
