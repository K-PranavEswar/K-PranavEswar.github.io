import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './css/Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: "ChrisAccessEdge",
      description: "The Visitor Pass Management Mechanism is a full-stack Java-based system designed to digitize and streamline visitor management at Christ College Institution. Developed using Spring Boot(IntelliJ), React.js, Node.js, JavaScript, HTML, and CSS in Vs code, this system replaces traditional manual visitor logs with an efficient and secure digital solution."
    },
    {
      title: "MEDINET-GPS",
      description: "Medinet - GPS is a real-time, streamlined mobile and web application designed to assist accident patients by connecting them quickly to nearby hospitals with the required medical facilities. It enables ambulances to navigate efficiently, reduces traffic congestion through coordinated traffic control, and ensures the patient reaches the correct hospital location without delays — ultimately helping save lives."
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">
              <Typewriter
                words={[project.description]}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={40}
                deleteSpeed={0}
                delaySpeed={500}
              />
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
