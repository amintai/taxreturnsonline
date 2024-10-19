import Benefits from "../components/Benifits";
import OurExperts from "../components/Experts";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChoosUs";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Benefits />
      {/* <OurExperts /> */}
      <WhyChooseUs />
      <Footer />
    </>
  );
};

export default Home;
