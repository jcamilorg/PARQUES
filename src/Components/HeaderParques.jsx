import React from "react";
import "./Styles/headerStyle.css";

export default function HeaderParques() {
  return (
    <div className="containerHeader">
      <header className="position-absolute">
        <div id="ContainerImgTopHeader">
          <input
            type="text"
            placeholder="(Desarrollo)Buscar en esta pagina 🔎"
          />
        </div>

        <nav className="navbar navbar-expand-lg navbar-light navbarCar text-start">
          <div className="container justify-content-center d-flex">
            <a href="#">
              <img
                className="ContainerImgHeader"
                src="https://parques.car.gov.co/Content/images/LOGO_CAR_CUATRICROMIA.png"
                width="150px"
              />
              <div className="SpaceContainerImgHeader"></div>
            </a>

            <button
              class="navbar-toggler m-2 position-absolute top-0 end-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav mx-auto ">
                <a href="/">Inicio</a>
                <div className="VerticalLine d-none d-lg-block"></div>
                <hr className="d-lg-none p-0 m-0" />

                <a href="/nuestros-parques">Parques</a>
                <div className="VerticalLine d-none d-lg-block"></div>
                <hr className="d-lg-none p-0 m-0" />

                <a href="/que-hacer">Qué hacer</a>
                <div className="VerticalLine d-none d-lg-block"></div>
                <hr className="d-lg-none p-0 m-0" />

                <a href="/horarios-y-tarifas">Horarios y tarifas</a>
                <div className="VerticalLine d-none d-lg-block"></div>
                <hr className="d-lg-none p-0 m-0" />

                <a href="/para-tener-encuenta">Para tener en cuenta</a>
                <div className="VerticalLine d-none d-lg-block"></div>
                <hr className="d-lg-none p-0 m-0" />

                <a href="/preguntas-frecuentes">Pregutas frecuentes</a>
                <div className="VerticalLine d-none d-lg-block"></div>
                <hr className="d-lg-none p-0 m-0" />

                <a href="/reservas">Reservas</a>
                <div className="VerticalLine d-none d-lg-block"></div>
                <hr className="d-lg-none p-0 m-0" />

                <a href="/contactanos">Contáctanos</a>
                <hr className="d-lg-none p-0 m-0" />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
