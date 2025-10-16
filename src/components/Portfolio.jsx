import React from 'react';
import { motion } from 'framer-motion';
import './css/Portfolio.css';

import portrait7 from '../assets/leo10.jpg';
import portrait8 from '../assets/lmsuiii.jpg';
import portrait13 from '../assets/prithviraj.jpg';
import portrait15 from '../assets/ranbir.jpg';

const artworks = [
  { src: portrait7, alt: 'Leo Messi' },
  { src: portrait8, alt: 'LM10 & CR7' },
  { src: portrait13, alt: 'Prithviraj Sukumaran' },
  { src: portrait15, alt: 'Ranbir Kapoor' },
];

const Portfolio = () => {
  return (
    // ✅ CHANGED id to "gallery" to match your navigation
    <section className="portfolio-section" id="gallery">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Gallery
      </motion.h2>
      <motion.p
        className="portfolio-subtext"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        A few of my finest hand-drawn portraits—where every stroke reflects passion, precision, and personality.
      </motion.p>

      <div className="portfolio-grid">
        {artworks.map((art, index) => (
          <motion.a
            href={art.src}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="portfolio-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
          >
            <img src={art.src} alt={art.alt} className="portfolio-image" loading="lazy" />
            <div className="portfolio-overlay">
              <div className="overlay-plus">+</div>
              <div className="overlay-title">{art.alt}</div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;