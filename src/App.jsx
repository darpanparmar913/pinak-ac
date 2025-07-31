import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import HomePage from './components/HomePage'
import Services from './components/ServicesPage/Services/Services'
import FooterSection from './components/FooterSection/FooterSection'
import ServiceTable from './components/ServicesPage/ServiceTable/ServiceTable'

function App() {
  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service-list-table" element={<ServiceTable />} />
        </Routes>
        <FooterSection />
    </>
  )
}

export default App
