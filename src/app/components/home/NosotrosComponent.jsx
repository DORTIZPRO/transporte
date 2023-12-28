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
                Bienvenidos a Transportes DOM
              </h2>
              <p class="mt-6 text-gray-800">
                En Transportes DOM, nos enorgullece ofrecer soluciones de
                transporte confiables y eficientes para tus necesidades de
                fletes y mudanzas. Con una sólida presencia tanto dentro como
                fuera de la Región Metropolitana, nos dedicamos a simplificar
                tus procesos de traslado, brindándote tranquilidad y confianza
                en cada servicio.
              </p>
              <br />
              <h6 class="text-2xl text-blue-600 font-bold md:text-4xl ">
                Nuestra Misión:
              </h6>
              <p class="mt-4 text-gray-800">
                Facilitar tus mudanzas y fletes, brindando servicios de calidad
                que superen tus expectativas. Nos esforzamos por ser tu socio
                confiable en el transporte, proporcionando soluciones adaptadas
                a tus necesidades específicas.
              </p>
              <br />
              <h6 class="text-2xl text-blue-600 font-bold md:text-4xl ">
                Nuestros Servicios:
              </h6>
              <br />
              <ol start="2">
                <li>
                  <strong>Mudanzas Personalizadas:</strong> Diseñamos mudanzas a
                  medida, asegurándonos de que cada paso del proceso se adapte a
                  tus requisitos únicos.
                </li>
                <br />
                <li>
                  <strong>Fletes Eficientes:</strong> Ofrecemos servicios de
                  fletes rápidos y seguros para satisfacer las demandas de tu
                  empresa o negocio.
                </li>
                <br />
                <li>
                  <strong>Cobertura Regional:</strong> Ya sea que te mudes
                  dentro o fuera de la Región Metropolitana, contamos con una
                  red de transporte que abarca diversos destinos para tu
                  comodidad.
                </li>
              </ol>
              <br />
              <h6 class="text-2xl text-blue-600 font-bold md:text-4xl ">
                Por qué Elegirnos:
              </h6>
              <br />
              <ol start="2">
                <li>
                  <strong>Experiencia Confiable:</strong> Con años de
                  experiencia en el sector, hemos perfeccionado nuestros
                  servicios para garantizar la satisfacción del cliente.
                </li>
                <br />
                <li>
                  <strong>Equipo Profesional:</strong> Nuestro equipo está
                  formado por profesionales comprometidos que se esfuerzan por
                  brindar un servicio de calidad en cada proyecto.
                </li>
                <br />
                <li>
                  <strong>Compromiso con la Excelencia:</strong> Nos esforzamos
                  por superar tus expectativas, ofreciendo servicios de
                  transporte que se destacan por su eficiencia y atención al
                  detalle.
                </li>
              </ol>
              <br />
              <p>
                Confía en Transportes DOM para hacer que tus mudanzas y fletes
                sean simples, seguros y sin complicaciones. Estamos aquí para
                llevarte a donde necesitas estar. :)
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
