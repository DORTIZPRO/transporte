import React, { useState, useEffect } from "react";
import Ampliacion1 from "../../../assets/imgs/servicios/Ampliacion1.jpg";
import Quincho from "../../../assets/imgs/servicios/Quincho.jpg";
import VentanasTecho from "../../../assets/imgs/servicios/VentanasTecho.jpg";

const SliderHome = () => {
  const [images, setImages] = useState([
    { id: 1, name: "Ampliacion1", src: Ampliacion1 },
    { id: 2, name: "Quincho", src: Quincho },
    { id: 3, name: "VentanasTecho", src: VentanasTecho },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const nextSlide = () => {
    setLoading(true);
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const progressWidth = ((currentIndex + 1) / images.length) * 100;

  return (
    <div className=" flex items-center justify-center rounded-md">
      <div className="relative">
        <div className="">
          <img
            className="object-cover h-56 md:h-96 rounded-lg w-full"
            src={images[currentIndex].src}
            alt={images[currentIndex].name}
          />
          {loading && (
            <div className="slider-bar absolute bottom-0 left-0 w-full h-1 bg-gray-300"></div>
          )}
        </div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-300">
          <div
            className="h-full bg-blue-500 rounded-lg shadow transition-all duration-300"
            style={{ width: `${progressWidth}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SliderHome;
