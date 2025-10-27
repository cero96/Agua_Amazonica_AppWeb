import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { label: "INICIO", path: "/" },
  { label: "PROMOCIONES", path: "/promotions" },
  { label: "PRODUCTOS", path: "/products" },
  { label: "SERVICIOS PARA EMPRESAS", path: "/services" },
  { label: "NUESTRA EMPRESA", path: "/company" },
  { label: "CONTACTOS", path: "/contacts" },
  { label: "BLOG Y NOTICIAS", path: "/blog" }
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <img src="/images/logo/logo1.png" alt="Agua Amazonica" />
      </div>

      <nav className="sidebar__nav">
        {links.map((link, i) => (
          <NavLink
            key={link.label}
            to={link.path}
            className={({ isActive }) => `sidebar__link ${isActive ? "active" : ""}`}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
