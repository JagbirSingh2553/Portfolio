import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './header.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <h1>{scrolled ? 'JS' : 'Jagbir Singh'}</h1>
        <nav>
          <Link to="about" smooth={true} duration={500}>About</Link>
          <Link to="services" smooth={true} duration={500}>Services</Link>
          <Link to="experience" smooth={true} duration={500}>Experience</Link>
          <Link to="projects" smooth={true} duration={500}>Projects</Link>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </nav>
        <div className="social-icons">
          <a href="https://github.com/JagbirSingh2553" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/jagbir-singh-801960281/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://x.com/jagbir_singh123" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
