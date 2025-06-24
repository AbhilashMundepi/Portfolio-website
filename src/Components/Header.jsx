import { useState } from 'react';
import "../Styles/Header.css";
import About from './About';

export default function Header() {

    const [isOpen , setIsOpen] = useState(false);

    const toggleMenu = () =>setIsOpen(!isOpen);

    return (
        <header className="header">
            <div className="logo">Abhilash</div>

            {/*hamburger icon */}
            <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
               <span></span>
               <span></span>
               <span></span>
            </div>

            {/*Navigation */}

            <nav className={`nav ${isOpen ? 'active' :''}`}>
                <a href="#about" onClick={toggleMenu}>About </a>
                <a href="#projects" onClick={toggleMenu}>Projects</a>
                <a href="#contact" onClick={toggleMenu}>Contact</a>

            </nav>

        </header>
    )
}