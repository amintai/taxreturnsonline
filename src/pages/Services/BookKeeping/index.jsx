import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, CheckCircle2, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { Cloud, FileText, ShieldCheck, BookOpen, Users, DollarSign, Phone, Globe } from 'lucide-react';
import TaxSideForm from '../../../components/TaxSideForm';

const WHATSAPP = '919512397377';

const highlights = [
  'Cloud-based bookkeeping system',
  'Bank reconciliation every month',
  'GST & TDS compliance included',
  'Digital access from anywhere',
];

const benefits = [
  { icon: Cloud, title: 'Cloud-based Accounting', desc: 'Access your books anytime, anywhere with secure cloud storage.' },
  { icon: FileText, title: 'Bank Reconciliation', desc: 'Monthly reconciliation statements to keep your accounts accurate.' },
  { icon: BookOpen, title: 'Detailed Record Keeping', desc: 'Every transaction recorded and categorised for easy retrieval.' },
  { icon: Globe, title: 'Digital Access', desc: 'View reports and statements from any device, any location.' },
  { icon: ShieldCheck, title: 'Data Security', desc: 'Your financial records are encrypted and securely stored.' },
  { icon: Users, title: 'Free Consultations', desc: 'Dedicated CA available for queries throughout the month.' },
  { icon: Phone, title: 'Call, Email & Chat Support', desc: 'Multi-channel support for quick resolution of any issue.' },
  { icon: DollarSign, title: 'Competitive Pricing', desc: 'Professional bookkeeping starting at ₹999/month.' },
];

const faqs = [
  { q: 'What is bookkeeping?', a: 'Bookkeeping is the systematic recording of all financial transactions  sales, purchases, receipts, and payments  following GAAP principles. It forms the foundation of your accounting system.' },
  { q: 'Is bookkeeping mandatory?', a: 'Yes. All businesses are required to maintain books of accounts. Records must be preserved for at least 7 years as per the Income Tax Act.' },
  { q: 'Why is bookkeeping essential?', a: 'Accurate bookkeeping enables easier audits, better tax filing, improved cash flow management, legal compliance, and informed business decisions.' },
  { q: 'What does the service cost?', a: 'Our bookkeeping plans start at ₹999/month. The final cost depends on transaction volume and specific requirements  our CA will provide a custom quote.' },
];

const BookKeeping = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);
  const whatsappURL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hi, I need help with Bookkeeping Services. Please guide me.')}`;

  return (
    <>
      <Helmet>
        <title>Online Bookkeeping Service  Expert CA Assistance | TaxReturnsOnline</title>
        <meta name="description" content="Outsource your bookkeeping to expert CAs. Cloud-based, accurate, and starting at ₹999/month." />
        <link rel="canonical" href="https://www.taxreturnsonline.in/tax-compliance/bookkeeping-service" />
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Online Bookkeeping Service",
          "provider": { "@type": "AccountingService", "name": "TaxReturnsOnline", "url": "https://www.taxreturnsonline.in" },
          "description": "Cloud-based bookkeeping, bank reconciliation, GST & TDS compliance for businesses. Starting at ₹999/month.",
          "url": "https://www.taxreturnsonline.in/tax-compliance/bookkeeping-service",
          "areaServed": "IN",
          "offers": [{ "@type": "Offer", "name": "Monthly Bookkeeping", "price": "999", "priceCurrency": "INR" }]
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
                  Online Bookkeeping Service
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
                  Outsource Your Books,<br className="hidden md:block" />
                  <span className="text-green-400"> Focus on Growth</span>
                </h1>
                <p className="text-blue-100 text-base md:text-lg leading-relaxed mb-7 max-w-lg">
                  Let India's recommended accountants organise, prepare, and analyse your financial transactions with easy cloud-based bookkeeping  starting at{' '}
                  <span className="text-white font-semibold">₹999/month</span>.
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
                    onClick={() => document.getElementById('bookkeeping-form').scrollIntoView({ behavior: 'smooth' })}
                    className="bg-green-500 hover:bg-green-400 text-white font-semibold px-7 py-3 rounded-xl shadow-lg transition active:scale-95">
                    Get Started  ₹999/month
                  </button>
                  <a href={whatsappURL} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 py-3 rounded-xl font-medium transition active:scale-95">
                    <MessageCircle size={17} /> Ask on WhatsApp
                  </a>
                </div>
              </div>
              <div className="lg:w-[420px] shrink-0 hidden lg:block">
                <div className="relative rounded-t-2xl overflow-hidden shadow-2xl" style={{ height: '340px' }}>
                  <img src="/images/services/accounting-service.jpeg" alt="Bookkeeping" className="w-full h-full object-cover object-center" loading="eager" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 grid grid-cols-4 divide-x divide-white/20 bg-black/30 backdrop-blur-sm">
                    {[{ value: '500+', label: 'Businesses' }, { value: '₹999', label: 'Per Month' }, { value: 'Monthly', label: 'Reports' }, { value: '4.9★', label: 'Rating' }].map(({ value, label }) => (
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
          <section className="flex flex-col lg:flex-row gap-10" id="bookkeeping-form">
            <div className="flex-1 space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">Benefits of Our Bookkeeping Service</h2>
              <div className="w-12 h-1 bg-[#005C9D]" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex gap-4 hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">{title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-80 xl:w-96 shrink-0">
              <div className="sticky top-24">
                <TaxSideForm serviceLabel="Online Bookkeeping Service" />
              </div>
            </div>
          </section>

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

export default BookKeeping;
