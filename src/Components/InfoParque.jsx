import React from "react";
import Slider from "./Utils/Slider";
import Titulo from "./Utils/BotonNombreParques";

var links = [
  "https://bogota.gov.co/sites/default/files/styles/1050px/public/2019-06/parque_engativa_2.jpg",
  "https://prosperidadsocial.gov.co/wp-content/uploads/2020/10/2020-oct-21-Boletin-Obras-Vaupes-2.jpg",
  "https://parquesalegres.org/wp-content/uploads/2017/07/Parques.jpg",
];

function IconoLink(props) {
  return (
    <div className="d-flex flex-column align-items-center col-6 col-sm-4 col-md-2 p-2 my-3 border-end border-start border-2">
      <img src={props.imgsrc} width="70px" height="50px" alt="..." />
      {props.description}
    </div>
  );
}

function InfoParque(props) {
  return (
    <div className="container  w-50">
      <Titulo title={props.title} />
      <hr className="separador-car" />

      <Slider data={props.sliderImages} id="sliderParque" />

      <div class="row justify-content-center text-dark">
        <IconoLink
          description="¿Cómo llegar?"
          imgsrc={require("./Assets/iconos/icono-mapa.png")}
        />
        <IconoLink
          description="Horario"
          imgsrc={require("./Assets/iconos/icono-horario.png")}
        />
        <IconoLink
          description="Tour 3D"
          imgsrc={require("./Assets/iconos/icono-tour-360.png")}
        />
        <IconoLink
          description="Mapa del parque"
          imgsrc={require("./Assets/iconos/icono-mapa-parque.png")}
        />
        <IconoLink
          description="¿Qué hacer?"
          imgsrc={require("./Assets/iconos/incono-que-hacer.png")}
        />
      </div>

      <div class="row justify-content-center py-4">
        <div class="col-12 col-lg-6">
          <img src={props.videoSrc} className="w-100 shadow rounded" />
        </div>
        <div class="col-12 col-lg-6 text-dark text-start">
          <h3 class="fs-6 fw-bold px-2 pt-4 pt-lg-1">{props.title2}</h3>
          <p class="fs-6 px-2">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoParque;
