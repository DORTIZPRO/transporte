import React from "react";
import Ampliacion1 from "../../../assets/imgs/servicios/Ampliacion1.jpg";
import Quincho from "../../../assets/imgs/servicios/Quincho.jpg";
import VentanasTecho from "../../../assets/imgs/servicios/VentanasTecho.jpg";

const CardFotosHome = () => {
  return (
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <div class="w-full rounded-lg  shadow-blue-400 p-2 flex flex-col justify-center items-center shadow">
          <img
            src={Ampliacion1}
            className="h-64 w-full object-contain rounded-xl"
            alt=""
            srcset=""
          />
        </div>

        <div class="w-full rounded-lg  shadow-blue-400 p-2 flex flex-col justify-center items-center shadow">
          <img
            src={Quincho}
            className="h-64 w-full object-contain rounded-xl"
            alt=""
            srcset=""
          />
        </div>

        <div class="w-full rounded-lg  shadow-blue-400 p-2 flex flex-col justify-center items-center shadow">
          <img
            src={VentanasTecho}
            className="h-64 w-full object-contain rounded-xl"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </section>
  );
};

export default CardFotosHome;
