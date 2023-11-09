import React from "react";
import CardContacto from "../utils/Cards/CardContacto";

const ContactoComponent = () => {
  return (
    <>
      <div className="flex">
        <div className="mx-auto w-12/12 md:w-6/12">
          <CardContacto />
        </div>
      </div>
    </>
  );
};

export default ContactoComponent;
