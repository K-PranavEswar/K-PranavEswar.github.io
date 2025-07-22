import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './css/Projects.css';
import { FaAngleDown, FaFolderOpen } from 'react-icons/fa';

// Project Logos
import chrisAccessLogo from '../assets/favicon.ico';
import medinetLogo from '../assets/mednet.png';
import reliefLinkLogo from '../assets/relieflink.png'; // Make sure this image exists

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // BCA Projects
  const bcaProjects = [
    {
      title: 'ChrisAccessEdge',
      logo: chrisAccessLogo,
      description:
        'The Visitor Pass Management Mechanism is a full-stack Java-based system designed to digitize and streamline visitor management at Christ College Institution. Developed using Spring Boot, React.js, Node.js, JavaScript, HTML, and CSS, this system replaces traditional manual visitor logs with an efficient and secure digital solution.',
      members: ['Sivapradeesh M', 'Parvathy M Haima'],
    },
    {
      title: 'MEDINET-GPS',
      logo: medinetLogo,
      description:
        'Medinet - GPS is a real-time mobile and web application designed to assist accident patients by connecting them quickly to nearby hospitals with the required medical facilities. It enables ambulances to navigate efficiently, reduces traffic congestion through smart coordination, and ensures the patient reaches the correct hospital quickly — ultimately helping save lives.',
      members: ['Joshua J'],
    },
  ];

  // Freelance Projects
  const freelanceProjects = [
    {
      title: 'ReliefLink',
      logo: reliefLinkLogo,
      description:
        'ReliefLink is a real-time disaster relief and volunteer coordination platform that enables public users to request help, volunteers to manage resources, and admins to monitor disaster zones. Built with PHP, MySQL, AJAX, and Bootstrap, it includes a live chat system, role-based dashboards, and SMS/email alerts to streamline disaster response efforts effectively.',
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const renderProjects = (projects, startIndex = 0) =>
    projects.map((project, index) => (
      <div
        className={`project-card ${
          activeIndex === index + startIndex ? 'active' : ''
        }`}
        key={index + startIndex}
        onClick={() => handleToggle(index + startIndex)}
      >
        <div className="project-header">
          <div className="project-info">
            {project.logo && (
              <img
                src={project.logo}
                alt={`${project.title} logo`}
                className="project-logo"
              />
            )}
            <h3 className="project-title">{project.title}</h3>
          </div>

          {activeIndex === index + startIndex && (
            <FaAngleDown className="blinking-arrow" />
          )}
        </div>

        {activeIndex === index + startIndex && (
          <div className="project-details">
            <p className="project-description">
              <Typewriter
                words={[project.description]}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={50}
                deleteSpeed={0}
                delaySpeed={1000}
              />
            </p>
            {project.members && (
              <p className="project-members">
                <strong>Team Members:</strong> {project.members.join(', ')}
              </p>
            )}
          </div>
        )}
      </div>
    ));

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>

      {/* Folder: BCA Projects */}
      <div className="folder-block">
        <div className="folder-header">
          <FaFolderOpen className="folder-icon" />
          <h3 className="folder-title">BCA Projects</h3>
        </div>
        <div className="projects-grid">{renderProjects(bcaProjects, 0)}</div>
      </div>

      {/* Folder: Freelance Projects */}
      <div className="folder-block">
        <div className="folder-header">
          <FaFolderOpen className="folder-icon" />
          <h3 className="folder-title">Freelance Projects</h3>
        </div>
        <div className="projects-grid">
          {renderProjects(freelanceProjects, bcaProjects.length)}
        </div>
      </div>
    </section>
  );
};

export default Projects;
