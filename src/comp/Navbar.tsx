import React from "react";
const styles = require('./css/Navbar.css');
        
export function Navbar() {
    return(
        <nav>
          <ul id="navigationBar" className="text-center">
            <a href="/" id="home"><li>Home</li></a>
            <a href="/about" id="about"><li>About</li></a>
            <a href="/projects" id="projects"><li>Projects</li></a>
          </ul>    
        </nav>
    );
}