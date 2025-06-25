import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './css/Resume.css';

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 12 },
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
  return (
    <section className="resume-section" id="resume">
      <div className="resume-title-block">
        <h2 className="resume-main-heading">RESUME</h2>
        <p className="resume-intro">
          Here is a snapshot of my experience and achievements as a student in the field of programming and web development.
          My goal is to showcase my technical abilities, as well as my passion for technology and my commitment to continuous learning and growth.
          I believe that my skills and experiences make me a valuable asset in the industry, and I am eager to apply my abilities to new and exciting challenges.
        </p>
      </div>

      {/* Summary */}
      <AnimatedSection>
        <h3 className="resume-subheading">Summary</h3>
        <div className="resume-timeline">
          <div className="resume-point" />
          <div className="resume-content">
            <h4 className="resume-name">K PRANAV ESWAR</h4>
            <p className="resume-description">
              A driven and dedicated software engineering student with a passion for technology and a commitment to delivering high-quality software solutions.
              I have a solid foundation in the principles and practices of software engineering. I am skilled in a variety of programming languages and development methodologies,
              and I am committed to staying up-to-date with the latest industry trends and best practices.
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

        <div className="resume-timeline">
          <div className="resume-point" />
          <div className="resume-content">
            <h4 className="resume-name">Full Stack Java Intern<br />ICT Academy of Kerala</h4>
            <div className="resume-date"><strong>May 2024 – June 2024</strong></div>
            <p className="resume-description">On-site internship in Thiruvananthapuram, Kerala.</p>
            <ul className="resume-contact-list">
              <li>Trained in JavaScript, Node.js, and related technologies</li>
              <li>Built full-stack applications and gained practical development skills</li>
            </ul>
          </div>
        </div>

        <div className="resume-timeline">
          <div className="resume-point" />
          <div className="resume-content">
            <h4 className="resume-name">Full Stack PHP Intern<br />Trinity Technologies</h4>
            <div className="resume-date"><strong>Jan 2025 – Mar 2025</strong></div>
            <p className="resume-description">On-site internship at Trinity Technologies and Software Solutions Pvt Ltd, Thiruvananthapuram.</p>
            <ul className="resume-contact-list">
              <li>Worked with PHP, AJAX, Bootstrap, and related tools</li>
              <li>Contributed to real-time projects under supervision</li>
            </ul>
          </div>
        </div>

        <div className="resume-timeline">
          <div className="resume-point" />
          <div className="resume-content">
            <h4 className="resume-name">Graphic Designer (Freelance)</h4>
            <div className="resume-date"><strong>Jan 2025 – Present</strong></div>
            <p className="resume-description">Working independently using Figma to design modern UI/UX and graphics.</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Education */}
      <AnimatedSection>
        <h3 className="resume-subheading">Education</h3>

        <div className="resume-timeline">
          <div className="resume-point" />
          <div className="resume-content">
            <h4 className="resume-name">BACHELOR OF COMPUTER APPLICATIONS<br />UNIVERSITY OF KERALA</h4>
            <div className="resume-date"><strong>2022 – 2025</strong></div>
            <p className="resume-description">Christ College, Vizhinjam</p>
            <p className="resume-description"><strong>CGPA:</strong> 7.9 / 10</p>
          </div>
        </div>

        <div className="resume-timeline">
          <div className="resume-point" />
          <div className="resume-content">
            <h4 className="resume-name">CLASS 12 – CBSE</h4>
            <div className="resume-date"><strong>2020 – 2022</strong></div>
            <p className="resume-description">Chinmaya Vidyalaya, Attukal</p>
            <p className="resume-description"><strong>Grade:</strong> 66%</p>
          </div>
        </div>

        <div className="resume-timeline">
          <div className="resume-point" />
          <div className="resume-content">
            <h4 className="resume-name">CLASS 10 – CBSE</h4>
            <div className="resume-date"><strong>2019 – 2020</strong></div>
            <p className="resume-description">Chinmaya Vidyalaya, Attukal</p>
            <p className="resume-description"><strong>Grade:</strong> 78%</p>
          </div>
        </div>
      </AnimatedSection>

      {/* LinkedIn */}
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
