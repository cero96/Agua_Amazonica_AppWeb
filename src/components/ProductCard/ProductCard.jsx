import React from "react";
import "./ProductCard.css";

export default function ProductCard({ product = {} }) {
  // Valores por defecto seguros
  const { 
    name = "Producto sin nombre", 
    size = "N/A", 
    price = 0, 
    image = "/images/default-water.png", 
    stock = 0 
  } = product;

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={name} className="product-image" />
        {stock === 0 && <span className="out-of-stock">Sin stock</span>}
      </div>

      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-size">{size}</p>
        <p className="product-price">${price.toFixed(2)}</p>
      </div>

      <button
        className={`add-to-cart-btn ${stock === 0 ? "disabled" : ""}`}
        disabled={stock === 0}
      >
        {stock === 0 ? "Agotado" : "Solicitar por Whatsapp"}
      </button>
    </div>
  );
}