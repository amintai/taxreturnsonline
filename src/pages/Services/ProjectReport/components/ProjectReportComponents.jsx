import React from "react";
import { CheckCheck } from "lucide-react";

const reportComponents = [
  {
    title: "Introductory page",
    description: "The introductory page will disclose the introduction of a new business you are about to start or have started. The aim of the business will be included in the introductory part."
  },
  {
    title: "Summary of the Project",
    description: "This part includes the overall status of the business, time consumed to reach the goal, overall status, budget, and expected profit."
  },
  {
    title: "Scope of the Project",
    description: "This part of the project report contains the scope of the business, the percentage of work you have completed, and the remaining to be completed. Thus, a quick overview of the next steps of planning is to be mentioned."
  },
  {
    title: "Details of Promoters",
    description: "Details of the promoters need to be included in this part where the report will contain the planning of the project or business promotion, qualification of the promoters, work experience, process related experience and more."
  },
  {
    title: "Details of Employees",
    description: "The entire details of the employees, educational qualifications, professional training details, professional experience, managerial experience, and more are included in this section."
  }
];

const ProjectReportComponents = () => {
  return (
    <div className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Components of <span className="text-orange-500">Project Report</span>
          <div className="h-1 w-32 bg-green-500 mx-auto mt-2"></div>
        </h2>
        
        <p className="text-center mb-12 font-medium text-lg">
          Here are the most essential components of a project report
        </p>
        
        <div className="max-w-4xl mx-auto">
          {reportComponents.map((component, index) => (
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
        </div>
      </div>
    </div>
  );
};

export default ProjectReportComponents;