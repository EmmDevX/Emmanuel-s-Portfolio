import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    { name: 'HTML', image: 'images/html.png' },
    { name: 'CSS', image: 'images/css.png' },
    { name: 'JavaScript', image: 'images/js.png' },
    { name: 'React', image: 'images/react.png' },
    { name: 'Node.js', image: 'images/nodejs.png' },
    { name: 'Python', image: 'images/python.png' },
    { name: 'TypeScript', image: 'images/typescript.png' },
    { name: 'SQL', image: 'images/sql.png' },
    { name: 'Figma', image: 'images/figma.png' },
    { name: 'Tailwind CSS', image: 'images/tailwindcss.png' },
    { name: 'Next js', image: 'images/nextjs.png' },
    { name: 'Vue js', image: 'images/vuejs.png'}
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">My Tech Stack</h2>
        <p className="skills-subtitle">Technologies I work with</p>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img src={skill.image} alt={skill.name} className="skill-image" />
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;