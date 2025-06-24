import { useState } from 'react';
import Hero from './Components/Hero';
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';
import './App.css'
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {

  let styles = {textAlign : "center", width:"100%" , display:"block"}

  
  

  return (
    <>
      <div >
        
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
       <Footer /> 
        
      </div>
        
      
    </>
  )
}

export default App
