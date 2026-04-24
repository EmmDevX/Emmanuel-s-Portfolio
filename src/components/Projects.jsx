import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Velvet Coffee',
      image: 'images/velvet.png',
      description: 'A modern and fully responsive coffee shop website designed to deliver a smooth and engaging user experience.',
      tech: ['Html', 'Css', 'JavaScript'],
      liveLink: 'https://la-caretcoffee.vercel.app/',
      githubLink: 'https://github.com/EmmDevX/La-Caret-Coffee'
    },
    
    // {
    //   id: 2,
    //   title: 'Portfolio Website',
    //   image: 'images/project2.png',
    //   description: 'Personal portfolio showcasing skills, projects, and contact information with responsive design.',
    //   tech: ['HTML', 'CSS', 'JavaScript'],
    //   liveLink: '#',
    //   githubLink: '#'
    // },
    // {
    //   id: 3,
    //   title: 'Task Manager',
    //   image: 'images/project3.png',
    //   description: 'Productivity application for managing daily tasks with drag-and-drop functionality and due date reminders.',
    //   tech: ['React', 'Firebase'],
    //   liveLink: '#',
    //   githubLink: '#'
    // },
    // {
    //   id: 4,
    //   title: 'Weather App',
    //   image: 'images/project4.png',
    //   description: 'Real-time weather forecasting application using API integration to display current conditions and forecasts.',
    //   tech: ['JavaScript', 'API', 'CSS'],
    //   liveLink: '#',
    //   githubLink: '#'
    // }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Seasoned Projects</h2>
        <p className="projects-subtitle">A showcase of my recent work</p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-buttons">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-btn live-btn">
                    <img src="images/link.svg" alt="Live" className="btn-icon" />
                    Live
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-btn github-btn">
                    <img src="images/github.svg" alt="GitHub" className="btn-icon" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;