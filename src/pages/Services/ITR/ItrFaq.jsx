import { Accordion, AccordionItem } from "@szhsin/react-accordion";

const ItrFaq = () => {
  return (
    <div className="max-w-md mx-auto">
      <div className="space-y-2">
        <Accordion className="mt-8">

          <div className="mb-2 bg-primary text-white p-3 rounded-t-md">
            <AccordionItem header="Who needs to file an ITR?" className="font-medium">
              Any individual whose income exceeds the basic exemption limit, or who wants to claim a refund, or has foreign assets, must file an ITR.
            </AccordionItem>
          </div>

          <div className="mb-2 bg-primary text-white p-3 rounded-t-md">
            <AccordionItem header="What documents are required for ITR filing?" className="font-medium">
              PAN, Aadhaar, salary slips, Form 16, investment proofs, and bank statements are typically needed.
            </AccordionItem>
          </div>

          <div className="mb-2 bg-primary text-white p-3 rounded-t-md">
            <AccordionItem header="Can I file ITR without Form 16?" className="font-medium">
              Yes, you can still file ITR using your salary details, bank statement, and other relevant documents.
            </AccordionItem>
          </div>

          <div className="mb-2 bg-primary text-white p-3 rounded-t-md">
            <AccordionItem header="What are the benefits of filing ITR?" className="font-medium">
              Legal compliance, smoother visa approvals, easy loan processing, and eligibility for refunds.
            </AccordionItem>
          </div>

          <div className="mb-2 bg-primary text-white p-3 rounded-t-md">
            <AccordionItem header="Is it mandatory to file ITR for zero income?" className="font-medium">
              No, it's not mandatory. But it may be useful for future loan or visa applications.
            </AccordionItem>
          </div>

        </Accordion>
      </div>
    </div>
  );
};

export default ItrFaq;
