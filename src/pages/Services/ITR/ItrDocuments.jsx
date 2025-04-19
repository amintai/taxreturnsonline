import { FileText, CreditCard, FileCheck, User, Banknote, ClipboardList } from "lucide-react";

const documents = [
  {
    icon: <CreditCard className="w-12 h-12 text-blue-800" />,
    title: "PAN Card",
    image: '/images/services/pan-card.jpeg'
  },
  {
    icon: <User className="w-12 h-12 text-blue-800" />,
    title: "Aadhaar Card",
    image: '/images/services/aadhar-card.jpeg'
  },
  {
    icon: <FileText className="w-12 h-12 text-blue-800" />,
    title: "Form 16 / Salary Slips",
    image: '/images/services/form-16.jpeg'
  },
  {
    icon: <FileCheck className="w-12 h-12 text-blue-800" />,
    title: "Bank Account Statement",
    image: '/images/services/bank-statement.jpeg'
  },
  {
    icon: <ClipboardList className="w-12 h-12 text-blue-800" />,
    title: "Investment Proofs (80C, 80D etc.)",
    image: '/images/services/investment-proof.jpeg'
  },
  {
    icon: <Banknote className="w-12 h-12 text-blue-800" />,
    title: "TDS Certificates (if applicable)",
    image: '/images/services/tds.jpeg'
  }
];

const ItrDocuments = () => {
  return (
    <div className="my-12">
      <h2 className="text-xl font-semibold text-center mb-10 relative">
        Documents Required for ITR Filing
        <div className="w-16 h-1 bg-orange-500 mx-auto mt-2"></div>
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-800 mt-2"></span>
      </h2>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-8 max-w-4xl mx-auto mt-8">
        {documents.map((doc, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-20 h-20 border-2 border-blue-600 rounded-full overflow-hidden flex items-center justify-center mb-3">
              <img src={doc.image} alt={doc.title} className="w-full h-full object-cover" />
            </div>
            <p className="text-sm">{doc.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItrDocuments;
