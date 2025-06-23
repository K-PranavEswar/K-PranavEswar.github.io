import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './css/Header.css';

const Header = () => {
  const [open, setOpen] = useState(false);
  const navItems = ['home', 'about', 'projects', 'skills', 'contact'];

  return (
    <>
      <header className="header">
        <div className="header-container">
          <a href="#home" className="logo">K PRANAV ESWAR</a>

          {/* Hamburger menu for mobile */}
          <div className="menu-toggle" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </div>

          {/* Desktop nav */}
          <nav className="d-none d-md-flex gap-4">
            {navItems.map((item) => (
              <a key={item} href={`#${item}`} className="nav-link">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile nav sliding panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-nav"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 250 }}
          >
            <div className="sidebar-header">
              <FaTimes onClick={() => setOpen(false)} />
            </div>
            <div className="sidebar-links">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setOpen(false)}
                >
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
