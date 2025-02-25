import React from "react";
import Slider from "./Slider";

const WorkSectionTwo = () => {
  const images = [
    "/assets/img/img1.jpg",
    "/assets/img/img2.jpg",
    "/assets/img/img3.jpg"
  ];

  return (
    <div className="h-[40rem] flex flex-row-reverse bg-gray-900 text-white py-4">
      <div className="w-1/2 p-4">
        <h2 className="text-4xl font-semibold mb-4 text-center">Altersgerechte Bäder</h2>
        <p className="mb-4 text-2xl">Ein barrierefreies Bad bietet Komfort und Sicherheit für alle Generationen. Wir planen und realisieren seniorengerechte Badezimmer, die sowohl funktional als auch modern sind. Unsere Lösungen ermöglichen eine selbstständige Nutzung des Badezimmers, auch bei eingeschränkter Mobilität.
        </p>
        <ul className="list-disc pl-5 text-2xl">
          <li>Barrierefreie Duschen (bodengleich)</li>
          <li>Rutschhemmende Bodenbeläge</li>
          <li>Haltegriffe und Stützsysteme</li>
          <li>Sanierung und Reparatur von Fliesenbelägen</li>
          <li>Fugenarbeiten und Silikonabdichtungen</li>
        </ul>
        <p className="pt-4 text-2xl">
        Benötigen Sie eine Beratung?<br />
        Kontaktieren Sie uns bei Fragen
        </p>
      </div>
      <div className="w-1/2 relative">
        <Slider images={images} />
      </div>
    </div>
  );
};

export default WorkSectionTwo;
