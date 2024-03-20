import React, { useRef } from 'react'
import { BrowserRouter,Routes, Route,Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Tech from './components/Tech'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
const App = () => {
  return (
  <BrowserRouter>
    <Navbar/>
    <Hero />

      <div className='px-4'>
        <About />
        <Tech />
        <Projects/>
        <Contact />
      </div>
      
    <Footer />
  </BrowserRouter>
  )
}

export default App
