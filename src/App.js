import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SkyBackground from './components/SkyBackground';

function App() {
  return (
    <SkyBackground>
      <Navbar />
    </SkyBackground>
  );
}

export default App;
