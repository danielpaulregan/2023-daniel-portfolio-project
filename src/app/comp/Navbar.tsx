import React from "react";
const styles = require('./css/Navbar.css');
        
export function Navbar() {
    return(
        <nav>
          <ul id="navigationBar" className="text-center outline outline-3">
            <a href="/#top" id="home"><li>Home</li></a>
            <a href="/about" id="about"><li>About</li></a>
            <a href="/projects" id="projects"><li>Projects</li></a>
          </ul>    
        </nav>
    );
}