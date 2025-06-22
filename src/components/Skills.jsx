import React from 'react';
import './css/Skills.css';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs,
  FaDatabase, FaGitAlt, FaGithub, FaPython, FaJava,
  FaPhp, FaLinux, FaFigma, FaBootstrap
} from 'react-icons/fa';

const skills = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJsSquare /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'SQL', icon: <FaDatabase /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'GitHub', icon: <FaGithub /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'PHP', icon: <FaPhp /> },
  { name: 'Linux', icon: <FaLinux /> },
  { name: 'Figma', icon: <FaFigma /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },
  { name: 'MongoDB', icon: <FaDatabase /> },
  { name: 'Tailwind', icon: <FaCss3Alt /> },
  { name: 'Express', icon: <FaNodeJs /> },
  { name: 'MySQL', icon: <FaDatabase /> },
  { name: 'C++', icon: <FaJava /> },
  { name: 'VS Code', icon: <FaGithub /> },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
