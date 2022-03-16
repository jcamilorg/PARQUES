import React from "react";
import { NavLink } from "react-router-dom";
import "./Styles/headerStyle.css";
//Importacion de imagenes
import LogoParks from "./Assets/logos/Logo_parques.svg";

export default function HeaderParques() {
  return (
    <div className="containerHeader">
      <header className="position-absolute">
        <div id="ContainerImgTopHeader">
          <input
            className="ms-auto"
            type="text"
            placeholder="Buscar en esta pagina 🔎"
          />
        </div>

        <nav className="navbar navbar-expand-lg navbar-light navbarCar text-start font-antipasto-regular">
          <div className="container justify-content-center d-flex">
            <NavLink to="/">
              <img
                className="ContainerImgHeader"
                src={LogoParks}
                width="180px"
                alt=""
              />
              <div className="SpaceContainerImgHeader"></div>
            </NavLink>

            <button
              className="navbar-toggler m-2 position-absolute top-0 end-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav mx-auto ">
                <NavLink exact activeClassName="bg-blue-navbar" to="/">
                  Inicio
                </NavLink>
                <div className="VerticalLine d-none d-lg-block"></div>
                <hr className="d-lg-none p-0 m-0" />

                <NavLink
                  activeClassName="bg-blue-navbar"
                  to="/nuestros-parques"
                >
                  Parques
                </NavLink>
                <div className="VerticalLine d-none d-lg-block"></div>
                <hr className="d-lg-none p-0 m-0" />

                <NavLink activeClassName="bg-blue-navbar" to="/que-hacer/0">
                  Qué hacer
                </NavLink>
                <div className="VerticalLine d-none d-lg-block"></div>
                <hr className="d-lg-none p-0 m-0" />

                <NavLink
                  activeClassName="bg-blue-navbar"
                  to="/horarios-y-tarifas"
                >
                  Horarios y tarifas
                </NavLink>
                <div className="VerticalLine d-none d-lg-block"></div>
                <hr className="d-lg-none p-0 m-0" />

                <NavLink
                  activeClassName="bg-blue-navbar"
                  to="/para-tener-encuenta"
                >
                  Para tener en cuenta
                </NavLink>
                <div className="VerticalLine d-none d-lg-block"></div>
                <hr className="d-lg-none p-0 m-0" />

                <NavLink
                  activeClassName="bg-blue-navbar"
                  to="/preguntas-frecuentes"
                >
                  Pregutas frecuentes
                </NavLink>
                <div className="VerticalLine d-none d-lg-block"></div>
                <hr className="d-lg-none p-0 m-0" />

                <NavLink activeClassName="bg-blue-navbar" to="/reservas">
                  Reservas
                </NavLink>
                <div className="VerticalLine d-none d-lg-block"></div>
                <hr className="d-lg-none p-0 m-0" />

                <NavLink activeClassName="bg-blue-navbar" to="/contactanos">
                  Contáctanos
                </NavLink>
                <hr className="d-lg-none p-0 m-0" />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
