const documents = [
  { title: "Passport-size Photograph", desc: "Of directors / partners / proprietor", image: "/images/services/passport-size.jpeg" },
  { title: "PAN Card", desc: "Of firm, directors, or partners", image: "/images/services/pan-card.jpeg" },
  { title: "Identity Proof", desc: "Voter ID / Driving Licence / Passport", image: "/images/services/voter-id-card.jpeg" },
  { title: "Electricity Bill", desc: "Latest utility bill of registered office", image: "/images/services/passbook.jpeg" },
  { title: "Proof of Registered Office", desc: "Ownership deed or rent agreement", image: "/images/services/office-proof.jpeg" },
  { title: "No Objection Certificate", desc: "From property owner if rented premises", image: "/images/services/itr-service.jpeg" },
];

const CompanyDocuments = () => (
  <div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">Documents Required</h3>
    <p className="text-gray-500 text-sm mb-5">Keep these ready before we begin</p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {documents.map(({ title, desc, image }) => (
        <div key={title} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col items-center text-center hover:shadow-md transition-shadow group">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-100 mb-3 group-hover:border-[#005C9D] transition-colors">
            <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
          </div>
          <h4 className="font-semibold text-gray-900 text-xs mb-1">{title}</h4>
          <p className="text-gray-400 text-xs">{desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default CompanyDocuments;
