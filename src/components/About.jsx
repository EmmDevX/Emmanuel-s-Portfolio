import React, { useState, useRef, useEffect } from 'react';
import './About.css';

function About() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mouseenter', () => setIsHovering(true));
      section.addEventListener('mouseleave', () => setIsHovering(false));
      section.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (section) {
        section.removeEventListener('mouseenter', () => setIsHovering(true));
        section.removeEventListener('mouseleave', () => setIsHovering(false));
        section.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="about-container">
        <div className="about-image-wrapper">
          <div 
            className="wavy-border"
            style={{
              '--mouse-x': `${mousePos.x}px`,
              '--mouse-y': `${mousePos.y}px`
            }}
          >
            <div className="about-image">
              <img src="images/profile.jpg" alt="Emmanuel" />
            </div>
          </div>
        </div>
        <div className="about-content">
          <h2 className="about-title">Emmanuel Oluwadamilare Taiwo</h2>
          <p className="about-text">
            I'm a passionate developer with expertise in building modern web applications.
            I love creating intuitive user interfaces and solving complex problems through code.
          </p>
          <p className="about-text">
            With a keen eye for design and a strong foundation in front-end technologies,
            I strive to create seamless digital experiences that leave a lasting impression.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;