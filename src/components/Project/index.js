import React, { useState } from 'react';
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

  const handleSourceClick = () => {
    window.open(messages[currentIndex].sourceUrl, '_blank');
  };

  const handleDemoClick = () => {
    window.open(messages[currentIndex].demoUrl, '_blank');
  };

  return ( 
    <div className="slider">
      <button onClick={goToPrevious} className="slider-button">❮</button>
      <div className="slider-content">
        <img src={images[currentIndex]} alt={`slide-${currentIndex}`} className="slider-image" />
        <div className="slider-message">
          <h2 className='heading'>{messages[currentIndex].heading}</h2>
          <p className='message'>{messages[currentIndex].text}</p>
          <button
            className='btn mt-20 mx-5 my-5 p-5 px-7'
            onClick={handleSourceClick}
          >
            {messages[currentIndex].buttonText}
          </button>
          <button
            className='btn mt-20 mx-5 my-10 p-5 px-7'
            onClick={handleDemoClick}
          >
            {messages[currentIndex].anotherButton}
          </button>
        </div>
      </div>
      <button onClick={goToNext} className="slider-button">❯</button>
    </div>
  );
};

export default Project;
