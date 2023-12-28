import React from "react";
import DOM from "../../assets/imgs/logo/logo_dom.jpeg";
import Carousel from "../utils/Carousel/Carousel";

const NosotrosComponent = () => {
  return (
    <>
      <div class="py-16 bg-white">
        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 ">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 ">
            <div class="md:5/12 lg:w-5/12">
              <img src={DOM} alt="image" className="w-2/3" loading="lazy" />
            </div>
            <div class="md:7/12 lg:w-6/12 border rounded-xl border-blue-600 p-4">
              <h2 class="text-2xl text-blue-600 font-bold md:text-4xl ">
                Bienvenido a Transportes DOM
              </h2>
              <p class="mt-6 text-gray-800">
                En Transportes DOM, nos enorgullece ofrecer soluciones de
                transporte confiables y eficientes para tus necesidades de
                fletes y mudanzas. Con una sólida presencia tanto dentro como
                fuera de la Región Metropolitana, nos dedicamos a simplificar
                tus procesos de traslado, brindándote tranquilidad y confianza
                en cada servicio.
              </p>
              <h4 class="text-2xl text-blue-600 font-bold md:text-4xl ">
                Nuestra Misión:
              </h4>
              <p class="mt-4 text-gray-800">
                Facilitar tus mudanzas y fletes, brindando servicios de calidad
                que superen tus expectativas. Nos esforzamos por ser tu socio
                confiable en el transporte, proporcionando soluciones adaptadas
                a tus necesidades específicas.
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
