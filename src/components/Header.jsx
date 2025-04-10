'use client';

import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // If using Next.js, replace this accordingly
import { Menu, X } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Our Services', path: '/our-services' },
    { label: 'Tax & Compliance', path: '/tax-planning-consultancy' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Resources', path: '/our-resources' },
  ];

  const isActive = (path) => {
    return location.pathname.includes(path)
  }

  return (
    <header className="container mx-auto px-4 flex justify-between items-center sticky top-0 z-50 bg-white shadow-md h-20">

      {/* Logo */}
      <img
        className="md:hidden lg:inline-flex cursor-pointer"
        src="/images/logo-full.svg"
        alt="Logo"
        width="180"
        onClick={() => navigate('/')}
      />
      <img
        className="hidden md:inline-block lg:hidden cursor-pointer"
        src="/images/logo.svg"
        alt="Logo Icon"
        width="45"
        onClick={() => navigate('/')}
      />

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-3 lg:space-x-8">
        {navLinks.map((link) => (
          <a
            key={link.path}
            href={link.path}
            className={`nav-item ${isActive(link.path) ? 'font-bold text-indigo-600' : ''}`}
          >
            {link.label}
            {isActive(link.path) && <div className="w-16 h-1 bg-indigo-600 mx-auto mt-2"></div>}
          </a>
        ))}
        <button className="primary-button">+91 8866397377</button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
          {menuOpen ? <X className="w-8 h-8 text-gray-800" /> : <Menu className="w-8 h-8 text-gray-800" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white shadow-md flex flex-col items-start p-6 space-y-4 z-40 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className={`text-gray-800 text-lg font-medium w-full ${isActive(link.path) ? 'text-indigo-600 font-semibold' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button className="primary-button w-full">+91 8866397377</button>
        </div>
      )}
    </header>
  );
}
