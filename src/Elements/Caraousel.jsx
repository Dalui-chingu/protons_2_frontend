import React, { useState } from 'react';
import './Carousel.css'; // Import CSS file for styling

const Carousel = ({ items, imageWidth, imageHeight }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const handlePrev = () => {
    if (!transitioning) {
      setTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
      setTimeout(() => setTransitioning(false), 300); // Reset transition flag after transition duration
    }
  };

  const handleNext = () => {
    if (!transitioning) {
      setTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
      setTimeout(() => setTransitioning(false), 300); // Reset transition flag after transition duration
    }
  };

  return (
    <>
    <div className="carousel">
      <button className="prev" onClick={handlePrev}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <div className={`carousel-content ${transitioning ? 'transitioning' : ''}`}>
      <img className="carousel-image" src={items[currentIndex].image} alt={items[currentIndex].name} style={{ width: imageWidth, height: imageHeight }} />
        <h2>{items[currentIndex].name}</h2>
        <p>{items[currentIndex].description}</p>
      </div>
      <button className="next" onClick={handleNext}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
    </>
  );
};

export default Carousel;