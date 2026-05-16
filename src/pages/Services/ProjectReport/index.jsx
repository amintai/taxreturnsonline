import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, CheckCircle2, MessageCircle, Check } from 'lucide-react';
import { useState } from 'react';
import TaxSideForm from '../../../components/TaxSideForm';

const WHATSAPP = '919512397377';

const highlights = [
  '10+ years experienced CA/CS',
  'Bank loan-ready project reports',
  'P&L, Balance Sheet & feasibility',
  'No hidden charges',
];

const components = [
  { title: 'Introductory Page', desc: 'Business introduction, objectives, and the aim of the venture.' },
  { title: 'Project Summary', desc: 'Overall status, timeline, budget, and expected profit.' },
  { title: 'Scope of the Project', desc: 'Work completed, remaining steps, and next-phase planning.' },
  { title: 'Promoter Details', desc: 'Qualifications, work experience, and process expertise of promoters.' },
  { title: 'Employee Details', desc: 'Educational qualifications, professional training, and managerial experience.' },
  { title: 'Infrastructure Facilities', desc: 'Location, raw materials, electricity, water, manpower, and production process.' },
  { title: 'Marketing Plan', desc: 'Target customers, market segmentation, demand analysis, and sales objectives.' },
  { title: 'Financial Details', desc: 'Means of financing, balance sheets, P&L statements, and break-even analysis.' },
];

const steps = [
  { num: '01', title: 'Share your business details & documents' },
  { num: '02', title: 'Pay the recommended fees' },
  { num: '03', title: 'CA/CS reviews scope and prepares the report' },
  { num: '04', title: 'Your bank-ready project report is delivered' },
];

const ProjectReport = () => {
  const navigate = useNavigate();
  const whatsappURL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hi, I need a Project Report for a bank loan. Please guide me.')}`;

  return (
    <>
      <Helmet>
        <title>Project Report for Bank Loan  Expert CA/CS | TaxReturnsOnline</title>
        <meta name="description" content="Get a professional project report prepared by CA/CS for bank loans and startup funding. Starting at ₹6,999." />
        <link rel="canonical" href="https://www.taxreturnsonline.in/tax-compliance/tax-report-project" />
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Project Report for Bank Loan",
          "provider": { "@type": "AccountingService", "name": "TaxReturnsOnline", "url": "https://www.taxreturnsonline.in" },
          "description": "Professional project report preparation by CA/CS for bank loans and startup funding. Includes P&L, balance sheet, and feasibility analysis. Starting at ₹6,999.",
          "url": "https://www.taxreturnsonline.in/tax-compliance/tax-report-project",
          "areaServed": "IN",
          "offers": [{ "@type": "Offer", "name": "Project Report", "price": "6999", "priceCurrency": "INR" }]
        }`}</script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
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
                  Project Report Preparation
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
                  Bank-Ready Project Reports<br className="hidden md:block" />
                  <span className="text-green-400"> by Expert CA/CS</span>
                </h1>
                <p className="text-blue-100 text-base md:text-lg leading-relaxed mb-7 max-w-lg">
                  Starting a new business or expanding? Our CA/CS professionals prepare comprehensive project reports that help you secure loans from banks and investors  starting at{' '}
                  <span className="text-white font-semibold">₹6,999</span>.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5 text-sm text-blue-50">
                      <CheckCircle2 size={16} className="text-green-400 shrink-0" />{h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => document.getElementById('project-form').scrollIntoView({ behavior: 'smooth' })}
                    className="bg-green-500 hover:bg-green-400 text-white font-semibold px-7 py-3 rounded-xl shadow-lg transition active:scale-95">
                    Get Started  ₹6,999
                  </button>
                  <a href={whatsappURL} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 py-3 rounded-xl font-medium transition active:scale-95">
                    <MessageCircle size={17} /> Ask on WhatsApp
                  </a>
                </div>
              </div>
              <div className="lg:w-[420px] shrink-0 hidden lg:block">
                <div className="relative rounded-t-2xl overflow-hidden shadow-2xl" style={{ height: '340px' }}>
                  <img src="/images/services/economic-growth.jpeg" alt="Project Report" className="w-full h-full object-cover object-top" loading="eager" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 grid grid-cols-4 divide-x divide-white/20 bg-black/30 backdrop-blur-sm">
                    {[{ value: '500+', label: 'Reports' }, { value: '₹6,999', label: 'One-time' }, { value: '5 Days', label: 'Delivery' }, { value: '4.9★', label: 'Rating' }].map(({ value, label }) => (
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

          {/* What is a project report */}
          <section className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">What is a Project Report?</h2>
            <div className="w-12 h-1 bg-[#005C9D] mx-auto mb-5" />
            <p className="text-gray-600 leading-relaxed">
              A project report is formal documentation presenting the technical, financial, and managerial aspects of a proposed business. It includes SWOT analysis, financial projections, infrastructure details, and marketing plans. Banks and investors require a positive feasibility ratio before approving loans  our CA/CS team ensures your report meets all requirements.
            </p>
          </section>

          {/* Components + Form */}
          <section className="flex flex-col lg:flex-row gap-10" id="project-form">
            <div className="flex-1 space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">What's Included in Your Report</h2>
              <div className="w-12 h-1 bg-[#005C9D]" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {components.map(({ title, desc }) => (
                  <div key={title} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex gap-3 hover:shadow-md transition-shadow">
                    <Check size={16} className="text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">{title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="bg-[#005C9D] px-5 py-3">
                  <h3 className="text-white font-semibold">One-time Package</h3>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-gray-900">₹6,999</p>
                    <p className="text-xs text-gray-400 mt-1">+ 18% GST</p>
                  </div>
                  <ul className="space-y-1.5">
                    {['Complete Project Report', 'Call, Chat & Email Support', 'No hidden charges'].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check size={14} className="text-green-500 shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:w-80 xl:w-96 shrink-0">
              <div className="sticky top-24">
                <TaxSideForm serviceLabel="Project Report Preparation" />
              </div>
            </div>
          </section>

          {/* How we work */}
          <section>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">How We Work</h2>
              <div className="w-12 h-1 bg-[#005C9D] mx-auto mt-3" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
              {steps.map(({ num, title }) => (
                <div key={num} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center relative">
                  <div className="text-4xl font-black text-gray-100 mb-3 select-none">{num}</div>
                  <p className="text-sm font-medium text-gray-800">{title}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default ProjectReport;
