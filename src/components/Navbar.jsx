import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [displayText, setDisplayText] = useState('');
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

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>{displayText}<span className="cursor">|</span></h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="https://wa.me/+2347025183733" className="lets-talk-btn">Let's Talk</a>
    </nav>
  );
}

export default Navbar;