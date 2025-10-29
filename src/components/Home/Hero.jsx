import React from "react";
import "./hero.css";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero__overlay"></div>

      {/* TÍTULO (arriba derecha) */}
      <div className="hero__title-container">
        <h1 className="hero__title">
          Elegir pureza <span>tiene su premio</span>
        </h1>
      </div>

      {/* BOTÓN CTA - INDEPENDIENTE */}
      <button className="hero__cta-button">Comprar Ahora</button>

      {/* BOTELLAS (centro) */}
      <div className="hero__center">
        <div className="hero__bottles">
          <div className="bottle bottle--left">
            <img src="/images/productos/bottle-left.png" alt="Botella Izquierda" />
          </div>
          <div className="bottle bottle--right">
            <img src="/images/productos/bottle-right.png" alt="Botella Derecha" />
          </div>
        </div>
      </div>

      {/* MEDALLA (abajo izquierda) */}
      <div className="hero__bottom-left">
        <img src="/images/badges/medalla.png" alt="Medalla" />
      </div>
    </div>
  );
}