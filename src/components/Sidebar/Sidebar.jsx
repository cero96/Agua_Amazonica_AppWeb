// src/components/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css"; // Asegúrate de que la ruta sea correcta

const links = [
  { label: "INICIO", path: "/", icon: "home" },
  { label: "PROMOCIONES", path: "/promotions", icon: "local_offer" },
  { label: "PRODUCTOS", path: "/products", icon: "water_drop" },,
  { label: "NOSOTROS", path: "/company", icon: "info" },
  { label: "CONTACTO", path: "/contacts", icon: "mail" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar__brand">
        <img src="/images/logo/logo1.png" alt="Agua Amazónica" />
      </div>

      {/* Navegación */}
      <nav className="sidebar__nav">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `sidebar__link ${isActive ? "active" : ""}`
            }
            end // Para que "/" no active en todas las rutas
          >
            {/* Icono */}
            <span className="material-symbols-outlined">{link.icon}</span>

            {/* Texto (solo visible en desktop y móvil) */}
            <span className="sidebar__link-text">{link.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}