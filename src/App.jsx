import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import HomePage from './components/HomePage'
import Services from './components/ServicesPage/Services/Services'

function App() {
  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
        </Routes>
    </>
  )
}

export default App
