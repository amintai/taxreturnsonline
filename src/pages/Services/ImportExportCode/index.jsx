import React from 'react'
import ApplicationForm from './components/ApplicationForm'
import IecFaq from './components/IecFaq'
import DocumentRequired from './components/Documents'
import IecBenefits from './components/IceBenifits'

const ImportExportCode = () => {
    return (
        <>
            <div className="min-h-screen py-8 bg-gray-50">
                <div className='container mx-auto px-4'>
                    <a
                        href="/our-offerings"
                        className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        Back to Services
                    </a>
                    <div className="text-center py-8 px-4">
                        <h1 className="text-2xl md:text-3xl font-bold mb-2">
                            Apply for Import Export Code (IEC) Online with the help of Online Legal India.
                        </h1>
                        <div className="w-32 h-1 bg-green-500 mx-auto mt-2"></div>

                        <div className="w-24 h-1 bg-iec-green mx-auto mb-4"></div>
                        <p className="text-sm md:text-base max-w-4xl mx-auto text-gray-700">
                            Register your import export business under Directorate General of Foreign Trade, Ministry of Commerce and Industry, Govt. of India. IEC export of Online Legal India™ will file with the DGFT office on your behalf.
                        </p>
                    </div>

                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row gap-8">
                            <div className="lg:w-1/2">
                                <ApplicationForm />
                            </div>

                            <div className="lg:w-1/2">
                                <IecFaq />
                            </div>
                        </div>

                        <DocumentRequired />
                        <IecBenefits />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImportExportCode
