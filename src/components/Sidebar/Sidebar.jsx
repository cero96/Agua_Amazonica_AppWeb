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

  // Cerrar menú móvil al cambiar tamaño de ventana
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  // Prevenir scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Botón hamburguesa (solo móvil) */}
      <button
        className="sidebar__mobile-toggle"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className="material-symbols-outlined">
          {isMobileMenuOpen ? "close" : "menu"}
        </span>
      </button>

      {/* Overlay para cerrar al hacer clic fuera (solo móvil) */}
      {isMobileMenuOpen && (
        <div 
          className="sidebar__overlay" 
          onClick={closeMobileMenu}
        />
      )}

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
          <img src="/images/logo/Icono_Monkey.png" alt="Agua Amazónica" />
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
              onClick={closeMobileMenu}
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