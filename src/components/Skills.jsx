import React from 'react';
import './css/Skills.css';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs,
  FaDatabase, FaGitAlt, FaGithub, FaPython, FaJava,
  FaPhp, FaLinux, FaFigma, FaBootstrap
} from 'react-icons/fa';
import { SiJquery, SiAxios } from 'react-icons/si'; // importing jQuery and Axios icons

const skills = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJsSquare /> },
  { name: 'jQuery', icon: <SiJquery /> },
  { name: 'AJAX', icon: <SiAxios /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express', icon: <FaNodeJs /> },
  { name: 'MongoDB', icon: <FaDatabase /> },
  { name: 'MySQL', icon: <FaDatabase /> },
  { name: 'PHP', icon: <FaPhp /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'C++', icon: <FaJava /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'GitHub', icon: <FaGithub /> },
  { name: 'VS Code', icon: <FaGithub /> },
  { name: 'Figma', icon: <FaFigma /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },
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
