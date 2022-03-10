import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "./Utils/Slider";
import Titulo from "./Utils/BotonNombreParques";
import InfoParques from "./Utils/InformacionParques";

const CardsOfhorario = InfoParques.map((item) => {
  return (
    <CardOfHorario
      title={item.title}
      horario={item.horario}
      description={item.horario_description}
      imgSrc={item.imgSrc}
    />
  );
});

function CardOfHorario(props) {
  return (
    <div className="container d-flex flex-column align-items-center border shadow-lg rounded-3">
      <Titulo title={props.title} addClass=" my-4" />
      <img className="w-100" height="250px" src={props.imgSrc} />
      <i className="pt-4 pb-3  fs-2 fa-regular fa-clock"></i>
      <b>{props.horario}</b>
      <p className="px-5 pt-3 pb-4">{props.description}</p>
      <Link className="text-decoration-none text-info pb-5 " to="./reservas">
        Ver tarifas del parque <i class="fa-solid fa-circle-plus"></i>
      </Link>
    </div>
  );
}
export default class PagHorariosTarifas extends Component {
  render() {
    return (
      <div className="PagQueHacer">
        <span className="mainTitle">
          <strong>Horarios</strong> tarifas
        </span>
        <div className="ContainerRoundedTop"></div>
        <div className="container-fluid bg-white text-dark">
          <h1 className="mb-4 fs-1 text-dark-acua ">IMPORTANTE</h1>
          <p className="m-auto fs-5 w-50 text-center text-dark-blue">
            <b>El primer día hábil de cada semana NO hay atención</b> ni se
            permite el ingreso a ninguno de nuestros parques.
          </p>
          <div className="row justify-content-center p-5">
            <div className="col-10 col-md-8 col-lg-5  pb-5 ">
              <Slider data={CardsOfhorario} id="slider_Horarios" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
