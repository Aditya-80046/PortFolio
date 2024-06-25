import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skill from './components/Skills'

function App() {
  return (
    <div>
      <Navbar/>
      <div className="container">
      <Home/>
      <Skill/>
      </div>
    </div>
  ) 
}

export default App
