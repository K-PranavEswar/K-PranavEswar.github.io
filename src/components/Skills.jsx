import React, { useState } from 'react';
import './css/Skills.css';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs,
  FaDatabase, FaGitAlt, FaGithub, FaPython, FaJava,
  FaPhp, FaFigma, FaBootstrap
} from 'react-icons/fa';
import { SiJquery, SiAxios } from 'react-icons/si';

const categories = {
  "Languages & Frameworks": [
    { name: 'HTML', icon: <FaHtml5 />, percent: 100 },
    { name: 'CSS', icon: <FaCss3Alt />, percent: 75 },
    { name: 'JavaScript', icon: <FaJsSquare />, percent: 75 },
    { name: 'Bootstrap', icon: <FaBootstrap />, percent: 100 },
    { name: 'jQuery', icon: <SiJquery />, percent: 80 },
    { name: 'AJAX', icon: <SiAxios />, percent: 80 },
    { name: 'React', icon: <FaReact />, percent: 75 },
    { name: 'Node.js', icon: <FaNodeJs />, percent: 80 },
    { name: 'Express', icon: <FaNodeJs />, percent: 75 },
    { name: 'PHP', icon: <FaPhp />, percent: 85 },
    { name: 'Python', icon: <FaPython />, percent: 85 },
    { name: 'Java', icon: <FaJava />, percent: 80 },
    { name: 'C++', icon: <FaJava />, percent: 60 },
  ],
  "Platforms & Tools": [
    { name: 'MongoDB', icon: <FaDatabase />, percent: 80 },
    { name: 'MySQL', icon: <FaDatabase />, percent: 100 },
    { name: 'Git', icon: <FaGitAlt />, percent: 70 },
    { name: 'GitHub', icon: <FaGithub />, percent: 75 },
    { name: 'VS Code', icon: <FaGithub />, percent: 100 },
  ],
  "Creative Tools": [
    { name: 'Figma', icon: <FaFigma />, percent: 70 },
  ],
};

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  let globalIndex = 0;

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Tech Stack</h2>
      {Object.entries(categories).map(([category, skills]) => (
        <div key={category}>
          <h3 className="skills-subtitle">{category}</h3>
          <div className="skills-grid">
            {skills.map((skill, localIndex) => {
              const currentIndex = globalIndex++;
              return (
                <div
                  className={`skill-item ${activeIndex === currentIndex ? 'clicked' : ''}`}
                  key={currentIndex}
                  onClick={() => handleClick(currentIndex)}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <p className="skill-name">{skill.name}</p>

                  {activeIndex === currentIndex && (
                    <div
                      className="skill-hover-chart"
                      style={{
                        background: `conic-gradient(#2563eb ${skill.percent * 3.6}deg, #e5e7eb 0deg)`
                      }}
                    >
                      <span className="circle-ring-text">{skill.percent}%</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
