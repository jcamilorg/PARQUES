import React, { Component } from "react";
import "./Styles/pagQueHacer.css";

function CardQueHacer(props) {
  return (
    <div className="d-flex flex-column p-2 h-100  justify-content-center align-items-start shadow-sm hover-orange text-white">
      <p
        style={{
          textShadow: "1px 1px 2px #000",
          textAlign: "left",
        }}
      >
        <b className="fs-5">{props.description}</b>
      </p>
      <i class="fa-solid fa-circle-plus"></i>
    </div>
  );
}

function Actividad(props) {
  return (
    <div className="text-start pt-5 text-dark py-5 px-4 mb-3 shadow">
      <h2 className="fs-4">Zona de Camping</h2>
      <br />
      <br />
      <p>
        Comparte junto a tus amigos, las{" "}
        <b>zonas verdes para camping y picnic.</b>
      </p>
      <h4 className="fs-6 ">
        <b>Parques que prestan el servicio:</b>
      </h4>
      <br />
      <ul>
        <li>Parque Embalse Neusa</li>
        <li> Parque Embalse El Hato</li>
      </ul>
      <p>Adquiere el servicio en nuestras taquillas, a tu llegada al parque.</p>
      <br />
      <br />
      <h4 className="fs-6">
        <b>Toma nota</b>
      </h4>
      <p>Adquiere el servicio en nuestras taquillas, a tu llegada al parque.</p>
    </div>
  );
}

export default class PagQueHacer extends Component {
  render() {
    return (
      <div className="PagQueHacer">
        <span className="mainTitle">
          <strong>Qué</strong> Hacer
        </span>
        <div className="ContainerRoundedTop"></div>
        <div className="container-fluid bg-white pb-5">
          <div className=" row justify-content-center">
            <div className="col-sm-11 row col-md-5 col-lg-4">
              <div className="col-6 my-2">
                <CardQueHacer description="Zona de Camping" />
              </div>
              <div className="col-6 my-2">
                <CardQueHacer description="Kioscos y Hornillas" />
              </div>
              <div className="col-6 my-2 ">
                <CardQueHacer description="Visitas guiadas Senderismo" />
              </div>
              <div className="col-6 my-2">
                <CardQueHacer description="Prestamo de bicicletas" />
              </div>
              <div className="col-6 my-2">
                <CardQueHacer description="Restaurantes" />
              </div>
              <div className="col-6 my-2">
                <CardQueHacer description="Navegación" />
              </div>
              <div className="col-6 my-2 ">
                <CardQueHacer description="Alquiler de cabañas" />
              </div>
              <div className="col-6 my-2">
                <CardQueHacer description="Pesca deportiva" />
              </div>
            </div>
            <div className="col-sm-11 col-md-5 col-lg-4">
              <Actividad />
              <div className="d-flex justify-content-around">
                <button className="btn btn-secondary">💻 RESERVAS</button>
                <button className="btn btn-secondary">💵 TARIFAS</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
