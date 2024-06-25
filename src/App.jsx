import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skill from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import AOS from "aos"
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <Navbar/>
      <div className="container">
      <Home/>
      <Skill/>
      <Projects/>
      <Contact/>
      </div>
    </div>
  ) 
}

export default App
