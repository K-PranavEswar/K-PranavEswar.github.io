import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/picon.png';
import './css/Header.css';

const navItems = ['home', 'about', 'resume', 'skills', 'projects', 'certifications', 'gallery', 'contact'];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const toggleNav = () => setIsOpen(!isOpen);
  const closeNav = () => setIsOpen(false);

  // ✅ NEW: Function to handle smooth scrolling
  const handleNavClick = (e, item) => {
    e.preventDefault(); // Prevent the default anchor tag jump
    const section = document.getElementById(item);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    closeNav();
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item));
      const scrollPosition = window.scrollY + 150;

      sections.forEach(section => {
        if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const renderNavLinks = () =>
    navItems.map((item) => (
      <a
        key={item}
        href={`#${item}`}
        className={`nav-link ${activeLink === item ? 'active' : ''}`}
        // ✅ CHANGED: Use the new click handler
        onClick={(e) => handleNavClick(e, item)}
      >
        {item.charAt(0).toUpperCase() + item.slice(1)}
      </a>
    ));

  return (
    <>
      <header className="header">
        <div className="header-container">
          <a href="#home" className="logo" onClick={(e) => handleNavClick(e, 'home')}>
            <img src={logo} alt="Logo" className="logo-img" />
            <span className="logo-text">PRANAV ESWAR</span>
          </a>

          <nav className="nav-desktop">{renderNavLinks()}</nav>

          <div className="nav-toggle" onClick={toggleNav} aria-label="Toggle Navigation">
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="nav-mobile"
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          >
            <div className="nav-mobile-header">
              <a href="#home" className="logo" onClick={(e) => handleNavClick(e, 'home')}>
                <img src={logo} alt="Logo" className="logo-img" />
                <span className="logo-text">PRANAV ESWAR</span>
              </a>
              <FaTimes onClick={closeNav} />
            </div>
            <div className="nav-mobile-links">{renderNavLinks()}</div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;