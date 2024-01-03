import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Agrega un listener para detectar el scroll
    const handleScroll = () => {
      // Verifica si el usuario ha bajado más de 100px
      const isScrolled = window.scrollY > 100;
      setIsVisible(isScrolled);
    };

    // Asocia el listener al evento de scroll
    window.addEventListener("scroll", handleScroll);

    // Limpia el listener al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Solo se ejecuta una vez al montar el componente

  const scrollToTop = () => {
    // Hace scroll hasta la parte superior de la página
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Hace el scroll de manera suave
    });
  };

  return (
    <div>
      {isVisible && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            left: "20px",
            backgroundColor: "#007BFF",
            color: "#fff",
            padding: "10px",
            borderRadius: "50%",
            cursor: "pointer",
          }}
          onClick={scrollToTop}
        >
          ↑ Subir
        </div>
      )}
    </div>
  );
};

export default ScrollToTopButton;
