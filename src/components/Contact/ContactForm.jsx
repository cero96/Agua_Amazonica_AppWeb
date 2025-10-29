
// ContactForm.jsx
import React from "react";
import "./ContactPage.css";

export default function ContactForm() {
  return (
    <form className="contactForm">
      <h3>Envíanos un mensaje</h3>
      <input type="text" placeholder="Nombres Completos" required aria-label="Nombres Completos" />
      <input type="tel" placeholder="Número de teléfono" required aria-label="Número de teléfono" />
      <input type="email" placeholder="Correo electrónico" required aria-label="Correo electrónico" />
      <textarea placeholder="Mensaje" rows="4" required aria-label="Mensaje"></textarea>

      <label className="checkbox">
        <input type="checkbox" aria-label="Acepto recibir información" /> Acepto recibir información vía correo electrónico
      </label>

      <button type="submit" className="submitButton">
        Enviar
      </button>
    </form>
  );
}