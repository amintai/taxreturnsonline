/* eslint-disable react/jsx-key */

"use client";

import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowDownToDot,
  BadgeCheck,
  BarChart,
  Calculator,
  FileSpreadsheet,
  FileText,
  GraduationCap,
  PiggyBank,
  ScrollText,
  Landmark,
  Globe,
  Building2,
  Stamp,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

// Custom hook to detect if on mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  return isMobile;
};

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const submenuRef = useRef(null);
  const isMobile = useIsMobile();

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

  useEffect(() => {
    setMenuOpen(false);
    setActiveSubmenu(null);
  }, [location.pathname]);

  const isActive = (path) => location.pathname.includes(path);

  const toggleSubmenu = (e, path) => {
    setActiveSubmenu((prev) => (prev === path ? null : path));
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveSubmenu(null);
  };

  // Optional: Click outside to close submenu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setActiveSubmenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="container mx-auto px-4 flex justify-between items-center sticky top-0 z-50 bg-white shadow-md h-20">
      {/* Logo */}
      <div
        className="flex items-center gap-2 md:gap-4 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          src="/images/logo.svg"
          alt="Logo"
          className="h-10 w-10 md:h-12 md:w-12 object-contain"
        />
        <span className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight tracking-tight">
          <span className="text-green-600">TaxReturns</span>
          <span className="text-gray-900"> Online</span>
        </span>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
        {navLinks.map((link) => (
          <div key={link.path} className="relative group">
            {link.hasSubmenu ? (
              <button
                onClick={(e) => toggleSubmenu(e, link.path)}
                className={`flex items-center gap-1 ${
                  isActive(link.path) ? "font-bold text-blue-800" : ""
                }`}
                aria-haspopup="true"
              >
                {link.label}
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    activeSubmenu === link.path ? "rotate-180" : ""
                  }`}
                />
                {isActive(link.path) && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-800"></div>
                )}
              </button>
            ) : (
              <Link
                to={link.path}
                className={`relative ${
                  isActive(link.path) ? "font-bold text-blue-800" : ""
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-800"></div>
                )}
              </Link>
            )}

            {/* Submenu */}
            {link.hasSubmenu && activeSubmenu === link.path && (
              <div
                ref={submenuRef}
                className="absolute left-0 mt-4 w-64 bg-white shadow-lg rounded-md overflow-hidden z-50"
              >
                <div className="p-4 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-blue-800">
                    {link.label}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Select from our range of services
                  </p>
                </div>
                <div className="max-h-[300px] w-[420px] overflow-y-auto p-2 rounded-xl shadow-lg bg-white">
                  {link.submenu.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-md transition-colors"
                      onClick={closeMenu}
                    >
                      <span className="bg-green-100 p-2 rounded-full">
                        <item.icon className="h-5 w-5 text-blue-800" />
                      </span>
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        {/* CTAs */}
        <Link
          to="/our-services/itr-filling"
          className="bg-blue-800 hover:bg-blue-900 font-bold text-white px-4 py-2 rounded-md transition"
        >
          File ITR Now
        </Link>

        <button
          className="bg-green-600 hover:bg-green-700 font-semibold text-white px-4 py-2 rounded-md transition"
          onClick={() =>
            window.open(
              "https://wa.me/918866397377?text=Hi, I’d like a callback",
              "_blank"
            )
          }
        >
          Talk to a CA
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
          {menuOpen ? (
            <X className="w-8 h-8 text-gray-800" />
          ) : (
            <Menu className="w-8 h-8 text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white shadow-md flex flex-col items-start p-6 space-y-4 z-40 md:hidden">
          {navLinks.map((link) => (
            <div key={link.path} className="w-full">
              {link.hasSubmenu ? (
                <>
                  <button
                    className={`text-gray-800 text-lg font-medium w-full flex justify-between items-center ${
                      isActive(link.path) ? "text-blue-800 font-semibold" : ""
                    }`}
                    onClick={(e) => toggleSubmenu(e, link.path)}
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-200 ${
                        activeSubmenu === link.path ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeSubmenu === link.path && (
                    <div className="mt-2 ml-4 space-y-2">
                      {link.submenu.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={closeMenu}
                          className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md transition-colors"
                        >
                          <span className="bg-green-100 p-2 rounded-full">
                            <item.icon className="h-4 w-4 text-blue-800" />
                          </span>
                          <span>{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.path}
                  className={`text-gray-800 text-lg font-medium w-full block ${
                    isActive(link.path) ? "text-blue-800 font-semibold" : ""
                  }`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}

          <Link
            to="/file-itr"
            className="bg-blue-800 text-white px-4 py-2 rounded-md w-full text-center font-bold"
            onClick={closeMenu}
          >
            File ITR Now
          </Link>

          <button
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors w-full font-semibold"
            onClick={() => {
              closeMenu();
              window.open(
                "https://wa.me/918866397377?text=Hi, I’d like a callback",
                "_blank"
              );
            }}
          >
            Talk to a CA
          </button>
        </div>
      )}
    </header>
  );
}
