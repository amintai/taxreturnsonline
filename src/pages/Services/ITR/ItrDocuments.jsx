import { CreditCard, User, FileText, FileCheck, ClipboardList, Banknote } from "lucide-react";

const documents = [
  { icon: CreditCard, title: "PAN Card", desc: "Mandatory for all ITR filings", image: "/images/services/pan-card.jpeg" },
  { icon: User, title: "Aadhaar Card", desc: "Required for identity verification", image: "/images/services/aadhar-card.jpeg" },
  { icon: FileText, title: "Form 16 / Salary Slips", desc: "Issued by your employer for TDS details", image: "/images/services/form-16.jpeg" },
  { icon: FileCheck, title: "Bank Statement", desc: "Last financial year's account statement", image: "/images/services/bank-statement.jpeg" },
  { icon: ClipboardList, title: "Investment Proofs", desc: "80C, 80D, HRA, NPS receipts", image: "/images/services/investment-proof.jpeg" },
  { icon: Banknote, title: "TDS Certificates", desc: "Form 16A / 26AS if applicable", image: "/images/services/tds.jpeg" },
];

const ItrDocuments = () => (
  <div>
    <div className="text-center mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Documents Required</h2>
      <p className="text-gray-500 mt-2 text-sm">Keep these handy before we begin</p>
      <div className="w-12 h-1 bg-[#005C9D] mx-auto mt-3" />
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {documents.map(({ icon: Icon, title, desc, image }) => (
        <div key={title} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col items-center text-center hover:shadow-md transition-shadow group">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-100 mb-3 group-hover:border-[#005C9D] transition-colors">
            <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
          </div>
          <h4 className="font-semibold text-gray-900 text-sm mb-1">{title}</h4>
          <p className="text-gray-400 text-xs">{desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default ItrDocuments;
