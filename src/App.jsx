import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CompanyRegistration from "./pages/Services/companyRegistration";
import GstRegistration from "./pages/Services/GST";
import CustomMarquee from "./components/Marquee";
import ImportExportCode from "./pages/Services/ImportExportCode";
import Header from "./components/Header";
import { Analytics } from "@vercel/analytics/react"
import ServiceGrid from "./components/Services/ServiceGrid";

function App() {
  return (
    <>
    <Analytics />
    <CustomMarquee></CustomMarquee>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-services" element={<ServiceGrid />} />
        <Route path="/our-services/company-registration" element={<CompanyRegistration />} />
        <Route path="/our-services/gst-registration" element={<GstRegistration />}/>
        <Route path="/our-services/iec-registration" element={<ImportExportCode />}/>
      </Routes>
    </>
  );
}

export default App;
