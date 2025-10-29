// src/pages/ProductsPage.jsx
import React, { useState, useEffect } from "react";
import styles from "./ProductPage.module.css";
import { Search, X, Check } from "lucide-react";

export default function ProductsPage() {
  const [products] = useState([
    {
      id: 1,
      name: "Six Pack de Agua Purificada 500ml",
      size: "500 ml x6",
      price: 1.5,
      category: "Packs",
      stock: 50,
      image: "/images/productos/500ML-pack.jpg",
      description: "Agua purificada natural, pura y refrescante.",
      longDescription: "Extraída de manantiales profundos, esta agua purificada es ideal para el consumo diario. Libre de aditivos, con un equilibrio perfecto de minerales esenciales.",
      features: ["Sin gas", "Alta pureza", "Envase reciclable"],
      specifications: [
        { label: "Volumen", value: "500 ml x6" },
        { label: "pH", value: "7.2" },
        { label: "Origen", value: "Amazonía Ecuador" }
      ],
      badge: { text: "Más Vendido", type: "success" },
      status: "available"
    },
    {
      id: 2,
      name: "Botellón Rellenado 20L",
      size: "20 L",
      price: 1.25,
      category: "Botellones",
      stock: 30,
      image: "/images/productos/bottle-left.png",
      description: "Agua purificada por ósmosis inversa.",
      longDescription: "Proceso de filtrado múltiple que elimina impurezas, cloro y bacterias. Ideal para familias, oficinas y empresas.",
      features: ["Ósmosis inversa", "Libre de cloro", "Gran formato"],
      specifications: [
        { label: "Volumen", value: "20 Litros" },
        { label: "Filtración", value: "5 etapas" },
        { label: "Certificación", value: "DIGESA" }
      ],
      status: "available"
    },
    {
      id: 3,
      name: "Botellón Nuevo + Agua 20L",
      size: "20 L",
      price: 4.25,
      category: "Botellones",
      stock: 30,
      image: "/images/productos/bottle-left.png",
      description: "Botellón nuevo con agua purificada incluida.",
      longDescription: "Ideal para quienes inician. Incluye botellón reutilizable y agua purificada de alta calidad.",
      features: ["Botellón nuevo", "Agua incluida", "Listo para usar"],
      specifications: [
        { label: "Volumen", value: "20 Litros" },
        { label: "Material", value: "Plástico PET grado alimenticio" },
        { label: "Certificación", value: "DIGESA" }
      ],
      badge: { text: "Nuevo", type: "info" },
      status: "available"
    },
    {
      id: 4,
      name: "Combo: 2 Botellones + Llave + Agua",
      size: "40 L",
      price: 11.25,
      category: "Promociones",
      stock: 15,
      image: "/images/productos/botellon-llave.webp",
      description: "Pack completo para el hogar u oficina.",
      longDescription: "Incluye 2 botellones de 20L con agua purificada y llave dispensadora ergonómica. Perfecto para consumo continuo.",
      features: ["2 x 20L", "Llave incluida", "Envío gratis"],
      specifications: [
        { label: "Volumen total", value: "40 Litros" },
        { label: "Accesorios", value: "Llave dispensadora" },
        { label: "Uso recomendado", value: "Hogar / Oficina" }
      ],
      badge: { text: "Oferta", type: "warning" },
      status: "available"
    }
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = ["Todos", "Botellones", "Packs", "Promociones"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilteredProducts(products);
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [products]);

  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== "Todos") {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(term) ||
        p.size.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term)
      );
    }

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, products]);

  return (
    <div className={styles.productPage}>
      <div className={styles.contentWrapper}>
        {/* HEADER */}
        <header className={styles.productHeader}>
          <h1>Nuestros Productos</h1>
          <div className={styles.headerActions}>
            <div className={styles.searchBar}>
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className={styles.searchIcon} size={18} />
            </div>
          </div>
        </header>

        {/* FILTROS */}
        <div className={styles.filters}>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className={styles.categoryFilter}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <span className={styles.resultsCount}>
            {filteredProducts.length} {filteredProducts.length === 1 ? 'producto' : 'productos'}
          </span>
        </div>

        {/* GRID DE PRODUCTOS */}
        <div className={styles.productsGrid}>
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className={styles.skeletonCard}>
                <div className={styles.skeletonImage}></div>
                <div className={styles.skeletonLine}></div>
                <div className={styles.skeletonLine + ' ' + styles.short}></div>
              </div>
            ))
          ) : filteredProducts.length === 0 ? (
            <div className={styles.noProducts}>No se encontraron productos.</div>
          ) : (
            filteredProducts.map(product => (
              <div
                key={product.id}
                className={styles.productCard}
                onClick={() => product.stock > 0 && setSelectedProduct(product)}
                style={{
                  cursor: product.stock > 0 ? 'pointer' : 'not-allowed',
                  opacity: product.stock > 0 ? 1 : 0.6
                }}
              >
                {product.badge && (
                  <span className={`${styles.badge} ${styles[product.badge.type]}`}>
                    {product.badge.text}
                  </span>
                )}
                <img src={product.image} alt={product.name} className={styles.productImage} />
                <div className={styles.productInfo}>
                  <h3>{product.name}</h3>
                  <p>{product.size}</p>
                  <p className={styles.price}>${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* MODAL DETALLE */}
      {selectedProduct && (
        <div className={styles.productDetailOverlay} onClick={() => setSelectedProduct(null)}>
          <div className={styles.productDetail} onClick={e => e.stopPropagation()}>
            <button className={styles.closeDetail} onClick={() => setSelectedProduct(null)}>
              <X size={22} />
            </button>
            <div className={styles.detailGrid}>
              <div className={styles.detailImage}>
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className={styles.detailContent}>
                <h2>{selectedProduct.name}</h2>
                <p className={styles.detailSize}>{selectedProduct.size}</p>
                <p className={styles.detailPrice}>${selectedProduct.price.toFixed(2)}</p>
                <p className={styles.detailDesc}>{selectedProduct.longDescription}</p>

                <div className={styles.detailSection}>
                  <h4>Características</h4>
                  <ul>
                    {selectedProduct.features.map((f, i) => (
                      <li key={i}><Check size={16} /> {f}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.detailSection}>
                  <h4>Especificaciones Técnicas</h4>
                  {selectedProduct.specifications.map((s, i) => (
                    <div key={i} className={styles.specItem}>
                      <span>{s.label}:</span>
                      <strong>{s.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}