const RequiredDocuments = () => {
  const documents = [
    {
      number: "01",
      title: "PAN Card",
      icon: "🪪",
      description: "PAN card of all partners/designated partners",
    },
    {
      number: "02",
      title: "Aadhaar Card",
      icon: "📇",
      description: "Aadhaar of all Indian partners",
    },
    {
      number: "03",
      title: "Passport-size Photo",
      icon: "🖼️",
      description: "Latest photo of each partner",
    },
    {
      number: "04",
      title: "Address Proof",
      icon: "🏠",
      description: "Bank statement, electricity bill, or mobile bill (not older than 2 months)",
    },
    {
      number: "05",
      title: "Business Address Proof",
      icon: "📍",
      description: "Electricity bill or rent agreement of the office premises",
    },
    {
      number: "06",
      title: "NOC from Property Owner",
      icon: "📄",
      description: "No Objection Certificate from landlord if rented",
    },
  ];

  return (
    <section className="mb-12 max-w-5xl mx-auto px-4 py-8 rounded-lg">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-10">
        Documents Required for LLP Registration
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {documents.map((doc, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-5xl mb-4">{doc.icon}</div>
            <h3 className="text-4xl font-bold text-gray-500 mb-2">{doc.number}</h3>
            <p className="text-lg text-gray-700 text-center">{doc.title}</p>
            {doc.description && (
              <p className="text-sm text-gray-500 text-center">{doc.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default RequiredDocuments;
