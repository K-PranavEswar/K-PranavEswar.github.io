import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import './css/Projects.css';
import { FaAngleDown, FaFolderOpen } from 'react-icons/fa';

// Project Logos
import chrisAccessLogo from '../assets/favicon.ico';
import medinetLogo from '../assets/mednet.png';
import reliefLinkLogo from '../assets/relieflink.png';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const bcaProjects = [
    {
      title: 'ChrisAccessEdge',
      logo: chrisAccessLogo,
      description: 'A full-stack Visitor Pass Management System designed to digitize and streamline visitor logs at Christ College. Built with Spring Boot, React, and Node.js for an efficient and secure solution.',
      members: [
        { name: 'Sivapradeesh M', linkedinUrl: 'https://www.linkedin.com/in/sivapradeesh-m-a06961309/' },
        { name: 'Parvathy M Haima' },
      ],
    },
    {
      title: 'MEDINET-GPS',
      logo: medinetLogo,
      description: 'A real-time app to assist accident patients by quickly connecting them to nearby hospitals. It enables efficient ambulance navigation and ensures patients reach the correct facility promptly to help save lives.',
      members: [
        { name: 'Joshua J', linkedinUrl: 'https://www.linkedin.com/in/joshua-j-040273331/' },
      ],
    },
  ];

  const freelanceProjects = [
    {
      title: 'ReliefLink',
      logo: reliefLinkLogo,
      description: 'A real-time disaster relief and volunteer coordination platform. It enables the public to request help, volunteers to manage resources, and admins to monitor disaster zones, streamlining response efforts.',
    },
  ];

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
                  <Typewriter
                    words={[project.description]}
                    loop={1}
                    cursor
                    cursorStyle="_"
                    typeSpeed={30}
                  />
                </p>
                {/* ✅ CHANGED: Logic to render member names as links */}
                {project.members && (
                  <div className="project-members">
                    <strong>Team Members: </strong>
                    {project.members.map((member, i) => (
                      <span key={i}>
                        <a
                          href={member.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()} // Prevents the card from closing when a link is clicked
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
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

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
        transition={{ duration: 0.6, delay: 0.2 }}
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