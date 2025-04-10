import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import CustomMarquee from "./components/Marquee";
import Header from "./components/Header";
import { Analytics } from "@vercel/analytics/react";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load route components
const Home = lazy(() => import("./pages/Home"));
const CompanyRegistration = lazy(() => import("./pages/Services/companyRegistration"));
const GstRegistration = lazy(() => import("./pages/Services/GST"));
const ImportExportCode = lazy(() => import("./pages/Services/ImportExportCode"));
const Services = lazy(() => import("./pages/Services"));
const TaxPlanning = lazy(() => import("./pages/Services/TaxPlanning"))

function App() {
  return (
    <>
      <Analytics />
      <CustomMarquee />
      <Header />
      <ScrollToTop />

      <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/our-services" Component={Services} />
          <Route path="/our-services/company-registration" Component={CompanyRegistration} />
          <Route path="/our-services/gst-registration" Component={GstRegistration} />
          <Route path="/our-services/iec-registration" Component={ImportExportCode} />
          <Route path="/tax-planning-consultancy" Component={TaxPlanning} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
