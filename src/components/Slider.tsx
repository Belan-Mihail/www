import React, { useState, useEffect } from "react";



const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative h-full w-full">
      <img
        src={images[currentIndex]}
        alt="Slide"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-between items-center px-4">
        <button
          onClick={handlePrev}
          className="w-12 h-12 bg-black bg-opacity-50 text-white rounded-full flex justify-center items-center transform hover:scale-110 transition"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="w-12 h-12 bg-black bg-opacity-50 text-white rounded-full flex justify-center items-center transform hover:scale-110 transition"
        >
          → 
        </button>
      </div>
    </div>
  );
};

export default Slider;
