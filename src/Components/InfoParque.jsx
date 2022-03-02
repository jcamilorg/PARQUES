import React, { Component } from "react";
import GridParques from "./GridParques";
import "./Styles/nuestrosParques.css";

var links = [
  "https://bogota.gov.co/sites/default/files/styles/1050px/public/2019-06/parque_engativa_2.jpg",
  "https://prosperidadsocial.gov.co/wp-content/uploads/2020/10/2020-oct-21-Boletin-Obras-Vaupes-2.jpg",
  "https://parquesalegres.org/wp-content/uploads/2017/07/Parques.jpg",
];

function IconoLink(props) {
  return (
    <div className="d-flex flex-column align-items-center col-2 p-2 my-3 border-end border-start border-2">
      <img src={props.imgsrc} width="70px" height="50px" alt="..." />
      {props.description}
    </div>
  );
}

class InfoParque extends Component {
  render() {
    return (
      <div className="container  w-50">
        <h1 className="title d-inline-block p-3">
          <b>{this.props.title}</b>
        </h1>
        <hr className="separador-car" />

        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={links[0]}
                width="500px"
                height="350px"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={links[1]}
                width="500px"
                height="350px"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={links[2]}
                width="500px"
                height="350px"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <div class="row justify-content-center text-dark">
          <IconoLink
            description="¿Cómo llegar?"
            imgsrc="/Assets/iconos/icono-mapa.png"
          />
          <IconoLink
            description="Horario"
            imgsrc="/Assets/iconos/icono-horario.png"
          />
          <IconoLink
            description="Tour 3D"
            imgsrc="/Assets/iconos/icono-tour-360.png"
          />
          <IconoLink
            description="Mapa del parque"
            imgsrc="/Assets/iconos/icono-mapa-parque.png"
          />
          <IconoLink
            description="¿Qué hacer?"
            imgsrc="/Assets/iconos/incono-que-hacer.png"
          />
        </div>

        <div class="row justify-content-center py-4">
          <div class="col-12 col-lg-6">
            <img src={this.props.videoSrc} className="w-100 shadow rounded" />
          </div>
          <div class="col-12 col-lg-6 text-dark text-start">
            <h3 class="fs-6 fw-bold px-2 pt-4 pt-lg-1">{this.props.title2}</h3>
            <p class="fs-6 px-2">{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoParque;
