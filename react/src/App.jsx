import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/home'
import Event from './pages/Event'
import More from './pages/More'
import Map from './pages/Map'
import LanguageSwitcher from "./components/LanguageSwitcher";

import { BrowserRouter as Router, Route, Routes } from 'react-router'

import LogoBlack from './assets/LogoBlack.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar />
        <LanguageSwitcher />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Event />} />
          <Route path="/more" element={<More />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </Router>
      
      
    </>
  )
}

export default App
