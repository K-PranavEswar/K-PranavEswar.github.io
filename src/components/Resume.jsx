import React, { useCallback, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Imports for the particle background
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import particlesConfig from '../../src/particlesConfig'; // Ensure this path is correct

import './css/Resume.css';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AnimatedSection = ({ children }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
};

const Resume = () => {
  const titleRef = useRef(null);
  const { ref: timelineRef, inView: timelineInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Required initialization function for tsparticles
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // IntersectionObserver to trigger the title animation on scroll
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

  return (
    <section className="resume-section" id="resume">
      {/* The Particle background component */}
      <Particles
        id="tsparticles-resume" // Unique ID for this instance
        init={particlesInit}
        options={particlesConfig}
      />

      {/* Animated Section Title */}
      <h2 className="section-title" ref={titleRef}>
        {"Resume".split('').map((char, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
            {char}
          </span>
        ))}
      </h2>
      <p className="resume-intro">
        A snapshot of my professional journey, highlighting my skills, experience, and dedication to continuous learning in the ever-evolving tech landscape.
      </p>

      {/* Animated Timeline Container */}
      <div 
        className={`resume-timeline-container ${timelineInView ? 'in-view' : ''}`}
        ref={timelineRef}
      >
        {/* Summary */}
        <AnimatedSection>
          <h3 className="resume-subheading">Summary</h3>
          <div className="resume-item">
            <div className="resume-content">
              <h4 className="resume-name">K PRANAV ESWAR</h4>
              <p className="resume-description">
                Driven and dedicated software engineering student with a solid foundation in software principles and a passion for delivering high-quality solutions. Skilled in a variety of programming languages and committed to staying current with industry trends.
              </p>
              <ul className="resume-contact-list">
                <li>Trivandrum, 695027 India</li>
                <li>(+91) 9074261433</li>
                <li><a href="mailto:pranavartist1@gmail.com">pranavartist1@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Experience */}
        <AnimatedSection>
          <h3 className="resume-subheading">Experience</h3>
          <div className="resume-item">
            <div className="resume-content">
              <h4 className="resume-name">Full Stack Java Intern | ICT Academy of Kerala</h4>
              <div className="resume-date">May 2024 – June 2024</div>
              <ul className="resume-contact-list">
                <li>Trained in JavaScript, Node.js, and related full-stack technologies.</li>
                <li>Built practical applications, gaining hands-on development skills.</li>
              </ul>
            </div>
          </div>
          <div className="resume-item">
            <div className="resume-content">
              <h4 className="resume-name">Full Stack PHP Intern | Trinity Technologies</h4>
              <div className="resume-date">Jan 2025 – Mar 2025</div>
              <ul className="resume-contact-list">
                <li>Worked with PHP, AJAX, and Bootstrap in a professional environment.</li>
                <li>Contributed to real-time supervised projects, enhancing practical skills.</li>
              </ul>
            </div>
          </div>
          <div className="resume-item">
            <div className="resume-content">
              <h4 className="resume-name">Graphic Designer (Freelance)</h4>
              <div className="resume-date">Jan 2025 – June 2025</div>
              <p className="resume-description">Working independently using Figma to design modern UI/UX and graphics.</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Education */}
        <AnimatedSection>
          <h3 className="resume-subheading">Education</h3>
          <div className="resume-item">
            <div className="resume-content">
              <h4 className="resume-name">MASTER'S OF COMPUTER APPLICATIONS | KTU UNIVERSITY</h4>
              <div className="resume-date">2025 – Present</div>
              <p className="resume-description">Lourdes Matha College Of Science And Technology</p>
            </div>
          </div>
          <div className="resume-item">
            <div className="resume-content">
              <h4 className="resume-name">BACHELOR OF COMPUTER APPLICATIONS | UNIVERSITY OF KERALA</h4>
              <div className="resume-date">2022 – 2025</div>
              <p className="resume-description">Christ College, Vizhinjam — CGPA: 7.9 / 10</p>
            </div>
          </div>
          <div className="resume-item">
            <div className="resume-content">
              <h4 className="resume-name">HSE | CBSE </h4>
              <div className="resume-date">2020 – 2022</div>
              <p className="resume-description">Chinmaya Vidyalaya Attukal — CGPA: 6.6 / 10</p>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <p className="resume-link">
        For more details, visit my{' '}
        <a href="https://www.linkedin.com/in/k-pranav-eswar1/" target="_blank" rel="noopener noreferrer">
          LinkedIn profile
        </a>.
      </p>
    </section>
  );
};

export default Resume;