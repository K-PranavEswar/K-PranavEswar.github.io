import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './css/Header.css';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navItems = ['home', 'about', 'projects', 'skills', 'contact'];

  // Check window width for mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header className="header">
        {/* Mobile Black Top Bar */}
        {isMobile && (
          <div className="mobile-bar">
            <div className="menu-toggle" onClick={() => setOpen(!open)}>
              {open ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        )}

        {/* Header container for PC */}
        {!isMobile && (
          <div className="header-container">
            {/* Logo on desktop */}
            <a href="#home" className="logo desktop-logo">K PRANAV ESWAR</a>

            {/* Desktop Nav */}
            <nav className="desktop-nav">
              {navItems.map((item) => (
                <a key={item} href={`#${item}`} className="nav-link">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Mobile Sidebar Nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-nav"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 250 }}
          >
            {/* Close Icon inside sidebar */}
            <div className="sidebar-header">
              <FaTimes onClick={() => setOpen(false)} />
            </div>

            {/* Logo inside sidebar */}
            <div className="mobile-logo">
              <a href="#home" className="logo">K PRANAV ESWAR</a>
            </div>

            {/* Navigation Links */}
            <div className="sidebar-links">
              {navItems.map((item) => (
                <a key={item} href={`#${item}`} onClick={() => setOpen(false)}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
