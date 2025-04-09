import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Services from "./pages/Services";
import CompanyRegistration from "./pages/Services/companyRegistration";
import GstRegistration from "./pages/Services/GST";
import CustomMarquee from "./components/Marquee";

function App() {
  return (
    <>
    <CustomMarquee></CustomMarquee>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-services" element={<Services />} />
        <Route path="/our-services/company-registration" element={<CompanyRegistration />} />
        <Route path="/our-services/gst-registration" element={<GstRegistration />}/>
      </Routes>
    </>
  );
}

export default App;
