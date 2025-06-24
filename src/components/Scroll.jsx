import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './css/Scroll.css';

const Scroll = () => {
  const [showArrow, setShowArrow] = useState(false);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    setShowArrow(scrolled > 100);
  };

  const handleClick = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return showArrow ? (
    <div className="scroll-arrow" onClick={handleClick}>
      <FaArrowUp />
    </div>
  ) : null;
};

export default Scroll;
