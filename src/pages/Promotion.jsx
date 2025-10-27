import React, { useState } from "react";
import styles from "./css/Promotion.module.css";

const Promotion = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    producto: "",
    cantidad: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos a una API
    console.log("Registro enviado:", formData);
    alert("¡Gracias por registrarte! Participas en la promoción.");
    setFormData({ nombre: "", email: "", producto: "", cantidad: 1 });
  };

  return (
    <div className={styles["promotion-container"]}>
      <h1>"El agua es la fuerza motriz de toda la naturaleza." <span>Leonardo da Vinci</span></h1>
      <h2>Promoción 2x1 los lunes</h2>
      <p>Disfruta de nuestra oferta especial: ¡compra una botella y llévate otra gratis todos los lunes!</p>

      <div className={styles["promotion-mechanics"]}>
        <h3>Mecánica de participación</h3>
        <ul>
          <li>Realiza tu pedido los lunes y aplica el 2x1 automáticamente.</li>
          <li>Por cada pedido, acumula puntos para canjear por productos.</li>
          <li>Participa en sorteos mensuales de premios exclusivos.</li>
        </ul>
      </div>

      <div className={styles["promotion-form"]}>
        <h3>Regístrate para participar</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre completo"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Correo electrónico"
            required
          />
          <select
            name="producto"
            value={formData.producto}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Selecciona un producto</option>
            <option value="botella-500ml">Botella 500ml</option>
            <option value="botella-1l">Botella 1L</option>
            <option value="pack-6-botellas">Pack 6 botellas</option>
          </select>
          <input
            type="number"
            name="cantidad"
            value={formData.cantidad}
            onChange={handleChange}
            min="1"
            placeholder="Cantidad"
            required
          />
          <button type="submit">Participar</button>
        </form>
      </div>

      <p className={styles["promotion-note"]}>
        Promoción válida desde el 1 de noviembre hasta el 31 de diciembre de 2025.
      </p>
    </div>
  );
};

export default Promotion;