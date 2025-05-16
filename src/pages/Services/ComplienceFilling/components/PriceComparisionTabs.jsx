const PriceComparisonTabs = ({ companyTypes, activeTab, onTabChange }) => {
  return (
    <div className="flex flex-wrap w-full mb-6">
      {companyTypes.map((company) => (
        <button
          key={company.id}
          onClick={() => onTabChange(company.id)}
          className={`
            "px-4 py-3 text-sm sm:text-base font-medium transition-all duration-200 border-b-2",
            "flex-1 min-w-[180px] sm:min-w-0",
            ${activeTab === company.id}
              ? "bg-green-600 text-white border-green-700"
              : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
          `}
        >
          {company.name}
        </button>
      ))}
    </div>
  );
};

export default PriceComparisonTabs;
