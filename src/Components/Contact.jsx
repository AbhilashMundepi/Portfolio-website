import React from "react";
import "../Styles/Contact.css"

const  Contact = () =>{

    return (
        <div className="contact-container" id="contact">
        <h2>Get in Touch</h2>
        <p>Feel free to reach out to  me on social media or via email.</p>
        <div className="social-links">
            <a href="https://WWW.linkedin.com/in/abhilash-mundepi-9b1443208?utm_source=share&utm_campaign=share_via&content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="linkedin" >
            LinkedIn
            </a>
            <a href="https://github.com/AbhilashMundepi" target="_blank" rel="noopener noreferrer" className="github">
            Github
            </a>
            <a href="mailto:abhilashmundepi895@gmail.com" className="email">Email</a>
        </div>
        </div>
    )
}

export default Contact;