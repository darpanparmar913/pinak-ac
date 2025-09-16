import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import HomePage from './components/HomePage'
import Services from './components/ServicesPage/Services/Services'
import FooterSection from './components/FooterSection/FooterSection'
import ServiceTable from './components/ServicesPage/ServiceTable/ServiceTable'
import OurServicePage from './components/OurServicePage/OurServicePage'
import ContactUsPage from './components/ContactUsPage/ContactUsPage'

function App() {
  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service-list-pinak-8312" element={<ServiceTable />} />
          <Route path="/our-service" element={<OurServicePage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
        <FooterSection />
    </>
  )
}

export default App
