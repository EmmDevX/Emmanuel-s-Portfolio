import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SkyBackground from './components/SkyBackground';

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <SkyBackground>
      <div 
        className="cursor-follower"
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Stats />
      <Contact />
      <Footer />
    </SkyBackground>
  );
}

export default App;
