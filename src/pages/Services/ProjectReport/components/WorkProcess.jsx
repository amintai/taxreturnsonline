import React from "react";

const steps = [
  {
    number: "01",
    title: "Our executive calls and collects documents"
  },
  {
    number: "02",
    title: "Pay the recommended fees"
  },
  {
    number: "03",
    title: "Scope of the Project Presentation"
  },
  {
    number: "04",
    title: "Preparing Perfect Project Report by CA/CS"
  },
  {
    number: "05",
    title: "Congratulations! Your Project Report Is Ready to Submit!"
  }
];

const WorkProcess = () => {
  return (
    <div className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How We Work?
          <div className="h-1 w-32 bg-blue-800 mx-auto mt-2"></div>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {steps.slice(0, 4).map((step, index) => (
            <div key={index} className="w-full md:w-64 relative">
              <div className="border border-gray-200 rounded-lg p-6 bg-white h-full flex flex-col items-center justify-center text-center">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-800 text-white w-12 h-12 flex items-center justify-center rounded-full">
                    <span className="font-bold">{step.number}</span>
                  </div>
                </div>
                <h3 className="text-base font-semibold mt-4">{step.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <div className="w-full md:w-64 relative">
            <div className="border border-gray-200 rounded-lg p-6 bg-white h-full flex flex-col items-center justify-center text-center">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-blue-800 text-white w-12 h-12 flex items-center justify-center rounded-full">
                  <span className="font-bold">{steps[4].number}</span>
                </div>
              </div>
              <h3 className="text-base font-semibold mt-4">{steps[4].title}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;