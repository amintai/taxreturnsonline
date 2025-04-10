import React from 'react'
import HeroSection from './components/HeroSection'
import ProjectReportInfo from './components/ProjectReportInfo'
import MandatoryComponents from './components/MandatoryComponents'
import ProjectReportComponents from './components/ProjectReportComponents'
import InfrastructureList from './components/InfrasctuctureList'
import MarketingPlan from './components/MarketingPlan'
import FinancialDetails from './components/FinancialDetails'
import PackageSection from './components/PackageSection'
import WorkProcess from './components/WorkProcess'
import WhyUsSection from './components/WhyUsSection'

const ProjectReport = () => {
    return (
        <div>
            <HeroSection />
            <ProjectReportInfo />
            <MandatoryComponents />
            <ProjectReportComponents />
            <InfrastructureList />
            <MarketingPlan />
            <FinancialDetails />
            <PackageSection />
            <WorkProcess />
            <WhyUsSection />
        </div>
    )
}

export default ProjectReport
