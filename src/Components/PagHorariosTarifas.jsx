import React, { Component } from "react";
import CardOfParque from "./CardOfParque";

function Carrousel() {
  return (
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
        <div class="carousel-item active ">
          <div class="row justify-content-center">
            {/*Solo es una pruebas del carrousel*/}
            <CardOfParque
              imgsrc="https://i.ytimg.com/vi/XIUBuhqylUc/maxresdefault.jpg"
              title="RIO NEUSA"
              linkParque="nuestros-parques/rio-neusa"
            ></CardOfParque>
            <CardOfParque
              imgsrc="https://i.ytimg.com/vi/XIUBuhqylUc/maxresdefault.jpg"
              title="RIO NEUSA"
              linkParque="nuestros-parques/rio-neusa"
            ></CardOfParque>
            <CardOfParque
              imgsrc="https://i.ytimg.com/vi/XIUBuhqylUc/maxresdefault.jpg"
              title="RIO NEUSA"
              linkParque="nuestros-parques/rio-neusa"
            ></CardOfParque>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row justify-content-center">
            {/*Solo es una pruebas del carrousel*/}
            <CardOfParque
              imgsrc="https://i.ytimg.com/vi/XIUBuhqylUc/maxresdefault.jpg"
              title="RIO NEUSA"
              linkParque="nuestros-parques/rio-neusa"
            ></CardOfParque>
            <CardOfParque
              imgsrc="https://i.ytimg.com/vi/XIUBuhqylUc/maxresdefault.jpg"
              title="RIO NEUSA"
              linkParque="nuestros-parques/rio-neusa"
            ></CardOfParque>
            <CardOfParque
              imgsrc="https://i.ytimg.com/vi/XIUBuhqylUc/maxresdefault.jpg"
              title="RIO NEUSA"
              linkParque="nuestros-parques/rio-neusa"
            ></CardOfParque>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row justify-content-center">
            {/*Solo es una pruebas del carrousel*/}
            <CardOfParque
              imgsrc="https://i.ytimg.com/vi/XIUBuhqylUc/maxresdefault.jpg"
              title="RIO NEUSA"
              linkParque="nuestros-parques/rio-neusa"
            ></CardOfParque>
            <CardOfParque
              imgsrc="https://i.ytimg.com/vi/XIUBuhqylUc/maxresdefault.jpg"
              title="RIO NEUSA"
              linkParque="nuestros-parques/rio-neusa"
            ></CardOfParque>
            <CardOfParque
              imgsrc="https://i.ytimg.com/vi/XIUBuhqylUc/maxresdefault.jpg"
              title="RIO NEUSA"
              linkParque="nuestros-parques/rio-neusa"
            ></CardOfParque>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev bg-success"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next bg-success"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
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
          <h1>IMPORTANTE</h1>
          <p>
            <b>El primer día hábil de cada semana NO hay atención</b> ni se
            permite el ingreso a ninguno de nuestros parques.
          </p>
          <div className="row justify-content-center p-5">
            <div className="col-10 p-5">
              <Carrousel />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
