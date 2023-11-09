import React from "react";
import CardDataHome from "../utils/Cards/CardDataHome";
import CardFotosHome from "../utils/Cards/CardFotosHome";
import SliderHome from "../utils/Sliders/SliderHome";

const HomeComponent = () => {
  return (
    <>
      <section className="md:hidden">
        <SliderHome />
      </section>
      <section className="hidden md:block">
        <CardFotosHome />
      </section>
      <div className="pb-10">
        <CardDataHome />
      </div>
    </>
  );
};

export default HomeComponent;
