import { Accordion, AccordionItem } from "@szhsin/react-accordion";

const IecFaq = () => {
    return (
        <div className="max-w-md mx-auto">
            <div className="space-y-2">
                <Accordion className="mt-8">
                    <div className="mb-2 bg-primary text-white p-3 rounded-t-md">
                        <AccordionItem header="What is Import Export Code (IEC)?" className="font-medium">
                            Import Export Code (IEC) is a key business identification number that is mandatory for export from India or import to India. The Directorate General of Foreign Trade (DGFT) issues it.
                        </AccordionItem>
                    </div>

                    <div className="mb-2 bg-primary text-white p-3 rounded-t-md">
                        <AccordionItem header="When is IEC code required?" className="font-medium">
                            An IEC is required when a person or business wants to export or import goods. It's a prerequisite for anyone wanting to start import/export activities in India.
                        </AccordionItem>
                    </div>

                    <div className="mb-2 bg-primary text-white p-3 rounded-t-md">
                        <AccordionItem header="Fees" className="font-medium">
                            The government fee for IEC registration is minimal. However, professional service charges may apply if you use a consultant for the application process.
                        </AccordionItem>
                    </div>

                    <div className="mb-2 bg-primary text-white p-3 rounded-t-md">
                        <AccordionItem header="Who can apply for IEC Code?" className="font-medium">
                            Any business entity such as companies, partnerships, proprietorships, HUFs, trusts, NGOs, and individuals interested in importing or exporting can apply for an IEC.
                        </AccordionItem>
                    </div>

                    <div className="mb-2 bg-primary text-white p-3 rounded-t-md">
                        <AccordionItem header="IEC Certificate Sample" className="font-medium">
                            A sample IEC certificate can be viewed on our website to understand the format and information contained in it.
                        </AccordionItem>
                    </div>

                </Accordion>
            </div>
        </div>
    );
};

export default IecFaq;