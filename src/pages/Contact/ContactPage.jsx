// ContactPage.jsx
import React from "react";
import ContactCard from "../../components/Contact/ContactCard";
import ContactForm from "../../components/Contact/ContactForm";
import "../../components/Contact/ContactPage.css";

export default function ContactPage() {
  return (
    <div className="heroContainer">
      <div className="contentWrapper">
        <h1>CONTÁCTANOS</h1>

        <div className="contactContainer">
          {/* Columna izquierda */}
          <div className="leftColumn">
            <ContactCard
              title="Oficina Matriz"
              address="Calle y Pasaje Eloy Alfaro, Sánchez Cocha, La Joya de los Sachas, Orellana, Ecuador"
              phone1="(093) 2253401"
              phone2="(093) 2253162"
            />

            <ContactCard
              title="Sucursal El Coca"
              address="Av. Quito y Río Napo, junto al parque central"
              phone1="0990712238"
            />

            <div className="infoBlock">
              <h3>Horario de atención a domicilio</h3>
              <p>
                <strong>Lunes a Viernes:</strong> 8:00 – 17:00<br />
                <strong>Sábados:</strong> 8:00 – 13:00
              </p>
            </div>

            <div className="infoBlock">
              <h3>Cobertura</h3>
              <p>
                El Coca, Francisco de Orellana, La Joya de los Sachas y sectores
                rurales cercanos.
              </p>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="rightColumn">
            <ContactForm />
            <div className="imageWrapper">
              <img src="/images/contacto.webp" alt="Cliente feliz" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

