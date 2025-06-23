import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Social Icons */}
      <div className="footer-icons">
        <a
          href="https://github.com/pranav1495"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/k-pranav-eswar1/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={32} />
        </a>
        <a
          href="mailto:pranavartist1@gmail.com"
          aria-label="Email"
        >
          <FaEnvelope size={32} />
        </a>
      </div>

      {/* Copyright */}
      <div className="footer-text">
        © {new Date().getFullYear()} Pranav Eswar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
