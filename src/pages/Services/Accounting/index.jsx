import React from 'react';
import AccountingHero from './components/AccountingHero';
import AccountingFeatures from './components/AccountingFeatures';
import AccountingFaq from './components/AccountingFaq';
import AccountingCta from './components/AccountingCta';

const AccountingServices = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                <a
                    href="/our-services"
                    className="flex items-center text-blue-800 hover:text-blue-800 mb-6"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            fillRule="evenodd"
                            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Back to Services
                </a>

                <AccountingHero />
                <AccountingFeatures />
                <AccountingFaq />
                <AccountingCta />
            </div>
        </div>
    );
};

export default AccountingServices;
