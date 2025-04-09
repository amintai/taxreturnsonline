import { FileText, CreditCard, User, FileCheck, Building, FileSpreadsheet } from "lucide-react";

const DocumentRequired = () => {
    const documents = [
        {
            icon: <User className="w-12 h-12 text-iec-blue" />,
            title: "Two Colour Photographs of Person/Individual/ Company Director",
            image: '/images/services/passport-size.jpeg'
        },
        {
            icon: <CreditCard className="w-12 h-12 text-iec-blue" />,
            title: "PAN Card of firm/ directors/partners and directors",
            image: '/images/services/pan-card.jpeg'
        },
        {
            icon: <FileText className="w-12 h-12 text-iec-blue" />,
            title: "Identity Proof (Voter ID/ Driving License/ Passport)",
            image: '/images/services/voter-id-card.jpeg'
        },
        {
            icon: <FileCheck className="w-12 h-12 text-iec-blue" />,
            title: "Address Proof (Bank Statement/ Electricity, Mobile, Telephone Bill)",
            image: '/images/services/passbook.jpeg'
        },
        {
            icon: <Building className="w-12 h-12 text-iec-blue" />,
            title: "Proof of Registered Office",
            image: '/images/services/office-proof.jpeg'
        },
        {
            icon: <FileSpreadsheet className="w-12 h-12 text-iec-blue" />,
            title: "Utility Bill as proof must be Latest",
            image: '/images/services/itr-service.jpeg'
        }
    ];

    return (
        <div className="my-12">
            <h2 className="text-xl font-semibold text-center mb-10 relative">
                Document Required
                <div className="w-16 h-1 bg-orange-500 mx-auto mt-2"></div>

                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-iec-green mt-2"></span>
            </h2>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-8 max-w-4xl mx-auto mt-8">
                {documents.map((doc, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 border-2 border-iec-blue rounded-full overflow-hidden flex items-center justify-center mb-3">
                            <img src={doc.image} alt={doc.title} className="w-full h-full object-cover" />
                        </div>
                        <p className="text-sm">{doc.title}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default DocumentRequired;