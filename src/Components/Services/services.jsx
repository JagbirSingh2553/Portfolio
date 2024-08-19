import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaChartLine } from 'react-icons/fa';
// import { SiPowerbi, SiAzuredevops, SiPython } from 'react-icons/si'; // Importing icons for PowerBI, Azure, and Python
import './services.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Services</h2>
      <div className="services-container">
        <div className="service-card">
          <FaReact className="service-icon" />
          <h3>Frontend Development</h3>
          <p>Creating modern and responsive user interfaces using React, HTML5, CSS3, and JavaScript.</p>
        </div>
        <div className="service-card">
          <FaNodeJs className="service-icon" />
          <h3>Backend Development</h3>
          <p>Building scalable server-side applications using Node.js and Express.</p>
        </div>
        <div className="service-card">
          <FaDatabase className="service-icon" />
          <h3>Database Management</h3>
          <p>Designing and managing databases using MongoDB and SQL databases.</p>
        </div>
        <div className="service-card">
          <FaHtml5 className="service-icon" />
          <h3>HTML5 & CSS3</h3>
          <p>Implementing semantic HTML5 and styling with modern CSS3 techniques.</p>
        </div>
        <div className="service-card">
          <FaCss3Alt className="service-icon" />
          <h3>Responsive Design</h3>
          <p>Ensuring that websites and applications look great on all devices with responsive design.</p>
        </div>
        <div className="service-card">
          <FaChartLine className="service-icon" />
          <h3>Data Analytics</h3>
          <p>Utilizing PowerBI, Azure, and Python to extract insights and inform decision-making.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
