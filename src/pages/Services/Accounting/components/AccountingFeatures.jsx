import { Briefcase, Receipt, PieChart, FileText, Users, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Briefcase,
    title: 'Bookkeeping',
    description: 'Accurate daily records, bank reconciliations, and ledger management  so your books are always clean.',
    color: '#005C9D',
  },
  {
    icon: Receipt,
    title: 'GST & TDS Compliance',
    description: 'On-time GST return filing, TDS computation, and end-to-end support for all indirect tax obligations.',
    color: '#02BC6B',
  },
  {
    icon: PieChart,
    title: 'Financial Reporting',
    description: 'Monthly P&L, balance sheets, cash flow statements, and MIS reports for informed decision-making.',
    color: '#005C9D',
  },
  {
    icon: Users,
    title: 'Payroll Management',
    description: 'Accurate salary processing, PF, ESI, and professional tax compliance handled every month.',
    color: '#02BC6B',
  },
  {
    icon: FileText,
    title: 'ROC & Company Compliance',
    description: 'Annual filings, board resolutions, and statutory registers maintained as per Companies Act.',
    color: '#005C9D',
  },
  {
    icon: ShieldCheck,
    title: 'Audit Support',
    description: 'Organised, audit-ready books and full support during statutory, tax, or internal audits.',
    color: '#02BC6B',
  },
];

const AccountingFeatures = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    {features.map(({ icon: Icon, title, description, color }, i) => (
      <div
        key={i}
        className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow group"
      >
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
          style={{ backgroundColor: `${color}15` }}
        >
          <Icon size={22} style={{ color }} />
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      </div>
    ))}
  </div>
);

export default AccountingFeatures;
