import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {


  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>Abhilash </h3>
          <p>Full Stack Developer</p>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <a href="https://github.com/AbhilashMundepi" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://WWW.linkedin.com/in/abhilash-mundepi-9b1443208?utm_source=share&utm_campaign=share_via&content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:your@email.com">Email</a>
        </div>
      </div>

      <div className="footer-bottom">
        <hr />
        <p>© {new Date().getFullYear()} Abhilash.  All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;



