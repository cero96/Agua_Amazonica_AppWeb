// src/components/Sidebar.jsx
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

const links = [
  { label: "INICIO", path: "/", icon: "home" },
  { label: "SOLICITAR PRODUCTO", path: "/promotions", icon: "local_offer" },
  { label: "PRODUCTOS", path: "/products", icon: "water_drop" },
  { label: "NOSOTROS", path: "/company", icon: "info" },
  { label: "CONTACTO", path: "/contacts", icon: "mail" },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Cerrar menú al hacer clic en un enlace (solo móvil)
  useEffect(() => {
    if (isMobileMenuOpen) {
      const closeMenu = () => setIsMobileMenuOpen(false);
      window.addEventListener("resize", closeMenu);
      return () => window.removeEventListener("resize", closeMenu);
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Botón hamburguesa (solo móvil) */}
      <button
        className="sidebar__mobile-toggle"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span className="material-symbols-outlined">
          {isMobileMenuOpen ? "close" : "menu"}
        </span>
      </button>

      <aside
        className={`sidebar ${isCollapsed ? "collapsed" : ""} ${
          isMobileMenuOpen ? "open" : ""
        }`}
      >
        {/* Botón de colapso (desktop) */}
        <button
          className="sidebar__toggle"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? "Expandir menú" : "Colapsar menú"}
        >
          <span className="material-symbols-outlined">
            {isCollapsed ? "chevron_right" : "chevron_left"}
          </span>
        </button>

        {/* Logo */}
        <div className="sidebar__brand">
          <img src="/images/logo/Icono_Monkey.jpeg" alt="Agua Amazónica" />
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
              end
              onClick={() => setIsMobileMenuOpen(false)} // Cierra al hacer clic
            >
              <span className="material-symbols-outlined sidebar__icon">
                {link.icon}
              </span>
              <span className="sidebar__link-text">{link.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}
