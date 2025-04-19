import { Briefcase, Receipt, PieChart } from "lucide-react";

const features = [
  {
    title: "Bookkeeping",
    icon: <Briefcase className="w-8 h-8 text-indigo-700 transition-all hover:scale-110" />,
    description: "Accurate records, reconciliations, and ledger management."
  },
  {
    title: "GST & TDS Compliance",
    icon: <Receipt className="w-8 h-8 text-indigo-700 transition-all hover:scale-110" />,
    description: "On-time filings and end-to-end support for indirect taxes."
  },
  {
    title: "Financial Analysis",
    icon: <PieChart className="w-8 h-8 text-indigo-700 transition-all hover:scale-110" />,
    description: "Monthly reports, cash flow analysis, and strategic planning."
  }
];

const AccountingFeatures = () => {
  return (
    <section className="py-16 px-6 bg-indigo-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          What We Offer
        </h2>
        <div className="w-24 h-1 bg-indigo-700 mx-auto mb-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white text-indigo-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="mb-4 flex justify-center transition-transform duration-300 ease-in-out hover:scale-110">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccountingFeatures;
