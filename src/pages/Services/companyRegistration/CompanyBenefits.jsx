import { CheckCircle2 } from "lucide-react";

const benefits = [
  { title: "Limited Liability Protection", desc: "Personal assets are protected from business debts and liabilities." },
  { title: "Credibility & Trust", desc: "Registered companies command greater trust from clients, banks, and investors." },
  { title: "Perpetual Existence", desc: "The company continues to exist regardless of changes in ownership or directors." },
  { title: "Better Funding Access", desc: "Easier to raise loans, attract investors, and apply for government schemes." },
  { title: "Tax Benefits", desc: "Registered companies enjoy various deductions and lower corporate tax rates." },
  { title: "Global Expansion", desc: "A registered entity is far easier to scale internationally or attract foreign investment." },
];

const CompanyBenefits = () => (
  <div>
    <div className="text-center mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Benefits of Company Registration</h2>
      <p className="text-gray-500 mt-2 text-sm">Why registering your business is the smartest first step</p>
      <div className="w-12 h-1 bg-green-500 mx-auto mt-3" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
      {benefits.map(({ title, desc }) => (
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
);

export default CompanyBenefits;
