import React from 'react';
import './project.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-item">
        <h3>React Movies</h3>
        <p>A movie review website where users can view plots, casts, trailers, and budget information for various films. Built using React and Node.js.</p>
      </div>
      <div className="project-item">
        <h3>News360</h3>
        <p>A personalized news application using the MERN stack. Users can view and filter news articles based on their preferences. Deployed on Netlify.</p>
      </div>
      <div className="project-item">
        <h3>Stress Detector using Real-Time Human Voice</h3>
        <p>A real-time stress detection application using Flask and React. This project analyzes human voice to detect stress levels. Implemented with Flask for the backend and React for the frontend.</p>
      </div>
    </section>
  );
};

export default Projects;
