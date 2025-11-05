import React, { useState } from 'react';
import './hero.css';

// Importar Google Fonts en el index.html o con @import en CSS
// <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">

export default function Hero() {
  const [animating, setAnimating] = useState({ large: false, small: false, bottle: false });

  const handleClick = (size) => {
    setAnimating(prev => ({ ...prev, [size]: true }));
    setTimeout(() => {
      setAnimating(prev => ({ ...prev, [size]: false }));
    }, 600);
  };

  return (
    <section className="hero-container">
      <div className="hero-content">
        {/* Título de la empresa */}
        <h1 className="company-title">AGUA AMAZÓNICA</h1>

        {/* Frase principal con tipografía elegante */}
        <p className="hero-slogan">
          Escoger la pureza <span className="highlight">tiene su recompensa</span>
        </p>

        {/* Contenedor de botellas */}
        <div className="bottles-container">
          {/* Botellón 20L */}
          <div
            className={`bottle-wrapper ${animating.large ? 'bounce' : ''}`}
            onClick={() => handleClick('large')}
            role="button"
            tabIndex={0}
            aria-label="Botellón 20L"
          >
            <img
              src="/images/productos/Botellon_azul_trasparente-removebg-preview.png"
              alt="Botellón 20 litros - Agua Amazónica"
              className="bottle-image bottle-large"
            />
            <div className="bottle-label">Botellón 20L</div>
          </div>

          {/* Galón */}
          <div
            className={`bottle-wrapper ${animating.small ? 'bounce' : ''}`}
            onClick={() => handleClick('small')}
            role="button"
            tabIndex={0}
            aria-label="Galon de agua"
          >
            <img
              src="/images/productos/Galon_Blanco-removebg-preview.png"
              alt="Galon de agua - Agua Amazónica"
              className="bottle-image bottle-small"
            />
            <div className="bottle-label">Galon</div>
          </div>

          {/* Botella 500ml */}
          <div
            className={`bottle-wrapper ${animating.bottle ? 'bounce' : ''}`}
            onClick={() => handleClick('bottle')}
            role="button"
            tabIndex={0}
            aria-label="Botella 500ml"
          >
            <img
              src="/images/productos/agua_botella_500ml-removebg-preview.png"
              alt="Botella 500ml - Agua Amazónica"
              className="bottle-image bottle-medium"
            />
            <div className="bottle-label">Botella 500ml</div>
          </div>
        </div>

        {/* Botón CTA */}
        <button className="cta-button" aria-label="Comprar ahora">
          Comprar Ahora
        </button>
      </div>
    </section>
  );
}