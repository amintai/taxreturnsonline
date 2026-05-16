import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import CustomMarquee from "./components/Marquee";
import Header from "./components/Header";
import { Analytics } from "@vercel/analytics/react";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/Features/WhatsApp";
import { Helmet } from "react-helmet";

// Lazy load route components
const Home = lazy(() => import("./pages/Home"));
const CompanyRegistration = lazy(() =>
  import("./pages/Services/companyRegistration")
);
const GstRegistration = lazy(() => import("./pages/Services/GST"));
const ImportExportCode = lazy(() =>
  import("./pages/Services/ImportExportCode")
);
const Services = lazy(() => import("./pages/Services"));
const TaxPlanning = lazy(() => import("./pages/Services/TaxPlanning"));
const BookKeeping = lazy(() => import("./pages/Services/BookKeeping"));
const ProjectReport = lazy(() => import("./pages/Services/ProjectReport"));
const ItrReturn = lazy(() => import("./pages/Services/ITR"));
const Acconting = lazy(() => import("./pages/Services/Accounting"));
const ContactUs = lazy(() => import("./pages/contactUs"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const AnnualComplienceFilling = lazy(() =>
  import("./pages/Services/ComplienceFilling")
);
const PrivateCompany = lazy(() =>
  import("./pages/Services/companyRegistration/privateCompany")
);
const LLP = lazy(() => import("./pages/Services/companyRegistration/LLP"));
const TermsOfUse = lazy(() => import("./pages/TermsOfUse"));

function App() {
  return (
    <>
      <Helmet>
        <title>TaxReturnsOnline - CA-assisted ITR Filing</title>
        <meta
          name="description"
          content="Trusted online tax filing with expert CA support. File your returns easily today."
        />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="TaxReturnsOnline" />
        <meta property="og:title" content="TaxReturnsOnline - CA-assisted ITR Filing" />
        <meta property="og:description" content="Trusted online tax filing with expert CA support. File your returns easily today." />
        <meta property="og:url" content="https://www.taxreturnsonline.in/" />
        <meta property="og:image" content="https://www.taxreturnsonline.in/og-image.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TaxReturnsOnline - CA-assisted ITR Filing" />
        <meta name="twitter:description" content="Trusted online tax filing with expert CA support. File your returns easily today." />
        <meta name="twitter:image" content="https://www.taxreturnsonline.in/og-image.svg" />
      </Helmet>
      {/* <ScrollProgressBar /> */}
      <Analytics />
      <CustomMarquee />
      <Header />
      <ScrollToTop />

      <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
        <Routes>
          <Route path="/" Component={Home} />

          <Route path="/contact-us" Component={ContactUs} />

          <Route path="/our-services" Component={Services} />

          <Route
            path="/our-services/company-registration"
            Component={CompanyRegistration}
          />
          <Route
            path="/our-services/company-registration/private-limited-company"
            Component={PrivateCompany}
          />
          <Route
            path="/our-services/company-registration/limited-liability-partnership"
            Component={LLP}
          />

          <Route
            path="/our-services/gst-registration"
            Component={GstRegistration}
          />
          <Route
            path="/our-services/iec-registration"
            Component={ImportExportCode}
          />

          <Route
            path="/our-services/trademark-registration"
            Component={ImportExportCode}
          />
          <Route
            path="/our-services/accounting-services"
            Component={Acconting}
          />
          <Route path="/our-services/itr-filling" Component={ItrReturn} />

          <Route
            path="/tax-compliance/tax-planning-consultancy"
            Component={TaxPlanning}
          />
          <Route
            path="/tax-compliance/bookkeeping-service"
            Component={BookKeeping}
          />
          <Route
            path="/tax-compliance/tax-report-project"
            Component={ProjectReport}
          />

          <Route
            path="/tax-compliance/annual-complience-filling"
            Component={AnnualComplienceFilling}
          />

          <Route path="/about-us" Component={AboutUs} />
          <Route path="/terms-of-use" Component={TermsOfUse} />
          <Route
            path="/privacy-policy"
            Component={lazy(() => import("./pages/PrivacyPolicy"))}
          />
          <Route
            path="/disclaimer"
            Component={lazy(() => import("./pages/Disclaimer"))}
          />

          <Route path="/terms-and-conditions" Component={AboutUs} />

          <Route path="*" Component={Home} />


        </Routes>
      </Suspense>
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;
