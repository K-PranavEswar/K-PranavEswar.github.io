import React from 'react';
import { motion } from 'framer-motion';
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
  return (
    <section className="about-section" id="about">
      {/* ADD THIS SECTION TITLE */}
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className="about-grid">
        {/* Photo */}
        <motion.div
          className="about-image-wrapper"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 80, duration: 1 }}
          viewport={{ once: true }}
        >
          <img src={pranavImage} alt="Pranav Eswar" className="about-photo" />
        </motion.div>

        {/* Content */}
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
            I'm passionate about building responsive and efficient web experiences. I explore full-stack
            development and am steadily gaining confidence in technologies like Java and PHP.
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
            As a student pursuing a degree in Computer Applications, I am excited to keep learning
            about emerging technologies and bring innovative solutions to the table.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;