import React, { useState } from "react";

const CardServicio = ({ image, nombre }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(true);
  };

  const handleCollapseClick = () => {
    setExpanded(false);
  };
  return (
    <>
      <div className="flex flex-col items-center p-8 rounded-xl shadow shadow-blue-300">
        <img
          className={`object-cover rounded-md w-full h-64 md:cursor-pointer ${
            expanded ? "scale-100" : "scale-100"
          } transition-all duration-300 hover:scale-110`}
          src={image}
          alt={nombre}
          onClick={handleExpandClick}
        />

        <h1 className="mt-4 text-2xl font-semibold text-black capitalize ">
          {nombre}
        </h1>
        {expanded && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center transition-all duration-300 z-50">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
              <button
                className="absolute top-0 right-0 m-4 h-8 w-8 ring-1 ring-blue-600 bg-white hover:bg-blue-300 rounded-full text-gray-800 text-xl font-semibold hover:text-gray-700 focus:text-gray-700"
                onClick={handleCollapseClick}
              >
                &times;
              </button>

              <img
                className="w-full h-96 object-contain"
                src={image}
                alt={nombre}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CardServicio;
