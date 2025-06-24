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
      setHideAfterClick(false); // reset if user scrolls again
    } else {
      setShowArrow(false); // hide when near top
    }
  };

  const handleClick = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    setTimeout(() => {
      setHideAfterClick(true);
    }, 1200); // delay to allow scroll to complete
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`scroll-arrow ${showArrow ? 'fade-in' : ''} ${hideAfterClick ? 'fade-out' : ''}`}
      onClick={handleClick}
    >
      <FaArrowUp />
    </div>
  );
};

export default Scroll;
