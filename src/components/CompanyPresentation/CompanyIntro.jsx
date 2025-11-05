import React from "react";

const CompanyIntro = () => {
  return (
    <section className="company-intro">
      <div className="company-text">
        <h1 className="title">
          AGUA AMAZONICA<span>EL COCA - ECUADOR</span>
        </h1>
        <p>
          Fundada en 2024 en la ciudad de <b>El Coca, provincia de Orellana</b>,
          nuestra empresa nace con un compromiso claro: ofrecer agua purificada
          de la más alta calidad a un precio accesible para todos.
        </p>
        <p>
          El proyecto surgió al detectar un aumento en las enfermedades renales
          en la comunidad, causado por el consumo de agua no apta para la salud.
          Su fundador, <b>un médico con amplia experiencia en el ámbito renal</b>
          y graduado de la <b>Universidad Central del Ecuador</b>, decidió crear
          una alternativa segura y confiable.
        </p>
        <p>
          Actualmente nos encontramos en proceso de certificación en{" "}
          <b>Buenas Prácticas de Manufactura (BPM)</b> y fortalecemos nuestro
          servicio a domicilio, garantizando la comodidad y bienestar de
          nuestros clientes.
        </p>
        <p>
          Con una <b>visión clara hacia el 2030</b>, buscamos consolidarnos como
          referentes en purificación y distribución de agua natural, promoviendo
          la sostenibilidad, la salud y el desarrollo local.
        </p>
      </div>
      <div className="company-image">
        <img src="./images/banners/planta_purificadora.png" alt="Nuestros valores" />
      </div>
    </section>
  );
};

export default CompanyIntro;
