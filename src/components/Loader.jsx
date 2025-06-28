import React, { useState, useEffect } from 'react';
import './css/Loader.css';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20); // faster or slower loading animation

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-container">
      <p className="loader-hint">Please Wait</p>
      <h1 className="loader-text">
        Initializing <span>Your Digital Journey...</span>
      </h1>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="percent">{progress}%</p>
    </div>
  );
};

export default Loader;
