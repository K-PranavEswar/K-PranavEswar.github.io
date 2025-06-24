import React from 'react';
import './css/Portfolio.css';

// Import all portrait images
import portrait1 from '../assets/dhanush.jpg';
import portrait2 from '../assets/eagle.jpg';
import portrait3 from '../assets/hand.jpg';
import portrait4 from '../assets/ksurya.jpg';
import portrait5 from '../assets/kuttettan.jpg';
import portrait6 from '../assets/leo.jpg';
import portrait7 from '../assets/leo10.jpg';
import portrait8 from '../assets/lmsuiii.jpg';
import portrait9 from '../assets/naslen.jpg';
import portrait10 from '../assets/neymr.jpg';
import portrait11 from '../assets/paidworks1.jpg';
import portrait12 from '../assets/paidworks2.jpg';
import portrait13 from '../assets/prithviraj.jpg';
import portrait14 from '../assets/ramchrn.jpg';
import portrait15 from '../assets/ranbir.jpg';

// Artworks array
const artworks = [
  { src: portrait1, alt: 'Dhanush Portrait' },
  { src: portrait2, alt: 'Eagle Drawing' },
  { src: portrait3, alt: 'Hand Artwork' },
  { src: portrait4, alt: 'K Surya Portrait' },
  { src: portrait5, alt: 'Kuttettan Sketch' },
  { src: portrait6, alt: 'Leo Art' },
  { src: portrait7, alt: 'Leo Portrait 2' },
  { src: portrait8, alt: 'LMS UI Portrait' },
  { src: portrait9, alt: 'Naslen Drawing' },
  { src: portrait10, alt: 'Neymar Portrait' },
  { src: portrait11, alt: 'Paid Work 1' },
  { src: portrait12, alt: 'Paid Work 2' },
  { src: portrait13, alt: 'Prithviraj Portrait' },
  { src: portrait14, alt: 'Ram Charan Sketch' },
  { src: portrait15, alt: 'Ranbir Kapoor Art' },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <h2 className="portfolio-title">My Portfolio</h2>
      <div className="portfolio-grid">
        {artworks.map((art, index) => (
          <a
            href={art.src}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="portfolio-item"
          >
            <img
              src={art.src}
              alt={art.alt}
              className="portfolio-image"
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
