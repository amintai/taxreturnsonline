import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, CheckCircle2, MessageCircle, Check } from 'lucide-react';
import { useState } from 'react';
import TaxSideForm from '../../../components/TaxSideForm';

const WHATSAPP = '919512397377';

const highlights = [
  'Pvt. Ltd., OPC & LLP compliance covered',
  'ADT-1, AOC-4, MGT-7 filings handled',
  'Director KYC & ITR included',
  '25+ experienced CAs on your account',
];

const companyTypes = [
  {
    id: 'pvt-ltd', label: 'Pvt. Ltd. / OPC',
    compliance: ['ADT-1: Auditor Appointment', 'AOC-4: Annual Return (within 30 days of AGM)', 'MGT-7: Annual Return (within 60 days of AGM)', 'DIR-3: Director KYC', 'INC-20A: Business Commencement Declaration', 'Financial Statement Preparation', 'Income Tax Return Filing'],
    docs: ['Board Meeting Minutes', 'P&L and Balance Sheet', 'AGM Conclusions', 'Audit Report', 'Financial Statements', 'ITR Filing'],
    pricing: [{ tier: 'Basic', price: '₹14,999', note: 'Turnover up to ₹20L (+18% GST)' }, { tier: 'Standard', price: '₹24,999', note: 'Turnover ₹20L–₹50L (+18% GST)' }, { tier: 'Premium', price: '₹34,999', note: 'Turnover ₹51L–₹1Cr (+18% GST)' }],
  },
  {
    id: 'llp', label: 'LLP',
    compliance: ['Form 8: Statement of Accounts', 'Form 11: Annual Return', 'Financial Statement Preparation', 'Income Tax Return Filing', 'DIR-3 KYC of Partners'],
    docs: ['AGM Conclusions', 'P&L and Balance Sheet', 'Audit Report', 'DSC of Partners', 'PAN Card & Certificate of Incorporation'],
    pricing: [{ tier: 'Basic', price: '₹7,999', note: 'Turnover up to ₹20L (+18% GST)' }, { tier: 'Standard', price: '₹14,999', note: 'Turnover ₹20L–₹50L (+18% GST)' }, { tier: 'Premium', price: '₹24,999', note: 'Turnover ₹51L–₹1Cr (+18% GST)' }],
  },
  {
    id: 'section-8', label: 'Section 8 / NGO',
    compliance: ['ADT-1: Auditor Appointment', 'AOC-4: Annual Return', 'MGT-7: Annual Return', 'DIR-3: Director KYC', 'Financial Statement Preparation', 'Income Tax Return Filing'],
    docs: ['Board Meeting Minutes', 'P&L and Balance Sheet', 'AGM Conclusions', 'Audit Report', 'DSC of Directors', 'Certificate of Incorporation'],
    pricing: [{ tier: 'Basic', price: '₹14,999', note: 'Turnover up to ₹20L (+18% GST)' }, { tier: 'Standard', price: '₹24,999', note: 'Turnover ₹20L–₹50L (+18% GST)' }, { tier: 'Premium', price: '₹34,999', note: 'Turnover ₹51L–₹1Cr (+18% GST)' }],
  },
  {
    id: 'plc', label: 'Public Ltd.',
    compliance: ['ADT-1: Auditor Appointment', 'AOC-4: Annual Return', 'MGT-7: Annual Return', 'DIR-3: Director KYC', 'Financial Statement Preparation', 'Income Tax Return Filing'],
    docs: ['Board Meeting Minutes', 'P&L and Balance Sheet', 'AGM Conclusions', 'Audit Report', 'DSC of Directors', 'Certificate of Incorporation'],
    pricing: [{ tier: 'Basic', price: '₹14,999', note: 'Turnover up to ₹20L (+18% GST)' }, { tier: 'Standard', price: '₹24,999', note: 'Turnover ₹20L–₹50L (+18% GST)' }, { tier: 'Premium', price: '₹34,999', note: 'Turnover ₹51L–₹1Cr (+18% GST)' }],
  },
];

const tierColors = { Basic: 'bg-orange-50 border-orange-200', Standard: 'bg-green-50 border-green-200', Premium: 'bg-blue-50 border-blue-200' };

const AnnualComplienceFilling = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('pvt-ltd');
  const active = companyTypes.find((c) => c.id === activeTab);
  const whatsappURL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hi, I need help with Annual Compliance Filing. Please guide me.')}`;

  return (
    <>
      <Helmet>
        <title>Annual Compliance Filing  Expert CA Assistance | TaxReturnsOnline</title>
        <meta name="description" content="Complete annual compliance filing for Pvt. Ltd., OPC, LLP and Section 8 companies. CA-assisted, starting at ₹7,999." />
        <link rel="canonical" href="https://www.taxreturnsonline.in/tax-compliance/annual-complience-filling" />
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Annual Compliance Filing",
          "provider": { "@type": "AccountingService", "name": "TaxReturnsOnline", "url": "https://www.taxreturnsonline.in" },
          "description": "Annual compliance filing for Pvt. Ltd., OPC, LLP and Section 8 companies. ADT-1, AOC-4, MGT-7, DIR-3 and ITR handled by expert CAs.",
          "url": "https://www.taxreturnsonline.in/tax-compliance/annual-complience-filling",
          "areaServed": "IN",
          "offers": [{ "@type": "Offer", "name": "LLP Annual Compliance", "price": "7999", "priceCurrency": "INR" }]
        }`}</script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <div className="relative bg-gradient-to-br from-[#003f6e] via-[#005C9D] to-blue-500 text-white overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full" />
            <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl" />
          </div>
          <div className="container mx-auto px-4 pt-8 pb-0 relative">
            <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-blue-200 hover:text-white transition mb-10 text-sm w-fit">
              <ArrowLeft size={15} /> Back
            </button>
            <div className="flex flex-col lg:flex-row items-end gap-10">
              <div className="flex-1 pb-12 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs font-medium mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Annual Compliance Filing
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
                  Annual Compliance for<br className="hidden md:block" />
                  <span className="text-green-400"> Every Company Type</span>
                </h1>
                <p className="text-blue-100 text-base md:text-lg leading-relaxed mb-7 max-w-lg">
                  Stay compliant with MCA regulations. Our CA team handles all annual filings for Pvt. Ltd., OPC, LLP, and Section 8 companies  starting at <span className="text-white font-semibold">₹7,999</span>.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5 text-sm text-blue-50">
                      <CheckCircle2 size={16} className="text-green-400 shrink-0" />{h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <button onClick={() => document.getElementById('compliance-form').scrollIntoView({ behavior: 'smooth' })}
                    className="bg-green-500 hover:bg-green-400 text-white font-semibold px-7 py-3 rounded-xl shadow-lg transition active:scale-95">
                    Get Started  ₹7,999 onwards
                  </button>
                  <a href={whatsappURL} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 py-3 rounded-xl font-medium transition active:scale-95">
                    <MessageCircle size={17} /> Ask on WhatsApp
                  </a>
                </div>
              </div>
              <div className="lg:w-[420px] shrink-0 hidden lg:block">
                <div className="relative rounded-t-2xl overflow-hidden shadow-2xl" style={{ height: '340px' }}>
                  <img src="/images/services/annual-compliance.jpg" alt="Annual Compliance" className="w-full h-full object-cover object-center" loading="eager" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 grid grid-cols-4 divide-x divide-white/20 bg-black/30 backdrop-blur-sm">
                    {[{ value: '500+', label: 'Companies' }, { value: '₹7,999', label: 'Starting at' }, { value: '4 Types', label: 'Covered' }, { value: '4.9★', label: 'Rating' }].map(({ value, label }) => (
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

        <div className="container mx-auto px-4 py-12 space-y-16">

          {/* Compliance details + form */}
          <section className="flex flex-col lg:flex-row gap-10" id="compliance-form">
            <div className="flex-1 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Compliance Requirements & Pricing</h2>
              <div className="w-12 h-1 bg-[#005C9D]" />

              {/* Tabs */}
              <div className="flex flex-wrap gap-2">
                {companyTypes.map((c) => (
                  <button key={c.id} onClick={() => setActiveTab(c.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition ${activeTab === c.id ? 'bg-[#005C9D] text-white' : 'bg-white border border-gray-200 text-gray-600 hover:border-[#005C9D]'}`}>
                    {c.label}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                  <h3 className="font-semibold text-gray-900 mb-3 text-sm">Compliance Filings</h3>
                  <ul className="space-y-2">
                    {active.compliance.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check size={14} className="text-green-500 shrink-0 mt-0.5" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                  <h3 className="font-semibold text-gray-900 mb-3 text-sm">Documents Required</h3>
                  <ul className="space-y-2">
                    {active.docs.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check size={14} className="text-blue-500 shrink-0 mt-0.5" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pricing */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {active.pricing.map(({ tier, price, note }) => (
                  <div key={tier} className={`rounded-xl border p-5 text-center ${tierColors[tier]}`}>
                    <p className="text-xs font-medium text-gray-500 mb-1">{tier}</p>
                    <p className="text-2xl font-bold text-gray-900 mb-1">{price}</p>
                    <p className="text-xs text-gray-500">{note}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400">* Exclusive of government fees and audit fees</p>
            </div>

            <div className="lg:w-80 xl:w-96 shrink-0">
              <div className="sticky top-24">
                <TaxSideForm serviceLabel="Annual Compliance Filing" />
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default AnnualComplienceFilling;
