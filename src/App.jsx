import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import CustomMarquee from "./components/Marquee";
import Header from "./components/Header";
import { Analytics } from "@vercel/analytics/react";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import AnnualComplienceFilling from "./pages/Services/ComplienceFilling";
import PrivateCompany from "./pages/Services/companyRegistration/privateCompany";
import LLP from "./pages/Services/companyRegistration/LLP";

// Lazy load route components
const Home = lazy(() => import("./pages/Home"));
const CompanyRegistration = lazy(() => import("./pages/Services/companyRegistration"));
const GstRegistration = lazy(() => import("./pages/Services/GST"));
const ImportExportCode = lazy(() => import("./pages/Services/ImportExportCode"));
const Services = lazy(() => import("./pages/Services"));
const TaxPlanning = lazy(() => import("./pages/Services/TaxPlanning"));
const BookKeeping = lazy(() => import("./pages/Services/BookKeeping"));
const ProjectReport = lazy(() => import("./pages/Services/ProjectReport"));
const ItrReturn = lazy(() => import("./pages/Services/ITR"));
const Acconting = lazy(() => import("./pages/Services/Accounting"));
const ContactUs = lazy(() => import("./pages/contactUs"));


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

          <Route path="/contact-us" Component={ContactUs}/>

          <Route path="/our-services" Component={Services} />
    
          <Route path="/our-services/company-registration" Component={CompanyRegistration} />
          <Route path="/our-services/company-registration/private-limited-company" Component={PrivateCompany} />
          <Route path="/our-services/company-registration/limited-liability-partnership" Component={LLP} />
    
          <Route path="/our-services/gst-registration" Component={GstRegistration} />
          <Route path="/our-services/iec-registration" Component={ImportExportCode} />

          <Route path="/our-services/trademark-registration" Component={ImportExportCode} />
          <Route path="/our-services/accounting-services" Component={Acconting} />
          <Route path="/our-services/itr-filling" Component={ItrReturn} />
        
          <Route path="/tax-compliance/tax-planning-consultancy" Component={TaxPlanning} />
          <Route path="/tax-compliance/bookkeeping-service" Component={BookKeeping}/>
          <Route path="/tax-compliance/tax-report-project" Component={ProjectReport} />

          <Route path="/tax-compliance/annual-complience-filling" Component={AnnualComplienceFilling} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
