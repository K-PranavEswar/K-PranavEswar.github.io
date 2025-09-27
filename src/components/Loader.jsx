import React, { useState, useEffect } from 'react';
import './css/Loader.css';
import tigerLogo from '../assets/picon.png';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setHide(true), 500); // allow fade-out
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  if (hide) return null;

  return (
    <div className="loader-container">
      <img src={tigerLogo} alt="Logo" className="loader-logo" />
      <p className="loader-hint">Please Wait</p>
      <div className="loader-text">
        Initializing <span>My Website...</span>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="percent">{progress}%</p>
    </div>
  );
};

export default Loader;
