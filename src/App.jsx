import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import CustomMarquee from "./components/Marquee";
import Header from "./components/Header";
import { Analytics } from "@vercel/analytics/react";

// Lazy load route components
const Home = lazy(() => import("./pages/Home"));
const CompanyRegistration = lazy(() => import("./pages/Services/companyRegistration"));
const GstRegistration = lazy(() => import("./pages/Services/GST"));
const ImportExportCode = lazy(() => import("./pages/Services/ImportExportCode"));
const Services = lazy(() => import("./pages/Services/index"));

function App() {
  return (
    <>
      <Analytics />
      <CustomMarquee />
      <Header />

      <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-services" element={<Services />} />
          <Route path="/our-services/company-registration" element={<CompanyRegistration />} />
          <Route path="/our-services/gst-registration" element={<GstRegistration />} />
          <Route path="/our-services/iec-registration" element={<ImportExportCode />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
