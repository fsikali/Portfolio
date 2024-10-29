import React from 'react'; 

const Header = () => { 
    function toggleMenu() {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-links"); 
        menu.classList.toggle("open");
        menu.classList.toggle("open");

    }

    return ( 
        <div>
        <nav id="nav-container">
            <div className="logo">Flemming Sikali</div>
            <div> 
                <ul className="nav-link">
                    <li><a href="#about">About</a></li> 
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contacts">Contact</a></li>
                </ul>
            </div>
        </nav> 

        <nav id="hamburger-nav">
            <div className="logo">Flemming Sikali</div>
            <div className="hamburger-menu">
                <div className="hamburger-icon " onclick="toggleMenu()"> 
                    <span></span> 
                    <span></span> 
                    <span></span>
                </div>
                <div className="menu-links">
                    <li><a href="#about" onclick="toggleMenu()">About</a></li> 
                    <li><a href="#experience" onclick="toggleMenu()">Experience</a></li>
                    <li><a href="#projects" onclick="toggleMenu()">Projects</a></li>
                    <li><a href="#contacts" onclick="toggleMenu()">Contact</a></li>
                </div>
            </div> 
        </nav> 
        </div>
    )
} 

export default Header 

