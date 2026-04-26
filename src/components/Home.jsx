import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import { fadeInUp, staggerContainer, viewportSettings } from './animations';

function Home() {
  return (
    <section className="home" id="home">
      <motion.div 
        className="home-content"
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        variants={staggerContainer}
      >
        <motion.img className="home-img"></motion.img>
        <motion.h1 className="home-title" variants={fadeInUp}>Hi, I'm Emmanuel</motion.h1>
        <motion.p className="home-subtitle" variants={fadeInUp}>A passionate developer creating amazing digital experiences</motion.p>
        <motion.p 
          className="home-description"
          variants={fadeInUp}
        >
          I specialize in building modern web applications with clean code and intuitive user interfaces.
          With a focus on performance and user experience, I bring ideas to life through creative solutions.
        </motion.p>
        <motion.a 
          href="/resume.pdf" 
          className="resume-button" 
          target="_blank" 
          rel="noopener noreferrer"
          variants={fadeInUp}
        >
          View My Resume
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Home;