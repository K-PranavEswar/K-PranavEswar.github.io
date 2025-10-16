import React, { useState, useEffect, useRef } from 'react';
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
  const titleRef = useRef(null);

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

  // ✅ ENSURE THIS DATA IS PRESENT
  const bcaProjects = [
    {
      title: 'ChrisAccessEdge',
      logo: chrisAccessLogo,
      description: 'A full-stack Visitor Pass Management System designed to digitize visitor logs at Christ College using Spring Boot, React, and Node.js.',
      members: [
        { name: 'Sivapradeesh M', linkedinUrl: 'https://www.linkedin.com/in/sivapradeesh-m/' },
        { name: 'Parvathy M Haima', linkedinUrl: 'https://www.linkedin.com/in/parvathy-m-haima/' },
      ],
    },
    {
      title: 'MEDINET-GPS',
      logo: medinetLogo,
      description: 'A real-time app to assist accident patients by quickly connecting them to nearby hospitals, enabling efficient ambulance navigation to help save lives.',
      members: [
        { name: 'Joshua J', linkedinUrl: 'https://www.linkedin.com/in/joshua-j/' },
      ],
    },
  ];

  const freelanceProjects = [
    {
      title: 'ReliefLink',
      logo: reliefLinkLogo,
      description: 'A real-time disaster relief and volunteer coordination platform using PHP and AJAX that enables the public to request help and admins to monitor disaster zones.',
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