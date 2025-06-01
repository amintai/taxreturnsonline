import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ChevronDown,
  FileText,
  Calculator,
  Stamp,
  Building2,
  Landmark,
  Globe,
  BadgeCheck,
  ScrollText,
  PiggyBank,
  ArrowDownToDot,
} from "lucide-react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
};

const navLinks = [
  {
    label: "Our Services",
    path: "/our-services",
    hasSubmenu: true,
    submenu: [
      {
        label: "ITR Filing",
        path: "/our-services/itr-filling",
        icon: FileText,
      },
      {
        label: "Accounting Services",
        path: "/our-services/accounting-services",
        icon: Calculator,
      },
      {
        label: "Trademark Registration",
        path: "/our-services/trademark-registration",
        icon: Stamp,
      },
      {
        label: "Company Registration",
        path: "/our-services/company-registration",
        icon: Building2,
      },
      {
        label: "GST Services",
        path: "/our-services/gst-registration",
        icon: Landmark,
      },
      {
        label: "IEC Registration",
        path: "/our-services/iec-registration",
        icon: Globe,
      },
      {
        label: "View All Services",
        path: "/our-services",
        icon: ArrowDownToDot,
      },
    ],
  },
  {
    label: "Tax & Compliance",
    path: "/tax-planning-consultancy",
    hasSubmenu: true,
    submenu: [
      {
        label: "Annual Compliance Filling",
        path: "/tax-compliance/annual-complience-filling",
        icon: FileText,
      },
      {
        label: "Tax Planning & Consultancy",
        path: "/tax-compliance/tax-planning-consultancy",
        icon: ScrollText,
      },
      {
        label: "Online Bookkeeping",
        path: "/tax-compliance/bookkeeping-service",
        icon: BadgeCheck,
      },
      {
        label: "Project Report",
        path: "/tax-compliance/tax-report-project",
        icon: PiggyBank,
      },
    ],
  },
  // {
  //   label: "Resources",
  //   path: "/resources",
  //   hasSubmenu: true,
  //   submenu: [
  //     {
  //       label: "Guides",
  //       path: "/resources/guides",
  //       icon: GraduationCap,
  //     },
  //     {
  //       label: "Reports",
  //       path: "/resources/reports",
  //       icon: BarChart,
  //     },
  //     {
  //       label: "Templates",
  //       path: "/resources/templates",
  //       icon: FileSpreadsheet,
  //     },
  //   ],
  // },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <div
          className="flex flex-col items-start justify-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="flex items-center gap-2 md:gap-3">
            <img
              src="/images/logo.svg"
              alt="Logo"
              className="h-10 w-10 md:h-12 md:w-12 object-contain"
            />
            <span className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight tracking-tight">
              <span className="text-green-600">TaxReturns</span>
              <span className="text-gray-900">Online</span>
            </span>
          </div>
          <span className="text-[0.65rem] md:text-sm text-gray-600 ml-[52px] md:ml-[60px] lg:ml-[72px] mt-0.5 tracking-wide font-light">
            File with Confidence. Backed by CAs.
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => setHoveredMenu(link.label)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <button className="flex items-center gap-1 font-medium text-gray-800 hover:text-blue-800">
                {link.label} <ChevronDown size={16} />
              </button>
              {hoveredMenu === link.label && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-64 z-50">
                  {link.submenu.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700"
                    >
                      <item.icon size={16} className="text-blue-600" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to="/our-services/itr-filing"
            className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800"
          >
            File ITR Now
          </Link>
          <button
            onClick={() =>
              window.open(
                "https://wa.me/918866397377?text=Hi, I’d like a callback",
                "_blank"
              )
            }
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            Talk to a CA
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-6 space-y-4">
          {navLinks.map((link) => (
            <div key={link.label}>
              <p className="font-medium text-gray-800">{link.label}</p>
              <div className="ml-4 mt-2 space-y-2">
                {link.submenu.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-800"
                    onClick={() => setMobileOpen(false)}
                  >
                    <item.icon size={16} className="text-blue-600" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <Link
            to="/our-services/itr-filing"
            className="block bg-blue-700 text-white px-4 py-2 rounded-md text-center"
            onClick={() => setMobileOpen(false)}
          >
            File ITR Now
          </Link>

          <button
            onClick={() => {
              window.open(
                "https://wa.me/918866397377?text=Hi, I’d like a callback",
                "_blank"
              );
              setMobileOpen(false);
            }}
            className="block w-full bg-green-600 text-white px-4 py-2 rounded-md text-center"
          >
            Talk to a CA
          </button>
        </div>
      )}
    </header>
  );
}
