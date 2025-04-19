import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { ChevronDown, ChevronUp } from "lucide-react"; // Import arrows from lucide-react

const AccountingFaq = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 bg-indigo-50">
      <h2 className="text-3xl font-semibold text-center mb-3">
        Frequently Asked Questions
      </h2>
      <div className="w-24 h-1 bg-indigo-700 mx-auto mb-10"></div>

      <div className="space-y-6">
        <Accordion className="mt-8">
          <div className="mb-2 bg-indigo-700 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <AccordionItem
              header={
                <>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-lg">What does accounting service include?</span>
                    <ChevronDown className="w-5 h-5 text-white" />
                  </div>
                </>
              }
            >
              Accounting services typically include bookkeeping, financial statement preparation, tax computation, and ensuring regulatory compliance for your business.
            </AccordionItem>
          </div>

          <div className="mb-2 bg-indigo-700 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <AccordionItem
              header={
                <>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-lg">Why do startups and small businesses need accounting services?</span>
                    <ChevronDown className="w-5 h-5 text-white" />
                  </div>
                </>
              }
            >
              Professional accounting ensures accurate records, tax savings, and informed decision-making—freeing business owners to focus on growth.
            </AccordionItem>
          </div>

          <div className="mb-2 bg-indigo-700 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <AccordionItem
              header={
                <>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-lg">How often should bookkeeping be done?</span>
                    <ChevronDown className="w-5 h-5 text-white" />
                  </div>
                </>
              }
            >
              Ideally, bookkeeping should be done monthly to maintain accurate financial records and avoid last-minute tax hassles.
            </AccordionItem>
          </div>

          <div className="mb-2 bg-indigo-700 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <AccordionItem
              header={
                <>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-lg">Can accounting services help with GST and TDS compliance?</span>
                    <ChevronDown className="w-5 h-5 text-white" />
                  </div>
                </>
              }
            >
              Yes, our team helps you manage GST filing, TDS returns, and stay compliant with ever-evolving tax regulations.
            </AccordionItem>
          </div>

          <div className="bg-indigo-700 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <AccordionItem
              header={
                <>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-lg">Are online accounting services reliable?</span>
                    <ChevronDown className="w-5 h-5 text-white" />
                  </div>
                </>
              }
            >
              Absolutely. Online accounting services offer convenience, real-time access to your financials, and expert support—just like traditional CA firms.
            </AccordionItem>
          </div>
        </Accordion>
      </div>
    </div>
  );
};

export default AccountingFaq;
