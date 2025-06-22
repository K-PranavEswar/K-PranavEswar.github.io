import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './css/Header.css';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-container">
          <a href="#home" className="logo">Portfolio</a>

          {/* Toggle icon switches between bars and X */}
          <div className="menu-toggle" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.aside
            className="sidebar"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <nav className="sidebar-links">
              {['home', 'projects', 'skills', 'contact'].map(id => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              ))}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
