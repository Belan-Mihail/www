import React from "react";
import Slider from "./Slider";

const WorkSection = () => {
  const images = [
    "../assets/img/img1.jpg",
    "../assets/img/img2.jpg",
    "../assets/img/img3.jpg"
  ];

  return (
    <div className="h-[40rem] flex">
      <div className="w-1/2 p-4">
        <h2 className="text-2xl font-semibold mb-4">Описание работ</h2>
        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac gravida odio. Aliquam erat volutpat.</p>
        <ul className="list-disc pl-5">
          <li>Ремонт</li>
          <li>Отделка</li>
          <li>Монтаж</li>
          <li>Электрика</li>
        </ul>
      </div>
      <div className="w-1/2 relative">
        <Slider images={images} />
      </div>
    </div>
  );
};

export default WorkSection;
