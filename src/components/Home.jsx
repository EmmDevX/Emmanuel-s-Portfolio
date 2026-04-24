import React from 'react';
import './Home.css';

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1 className="home-title">Hi, I'm Emmanuel</h1>
        <p className="home-subtitle">A passionate developer creating amazing digital experiences</p>
        <p className="home-description">
          I specialize in building modern web applications with clean code and intuitive user interfaces.
          With a focus on performance and user experience, I bring ideas to life through creative solutions.
        </p>
        <a href="#" className="resume-button" target="_blank" rel="noopener noreferrer">
          View My Resume
        </a>
      </div>
    </section>
  );
}

export default Home;