import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [displayText, setDisplayText] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const fullText = 'Emmanuel';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="images/favicon.png" alt="Logo" className="navbar-logo" />
        <h1>{displayText}<span className="cursor">.</span></h1>
      </div>
      
      {/* Hamburger Menu Button */}
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        <span className="hamburger">☰ </span>
      </button>

      {/* Navigation Links */}
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About Me</a></li>
        <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
                <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
        <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        
        <li className="mobile-talk-item">
          <a href="https://wa.me/+2347025183733" className="lets-talk-btn" onClick={() => setIsMenuOpen(false)}>
            Let's Talk
          </a>
        </li>
      </ul>

      {/* Desktop Let's Talk Button */}
      <a href="https://wa.me/+2347025183733" className="lets-talk-btn desktop-btn">Let's Talk</a>
    </nav>
  );
}

export default Navbar;