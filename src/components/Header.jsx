import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
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
  Menu,
  X,
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
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileActiveMenu, setMobileActiveMenu] = useState(null);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const location = useLocation();
  const timeoutRef = useRef(null);
  const headerRef = useRef(null);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
    setMobileActiveMenu(null);
  }, [location.pathname]);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuEnter = (label) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveMenu(label);
  };

  const handleMenuLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  const toggleMobileSubmenu = (label) => {
    if (mobileActiveMenu === label) {
      setMobileActiveMenu(null);
    } else {
      setMobileActiveMenu(label);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md" ref={headerRef}>
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <div
          className="flex flex-col items-start justify-center cursor-pointer group"
          onClick={() => navigate("/")}
        >
          <div className="flex items-center gap-2 md:gap-3">
            <img
              src="/images/logo.svg"
              alt="Logo"
              className="h-10 w-10 md:h-12 md:w-12 object-contain transition-transform group-hover:scale-105"
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
        <nav className="hidden md:flex items-center space-x-6 relative">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => handleMenuEnter(link.label)}
              onMouseLeave={handleMenuLeave}
            >
              <button className="flex items-center gap-1 font-medium text-gray-800 hover:text-blue-600 transition py-2 px-1 rounded-md hover:bg-gray-50">
                {link.label}
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    activeMenu === link.label ? "rotate-180" : ""
                  }`}
                />
              </button>

              {link.submenu && (
                <div
                  className={`absolute left-0 top-full pt-1 ${
                    activeMenu === link.label
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  } transition-all duration-200 ease-out`}
                >
                  <div className="bg-white shadow-lg rounded-md w-64 py-2 z-50 border border-gray-100">
                    {link.submenu.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition hover:text-blue-600"
                      >
                        <item.icon size={18} className="text-blue-500" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Buttons */}
          <div className="flex items-center gap-3 ml-2">
            <Link
              to="/our-services/itr-filling"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition whitespace-nowrap"
            >
              File ITR Now
            </Link>

            <button
              onClick={() =>
                window.open(
                  "https://wa.me/918866397377?text=Hi, I'd like a callback",
                  "_blank"
                )
              }
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition whitespace-nowrap"
            >
              Talk to a CA
            </button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-gray-800 rounded-md hover:bg-gray-100 transition"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 space-y-3">
          {navLinks.map((link) => (
            <div key={link.label} className="border-b border-gray-100 pb-3">
              <button
                className="flex items-center justify-between w-full font-medium text-gray-800 py-2"
                onClick={() => toggleMobileSubmenu(link.label)}
              >
                <span>{link.label}</span>
                {mobileActiveMenu === link.label ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>

              {mobileActiveMenu === link.label && (
                <div className="ml-3 mt-2 space-y-2 bg-gray-50 rounded-md p-2">
                  {link.submenu.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="flex items-center gap-3 text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md hover:bg-gray-100"
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileActiveMenu(null);
                      }}
                    >
                      <item.icon size={16} className="text-blue-500" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="flex flex-col gap-3 pt-2">
            <Link
              to="/our-services/itr-filling"
              className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-md text-center font-medium"
              onClick={() => setMobileOpen(false)}
            >
              File ITR Now
            </Link>

            <button
              onClick={() => {
                window.open(
                  "https://wa.me/918866397377?text=Hi, I'd like a callback",
                  "_blank"
                );
                setMobileOpen(false);
              }}
              className="block w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-md text-center font-medium"
            >
              Talk to a CA
            </button>
          </div>
        </div>
      )}
    </header>
  );
}