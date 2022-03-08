import React, { Component } from "react";
import GridParques from "./GridParques";
import CardOfParque from "./CardOfParque";
import "./Styles/pagInicio.css";
import Slider from "./Utils/Slider";
import { Link } from "react-router-dom";

var CardsOfParques = [
  <CardOfParque
    imgsrc="https://www.iagua.es/sites/default/files/lago_portada.jpg"
    title="EMBALSE NEUSA"
    description={[
      <strong>Disfruta en familia </strong>,
      "un atractivo escenario de bosque natural.",
    ]}
    linkParque="nuestros-parques/embalse-neusa"
  ></CardOfParque>,

  <CardOfParque
    imgsrc="https://cdn-blog1.fibrasynormasdecolombia.com/wp-content/uploads/2018/02/Portada-10.jpg"
    title="GUATAVITA"
    description={[
      "En este maravilloso complejo ecoturístico ",
      <b>conoce de primera mano todo sobre la cultura Muisca.</b>,
    ]}
    linkParque="nuestros-parques/guatavita"
  ></CardOfParque>,

  <CardOfParque
    imgsrc="https://i.ytimg.com/vi/XIUBuhqylUc/maxresdefault.jpg"
    title="RIO NEUSA"
    description={[
      "Comparte junto a tus amigos, las zonas verdes para camping y picnic.",
    ]}
    linkParque="nuestros-parques/rio-neusa"
  ></CardOfParque>,

  <CardOfParque
    imgsrc="https://i.ytimg.com/vi/XIUBuhqylUc/maxresdefault.jpg"
    title="PUENTE SOPÓ"
    description={[
      "Recorre senderos adornados decolorida vegetación y hermosas aves a su paso. ",
    ]}
    linkParque="nuestros-parques/puente-sopo"
  ></CardOfParque>,

  <CardOfParque
    imgsrc="https://www.car.gov.co/uploads/blog/yZoSgCdjRM.jpeg"
    title="EL HATO"
    description={[
      "Sal de la rutina y programa un día de pesca deportiva mientras contemplas el hermoso paisaje.",
    ]}
    linkParque="nuestros-parques/el-hato"
  ></CardOfParque>,

  <CardOfParque
    imgsrc="https://situr.boyaca.gov.co/wp-content/uploads/2017/05/parque-juanpablo.jpg"
    title="JUAN PABLO II"
    description={[
      "Visita este destino ideal para el turismo religioso, de meditación y esparcimiento.",
    ]}
    linkParque="nuestros-parques/juan-pablo-segundo"
  ></CardOfParque>,
];

class BannerParques extends Component {
  render() {
    return (
      <div className="BannerParques">
        <div className="tituloParques">
          <span>Destinos Maravillosos para el goce de la naturaleza</span>
        </div>
        <GridParques data={CardsOfParques} />
        <Link to="/reservas">
          {" "}
          <button className="btnReservas">💻 RESERVAS</button>
        </Link>
      </div>
    );
  }
}

function CardInfo(props) {
  return (
    <div className="CardInfo">
      <img width="140px" src={props.imgsrc} />
      <p>{props.description}</p>
    </div>
  );
}

var imgSliderInformate = [
  <img src="https://parques.car.gov.co/imagenes/Nuevaprincipal_neusa.jpg" />,
  <img src="https://parques.car.gov.co/imagenes/Nuevaprincipal_hato.jpg" />,
  <img src="https://parques.car.gov.co/imagenes/Nuevaprincipal_rio_neusa.jpg" />,
];
class BannerInformativo extends Component {
  render() {
    return (
      <div className="BannerInformativo row justify-content-center container-fluid py-5 text-white">
        <div className="containerProgramate col-11 col-lg-5 m-3">
          <span className="titleRounded">¡Prográmate!</span>
          <hr className="hrProgramate" />
          <div className="Slider">
            <Slider data={imgSliderInformate} id="slider-banner-informate" />
          </div>
        </div>

        <div className="col-11 col-lg-5 m-3">
          <span className="titleRounded">Infórmate</span>
          <hr className="hrInformate" />
          <div className="listOfCardInfo">
            <CardInfo
              imgsrc="https://www.car.gov.co/uploads/blog/zeQbdINWIf.jpeg"
              description="La CAR prohibe plásticos de un solo uso en sus parques ecoturísticos"
            />

            <CardInfo
              imgsrc="https://www.car.gov.co/uploads/blog/zeQbdINWIf.jpeg"
              description="La CAR prohibe plásticos de un solo uso en sus parques ecoturísticos"
            />

            <CardInfo
              imgsrc="https://www.car.gov.co/uploads/blog/zeQbdINWIf.jpeg"
              description="La CAR prohibe plásticos de un solo uso en sus parques ecoturísticos"
            />
          </div>
        </div>
      </div>
    );
  }
}

var comentariosExperiencias = [
  <iframe
    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FCAR.Cundi%2Fposts%2F5608428509186757&show_text=true&width=500"
    width="500"
    height="654"
    scrolling="no"
    frameborder="0"
    allowfullscreen="true"
    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
  ></iframe>,
  <iframe
    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FCAR.Cundi%2Fposts%2F5610234549006153&show_text=true&width=500"
    width="500"
    height="570"
    scrolling="no"
    frameborder="0"
    allowfullscreen="true"
    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
  ></iframe>,
];
class BannerExperiencias extends Component {
  render() {
    return (
      <div className="BannerExperiencias container-fluid  text-white">
        <span className="titleRounded">
          Experiencias de nuestros visitantes
        </span>
        <div></div>
        <div className="d-flex flex-column align-items-center">
          <hr className="separador-car w-50" />
          <div className="Slider w-50">
            <Slider
              data={comentariosExperiencias}
              id="slider-banner-experiencias"
            />
          </div>
        </div>

        <br />
        <button className="btn-car">Contar mi experiencia</button>
      </div>
    );
  }
}

class PagInicio extends Component {
  render() {
    return (
      <div className="pagInicio">
        <div className="container-fluid p-0">
          <iframe
            width="100%"
            height="550"
            src="https://www.youtube.com/embed/P3MY6vPdgZM?controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <BannerParques />
        <BannerInformativo />
        <BannerExperiencias />
      </div>
    );
  }
}

export default PagInicio;
