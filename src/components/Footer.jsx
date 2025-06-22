import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './css/Footer.css'; // Optional: for extra styling if needed

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-6 text-gray-600 text-sm">
      {/* Social Icons */}
      <div className="mb-4 flex justify-center gap-8 text-2xl">
        <a
          href="https://github.com/pranav1495"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition"
        >
          <FaGithub />
        </a>
        &nbsp;&nbsp;
        <a
          href="https://www.linkedin.com/in/k-pranav-eswar1/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition"
        >
          <FaLinkedin />
        </a>
        &nbsp;&nbsp;
        <a
          href="mailto:pranavartist1@gmail.com"
          className="hover:text-red-500 transition"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-sm">
        © {new Date().getFullYear()} Pranav Eswar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
