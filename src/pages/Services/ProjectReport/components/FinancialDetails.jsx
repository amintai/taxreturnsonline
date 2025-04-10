import React from "react";
import { CheckCheck } from "lucide-react";

const financialComponents = [
  {
    title: "Means of Financing",
    description: "What would be the financial support of the company or business- partners, banks, or other investors?"
  },
  {
    title: "Balance Sheets",
    description: "The balance sheet will include where the capital is invested or spent. The entire expenditure and earnings will be mentioned in the balance sheet."
  },
  {
    title: "Profit and Loss Statements",
    description: "Apart from the balance sheet, you have to mention the profit gained from your project. You have to mention to the bank about the profit, and profit-gaining plans."
  },
  {
    title: "Break-Even Points Evaluations",
    description: "Give the evaluation of the entire project you are about to start or have started. Mention everything about your whole business."
  },
  {
    title: "Project Feasibility Ratio",
    description: "Deciding on the ratio of cost, discount and the possible revenue per sale, total sale, and possible damage during transport, etc. It can be presented in the form of a graph or pie chart by mentioning the period of continuation with the presentation of revenue and expenses. The project report should also continue the split-up graph."
  }
];

const financialRatios = [
  "Current ratio",
  "Quick ratio",
  "Debt equity ratio",
  "Interest coverage ratio",
  "Net Profit Sales Percentage",
  "Gross Profit Sales Percentage",
  "Return on Capital Employed",
  "Scope of the Project"
];

const projectScopeItems = [
  "Promoter(s) details",
  "Plant & machinery/equipment",
  "Product/services & process",
  "Manpower requirements",
  "Market Potential & Strategy",
  "Risks & Mitigation Strategy"
];

const FinancialDetails = () => {
  return (
    <div className="py-12 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {financialComponents.map((component, index) => (
            <div key={index} className="mb-8">
              <div className="flex items-start gap-2">
                <CheckCheck className="text-orange-500 mt-1 flex-shrink-0" size={22} />
                <div>
                  <h3 className="font-semibold text-xl mb-2">{component.title}</h3>
                  <p className="text-gray-700">{component.description}</p>
                </div>
              </div>
            </div>
          ))}
          
          <p className="mb-4 font-medium">On the graph, the following needs to be mentioned</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 mb-8">
            {financialRatios.map((ratio, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCheck className="text-orange-500 mt-1 flex-shrink-0" size={22} />
                <span className="text-gray-800">{ratio}</span>
              </div>
            ))}
          </div>
          
          <p className="mb-4 font-medium">The following topics must be included in the Scope of the Project</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 mb-8">
            {projectScopeItems.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCheck className="text-orange-500 mt-1 flex-shrink-0" size={22} />
                <span className="text-gray-800">{item}</span>
              </div>
            ))}
          </div>
          
          <p className="text-gray-800 mt-6">
            If you want to avoid the hazards of preparing a Project Report, contact us. You may make mistakes or do not have the technical expertise to form a Project Report. So, contact us and prepare it from an experienced CA/CS of Online Legal India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinancialDetails;