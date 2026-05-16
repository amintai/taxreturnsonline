import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const legalPages = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Use', to: '/terms-of-use' },
  { label: 'Disclaimer', to: '/disclaimer' },
];

/**
 * Shared layout for all legal pages.
 * Props:
 *  - icon: Lucide icon component
 *  - iconBg: tailwind bg class e.g. "bg-blue-100"
 *  - iconColor: tailwind text class e.g. "text-blue-600"
 *  - title: page title string
 *  - subtitle: short description
 *  - lastUpdated: e.g. "May 2025"
 *  - activePath: current route e.g. "/privacy-policy"
 *  - children: the section content
 */
const LegalPageLayout = ({ icon: Icon, iconBg, iconColor, title, subtitle, lastUpdated, activePath, children }) => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero banner */}
      <div className="bg-gradient-to-br from-[#003f6e] via-[#005C9D] to-blue-500 text-white">
        <div className="container mx-auto px-4 py-14 text-center">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5 ${iconBg}`}>
            <Icon size={28} className={iconColor} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{title}</h1>
          <p className="text-blue-100 max-w-xl mx-auto text-base">{subtitle}</p>
          {lastUpdated && (
            <p className="text-blue-200 text-xs mt-3">Last updated: {lastUpdated}</p>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 max-w-5xl">
        {/* Page switcher */}
        <div className="flex flex-wrap gap-2 mb-8">
          {legalPages.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                activePath === to
                  ? 'bg-[#005C9D] text-white'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-[#005C9D] hover:text-[#005C9D]'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Content card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          {children}
        </div>

        {/* Contact CTA */}
        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center">
          <p className="text-gray-700 text-sm">
            Questions about this page?{' '}
            <a href="mailto:support@taxreturnsonline.in" className="text-[#005C9D] font-medium hover:underline">
              support@taxreturnsonline.in
            </a>
            {' '}or{' '}
            <a href="https://wa.me/919512397377" target="_blank" rel="noreferrer" className="text-green-600 font-medium hover:underline">
              chat on WhatsApp
            </a>
          </p>
        </div>
      </div>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-[#005C9D] text-white shadow-lg hover:bg-blue-700 transition-all z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default LegalPageLayout;
