// FloatingChatButton.js
import React from "react";

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
        backgroundColor: "#25d366", // Color de fondo de WhatsApp
        padding: "10px",
        borderRadius: "50%",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={openWhatsApp}
    >
      <img
        src="wtp.png" // Reemplaza con la ruta de tu propio logo
        alt="WhatsApp"
        style={{ width: "30px", height: "30px" }}
      />
      <span style={{ marginLeft: "5px", fontSize: "14px", color: "#fff" }}>
        ¿En qué te podemos ayudar?
      </span>
    </div>
  );
};

export default FloatingChatButton;
