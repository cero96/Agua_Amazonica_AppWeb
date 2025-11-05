// src/pages/Home.jsx
import React from "react";
import Hero from "../../components/Home/Hero";
import "../../assets/styles/global.css";

export default function Home() {
  return (
    <main className="main">
      <Hero />
      {/* Aquí irán más secciones si las necesitas */}
    </main>
  );
}