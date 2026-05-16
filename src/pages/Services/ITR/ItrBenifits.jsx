import { CheckCircle2 } from "lucide-react";

const benefits = [
  { title: "Visa & Travel Approvals", desc: "ITR is mandatory proof of income for most visa applications." },
  { title: "Loan & Credit Card Eligibility", desc: "Banks require ITR as income proof for home, car, and personal loans." },
  { title: "Carry Forward Losses", desc: "File on time to carry forward capital or business losses to future years." },
  { title: "Claim Tax Refunds", desc: "Recover excess TDS deducted by your employer or bank." },
  { title: "Avoid Penalties", desc: "Late filing attracts penalties up to ₹5,000 under Section 234F." },
  { title: "Financial Credibility", desc: "A consistent filing history builds your financial profile and creditworthiness." },
];

const ItrBenefits = () => (
  <div>
    <div className="text-center mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Why File Your ITR?</h2>
      <p className="text-gray-500 mt-2 text-sm">Beyond compliance  here's what you gain</p>
      <div className="w-12 h-1 bg-green-500 mx-auto mt-3" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
      {benefits.map(({ title, desc }) => (
        <div key={title} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex gap-4 hover:shadow-md transition-shadow">
          <CheckCircle2 size={22} className="text-green-500 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-gray-900 text-sm mb-1">{title}</h4>
            <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ItrBenefits;
