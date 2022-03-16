import React from "react";
import Slider from "./Slider";
import Title from "./TitlePark";

/*let links = [
  "https://bogota.gov.co/sites/default/files/styles/1050px/public/2019-06/parque_engativa_2.jpg",
  "https://prosperidadsocial.gov.co/wp-content/uploads/2020/10/2020-oct-21-Boletin-Obras-Vaupes-2.jpg",
  "https://parquesalegres.org/wp-content/uploads/2017/07/Parques.jpg",
];*/

function IconLink(props) {
  return (
    <div className="d-flex flex-column align-items-center col-6 col-sm-4 col-md-2 p-2 my-3 border-end border-start border-2">
      <img src={props.imgsrc} width="70px" height="50px" alt="..." />
      {props.description}
    </div>
  );
}

function PagePark(props) {
  return (
    <div className="container  w-50">
      <Title title={props.title} />
      <hr className="hr-car" />

      <Slider data={props.sliderImages} id="sliderParque" />

      <div className="row justify-content-center text-dark">
        <IconLink
          description="¿Cómo llegar?"
          imgsrc={require("../Assets/icons/icono-mapa.png")}
        />
        <IconLink
          description="Horario"
          imgsrc={require("../Assets/icons/icono-horario.png")}
        />
        <IconLink
          description="Tour 3D"
          imgsrc={require("../Assets/icons/icono-tour-360.png")}
        />
        <IconLink
          description="Mapa del parque"
          imgsrc={require("../Assets/icons/icono-mapa-parque.png")}
        />
        <IconLink
          description="¿Qué hacer?"
          imgsrc={require("../Assets/icons/incono-que-hacer.png")}
        />
      </div>

      <div className="row justify-content-center py-4">
        <div className="col-12 col-lg-6">
          <img
            src={props.videoSrc}
            className="w-100 shadow rounded"
            alt="..."
          />
        </div>
        <div className="col-12 col-lg-6 text-dark text-start">
          <h3 className="fs-6 fw-bold px-2 pt-4 pt-lg-1">{props.title2}</h3>
          <p className="fs-6 px-2">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default PagePark;
