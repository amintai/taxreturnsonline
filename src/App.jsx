import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Services from "./pages/Services";
import CompanyRegistration from "./pages/Services/companyRegistration";
import GstRegistration from "./pages/Services/GST";
import CustomMarquee from "./components/Marquee";
import ImportExportCode from "./pages/Services/ImportExportCode";
import Header from "./components/Header";

function App() {
  return (
    <>
    <CustomMarquee></CustomMarquee>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-services" element={<Services />} />
        <Route path="/our-services/company-registration" element={<CompanyRegistration />} />
        <Route path="/our-services/gst-registration" element={<GstRegistration />}/>
        <Route path="/our-services/iec-registration" element={<ImportExportCode />}/>
      </Routes>
    </>
  );
}

export default App;
