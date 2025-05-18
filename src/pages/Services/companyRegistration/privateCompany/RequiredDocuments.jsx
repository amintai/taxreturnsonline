const RequiredDocuments = () => {
  const documents = [
    {
      number: "01",
      title: "PAN Card",
      icon: "🪪",
      description: "PAN card of all directors/shareholders",
    },
    {
      number: "02",
      title: "Aadhaar Card",
      icon: "📇",
      description: "Aadhaar of all directors/shareholders",
    },
    {
      number: "03",
      title: "Passport-size Photo",
      icon: "🖼️",
      description: "Latest passport photo of each director",
    },
    {
      number: "04",
      title: "Address Proof",
      icon: "🏠",
      description: "Electricity bill, rent agreement, or bank statement",
    },
    {
      number: "05",
      title: "Business Address Proof",
      icon: "📍",
      description: "Utility bill not older than 2 months",
    },
    {
      number: "06",
      title: "No Objection Certificate (NOC)",
      icon: "📄",
      description: "If the business address is rented",
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-10">
        Required Document
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {documents.map((doc, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-5xl mb-4">{doc.icon}</div>
            <h3 className="text-4xl font-bold text-gray-500 mb-2">
              {doc.number}
            </h3>
            <p className="text-lg text-gray-700 text-center">{doc.title}</p>
            {doc.description && (
              <p className="text-sm text-gray-500 text-center">
                {doc.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default RequiredDocuments;
