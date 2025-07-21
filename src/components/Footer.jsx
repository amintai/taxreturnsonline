import React from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <div className="pt-12 pb-8 bg-[#F8F9FA]">
      <div className="container mb-12 text-center sm:text-left grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
        {/* Logo & Socials */}
        <div className="mx-auto sm:ml-0">
          <div
            className="flex items-center gap-2 md:gap-4 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src="/images/logo.svg"
              alt="Logo"
              className="h-10 w-10 md:h-12 md:w-12 object-contain"
            />
            <span className="font-bold leading-tight tracking-tight">
              <span className="text-green-600">TaxReturns</span>
              <span className="text-gray-900"> Online</span>
            </span>
          </div>
          <div className="mt-4 flex justify-around">
            <img
              onClick={() => window.open("https://instagram.com", "_blank")}
              className="icon-button cursor-pointer"
              src="images/insta-icon.svg"
              alt="Instagram"
            />
            <img
              onClick={() => window.open("https://facebook.com", "_blank")}
              className="icon-button cursor-pointer"
              src="images/fb-icon.svg"
              alt="Facebook"
            />
            <img
              onClick={() => window.open("https://twitter.com", "_blank")}
              className="icon-button cursor-pointer"
              src="./images/twitter-icon.svg"
              alt="Twitter"
            />
          </div>
        </div>

        {/* Services Links */}
        <div>
          <h6 className="font-medium text-xl mb-4 text-[#005C9D]">Services</h6>
          <FooterLink to="/our-services/company-registration" text="Company Registration" />
          <FooterLink to="/our-services/gst-registration" text="GST Services" />
          <FooterLink to="/our-services/iec-registration" text="IEC Registrations" />
          <FooterLink to="/our-services" text="View All Services" />
        </div>

        {/* Tax & Compliance Links */}
        <div>
          <h6 className="font-medium text-xl mb-4 text-[#005C9D]">
            Tax & Compliance
          </h6>
          <FooterLink to="/tax-compliance/annual-complience-filling" text="Annual Compliance Filling" />
          <FooterLink to="/tax-compliance/tax-planning-consultancy" text="Tax Planning & Consultancy" />
          <FooterLink to="/tax-compliance/bookkeeping-service" text="Online Bookkeeping" />
          <FooterLink to="/tax-compliance/tax-report-project" text="Project Report" />
        </div>

        {/* Company Links */}
        <div>
          <h6 className="font-medium text-xl mb-4 text-[#005C9D]">Company</h6>
          <FooterLink to="/about-us" text="About Us" />
          <FooterLink to="/contact-us" text="Contact Us" />
        </div>

        {/* Newsletter */}
        <div className="lg:col-span-1">
          <h6 className="font-medium text-xl text-[#22343D]">
            Stay updated with the latest tax tips and offers!
          </h6>
          <div className="mt-9">
            <input
              className="w-full p-2 bg-transparent outline-none border border-[#005C9D] rounded-md"
              type="email"
              placeholder="Enter your Email"
            />
            <button className="primary-button mt-6 bg-[#005C9D] text-white hover:bg-[#026a66] transition duration-200 w-full">
              Submit
            </button>
          </div>
        </div>
      </div>

      <p className="text-center mt-12 text-[#22343D]">
        © {new Date().getFullYear()} taxreturnsonline. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;

function FooterLink({ text, to }) {
  return (
    <p className="mt-5">
      <RouterLink
        to={to}
        className="cursor-pointer mt-2 text-[#22343D] hover:text-[#005C9D] transition duration-200"
      >
        {text}
      </RouterLink>
    </p>
  );
}
