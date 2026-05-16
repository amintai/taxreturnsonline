import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, CheckCircle2, MessageCircle, Check } from 'lucide-react';
import { useState } from 'react';
import TaxSideForm from '../../../components/TaxSideForm';

const WHATSAPP = '919512397377';

const highlights = [
  'Certified CA & tax advisor assigned',
  'Legal tax minimisation strategies',
  'Advance tax computation included',
  'Year-round support & planning',
];

const objectives = [
  { title: 'Reduce Tax Liability', desc: 'Legally structure your income and investments to minimise the amount of tax you owe each year.', img: '/images/services/tax-liability.jpeg' },
  { title: 'Healthy Financial Growth', desc: 'Redirect tax savings into investments  building long-term wealth while staying compliant.', img: '/images/services/economic-growth.jpeg' },
  { title: 'Avoid Legal Issues', desc: 'Expert guidance ensures all deductions and exemptions are claimed correctly, with zero risk of penalties.', img: '/images/services/legal-issue.jpeg' },
  { title: 'Economic Stability', desc: 'A well-structured annual tax plan ensures timely payments and a clean financial record.', img: '/images/services/economic-stability.jpeg' },
];

const packages = [
  { title: 'Salaried Individuals', price: '₹999', features: ['CA-assisted planning', 'Annual tax strategy', 'Call/Email/Chat support'] },
  { title: 'NRI Tax Planning', price: '₹1,499', features: ['NRI-specific planning', 'DTAA advisory', 'Call/Email/Chat support'] },
  { title: 'Advance Tax Planning', price: '₹1,499', features: ['Advance tax computation', 'Direct & indirect tax', 'Call/Email/Chat support'] },
  { title: 'Capital Gains Planning', price: '₹2,499', features: ['Long & short-term gains', 'LTCG/STCG optimisation', 'Call/Email/Chat support'] },
  { title: 'House Property Income', price: '₹1,499', features: ['Rental income planning', 'HRA & deductions', 'Call/Email/Chat support'] },
  { title: 'Business / Freelancer', price: '₹1,999', features: ['P&L & Balance Sheet', 'Business deductions', 'Call/Email/Chat support'] },
  { title: 'Other Income Sources', price: '₹2,499', features: ['Dividend, interest income', 'Comprehensive planning', 'Call/Email/Chat support'] },
  { title: 'Year-End Tax Saving', price: '₹1,999', features: ['Feb–Mar planning', '80C/80D optimisation', 'Call/Email/Chat support'] },
];

const faqs = [
  { q: 'What is tax planning?', a: 'Tax planning is the legal process of reducing your payable tax liability by managing income, deductions, and investments within the provisions of the Income Tax Act.' },
  { q: 'Who manages my tax planning?', a: 'A dedicated Chartered Accountant from our panel is assigned to your case. They analyse your financials and suggest personalised strategies.' },
  { q: 'What are the responsibilities of your tax advisors?', a: 'Our advisors analyse your financial situation, identify tax-saving opportunities, ensure compliance, prepare tax documents, and provide ongoing advice throughout the year.' },
  { q: 'Is tax planning only for businesses?', a: 'No. Salaried individuals, NRIs, freelancers, and business owners all benefit from structured tax planning. We have packages for every profile.' },
];

const TaxPlanning = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);
  const whatsappURL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hi, I need help with Tax Planning & Consultancy. Please guide me.')}`;

  return (
    <>
      <Helmet>
        <title>Tax Planning & Consultancy — Expert CA Assistance | TaxReturnsOnline</title>
        <meta name="description" content="Reduce your tax liability legally with expert CA-assisted tax planning. Salaried, NRI, business — starting at ₹999." />
        <link rel="canonical" href="https://www.taxreturnsonline.in/tax-compliance/tax-planning-consultancy" />
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Tax Planning & Consultancy",
          "provider": { "@type": "AccountingService", "name": "TaxReturnsOnline", "url": "https://www.taxreturnsonline.in" },
          "description": "CA-assisted tax planning for salaried individuals, NRIs, and businesses. Legally minimise your tax liability. Starting at ₹999.",
          "url": "https://www.taxreturnsonline.in/tax-compliance/tax-planning-consultancy",
          "areaServed": "IN",
          "offers": [{ "@type": "Offer", "name": "Tax Planning for Salaried", "price": "999", "priceCurrency": "INR" }]
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
                  Tax Planning & Consultancy
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
                  Pay Less Tax,<br className="hidden md:block" />
                  <span className="text-green-400"> Legally & Smartly</span>
                </h1>
                <p className="text-blue-100 text-base md:text-lg leading-relaxed mb-7 max-w-lg">
                  Our CA experts analyse your income, investments, and liabilities to build a personalised tax plan that minimises what you owe  starting at just <span className="text-white font-semibold">₹999</span>.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5 text-sm text-blue-50">
                      <CheckCircle2 size={16} className="text-green-400 shrink-0" />{h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <button onClick={() => document.getElementById('tax-form').scrollIntoView({ behavior: 'smooth' })}
                    className="bg-green-500 hover:bg-green-400 text-white font-semibold px-7 py-3 rounded-xl shadow-lg transition active:scale-95">
                    Get Started  ₹999 onwards
                  </button>
                  <a href={whatsappURL} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 py-3 rounded-xl font-medium transition active:scale-95">
                    <MessageCircle size={17} /> Ask on WhatsApp
                  </a>
                </div>
              </div>
              <div className="lg:w-[420px] shrink-0 hidden lg:block">
                <div className="relative rounded-t-2xl overflow-hidden shadow-2xl" style={{ height: '340px' }}>
                  <img src="/images/services/tax-planning.jpg" alt="Tax Planning" className="w-full h-full object-cover object-top" loading="eager" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 grid grid-cols-4 divide-x divide-white/20 bg-black/30 backdrop-blur-sm">
                    {[{ value: '1,000+', label: 'Clients' }, { value: '₹999', label: 'Starting at' }, { value: '8 Plans', label: 'Available' }, { value: '4.9★', label: 'Rating' }].map(({ value, label }) => (
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

          {/* Objectives */}
          <section>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Objectives of Tax Planning</h2>
              <div className="w-12 h-1 bg-[#005C9D] mx-auto mt-3" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {objectives.map(({ title, desc, img }) => (
                <div key={title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-full overflow-hidden mx-auto mb-4 border-2 border-blue-100">
                    <img src={img} alt={title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-2">{title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Packages + Form */}
          <section className="flex flex-col lg:flex-row gap-10" id="tax-form">
            <div className="flex-1 space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">Select a Package</h2>
              <div className="w-12 h-1 bg-[#005C9D]" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {packages.map(({ title, price, features }) => (
                  <div key={title} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
                      <span className="text-lg font-bold text-green-600">{price}</span>
                    </div>
                    <ul className="space-y-1.5">
                      {features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-gray-500">
                          <Check size={12} className="text-green-500 shrink-0" />{f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-80 xl:w-96 shrink-0">
              <div className="sticky top-24">
                <TaxSideForm serviceLabel="Tax Planning & Consultancy" />
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
              <div className="w-12 h-1 bg-[#005C9D] mx-auto mt-3" />
            </div>
            <div className="max-w-2xl mx-auto space-y-3">
              {faqs.map(({ q, a }, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                  <button className="w-full flex items-center justify-between px-5 py-4 text-left gap-4" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span className="font-medium text-gray-900 text-sm">{q}</span>
                    <span className={`text-gray-400 text-lg transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}>⌄</span>
                  </button>
                  {openFaq === i && <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-50">{a}</div>}
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default TaxPlanning;
