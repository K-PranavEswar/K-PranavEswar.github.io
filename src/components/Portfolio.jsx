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
  { src: portrait13, alt: 'Prithviraj Portrait' },
  { src: portrait15, alt: 'Ranbir Kapoor Art' },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <h2 className="portfolio-title">My Portfolio</h2>
      <p className="portfolio-subtext">
        <em>Below are a few of my finest hand-drawn portraits — where every stroke reflects passion, precision, and personality.</em>
      </p>

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
            transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
          >
            <img src={art.src} alt={art.alt} className="portfolio-image" loading="lazy" />
            <div className="portfolio-overlay">
              <div className="overlay-title">{art.alt}</div>
              <div className="overlay-plus">+</div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
