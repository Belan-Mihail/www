import React from "react";
import Slider from "./Slider";

const WorkSection = () => {
  const images = [
    "/assets/img/img1.jpg",
    "/assets/img/img2.jpg",
    "/assets/img/img3.jpg"
  ];

  return (
    <div className="h-[40rem] flex bg-gray-900 text-white py-4">
      <div className="w-1/2 p-4">
        <h2 className="text-4xl font-semibold mb-4 text-center">Fliesenarbeiten </h2>
        <p className="mb-4 text-2xl">Wir bieten professionelle Fliesenverlegung für private und gewerbliche Kunden. Egal ob Boden- oder Wandfliesen, Mosaikarbeiten oder großformatige Fliesen – wir sorgen für eine präzise und ästhetische Umsetzung. Dabei arbeiten wir mit hochwertigen Materialien und sorgen für langlebige, pflegeleichte Ergebnisse.
        </p>
        <ul className="list-disc pl-5 text-2xl">
          <li>Verlegen von Wand- und Bodenfliesen</li>
          <li>Mosaikarbeiten</li>
          <li>Natursteinverlegung</li>
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

export default WorkSection;
