import React from "react";

const ComparisonTable = () => {
  const tableData = {
    headers: [
      "Business Type",
      "Private Limited Company",
      "One Person Company",
      "Limited Liability Partnership",
      "Partnership Firm",
      "Proprietorship Firm"
    ],
    rows: [
      {
        category: "Act",
        data: [
          "Companies Act, 2013",
          "Companies Act, 2013",
          "Limited Liability Partnership Act, 2008",
          "Indian Partnership Act, 1932",
          "No specified Act"
        ]
      },
      {
        category: "Registration Requirement",
        data: [
          "Mandatory",
          "Mandatory",
          "Mandatory",
          "Optional",
          "No"
        ]
      },
      {
        category: "Number of members",
        data: [
          "2 – 200",
          "Only 1",
          "2 – Unlimited",
          "2 – 50",
          "Only 1"
        ]
      },
      {
        category: "Number of Director/Partner",
        data: [
          "2 – 15",
          "Only 1",
          "2 – Unlimited",
          "2 – Unlimited",
          "Only 1"
        ]
      },
      {
        category: "Separate Legal Entity",
        data: [
          "Yes",
          "Yes",
          "Yes",
          "No",
          "No"
        ]
      },
      {
        category: "Liability Protection",
        data: [
          "Limited",
          "Limited",
          "Limited",
          "Unlimited",
          "Unlimited"
        ]
      },
      {
        category: "Statutory Audit",
        data: [
          "Mandatory",
          "Mandatory",
          "Dependent",
          "Not mandatory",
          "Not mandatory"
        ]
      }
    ]
  };

  return (
    <div className="w-full px-4 py-8 mx-auto max-w-7xl">
      <h1 className="mb-8 text-3xl font-bold text-center">Comparison</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                {tableData.headers.map((header, index) => (
                  <th 
                    key={index} 
                    scope="col" 
                    className={`px-6 py-3 ${index === 0 ? "bg-white" : index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="bg-white border-b hover:bg-gray-50">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {row.category}
                  </th>
                  {row.data.map((cell, cellIndex) => (
                    <td 
                      key={cellIndex} 
                      className={`px-6 py-4 ${cellIndex % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
