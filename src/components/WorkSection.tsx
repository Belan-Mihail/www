import React from "react";
import Slider from "./Slider";
import './Work.css'; 

const WorkSection = () => {
  const images = [
    "/assets/img/img1.jpg",
    "/assets/img/img2.jpg",
    "/assets/img/img3.jpg",
    "/assets/img/img4.jpg",
    "/assets/img/img5.jpg",
    "/assets/img/img6.jpg",
    "/assets/img/img7.jpg",
    "/assets/img/img8.jpg",
    "/assets/img/img9.jpg",
    "/assets/img/img10.jpg",
  ];

  return (
    <div className="h-[50rem] flex bg-gradient-to-b from-gray-900 to-gray-800 text-white py-10 px-8 main-container" style={{
      background: 'linear-gradient(to bottom, #0f172a, #618dc8, #0f172a)',
    }}>
  {/* Внутренний контейнер с фоном bg-gray-900 */}
  <div className="w-1/2 border-effect p-8 flex flex-col justify-center space-y-4 m-4 bg-gray-900 bg-opacity-80 rounded-lg shadow-xl hover:bg-[#425174] main-block text-section" style={{
      background: 'linear-gradient(to bottom, #0f172a, #354458, #0f172a)',
    }}>
        <h2 className="text-4xl font-semibold text-center text-gradient">Fliesenarbeiten</h2>
        <p className="text-2xl leading-relaxed text-center">
        Fliesenarbeiten
        Wir bieten professionelle Fliesenverlegung für private und gewerbliche Kunden. Ob Boden- oder Wandfliesen, Mosaikarbeiten oder großformatige Fliesen – wir garantieren eine präzise und ästhetisch anspruchsvolle Umsetzung.
        </p>
        <ul className="list-disc pl-5 text-2xl space-y-2">
          <li>Verlegen von Wand- und Bodenfliesen</li>
          <li>Mosaikarbeiten</li>
          <li>Natursteinverlegung</li>
          <li>Sanierung und Reparatur von Fliesenbelägen</li>
          <li>Fugenarbeiten und Silikonabdichtungen</li>
        </ul>
        <p className="text-center text-2xl mt-4">
          Benötigen Sie eine Beratung? <br />
          Kontaktieren Sie uns bei Fragen
        </p>
      </div>
      
      {/* Контейнер для слайдера с фоном и плашкой */}
      <div className="main-block main-block-two w-1/2 border-effect relative flex flex-col justify-center m-4 bg-gray-900 bg-opacity-80 rounded-lg shadow-xl hover:bg-[#425174]" style={{
      background: 'linear-gradient(to bottom, #0f172a, #354458, #0f172a)',
    }}>
        
          <Slider images={images} justify="justify-end" />
        
      </div>
    </div>
  );
};

export default WorkSection;
