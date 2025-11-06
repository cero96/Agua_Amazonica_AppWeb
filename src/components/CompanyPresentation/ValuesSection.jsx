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
    <div className="contentWrapper">
      <section className="valuesSection">
        <div className="valuesImage">
          <img src="./images/badges/medalla.png" alt="Valores de la empresa" />
        </div>
        <div className="valuesList">
          <h2>NUESTROS <span>VALORES</span></h2>
          <ul>
            {values.map((value, index) => (
              <li key={index}>
                <CheckCircle size={22} />
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ValuesSection;