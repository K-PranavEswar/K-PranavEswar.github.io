import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './css/Header.css';

const navItems = ['home', 'about', 'resume', 'skills', 'projects', 'contact'];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleNav = () => setIsOpen(!isOpen);
  const closeNav = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent scrolling when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <>
      <header className="header">
        <div className="header-container">
          <a href="#home" className="logo">
            PRANAV ESWAR
          </a>

          <nav className="nav-desktop">
            {navItems.map((item) => (
              <a key={item} href={`#${item}`} className="nav-link">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </nav>

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
              <FaTimes onClick={closeNav} />
            </div>
            <div className="nav-mobile-links">
              {navItems.map((item) => (
                <a key={item} href={`#${item}`} onClick={closeNav}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
