// src/pages/Promotion.jsx
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import styles from "./Promotion.module.css";
import "leaflet/dist/leaflet.css";

// Imágenes
const pack500 = "/images/productos/bottle-left.png";
const botellon = "/images/productos/botellon-llave.webp";

// Zona de cobertura
const ZONA_COBERTURA = {
  center: [-0.1807, -78.4678],
  radius: 8000,
};

// Marcador arrastrable
function DraggableMarker({ position, setPosition }) {
  useMapEvents({
    click(e) {
      setPosition([e.latlng.lat, e.latlng.lng]);
    },
  });

  return position ? <Marker position={position} draggable /> : null;
}

// Cálculo de distancia (Haversine)
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c * 1000;
};

const Promotion = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    producto: "",
    cantidad: 1,
    direccion: "",
  });

  const [position, setPosition] = useState(null);
  const [costoEntrega, setCostoEntrega] = useState(0);
  const [fueraDeCobertura, setFueraDeCobertura] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    if (position) {
      const distance = calculateDistance(
        ZONA_COBERTURA.center[0],
        ZONA_COBERTURA.center[1],
        position[0],
        position[1]
      );
      if (distance > ZONA_COBERTURA.radius) {
        setCostoEntrega(1.5);
        setFueraDeCobertura(true);
      } else {
        setCostoEntrega(0);
        setFueraDeCobertura(false);
      }
    }
  }, [position]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position) {
      alert("Selecciona tu ubicación en el mapa.");
      return;
    }

    const precio = formData.producto === "rellenada" ? 1.0 : 6.5;
    const total = precio * formData.cantidad + costoEntrega;

    alert(`Promoción solicitada! Total: $${total.toFixed(2)}`);

    setFormData({ nombre: "", telefono: "", producto: "", cantidad: 1, direccion: "" });
    setPosition(null);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Fondo parallax fijo */}
      <div className={styles.heroBackground}></div>

      {/* Contenedor principal con scroll natural */}
      <div className={styles.heroContainer}>
        <div className={styles.contentWrapper}>
          <h1>Promociones</h1>

          <div className={styles.offerGrid}>
            <div className={styles.offerCard}>
              <img src={pack500} alt="Pack 500ML" className={styles.offerImage} />
              <h3>Rellenada Económica</h3>
              <p>Solo <strong>$1.00</strong> por galón</p>
            </div>
            <div className={styles.offerCard}>
              <img src={botellon} alt="Botellón" className={styles.offerImage} />
              <h3>2 Botellónes Completos + Dispensador de Agua </h3>
              <p>Solo <strong>$11.50</strong> todo.</p>
            </div>
          </div>

          <div className={styles.mechanics}>
            <h3>¿Cómo obtener la promoción?</h3>
            <hr />
            <ul>
              <li>Elige su mejor oferta</li>
              <li>Toca el mapa para ubicarte</li>
              <li>Completa el formulario para solicitar tu promoción</li>
            </ul>
          </div>

          <div className={styles.form}>
            <h3>Solicita tu promoción</h3>
            <form onSubmit={handleSubmit}>
              <label htmlFor="nombre">Nombres Completos</label>
              <input
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Tu nombre completo"
                required
              />

              <label htmlFor="telefono">Teléfono</label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="0991234567"
                pattern="[0-9]{10}"
                title="Ingresa 10 dígitos"
                required
              />

              <label htmlFor="producto">Producto</label>
              <select id="producto" name="producto" value={formData.producto} onChange={handleChange} required>
                <option value="" disabled>Selecciona</option>
                <option value="rellenada">Rellenada - $1.00/galón</option>
                <option value="botellon">2 Botellónes + Dispensador de agua - $11.50</option>
              </select>

              <label htmlFor="cantidad">Cantidad</label>
              <input
                id="cantidad"
                type="number"
                name="cantidad"
                value={formData.cantidad}
                onChange={handleChange}
                min="1"
                max="50"
                required
              />

              <label htmlFor="direccion">Referencia de dirección</label>
              <input
                id="direccion"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                placeholder="Ej: Frente al parque, casa azul"
                required
              />

              <div className={styles.mapWrapper}>
                <MapContainer center={ZONA_COBERTURA.center} zoom={12} style={{ height: "100%" }}>
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <DraggableMarker position={position} setPosition={setPosition} />
                </MapContainer>
                {!position && (
                  <div className={styles.mapPlaceholder}>
                    Toca el mapa para seleccionar tu ubicación
                  </div>
                )}
              </div>

              {position && (
                <p className={`${styles.deliveryInfo} ${fueraDeCobertura ? styles.warning : styles.success}`}>
                  {fueraDeCobertura ? "+$1.50 (fuera de zona)" : "Entrega gratuita"}
                </p>
              )}

              <button type="submit" className={styles.submitButton}>
                ¡Quiero mi promoción!
              </button>
            </form>
          </div>

          <p className={styles.note}>
            Válida del 1 nov al 31 dic 2025. Entrega gratuita en 8 km.
          </p>
        </div>

        {/* Botón volver arriba */}
        <button
          className={`${styles.backToTop} ${showBackToTop ? styles.show : ""}`}
          onClick={scrollToTop}
          aria-label="Volver arriba"
        >
          ↑
        </button>
      </div>
    </>
  );
};

export default Promotion;