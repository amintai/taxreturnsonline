const caExperts = [
  {
    name: "CA Almas Tai",
    role: "Senior Chartered Accountant",
    photo: "/images/experts/almas-tai.jpg",
    bio: "Over 5+ years of experience in tax planning and corporate compliance. Passionate about helping startups grow sustainably.",
    quote:
      "Accuracy and timely compliance can save your business from costly penalties.",
  },
  {
    name: "CA Sabina Tai",
    role: "Tax Consultant",
    photo: "/images/experts/sabina-tai.jpg",
    bio: "Specializes in individual and small business tax filings with a client-centric approach.",
    quote: "Your financial peace of mind is our priority.",
  },
  // Add more experts here
];

export default function CAExpertsSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">
        Meet Our CA Experts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caExperts.map((expert) => (
          <div
            key={expert.name}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center h-full"
          >
            <img
              src={expert.photo}
              alt={expert.name}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-800">
              {expert.name}
            </h3>
            <p className="text-sm italic text-gray-500 mb-2">{expert.role}</p>
            <p className="text-gray-700 flex-grow">{expert.bio}</p>

            {/* Quote aligned at bottom */}
            <blockquote className="text-blue-600 italic border-l-4 border-blue-300 pl-4 mt-6 self-stretch">
              "{expert.quote}"
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
}
