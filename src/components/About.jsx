import React, { useCallback, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Imports for the particle background
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import particlesConfig from '../../src/particlesConfig'; // Ensure this path is correct

import pranavImage from '../assets/pranav.jpg';
import './css/About.css';

const aboutDetails = [
  { label: 'Birthday', value: '22 Aug' },
  {
    label: 'Website',
    value: (
      <a href="https://github.com/pranav1495?tab=repositories" target="_blank" rel="noopener noreferrer">
        pranaveswar.github.io
      </a>
    ),
  },
  { label: 'Phone', value: '+91 9074261433' },
  { label: 'City', value: 'Trivandrum, India' },
  { label: 'Degree', value: 'Bachelors of Computer Applications' },
  {
    label: 'Email',
    value: <a href="mailto:pranavartist1@gmail.com">pranavartist1@gmail.com</a>,
  },
  { label: 'Freelance', value: 'Available' },
];

const About = () => {
  const titleRef = useRef(null);

  // Required initialization function for tsparticles
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // IntersectionObserver to trigger the title animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    const currentTitle = titleRef.current;
    if (currentTitle) {
      observer.observe(currentTitle);
    }

    return () => {
      if (currentTitle) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section className="about-section" id="about">
      {/* The Particle background component */}
      <Particles
        id="tsparticles-about" // Unique ID for this instance
        init={particlesInit}
        options={particlesConfig}
      />

      {/* Animated Section Title */}
      <h2 className="section-title" ref={titleRef}>
        {"About Me".split('').map((char, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h2>

      <div className="about-grid">
        {/* Photo Column */}
        <motion.div
          className="about-image-wrapper"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 80, duration: 1 }}
          viewport={{ once: true }}
        >
          <img src={pranavImage} alt="Pranav Eswar" className="about-photo" />
        </motion.div>

        {/* Content Column */}
        <div className="about-content">
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Programmer & Web Developer
          </motion.h3>

          <motion.p
            className="intro-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            I'm passionate about building responsive and efficient web experiences. I explore full-stack development and am steadily gaining confidence in technologies like Java and PHP.
          </motion.p>

          <div className="arrow-details-list">
            {aboutDetails.map((item, index) => (
              <motion.div
                className="arrow-detail"
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="arrow-symbol">&gt;</span>
                <span className="arrow-label">{item.label}:</span>
                <span className="arrow-value">{item.value}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="closing-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            As a student pursuing a degree in Computer Applications, I am excited to keep learning about emerging technologies and bring innovative solutions to the table.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;