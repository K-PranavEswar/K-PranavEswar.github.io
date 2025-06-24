import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './css/Scroll.css';

const Scroll = () => {
  const [showArrow, setShowArrow] = useState(false);
  const [hideAfterClick, setHideAfterClick] = useState(false);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    if (scrolled > 100) {
      setShowArrow(true);
      setHideAfterClick(false);
    } else {
      setShowArrow(false);
    }
  };

  const handleClick = () => {
    const home = document.getElementById('home');
    if (home) {
      home.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    setTimeout(() => {
      setHideAfterClick(true);
    }, 1500);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return showArrow && !hideAfterClick ? (
    <div className="scroll-arrow show" onClick={handleClick}>
      <FaArrowUp />
    </div>
  ) : null;
};

export default Scroll;
