import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/home'
import Event from './pages/Event'
import More from './pages/More'
import Map from './pages/Map'

import LogoBlack from './assets/LogoBlack.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <Map />
      <Event />
      <More />
      
      <img src={LogoBlack} alt="Logo" className="w-32 mx-auto my-4" />
    </>
  )
}

export default App
