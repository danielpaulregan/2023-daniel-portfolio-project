import React from "react";
const styles = require('./css/Navbar.css');
        
export function Navbar() {
    return(
        <nav>
          <ul id="navigationBar" className="text-center outline outline-3">
            <a href="/#top"><li>Home</li></a>
            <a href="/about"><li>About</li></a>
            <a href="/projects"><li>Projects</li></a>
            <a href="/contact"><li>Get in Touch</li></a>
          </ul>    
        </nav>
    );
}