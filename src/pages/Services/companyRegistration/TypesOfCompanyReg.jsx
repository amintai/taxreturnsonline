import { Link } from "react-router-dom";
import { Building2, Users, User, Leaf, Globe, FileText } from "lucide-react";

const companyTypes = [
  {
    icon: Building2,
    title: "Private Limited Company",
    short: "Pvt. Ltd.",
    description: "Most popular structure for startups and growing businesses. Requires minimum 2 directors and 2 shareholders. Offers limited liability and easy fundraising.",
    link: "/our-services/company-registration/private-limited-company",
    color: "#005C9D",
  },
  {
    icon: Users,
    title: "Limited Liability Partnership",
    short: "LLP",
    description: "Combines the flexibility of a partnership with limited liability protection. Ideal for professionals and service firms. Minimum 2 designated partners required.",
    link: "/our-services/company-registration/limited-liability-partnership",
    color: "#02BC6B",
  },
  {
    icon: User,
    title: "One Person Company",
    short: "OPC",
    description: "Designed for solo entrepreneurs who want the benefits of a company structure. Single director and shareholder. Full limited liability protection.",
    color: "#005C9D",
  },
  {
    icon: Leaf,
    title: "Section 8 Company",
    short: "NGO",
    description: "For non-profit organisations promoting education, charity, arts, science, or social welfare. Eligible for tax exemptions and government grants.",
    color: "#02BC6B",
  },
  {
    icon: Globe,
    title: "Public Limited Company",
    short: "Public Ltd.",
    description: "Suitable for large businesses planning to raise capital from the public. Shares can be freely traded. Requires minimum 3 directors and 7 shareholders.",
    color: "#005C9D",
  },
  {
    icon: FileText,
    title: "Business Registration / Licence",
    short: "Proprietorship",
    description: "Simplest form of business  no separate legal entity. Ideal for small traders and freelancers. Quick to set up with minimal compliance requirements.",
    color: "#02BC6B",
  },
];

const TypesOfCompanyReg = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    {companyTypes.map(({ icon: Icon, title, short, description, link, color }) => (
      <div key={title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col hover:shadow-md transition-shadow group">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${color}15` }}>
            <Icon size={20} style={{ color }} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-sm leading-tight">{title}</h3>
            <span className="text-xs text-gray-400">{short}</span>
          </div>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed flex-1">{description}</p>
        {link && (
          <Link
            to={link}
            className="mt-4 text-sm font-medium text-[#005C9D] hover:text-blue-700 flex items-center gap-1 w-fit"
          >
            View details →
          </Link>
        )}
      </div>
    ))}
  </div>
);

export default TypesOfCompanyReg;
