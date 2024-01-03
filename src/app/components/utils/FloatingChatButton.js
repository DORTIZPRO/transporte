// FloatingChatButton.js
import React from "react";
import Logo from "./wtp.png"; // Importa la imagen

const FloatingChatButton = ({ number }) => {
  const openWhatsApp = () => {
    // Abre WhatsApp con el número proporcionado
    window.open(`https://wa.me/${number}`, "_blank");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
      }}
      onClick={openWhatsApp}
    >
      <img
        src={Logo} // Usa la variable que contiene la ruta de la imagen
        alt="WhatsApp"
        style={{ width: "50px", height: "50px", marginRight: "5px" }}
      />
      <span style={{ fontSize: "14px", color: "#333" }}>
        ¿En qué te podemos ayudar?
      </span>
    </div>
  );
};

export default FloatingChatButton;
