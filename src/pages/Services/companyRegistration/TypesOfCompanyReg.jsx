
const TypesOfCompanyReg = () => {
  const companyTypes = [
    {
      id: 1,
      title: "Private Limited Company (Pvt. Ltd)",
      image: "/lovable-uploads/c4c3a231-8f6c-4dd1-8115-aa8f64b82969.png",
      description: "Private company registration refers to the process of registering a company Under Sec 25, subsection 1(a) of the company registration Act 1956. In this process, there must be at least two members who will be registering the company, they may be the owner or the representative on behalf of the company.",
      icon: "🏢",
    },
    {
      id: 2,
      title: "Limited Liability Partnership (LLP)",
      description: "Limited Liability Partnership registration refers to the registration of a partnership firm under the Limited Liability Partnership Act 2008. The major point in LLP is every partner have limited liability but not several.",
      icon: "🤝",
    },
    {
      id: 3,
      title: "One Person Company (OPC)",
      description: "In this the ownership of the company is only limited to one person. One person Company registration also comes under the Companies Act 1956.",
      icon: "👤",
    },
    {
      id: 4,
      title: "Section 8 - NGO Registration",
      description: "Section 8 companies are registered for promoting commerce, art, science, sports, education, research, social welfare, religion, charity, protection of environment or any such other object.",
      icon: "🌱",
    },
    {
      id: 5,
      title: "Public Limited Company",
      description: "A public limited company is a company that offers shares to the general public and has limited liability. Its stock can be acquired by anyone and shares are traded freely on the open market.",
      icon: "🏭",
    },
    {
      id: 6,
      title: "Business Registration License",
      description: "Register and get your license with Online Legal India to establish your business legally and operate within the framework of the law.",
      icon: "📝",
    },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Types of Company Registrations</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companyTypes.map((company) => (
            <div key={company.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
              {/* Card Header/Image Area */}
              <div className="h-48 bg-gradient-to-r from-blue-800 to-blue-600 relative flex items-center justify-center">
                <h3 className="text-white text-center text-xl font-bold px-4">
                  {company.title.split(' ').slice(0, 3).join(' ').toUpperCase()}
                  <br />
                  {company.title.includes('Registration') ? 'REGISTRATION' : 'COMPANY REGISTRATION'}
                </h3>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-2">{company.icon}</span>
                  <h4 className="text-lg font-semibold">{company.title}</h4>
                </div>
                <p className="text-gray-600 text-sm mb-6">{company.description}</p>
                <div className="text-center">
                  <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors">
                    VIEW DETAILS
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TypesOfCompanyReg;
