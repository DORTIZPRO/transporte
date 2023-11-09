import React, { useState } from "react";
import CardServicio from "../utils/Cards/CardServicio";
import Ampliacion1 from "../../assets/imgs/servicios/Ampliacion1.jpg";
import Ampliaciones from "../../assets/imgs/servicios/cards/Ampliaciones.jpg";
import Albanileria from "../../assets/imgs/servicios/cards/Albanileria.jpg";
import EstructurasMetalicas from "../../assets/imgs/servicios/cards/EstructurasMetalicas.jpg";
import Ceramicas from "../../assets/imgs/servicios/cards/Ceramicas.jpg";
import Galpones from "../../assets/imgs/servicios/cards/Galpones.jpg";
import NoImagen from "../../assets/imgs/servicios/cards/NoImagen.png";
import Techumbres from "../../assets/imgs/servicios/cards/Techumbres.jpg";
import Radieres from "../../assets/imgs/servicios/cards/Radieres.jpg";
import Cobertizos from "../../assets/imgs/servicios/cards/Cobertizos.jpg";
import Pinturas from "../../assets/imgs/servicios/cards/Pinturas.jpg";
import Mueblerias from "../../assets/imgs/servicios/cards/Mueblerias.jpg";
import Gasfiteria from "../../assets/imgs/servicios/cards/Gasfiteria.jpg";

const ServiciosComponent = () => {
  const cardData = [
    {
      image: Ampliaciones,
      nombre: "Ampliaciones",
    },
    {
      image: Albanileria,
      nombre: "Albañilería",
    },
    {
      image: Ceramicas,
      nombre: "Cerámicas",
    },
    {
      image: EstructurasMetalicas,
      nombre: "Estructuras Metálicas",
    },
    {
      image: Radieres,
      nombre: "Radieres",
    },
    {
      image: Mueblerias,
      nombre: "Mueblerías",
    },
    {
      image: Galpones,
      nombre: "Galpones",
    },
    {
      image: Ampliacion1,
      nombre: "Segundos Pisos",
    },
    {
      image: Gasfiteria,
      nombre: "Gasfiterías",
    },
    {
      image: Pinturas,
      nombre: "Pinturas",
    },
    {
      image: Cobertizos,
      nombre: "Cobertizos",
    },
    {
      image: Techumbres,
      nombre: "Techumbres",
    },
  ];
  return (
    <>
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-black capitalize lg:text-4xl ">
          Nuestros Servicios
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
          {cardData.map((card, index) => (
            <CardServicio key={index} image={card.image} nombre={card.nombre} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiciosComponent;
