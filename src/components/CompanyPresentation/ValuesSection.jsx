import React from "react";
import { CheckCircle } from "lucide-react";

const values = [
  "BIENESTAR",
  "EQUIDAD",
  "SOSTENIBILIDAD",
  "TRANSPARENCIA",           
  "PROSPERIDAD",
  "EXCELENCIA",
];

const ValuesSection = () => {
  return (
    <section className="values-section">
      <div className="values-image">
        <img src="./images/badges/medalla.png" alt="Valores de la empresa" />
      </div>
      <div className="values-list">
        <h2>
          NUESTROS <span>VALORES</span>
        </h2>
        <ul>
          {values.map((value, index) => (
            <li key={index}>
              <CheckCircle size={22} color="#0a774f" />
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ValuesSection;
