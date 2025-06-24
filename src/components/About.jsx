import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import pranavImage from '../assets/pranav.jpg';
import './css/About.css';
import { BsChevronDown } from 'react-icons/bs';

const aboutDetails = [
  { icon: 'bi-calendar-event', label: 'Birthday', value: '22 Aug 2004' },
  { icon: 'bi-briefcase-fill', label: 'Freelance', value: 'Available' },
  { icon: 'bi-mortarboard', label: 'Degree', value: 'BCA' },
  { icon: 'bi-droplet-half', label: 'Blood Group', value: 'O+ve' },
  { icon: 'bi-globe', label: 'Website', value: <a href="https://github.com/pranav1495?tab=repositories" target="_blank" rel="noopener noreferrer">pranaveswar.github.io</a> },
  { icon: 'bi-geo-alt-fill', label: 'City', value: 'Trivandrum' },
  { icon: 'bi-envelope-fill', label: 'Email', value: <a href="mailto:pranavartist1@gmail.com">pranavartist1@gmail.com</a> },
  { icon: 'bi-map-fill', label: 'State', value: 'Kerala' },
  { icon: 'bi-telephone-fill', label: 'Phone', value: '9074261433' },
  { icon: 'bi-flag-fill', label: 'Country', value: 'India' },
];

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);

  const toggleBlock = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 992);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className={`about-section ${isDesktop ? 'enlarged' : ''}`} id="about">
      <div className="about-grid">
        {/* Photo */}
        <motion.div
          className="about-image-wrapper"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 80, duration: 1 }}
        >
          <img src={pranavImage} alt="Pranav Eswar" className="about-photo" />
        </motion.div>

        {/* Text Content */}
        <div className="about content">
          <div className="about-heading-wrapper">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About Me
            </motion.h2>
          </div>

          <motion.p
            className="intro-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I'm passionate about building responsive and efficient web experiences. I explore full-stack
            development and am steadily gaining confidence in technologies like Java and PHP.
            Eager to learn and collaborate, I strive to craft thoughtful solutions to real-world problems.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Programmer & Web Developer
          </motion.h3>

          {/* Grid Style Toggle Blocks */}
          <div className="toggle-grid">
            {aboutDetails.map((item, index) => (
              <div
                className={`toggle-block ${openIndex === index ? 'open' : ''}`}
                key={index}
                onClick={() => toggleBlock(index)}
              >
                <div className="toggle-header">
                  <i className={`bi ${item.icon}`}></i>
                  <strong>{item.label}</strong>
                  <BsChevronDown
                    className={`chevron-icon ${openIndex === index ? 'rotated' : ''}`}
                  />
                </div>
                {openIndex === index && (
                  <motion.div
                    className="toggle-content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.value}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          <motion.p
            className="closing-text"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            As a student pursuing a degree in Computer Applications, I am excited to keep learning
            about emerging technologies and bring innovative solutions to the table. With hands-on experience
            in both front-end and back-end development, I am focused on becoming a better developer every day.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
