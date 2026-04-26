import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';
import { fadeInUp, staggerContainer, viewportSettings } from './animations';

function Skills() {
  const skills = [
    { name: 'HTML', image: 'images/html.png' },
    { name: 'CSS', image: 'images/css.png' },
    { name: 'JavaScript', image: 'images/js.png' },
    { name: 'React', image: 'images/react.png' },
    /*
    { name: 'Node.js', image: 'images/nodejs.png' },
     */
    /*
    { name: 'Python', image: 'images/python.png' },
     */
    /*
    { name: 'TypeScript', image: 'images/typescript.png' },
     */
   /* { name: 'SQL', image: 'images/sql.png' },
   */
    { name: 'Figma', image: 'images/figma.png' },
    { name: 'Tailwind CSS', image: 'images/tailwindcss.png' },
    { name: 'Next js', image: 'images/nextjs.png' },
    { name: 'Vite', image: 'images/vite.png'},
    

  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <motion.h2 
          className="skills-title"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
        >My Tech Stack</motion.h2>
        <motion.p 
          className="skills-subtitle"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
        >Technologies I work with</motion.p>
        
        <motion.div 
          className="skills-grid"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="skill-card"
              variants={fadeInUp}
            >
              <img src={skill.image} alt={skill.name} className="skill-image" />
              <span className="skill-name">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;