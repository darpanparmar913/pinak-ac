import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import HeroSlider from './components/HeroSlider/HeroSlider'
import ServiceCenter from './components/ServiceCenter/ServiceCenter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HeroSlider />
      <ServiceCenter />
    </>
  )
}

export default App
