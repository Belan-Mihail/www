import React from "react";
import Slider from "./Slider";
import './Work.css'; 

const WorkSectionTwo = () => {
  const images = [
    "/assets/img/img11.jpg",
    "/assets/img/img12.jpg",
    "/assets/img/img13.jpg",
    "/assets/img/img14.jpg",
    "/assets/img/img15.jpg",
    "/assets/img/img16.jpg",
    "/assets/img/img17.jpg",
    "/assets/img/img18.jpg",
    "/assets/img/img19.jpg",
    "/assets/img/img20.jpg",
  ];

  return (
    <div className="h-[50rem] flex bg-gradient-to-b text-white py-10 px-8 main-container" style={{
      background: 'linear-gradient(to bottom, #0f172a, #618dc8, #0f172a)',
    }}>
  <div className="w-1/2 main-block text-section p-8 border-effect flex flex-col justify-center space-y-4 bg-gray-900 bg-opacity-80 rounded-lg shadow-xl m-4 hover:bg-[#425174]" style={{
      background: 'linear-gradient(to bottom, #0f172a, #354458, #0f172a)',
    }}>
      
        <h2 className="text-4xl font-semibold text-center text-gradient">Altersgerechte Bäder</h2>
        <p className="text-2xl leading-relaxed text-center">
          Ein barrierefreies Bad bietet Komfort und Sicherheit für alle Generationen. Wir planen und realisieren seniorengerechte Badezimmer, die sowohl funktional als auch modern sind. Unsere Lösungen ermöglichen eine selbstständige Nutzung des Badezimmers, auch bei eingeschränkter Mobilität.
        </p>
        <ul className="list-disc pl-5 text-2xl space-y-2">
          <li>Barrierefreie Duschen (bodengleich)</li>
          <li>Rutschhemmende Bodenbeläge</li>
          <li>Haltegriffe und Stützsysteme</li>
          <li>Sanierung und Reparatur von Fliesenbelägen</li>
          <li>Fugenarbeiten und Silikonabdichtungen</li>
        </ul>
        <p className="text-center text-2xl mt-4">
          Benötigen Sie eine Beratung? <br />
          Kontaktieren Sie uns bei Fragen
        </p>
      </div>
      <div className="main-block main-block-two w-1/2 border-effect relative flex flex-col justify-center bg-gray-900 bg-opacity-80 rounded-lg shadow-xl m-4 hover:bg-[#425174]" style={{
      background: 'linear-gradient(to bottom, #0f172a, #354458, #0f172a)', 
    }}>
        <Slider images={images} justify="justify-start" />
      </div>
    </div>
  );
};

export default WorkSectionTwo;
