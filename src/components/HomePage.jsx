import React from 'react'
import HeroSlider from './HeroSlider/HeroSlider'
import ServiceCenter from './ServiceCenter/ServiceCenter'
import ClientNumber from './ClientSection/ClientSection'
import WhyChooseUs from './WhyChooseUs/WhyChooseUs'
import ServicesSection from './ServicesSection/ServicesSection'

const HomePage = () => {
    return (
        <>
            <HeroSlider />
            <ServiceCenter />
            <ClientNumber />
            <WhyChooseUs />
            <ServicesSection />
        </>
    )
}

export default HomePage