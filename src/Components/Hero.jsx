import React from "react";
import { useState } from "react";
import "../Styles/Hero.css";
import Projects from "./Projects";

export default function Hero() {
   
      const [isOpen , setIsOpen] = useState(false);
     
    const toggleMenu = () =>setIsOpen(!isOpen);
     
    return (
        <section className="hero">
            <div className="hero-content">
                <img src="/Abhilash.jpg" alt="Profile" className="hero-image" />
                <h1> Hi, I,m <span className="highlight">Abhilash</span></h1>
                <p className="subtitle">Mechanical Engineer | MERN Stack Devloper | AI/ML Enthusiast</p>
                <a href="#projects" className="cta-button" onClick={toggleMenu} >View My Projects</a>
            </div>

        </section>
    );
}