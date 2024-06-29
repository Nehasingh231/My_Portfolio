import React, { useState,  } from 'react';
import './Project.css';

const Project = ({ images, messages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
  };

  const goToNext = () => {
      const isLastSlide = currentIndex === images.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
  };

  return (
      <div className="slider">
          <button onClick={goToPrevious} className="slider-button">❮</button>
          <div className="slider-content">
              <img src={images[currentIndex]} alt={`slide-${currentIndex}`} className="slider-image" />
              <div className="slider-message">{messages[currentIndex]}</div>
          </div>
          <button onClick={goToNext} className="slider-button">❯</button>
      </div>
  );
};
  

export default Project;
