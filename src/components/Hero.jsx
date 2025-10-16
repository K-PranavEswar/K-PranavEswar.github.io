import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

// Imports for the particle background
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 
import particlesConfig from '../../src/particlesConfig'; // Ensure this path is correct

import profilePic from '../assets/image111.jpeg';
import './css/Hero.css';

// Animation variants for the staggered text reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Hero = () => {
  const descriptionText = "A dedicated and passionate developer with a knack for building modern, responsive, and user-friendly web applications. I'm always eager to learn new technologies and solve complex problems.";

  // Required initialization function for tsparticles
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section id="home" className="hero">
      {/* The Particle background component */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
      />
      
      <div className="hero-container">
        {/* Left Content Column */}
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero-intro" variants={itemVariants}>
            Hello, I'm
          </motion.p>

          <motion.h1 className="hero-name" variants={itemVariants}>
            K Pranav Eswar
          </motion.h1>
          
          <motion.h2 className="hero-title" variants={itemVariants}>
            <span>I'm a </span>
            <Typewriter
              words={[
                'Full Stack Developer',
                'MERN Enthusiast',
                'UIUX Frontend Developer',
                'MCA Student',
                'BCA Graduate',
                'Creative Artist',
                'Passionate Gamer',
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </motion.h2>

          <motion.p className="hero-description" variants={itemVariants}>
            {descriptionText.split(' ').map((word, index) => (
              <span key={index} style={{ transitionDelay: `${index * 0.05}s` }}>
                {word}{'\u00A0'}
              </span>
            ))}
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <a href="#contact" className="hero-cta-button">Let's Talk</a>
          </motion.div>

          <motion.div className="hero-socials" variants={itemVariants}>
            <span className="social-text">Check Out My</span>
            <div className="social-icons">
              <a href="https://x.com/PranavEswar5" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://www.instagram.com/equizzle_arts" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/k-pranav-eswar1/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://www.youtube.com/@equizzlearts" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image Column */}
        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <div className="hero-image-wrapper">
            <img src={profilePic} alt="K Pranav Eswar" className="hero-image" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;