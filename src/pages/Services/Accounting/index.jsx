import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, CheckCircle2, MessageCircle } from 'lucide-react';
import AccountingFeatures from './components/AccountingFeatures';
import AccountingFaq from './components/AccountingFaq';
import AccountingSideForm from './components/AccountingSideForm';

const WHATSAPP = '919512397377';

const highlights = [
  'Dedicated CA for your business',
  'Monthly bookkeeping & reconciliation',
  'GST & TDS compliance handled',
  'Financial reports & MIS statements',
];

const stats = [
  { value: '1,000+', label: 'Businesses Served' },
  { value: '₹2,999', label: 'Starting at' },
  { value: 'Monthly', label: 'Reporting' },
  { value: '4.9★', label: 'Rating' },
];

const AccountingServices = () => {
  const navigate = useNavigate();
  const whatsappURL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hi, I need help with Accounting Services. Please guide me.')}`;

  return (
    <>
      <Helmet>
        <title>Accounting Services  Expert CA Assistance | TaxReturnsOnline</title>
        <meta name="description" content="Professional bookkeeping, GST & TDS compliance, financial reporting and accounting services for businesses. CA-assisted, starting at ₹2,999/month." />
        <link rel="canonical" href="https://www.taxreturnsonline.in/our-services/accounting-services" />
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Accounting & Bookkeeping Services",
          "provider": { "@type": "AccountingService", "name": "TaxReturnsOnline", "url": "https://www.taxreturnsonline.in" },
          "description": "Professional bookkeeping, GST & TDS compliance, payroll, and financial reporting for businesses. Starting at ₹2,999/month.",
          "url": "https://www.taxreturnsonline.in/our-services/accounting-services",
          "areaServed": "IN",
          "offers": [{ "@type": "Offer", "name": "Monthly Accounting", "price": "2999", "priceCurrency": "INR" }]
        }`}</script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">

        {/* ── Hero ── */}
        <div className="relative bg-gradient-to-br from-[#003f6e] via-[#005C9D] to-blue-500 text-white overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full" />
            <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl" />
            <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-green-400/10 rounded-full blur-xl" />
          </div>

          <div className="container mx-auto px-4 pt-8 pb-0 relative">
            <button
              onClick={() => navigate('/our-services')}
              className="flex items-center gap-2 text-blue-200 hover:text-white transition mb-10 text-sm w-fit"
            >
              <ArrowLeft size={15} /> Back to Services
            </button>

            <div className="flex flex-col lg:flex-row items-end gap-10">
              {/* Left copy */}
              <div className="flex-1 pb-12 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs font-medium mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Accounting & Bookkeeping Services
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
                  Smart Accounting for<br className="hidden md:block" />
                  <span className="text-green-400"> Growing Businesses</span>
                </h1>

                <p className="text-blue-100 text-base md:text-lg leading-relaxed mb-7 max-w-lg">
                  From day-to-day bookkeeping to GST compliance and financial reporting  our CA team manages your accounts so you can focus on growing your business.
                  Starting at just{' '}
                  <span className="text-white font-semibold">₹2,999/month</span>.
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5 text-sm text-blue-50">
                      <CheckCircle2 size={16} className="text-green-400 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => document.getElementById('accounting-form').scrollIntoView({ behavior: 'smooth' })}
                    className="bg-green-500 hover:bg-green-400 text-white font-semibold px-7 py-3 rounded-xl shadow-lg shadow-green-900/30 transition active:scale-95"
                  >
                    Get Started  ₹2,999/month
                  </button>
                  <a
                    href={whatsappURL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 py-3 rounded-xl font-medium transition active:scale-95"
                  >
                    <MessageCircle size={17} /> Ask on WhatsApp
                  </a>
                </div>
              </div>

              {/* Right  image with stats overlay */}
              <div className="lg:w-[420px] shrink-0 hidden lg:block">
                <div className="relative rounded-t-2xl overflow-hidden shadow-2xl" style={{ height: '340px' }}>
                  <img
                    src="/images/services/accounting-service.jpeg"
                    alt="Accounting services"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 grid grid-cols-4 divide-x divide-white/20 bg-black/30 backdrop-blur-sm">
                    {stats.map(({ value, label }) => (
                      <div key={label} className="py-3 text-center">
                        <div className="text-base font-bold text-white leading-none">{value}</div>
                        <div className="text-[10px] text-blue-200 mt-1">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Main content ── */}
        <div className="container mx-auto px-4 py-12 space-y-16">

          {/* What We Offer */}
          <section>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">What We Offer</h2>
              <p className="text-gray-500 mt-2 text-sm">Comprehensive accounting solutions for every business stage</p>
              <div className="w-12 h-1 bg-[#005C9D] mx-auto mt-3" />
            </div>
            <AccountingFeatures />
          </section>

          {/* Why accounting matters + Side Form */}
          <section className="flex flex-col lg:flex-row gap-10" id="accounting-form">
            {/* Left  why it matters */}
            <div className="flex-1 space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Why Professional Accounting Matters</h2>
              <div className="w-12 h-1 bg-[#005C9D]" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Stay Compliant', desc: 'Avoid penalties with timely GST, TDS, and ROC filings managed by our experts.' },
                  { title: 'Make Better Decisions', desc: 'Monthly P&L, balance sheets, and cash flow reports give you real visibility into your business.' },
                  { title: 'Save Time & Money', desc: 'Outsourcing accounting is more cost-effective than hiring in-house and eliminates errors.' },
                  { title: 'Audit-Ready Always', desc: 'Clean, organised books mean you\'re always prepared for tax audits or investor due diligence.' },
                  { title: 'Payroll Management', desc: 'Accurate salary processing, PF, ESI, and professional tax compliance handled end-to-end.' },
                  { title: 'Business Growth Support', desc: 'Financial projections, budgeting, and MIS reports to help you plan and scale confidently.' },
                ].map(({ title, desc }) => (
                  <div key={title} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex gap-4 hover:shadow-md transition-shadow">
                    <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">{title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sticky side form */}
            <div className="lg:w-80 xl:w-96 shrink-0">
              <div className="sticky top-24">
                <AccountingSideForm />
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
              <div className="w-12 h-1 bg-[#005C9D] mx-auto mt-3" />
            </div>
            <div className="max-w-2xl mx-auto">
              <AccountingFaq />
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default AccountingServices;
