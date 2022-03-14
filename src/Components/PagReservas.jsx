import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "./Utils/Slider";
import Titulo from "./Utils/BotonNombreParques";
import { SliderReservas } from "./Utils/InformacionParques";

const CardsOfReservas = SliderReservas.map((item) => {
  return (
    <CardOfReserva
      title={item.title}
      description={item.description}
      imgSrc={item.imgSrc}
    />
  );
});

function CardOfReserva(props) {
  return (
    <div className="container d-flex flex-column align-items-center border shadow-lg rounded-3 justify-content-between">
      <div className="d-flex flex-column align-items-center">
        <h3 className="title my-4 p-3 w-75 ">{props.title}</h3>
        <img className="w-100" height="250px" src={props.imgSrc} />{" "}
      </div>
      <p className="px-5 pt-3 pb-4">{props.description}</p>

      <Link className="text-decoration-none text-info pb-5 " to="./reservas">
        Reservar <i class="fa-solid fa-circle-plus"></i>
      </Link>
    </div>
  );
}
export default class Reservas extends Component {
  render() {
    return (
      <div className="ContainerMainTitle" style={background}>
        <span className="mainTitle">
          <strong>Reservas</strong>
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
              <Slider data={CardsOfReservas} id="slider_Horarios" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const background = {
  backgroundImage: `url("https://i0.wp.com/revistadiners.com.co/wp-content/uploads/2020/01/WhatsApp-Image-2020-01-08-at-4.08.41-PM.jpeg?resize=1280%2C853&ssl=1")`,
  backgroundSize: "100%",
  backgroundPosition: "0% -70%",
};
