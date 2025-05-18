const ComparisonTable = () => {
  const tableData = {
    headers: [
      "Private Limited Company",
      "One Person Company",
      "Limited Liability Partnership",
      "Partnership Firm",
      "Proprietorship Firm",
    ],
    rows: [
      ["Act", "Companies Act, 2013", "Companies Act, 2013", "Limited Liability Partnership Act, 2008", "Indian Partnership Act, 1932", "No specified Act"],
      ["Registration Requirement", "Mandatory", "Mandatory", "Mandatory", "Optional", "No"],
      ["Number of members", "2 – 200", "Only 1", "2 – Unlimited", "2 – 50", "Only 1"],
      ["Separate Legal Entity", "Yes", "Yes", "Yes", "No", "No"],
      ["Liability Protection", "Limited", "Limited", "Limited", "Unlimited", "Unlimited"],
      ["Statutory Audit", "Mandatory", "Mandatory", "Dependent", "Not mandatory", "Not mandatory"],
      ["Ownership Transfer ability", "Yes", "No", "Yes", "No", "No"],
      ["Uninterrupted Existence", "Yes", "Yes", "Yes", "No", "No"],
      ["Foreign Participation", "Allowed", "Not Allowed", "Allowed", "Not Allowed", "Not Allowed"],
      ["Tax Rates", "Moderate", "Moderate", "High", "High", "Low"],
      ["Statutory Compliance", "High", "Moderate", "Moderate", "Less", "Less"],
    ],
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-8 rounded-lg">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
        Comparison
      </h2>
      <table className="min-w-[800px] w-full table-auto border border-gray-300 text-sm md:text-base">
        <thead>
          <tr className="bg-green-100 text-gray-800">
            <th className="border border-gray-300 px-4 py-2 text-left">Criteria</th>
            {tableData.headers.map((header, i) => (
              <th key={i} className="border border-gray-300 px-4 py-2 text-left">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.rows.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="border border-gray-300 px-4 py-2 font-semibold">{row[0]}</td>
              {row.slice(1).map((cell, cellIndex) => (
                <td key={cellIndex} className="border border-gray-300 px-4 py-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ComparisonTable;
