import {
  Cloud,
  FileText,
  ShieldCheck,
  BookOpen,
  Users,
  DollarSign,
  MapPin,
  Phone,
  Globe,
} from 'lucide-react';

const benefits = [
  { icon: Cloud, title: 'Cloud-based Accounting System' },
  { icon: FileText, title: 'Bank Reconciliation Statement' },
  { icon: BookOpen, title: 'Maintenance for the Detailed Record' },
  { icon: FileText, title: 'Record keeping of all Financial Transactions' },
  { icon: Globe, title: 'Digital Access from any Location' },
  { icon: ShieldCheck, title: 'Security for Financial Records' },
  { icon: Users, title: 'Free Consultations – Readily available!' },
  { icon: Phone, title: 'Call, E-mail, Chat support' },
  { icon: DollarSign, title: 'Recommendable service at an unbeatable price' },
];

const BenefitsGrid = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          Benefits of Managing Bookkeeping from Online Legal India
        </h2>
        <div className="w-20 h-1 bg-green-500 mx-auto mb-8 rounded"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
          {benefits.map(({ icon: Icon, title }, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 rounded-md shadow-sm hover:shadow-md transition bg-gray-50 text-left"
            >
              <div className="flex-shrink-0 bg-green-100 p-2 rounded-full flex items-center justify-center">
                <Icon className="w-6 h-6 text-green-500" />
              </div>
              <p className="text-sm font-medium text-gray-800 leading-snug">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;
