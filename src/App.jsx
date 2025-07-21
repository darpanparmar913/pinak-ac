import './App.css'
import ClientNumber from './components/clientNumber/clientNumber'
import FooterSection from './components/FooterSection/FooterSection'
import Header from './components/Header/Header'
import HeroSlider from './components/HeroSlider/HeroSlider'
import ServiceCenter from './components/ServiceCenter/ServiceCenter'
import ServicesSection from './components/ServicesSection/ServicesSection'
import TeamSlider from './components/TeamSection/TeamSection'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'

function App() {
  return (
    <>
      <Header />
      <HeroSlider />
      <ServiceCenter />
      <ClientNumber />
      <WhyChooseUs />
      <ServicesSection />
      <TeamSlider />
      <FooterSection />
    </>
  )
}

export default App
