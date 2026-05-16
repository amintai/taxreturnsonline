import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const services = [
  { label: "ITR Filing", to: "/our-services/itr-filling" },
  { label: "GST Services", to: "/our-services/gst-registration" },
  { label: "Company Registration", to: "/our-services/company-registration" },
  { label: "Accounting Services", to: "/our-services/accounting-services" },
  { label: "IEC Registration", to: "/our-services/iec-registration" },
  { label: "Trademark Registration", to: "/our-services/trademark-registration" },
  { label: "View All Services", to: "/our-services" },
];

const compliance = [
  { label: "Annual Compliance Filing", to: "/tax-compliance/annual-complience-filling" },
  { label: "Tax Planning & Consultancy", to: "/tax-compliance/tax-planning-consultancy" },
  { label: "Online Bookkeeping", to: "/tax-compliance/bookkeeping-service" },
  { label: "Project Report", to: "/tax-compliance/tax-report-project" },
];

const company = [
  { label: "About Us", to: "/about-us" },
  { label: "Contact Us", to: "/contact-us" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms of Use", to: "/terms-of-use" },
  { label: "Disclaimer", to: "/disclaimer" },
];

const WHATSAPP = "919512397377";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#0d1b2a] text-gray-300">
      {/* Main footer grid */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1  Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2.5 mb-4 group"
            >
              <img
                src="/images/tro-icon.svg"
                alt=""
                aria-hidden="true"
                className="h-9 w-auto"
              />
              <span className="text-xl font-bold leading-tight tracking-tight">
                <span className="text-green-400">TaxReturns</span>
                <span className="text-white">Online</span>
              </span>
            </button>

            <p className="text-xs text-gray-400 mb-5 leading-relaxed max-w-xs">
              File with Confidence. Backed by CAs.<br />
              Expert CA-assisted tax filing, GST, company registration, and compliance services across India.
            </p>

            {/* Contact */}
            <ul className="space-y-2.5 mb-6">
              <li>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition">
                  <Phone size={14} className="shrink-0" />
                  +91 95123 97377
                </a>
              </li>
              <li>
                <a href="mailto:support@taxreturnsonline.in"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition">
                  <Mail size={14} className="shrink-0" />
                  support@taxreturnsonline.in
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin size={14} className="shrink-0 mt-0.5" />
                Vadodara, Gujarat, India
              </li>
            </ul>

            {/* Social */}
            <div className="flex items-center gap-4">
              <SocialIcon
                href="https://instagram.com"
                src="/images/insta-icon.svg"
                alt="Instagram"
              />
              <SocialIcon
                href="https://facebook.com"
                src="/images/fb-icon.svg"
                alt="Facebook"
              />
              <SocialIcon
                href="https://twitter.com"
                src="/images/twitter-icon.svg"
                alt="Twitter"
              />
            </div>
          </div>

          {/* Col 2  Services */}
          <div>
            <h6 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Our Services
            </h6>
            <ul className="space-y-3">
              {services.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-gray-400 hover:text-green-400 transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3  Tax & Compliance */}
          <div>
            <h6 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Tax & Compliance
            </h6>
            <ul className="space-y-3">
              {compliance.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-gray-400 hover:text-green-400 transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <h6 className="text-white font-semibold text-sm uppercase tracking-wider mt-8 mb-5">
              Company
            </h6>
            <ul className="space-y-3">
              {company.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-gray-400 hover:text-green-400 transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4  CTA */}
          <div>
            <h6 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Get Started Today
            </h6>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Talk to a CA for free. No commitment, no upselling  just honest advice.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi, I'd like a free tax consultation!")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition active:scale-95 mb-3 w-full justify-center"
            >
              Chat on WhatsApp
            </a>
            <Link
              to="/our-services/itr-filling"
              className="inline-flex items-center justify-center gap-2 border border-[#005C9D] text-[#60a5fa] hover:bg-[#005C9D]/20 text-sm font-medium px-5 py-2.5 rounded-lg transition w-full"
            >
              File ITR Now  ₹999
            </Link>

            {/* Trust badges */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { value: "10,000+", label: "Returns Filed" },
                { value: "500+", label: "Happy Clients" },
                { value: "5+ Yrs", label: "Experience" },
                { value: "4.9★", label: "Rating" },
              ].map(({ value, label }) => (
                <div key={label} className="bg-white/5 rounded-lg p-3 text-center">
                  <div className="text-sm font-bold text-white">{value}</div>
                  <div className="text-[10px] text-gray-500 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} TaxReturnsOnline. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/privacy-policy" className="text-xs text-gray-500 hover:text-gray-300 transition">Privacy Policy</Link>
            <Link to="/terms-of-use" className="text-xs text-gray-500 hover:text-gray-300 transition">Terms of Use</Link>
            <Link to="/disclaimer" className="text-xs text-gray-500 hover:text-gray-300 transition">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, src, alt }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
    >
      <img src={src} alt={alt} className="w-4 h-4 object-contain" />
    </a>
  );
}

export default Footer;
