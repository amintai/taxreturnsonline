const headers = ["Feature", "Pvt. Ltd.", "OPC", "LLP", "Partnership", "Proprietorship"];

const rows = [
  { category: "Governing Act", data: ["Companies Act, 2013", "Companies Act, 2013", "LLP Act, 2008", "Partnership Act, 1932", "No specific Act"] },
  { category: "Registration", data: ["Mandatory", "Mandatory", "Mandatory", "Optional", "Not required"] },
  { category: "Min. Members", data: ["2", "1", "2", "2", "1"] },
  { category: "Min. Directors", data: ["2", "1", "2 (Designated)", "2+", "1"] },
  { category: "Separate Legal Entity", data: ["Yes", "Yes", "Yes", "No", "No"] },
  { category: "Liability", data: ["Limited", "Limited", "Limited", "Unlimited", "Unlimited"] },
  { category: "Statutory Audit", data: ["Mandatory", "Mandatory", "Conditional", "Not required", "Not required"] },
];

const ComparisonTable = () => (
  <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
    <table className="w-full text-sm text-left">
      <thead>
        <tr className="bg-[#005C9D] text-white">
          {headers.map((h, i) => (
            <th key={i} className={`px-5 py-3 font-semibold whitespace-nowrap ${i === 0 ? "rounded-tl-2xl" : ""} ${i === headers.length - 1 ? "rounded-tr-2xl" : ""}`}>
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(({ category, data }, ri) => (
          <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50"}>
            <td className="px-5 py-3 font-medium text-gray-900 whitespace-nowrap">{category}</td>
            {data.map((cell, ci) => (
              <td key={ci} className="px-5 py-3 text-gray-600">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ComparisonTable;
