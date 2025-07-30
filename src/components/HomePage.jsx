import React from 'react'
import HeroSlider from './HeroSlider/HeroSlider'
import ServiceCenter from './ServiceCenter/ServiceCenter'
import ClientNumber from './ClientSection/ClientSection'
import WhyChooseUs from './WhyChooseUs/WhyChooseUs'
import ServicesSection from './ServicesSection/ServicesSection'
import TeamSlider from './TeamSection/TeamSection'

const HomePage = () => {
    return (
        <>
            <HeroSlider />
            <ServiceCenter />
            <ClientNumber />
            <WhyChooseUs />
            <ServicesSection />
            <TeamSlider />
        </>
    )
}

export default HomePage