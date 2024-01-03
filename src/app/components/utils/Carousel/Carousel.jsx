import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importa todas las imágenes dentro de la carpeta "carousel"
const importAll = (r) => r.keys().map(r);
const images = importAll(
  require.context("../../../assets/imgs/carousel", false, /\.(jpg|jpeg|png)$/)
);

const settings = {
  arrows: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: {
    delay: 5000,
    autoplaySpeed: 1000,
    pauseOnHover: true,
  },
  responsive: [
    {
      arrows: false,
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

const Carousel = () => {
  const imagenes = images.map((ruta, index) => ({
    nombre: `Imagen ${index + 1}`,
    ruta,
  }));

  return (
    <div className="mx-auto w-full md:w-1/2">
      <h1 className="text-3xl my-10 font-semibold text-center text-black capitalize lg:text-4xl ">
        Nuestros Trabajos
      </h1>
      <Slider {...settings}>
        {imagenes.map((imagen, index) => (
          <div key={index} className="h-72 md:h-128">
            <img
              src={imagen.ruta}
              className="h-full w-full object-contain"
              alt={imagen.nombre}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
