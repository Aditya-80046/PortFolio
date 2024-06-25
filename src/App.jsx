import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skill from './components/Skills'
import Projects from './components/Projects'

function App() {
  return (
    <div>
      <Navbar/>
      <div className="container">
      <Home/>
      <Skill/>
      <Projects/>
      </div>
    </div>
  ) 
}

export default App
