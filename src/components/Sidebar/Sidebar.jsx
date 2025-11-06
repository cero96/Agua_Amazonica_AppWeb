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

  // Detectar si es móvil
  const checkIsMobile = () => window.innerWidth <= 768;
  const [isMobile, setIsMobile] = useState(checkIsMobile());

  useEffect(() => {
    const handleResize = () => {
      const mobile = checkIsMobile();
      setIsMobile(mobile);

      // Cerrar menú móvil si se pasa a desktop
      if (!mobile && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  // Bloquear scroll del body cuando menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <>
      {/* Botón hamburguesa (solo móvil) */}
      {isMobile && (
        <button
          className="sidebar__mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      )}

      {/* Overlay (solo móvil) */}
      {isMobileMenuOpen && (
        <div className="sidebar__overlay" onClick={closeMobileMenu} />
      )}

      {/* Sidebar */}
      <aside
        className={`sidebar ${
          isCollapsed && !isMobile ? "collapsed" : ""
        } ${isMobileMenuOpen ? "open" : ""}`}
      >
        {/* Botón colapsar (solo desktop) */}
        {!isMobile && (
          <button
            className="sidebar__toggle"
            onClick={toggleCollapse}
            aria-label={isCollapsed ? "Expandir" : "Colapsar"}
          >
            <span className="material-symbols-outlined">
              {isCollapsed ? "chevron_right" : "chevron_left"}
            </span>
          </button>
        )}

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
              onClick={isMobile ? closeMobileMenu : undefined}
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