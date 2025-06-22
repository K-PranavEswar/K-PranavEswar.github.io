import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './css/Header.css';

const Header = () => {
  const [open, setOpen] = useState(false);

  const navItems = ['home', 'about','projects', 'skills', 'contact'];

  return (
    <>
      <header className="header sticky-top bg-white shadow-sm px-3 py-2">
        <div className="d-flex justify-content-between align-items-center container-fluid">
          <a href="#home" className="fs-4 fw-bold text-dark text-decoration-none"><b>Portfolio</b></a>

          {/* Hamburger icon for small screens */}
          <div className="d-md-none fs-4 text-dark" onClick={() => setOpen(!open)} role="button">
            {open ? <FaTimes /> : <FaBars />}
          </div>

          {/* Desktop navigation */}
          <nav className="d-none d-md-flex gap-4">
            {navItems.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-primary text-decoration-none fw-medium hover-red"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile navigation menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-nav position-fixed top-0 start-0 w-100 h-100 bg-light d-flex flex-column align-items-center justify-content-center z-3"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            {navItems.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="fs-4 mb-4 text-decoration-none text-primary hover-red"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
