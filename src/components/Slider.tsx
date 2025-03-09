import React, { useState } from "react";

interface SliderProps {
  images: string[];
  justify: string;
}

const Slider: React.FC<SliderProps> = ({ images, justify }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative h-[85%] w-[90%] mx-auto slider-block">
      <img
        src={images[currentIndex]}
        alt="Slide"
        className="w-full h-full object-cover images"
      />
      {/* Контейнер для стрелок и информации под слайдом */}
      <div className={`flex items-end ${justify} gap-2 `}>
        {/* Стрелка влево */}
        <button onClick={handlePrev} className="text-white text-3xl">
          ←
        </button>

        {/* Текущий слайд и общее количество */}
        <span className="text-white text-lg">
          {currentIndex + 1} / {images.length}
        </span>

        {/* Стрелка вправо */}
        <button onClick={handleNext} className="text-white text-3xl">
          →
        </button>
      </div>
    </div>
  );
};

export default Slider;
