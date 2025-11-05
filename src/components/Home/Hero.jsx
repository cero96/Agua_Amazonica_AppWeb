import React from "react";
import "./hero.css";

export default function Hero() {
  return (
    <section className="heroContainer">
      <div className="contentWrapper">
        <div className="contactContainer">

          {/* Columna izquierda */}
          <div className="leftColumn">
            <div className="contactCard">
              <h3>100% Natural</h3>
              <p>Agua mineral pura de los Andes, saludable y refrescante.</p>
            </div>

            <div className="infoBlock">
              <h3>Beneficios</h3>
              <p>Sin aditivos, directamente desde manantiales naturales.</p>
            </div>
             <div className="infoBlock" >
                <h3>Bienestar sin límites</h3>
                <p>100% Natural | 0 Aditivos | ∞ Bienestar</p>
              </div>
          </div>

             

          {/* Columna derecha */}
          <div className="rightColumn">
            <div className="contactForm">
              <h3>Elegir pureza tiene su premio</h3>
              <p style={{ textAlign: "center" }}>
                Agua mineral de los Andes, pura y saludable para tu bienestar diario.
              </p>



              <div className="imageWrapper">
                <img
                  src="/images/productos/Botellon_20litros.png"
                  alt="Botella grande"
                />
                <img
                  src="/images/productos/agua_botella_500ml.png"
                  alt="Botella pequeña"
                  style={{ marginLeft: "1rem" }}
                />
              </div>

              <div className="checkbox" style={{ justifyContent: "center", marginTop: "1rem" }}>
                <button className="submitButton" style={{ background: "#bde038" }}>
                  Comprar Ahora
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
