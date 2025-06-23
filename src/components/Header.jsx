import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './css/Header.css';

const navItems = ['home', 'about', 'projects', 'skills', 'contact'];

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

  return (
    <>
      <header className="header">
        <div className="header-container">
          <a href="#home" className="logo">PRANAV ESWAR</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          <nav className="nav-desktop">
            {navItems.map((item) => (
              <a key={item} href={`#${item}`} className="nav-link">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </nav>

          <div className="nav-toggle" onClick={toggleNav}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="nav-mobile"
            initial={
              isMobile
                ? { x: '-100%', scale: 1.1, opacity: 0 }
                : { x: '-100%' }
            }
            animate={
              isMobile
                ? { x: 0, scale: 1, opacity: 1 }
                : { x: 0 }
            }
            exit={
              isMobile
                ? { x: '-100%', scale: 0.95, opacity: 0 }
                : { x: '-100%' }
            }
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
