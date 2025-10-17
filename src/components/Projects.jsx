import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaAngleDown, FaFolderOpen } from 'react-icons/fa';

// Imports for the particle background
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import particlesConfig from '../../src/particlesConfig';

// ✅ CORRECTED PATH: Use './' to look in the current directory
import { bcaProjects, freelanceProjects } from './projectData';

import './css/Projects.css';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const titleRef = useRef(null);

  // Required initialization function for tsparticles
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Observer to trigger the title animation
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

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const renderProjects = (projects, startIndex = 0) =>
    projects.map((project, index) => {
      const currentIndex = index + startIndex;
      const isActive = activeIndex === currentIndex;

      return (
        <motion.div
          layout
          className={`project-card ${isActive ? 'active' : ''}`}
          key={currentIndex}
          onClick={() => handleToggle(currentIndex)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <motion.div layout className="project-header">
            <div className="project-info">
              {project.logo && <img src={project.logo} alt={`${project.title} logo`} className="project-logo" />}
              <h3 className="project-title">{project.title}</h3>
            </div>
            <FaAngleDown className="toggle-arrow" />
          </motion.div>

          <AnimatePresence>
            {isActive && (
              <motion.div
                className="project-details"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <p className="project-description">
                  <Typewriter words={[project.description]} loop={1} cursor cursorStyle="_" typeSpeed={30} />
                </p>
                {project.members && (
                  <div className="project-members">
                    <strong>Team Members: </strong>
                    {project.members.map((member, i) => (
                      <span key={i}>
                        <a
                          href={member.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {member.name}
                        </a>
                        {i < project.members.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      );
    });

  return (
    <section className="projects-section" id="projects">
      <Particles
        id="tsparticles-projects"
        init={particlesInit}
        options={particlesConfig}
      />
      
      <h2 className="section-title" ref={titleRef}>
        {"My Projects".split('').map((char, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h2>

      <motion.div
        className="folder-block"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="folder-header">
          <FaFolderOpen className="folder-icon" />
          <h3 className="folder-title">BCA Projects</h3>
        </div>
        <div className="projects-grid">{renderProjects(bcaProjects, 0)}</div>
      </motion.div>

      <motion.div
        className="folder-block"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="folder-header">
          <FaFolderOpen className="folder-icon" />
          <h3 className="folder-title">Freelance Projects</h3>
        </div>
        <div className="projects-grid">{renderProjects(freelanceProjects, bcaProjects.length)}</div>
      </motion.div>
    </section>
  );
};

export default Projects;