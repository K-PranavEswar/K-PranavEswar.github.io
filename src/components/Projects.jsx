import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './css/Projects.css';
import { FaAngleDown } from 'react-icons/fa';
import chrisAccessLogo from '../assets/favicon.ico';
import medinetLogo from '../assets/mednet.png';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const projectList = [
    {
      title: 'ChrisAccessEdge',
      logo: chrisAccessLogo,
      description:
        'The Visitor Pass Management Mechanism is a full-stack Java-based system designed to digitize and streamline visitor management at Christ College Institution. Developed using Spring Boot, React.js, Node.js, JavaScript, HTML, and CSS, this system replaces traditional manual visitor logs with an efficient and secure digital solution.',
    },
    {
      title: 'MEDINET-GPS',
      logo: medinetLogo,
      description:
        'Medinet - GPS is a real-time mobile and web application designed to assist accident patients by connecting them quickly to nearby hospitals with the required medical facilities. It enables ambulances to navigate efficiently, reduces traffic congestion through smart coordination, and ensures the patient reaches the correct hospital quickly — ultimately helping save lives.',
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div
            className={`project-card ${activeIndex === index ? 'active' : ''}`}
            key={index}
            onClick={() => handleToggle(index)}
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

              {activeIndex === index && (
                <FaAngleDown className="blinking-arrow" />
              )}
            </div>

            {activeIndex === index && (
              <p className="project-description">
                <Typewriter
                  words={[project.description]}
                  loop={1}
                  cursor
                  cursorStyle="_"
                  typeSpeed={30}
                  deleteSpeed={0}
                  delaySpeed={1000}
                />
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
