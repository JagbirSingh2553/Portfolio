import React from 'react';
import './services.css';
import { FaPaintBrush, FaCode, FaBitcoin, FaReact, FaNodeJs } from 'react-icons/fa'; // Add more icons as needed
import { SiFlask, SiMongodb } from 'react-icons/si'; // Add more icons as needed

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Services</h2>
      <div className="services-container">
        <div className="service-item">
          <FaPaintBrush className="service-icon" />
          <h3>UI/UX Design</h3>
          <p>Crafting digital experiences that mesmerize and delight.</p>
        </div>
        <div className="service-item">
          <FaCode className="service-icon" />
          <h3>Web Development</h3>
          <p>Building digital landscapes with code, where ideas come to life.</p>
        </div>
        <div className="service-item">
          <FaBitcoin className="service-icon" />
          <h3>Blockchain</h3>
          <p>Unleashing the power of decentralized trust to revolutionize how we secure, transact, and collaborate in the digital realm.</p>
        </div>
      </div>
      <h2>Technologies Worked On</h2>
      <div className="technologies-container">
        <div className="technology-item">
          <FaReact className="technology-icon" />
          <p>React</p>
        </div>
        <div className="technology-item">
          <SiFlask className="technology-icon" />
          <p>Flask</p>
        </div>
        <div className="technology-item">
          <FaNodeJs className="technology-icon" />
          <p>Node.js</p>
        </div>
        <div className="technology-item">
          <SiMongodb className="technology-icon" />
          <p>MongoDB</p>
        </div>
        {/* Add more technologies as needed */}
      </div>
    </section>
  );
};

export default Services;
