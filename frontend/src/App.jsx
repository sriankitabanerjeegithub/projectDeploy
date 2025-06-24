// App.jsx
import React from 'react'
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Projects from "./components/projects";



const App = () => {
  return (
    <>
        <Navbar /> 
         <HeroSection />
         <Projects />
    </>
  )
}

export default App
