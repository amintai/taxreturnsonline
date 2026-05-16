const steps = [
  { num: "01", title: "Digital Signature Certificate (DSC)", desc: "Obtained for all proposed directors. Required to sign MCA forms electronically." },
  { num: "02", title: "Director Identification Number (DIN)", desc: "Unique ID allotted to each director by the Ministry of Corporate Affairs." },
  { num: "03", title: "Name Reservation on MCA Portal", desc: "Proposed company name is checked for availability and reserved via RUN (Reserve Unique Name)." },
  { num: "04", title: "Certificate of Incorporation", desc: "SPICe+ form filed with MCA. On approval, CIN, PAN, TAN, and Certificate of Incorporation are issued." },
];

const CompanyRegistrationInfo = () => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 max-w-4xl mx-auto">
    <h2 className="text-2xl font-bold text-gray-900 mb-1">How We Register Your Company</h2>
    <p className="text-gray-500 text-sm mb-8">A simple 4-step process  we handle everything end-to-end</p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {steps.map(({ num, title, desc }) => (
        <div key={num} className="flex gap-4">
          <div className="text-3xl font-black text-gray-100 select-none w-10 shrink-0 leading-none mt-1">{num}</div>
          <div>
            <h4 className="font-semibold text-gray-900 text-sm mb-1">{title}</h4>
            <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default CompanyRegistrationInfo;
