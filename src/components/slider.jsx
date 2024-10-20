import React, { useState } from 'react';
import '../css/Imageslider.css'; // Import CSS for styling

const images = [
  './blur1.png',
  './blur2.png',
  './blur3.png',
  './blur4.png',
  './blur5.png',
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container absolute right-[800px]">
      <div className="slider-wrapper">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            {index === currentIndex && (
              <img src={image} alt={`Slide ${index}`} className="slider-image" />
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="arrow left" onClick={handlePrev}>
        &#8592;
      </button>
      <button className="arrow right" onClick={handleNext}>
        &#8594;
      </button>
    </div>
  );
};

export default ImageSlider;
