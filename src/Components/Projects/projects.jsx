import React from 'react';
import './project.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-item">
        <h3>React Movies</h3>
        <p>  Developed a movie review website where users can view plots, casts, trailers, and budget information for various films.
          Built using React for the frontend and Node.js for the backend. Submitted the research paper on this project to the IEMIS International Conference 2020, receiving an Appreciation certificate.
        </p>
      </div>
      <div className="project-item">
        <h3>News360</h3>
        <p> Developed the React frontend for News360, a personalized news application that allows users to filter news articles based on their preferences. 
          The backend was built using the MERN Stack (MongoDB, Express, React, Node.js), and the application was successfully deployed on Netlify, 
          gaining 50+ users/clicks within the first week of launch.</p>
      </div>
      <div className="project-item">
        <h3>Stress Detector using Real-Time Human Voice</h3>
        <p> Created a real-time stress detection application using voice analysis. This project analyzes human voice to detect stress levels in real-time using Flask and React. 
          The Chrome extension captures real-time audio, processes it with librosa for feature extraction, and employs a trained machine learning model to predict stress levels. 
          Additionally, background processing was enabled to monitor and notify users when stress is detected, with the application also providing stress management tips.</p>
      </div>
    </section>
  );
};

export default Projects;
