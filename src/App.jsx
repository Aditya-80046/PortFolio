import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  return (
    <div>
      <Navbar/>
      <div className="container">
      <Home/>
      </div>
    </div>
  ) 
}

export default App
