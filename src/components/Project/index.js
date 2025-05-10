import React, { useState } from 'react';
import './Project.css';

const Project = ({ images, messages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleSourceClick = () => {
    window.open(messages[currentIndex].sourceUrl, '_blank');
  };

  const handleDemoClick = () => {
    window.open(messages[currentIndex].demoUrl, '_blank');
  };

  return (
    <div className="project-wrapper">
      <button className="nav-btn left" onClick={goToPrevious}>❮</button>
      
      <div className="project-card">
        <img src={images[currentIndex]} alt="project" className="project-img" />

        <div className="project-info">
          <h2>{messages[currentIndex].heading}</h2>
          <p>{messages[currentIndex].text}</p>
          <div className="project-buttons">
            <button onClick={handleSourceClick}>Source Code</button>
            <button onClick={handleDemoClick}>Live Demo</button>
          </div>
        </div>
      </div>

      <button className="nav-btn right" onClick={goToNext}>❯</button>
    </div>
  );
};

export default Project;
