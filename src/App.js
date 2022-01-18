import React from 'react'
import './styles/App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import HowTo from './components/HowTo'
import Faq from './components/Faq'
import Contact from './components/Contact'


const App = () => {
  return (

    <div className="container">
      
      <Navbar />

      <Home />

      <About />
      
      <HowTo />
      
      <Faq />

      <Contact />

    </div>
  )
}

export default App
