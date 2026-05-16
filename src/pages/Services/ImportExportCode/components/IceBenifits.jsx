import { Globe, Award, ShieldCheck, DollarSign, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Globe,
    title: 'International Market Access',
    description: 'IEC opens the door to global trade  import goods from anywhere or export your products worldwide, legally and seamlessly.',
    color: '#005C9D',
  },
  {
    icon: Award,
    title: 'Niryat Bandhu Scheme',
    description: "Registered IEC holders can benefit from DGFT's Niryat Bandhu scheme  government support, training, and certification for exporters and importers.",
    color: '#02BC6B',
  },
  {
    icon: ShieldCheck,
    title: 'Prevents Illegal Trade',
    description: 'IEC helps customs authorities track and control cross-border transactions, protecting your business from fraudulent or illegal trade activities.',
    color: '#005C9D',
  },
  {
    icon: DollarSign,
    title: 'Government Subsidies & Benefits',
    description: 'IEC-registered businesses can avail export incentives, duty drawbacks, and subsidies from Customs, Export Promotion Councils, and DGFT.',
    color: '#02BC6B',
  },
  {
    icon: TrendingUp,
    title: 'Lifetime Validity',
    description: 'Unlike most registrations, IEC has lifetime validity with no annual renewal required  register once and trade forever.',
    color: '#005C9D',
  },
];

const IecBenefits = () => (
  <div>
    <div className="text-center mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Benefits of IEC Registration</h2>
      <p className="text-gray-500 mt-2 text-sm">Why every import/export business needs an IEC</p>
      <div className="w-12 h-1 bg-green-500 mx-auto mt-3" />
    </div>

    <div className="flex flex-col lg:flex-row gap-8 items-start max-w-5xl mx-auto">
      <div className="lg:w-56 shrink-0">
        <img
          src="/images/services/logistic-iec.jpeg"
          alt="Import Export Logistics"
          className="w-full rounded-2xl object-cover shadow-md"
          style={{ maxHeight: '320px' }}
          loading="lazy"
        />
      </div>
      <div className="flex-1 space-y-4">
        {benefits.map(({ icon: Icon, title, description, color }) => (
          <div key={title} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex gap-4 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${color}15` }}>
              <Icon size={20} style={{ color }} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm mb-1">{title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default IecBenefits;
