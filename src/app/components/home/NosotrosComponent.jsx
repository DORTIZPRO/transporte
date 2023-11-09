import React from "react";
import Valuna from "../../assets/imgs/logo/Valuna.png";
import Carousel from "../utils/Carousel/Carousel";

const NosotrosComponent = () => {
  return (
    <>
      <div class="py-16 bg-white">
        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 ">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 ">
            <div class="md:5/12 lg:w-5/12">
              <img src={Valuna} alt="image" className="w-2/3" loading="lazy" />
            </div>
            <div class="md:7/12 lg:w-6/12 border rounded-xl border-blue-600 p-4">
              <h2 class="text-2xl text-blue-600 font-bold md:text-4xl ">
                En Valunas Construcciones estamos para ayudarte.
              </h2>
              <p class="mt-6 text-gray-800">
                Somos una pequeña empresa que brindamos servicios de
                construcción de alta calidad, nos hemos ganado la confianza de
                nuestros clientes por el profesionalismo y el detalle en cada
                uno de nuestros servicios.
              </p>
              <p class="mt-4 text-gray-800">
                {" "}
                Nos esforzamos por utilizar los mejores materiales y las mejores
                técnicas de construcción, y trabajamos arduamente para completar
                cada proyecto en el tiempo y presupuesto acordados. Estamos
                comprometidos con la satisfacción total de nuestros clientes, y
                trabajamos duro para garantizar que cada servicio de
                construcción se ajuste a sus necesidades y expectativas.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-10">
        <Carousel />
      </div>
    </>
  );
};

export default NosotrosComponent;
