import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "./Utils/Slider";
import Titulo from "./Utils/TitlePark";
import InfoParks from "./Utils/InfoParks";

const CardsOfhorario = InfoParks.map((item) => {
  return (
    <CardOfHorario
      title={item.title}
      horario={item.schedule}
      description={item.schedule_description}
      imgSrc={item.imgSrc}
    />
  );
});

function CardOfHorario(props) {
  return (
    <div className="container d-flex flex-column align-items-center border shadow-lg rounded-3">
      <Titulo title={props.title} addClass=" my-4" />
      <img className="w-100" height="250px" src={props.imgSrc} alt="..." />
      <i className="pt-4 pb-3  fs-2 fa-regular fa-clock"></i>
      <b>{props.horario}</b>
      <p className="px-5 pt-3 pb-4">{props.description}</p>
      <Link className="text-decoration-none text-info pb-5 " to="./reservas">
        Ver tarifas del parque <i className="fa-solid fa-circle-plus"></i>
      </Link>
    </div>
  );
}
export default class PageSchedulesAndRates extends Component {
  render() {
    return (
      <div className="ContainerMainTitle" style={background}>
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
            <div className="col-10 col-md-8 col-lg-5  pb-5 font-sans-serif">
              <Slider data={CardsOfhorario} id="slider_Horarios" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const background = {
  backgroundImage: `url("https://www.car.gov.co/uploads/blog/OAux2HfsIR.jpeg")`,
  backgroundSize: "100%",
  backgroundPosition: "0% -108%",
};
