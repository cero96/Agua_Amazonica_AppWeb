import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      {/* Overlay */}
      <div className="hero__overlay"></div>

      {/* Título centrado */}
      <h1 className="hero__title">AGUA AMAZONICA</h1>

      {/* Medalla esquina superior derecha */}
      <img
        className="hero__badge"
        src="/images/badges/medalla.png"
        alt="Medalla"
      />

      {/* Botellas centradas */}
      <div className="hero__bottles">
        <img
          className="bottle bottle--left"
          src="/images/productos/bottle-left.png"
          alt="Botella izquierda"
        />
        <img
          className="bottle bottle--right"
          src="/images/productos/bottle-right.png"
          alt="Botella derecha"
        />
      </div>
    </section>
  );
}
