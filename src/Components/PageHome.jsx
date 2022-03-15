import React, { Component } from "react";
import "./Styles/pageHome.css";
import GridParks from "./Utils/GridParks";
import CardOfParque from "./Utils/CardOfPark";
import Slider from "./Utils/Slider";
import { Link } from "react-router-dom";
//Informacion
import InfoParques, {
  News,
  SliderInfo,
  SliderExperience,
} from "./Utils/InfoParks";

class BannerParks extends Component {
  render() {
    var bg_number = 0;
    const CardsOfParques = InfoParques.map((parque) => {
      bg_number++;
      return (
        <CardOfParque
          imgsrc={parque.imgSrc}
          title={parque.title}
          description={parque.description_short}
          linkParque={parque.link}
          bg={bg_number}
        />
      );
    });

    return (
      <div className="BannerParques">
        <div className="tituloParques">
          <span>Destinos Maravillosos para el goce de la naturaleza</span>
        </div>
        <GridParks data={CardsOfParques} />
        <Link to="/reservas">
          {" "}
          <button className="btnReservas">💻 RESERVAS</button>
        </Link>
      </div>
    );
  }
}

function CardNew(props) {
  return (
    <div className="CardInfo">
      <img width="140px" src={props.imgsrc} />
      <p>{props.description}</p>
    </div>
  );
}

class BannerInfo extends Component {
  render() {
    const imgSliderInfo = SliderInfo.map((item) => {
      return <img src={item.imgSrc} />;
    });

    const CardsOfNews = News.map((item) => {
      return <CardNew imgsrc={item.imgSrc} description={item.content} />;
    });

    return (
      <div className="BannerInfo row justify-content-center container-fluid py-5 text-white">
        <div className="containerProgramate col-11 col-lg-5 m-3">
          <span className="titleRounded">¡Prográmate!</span>
          <hr className="hrProgramate" />
          <div className="Slider">
            <Slider data={imgSliderInfo} id="slider-banner-informate" />
          </div>
        </div>

        <div className="col-11 col-lg-5 m-3">
          <span className="titleRounded">Infórmate</span>
          <hr className="hrInformate" />
          <div className="listOfCardInfo">{CardsOfNews}</div>
        </div>
      </div>
    );
  }
}

class BannerExperience extends Component {
  render() {
    return (
      <div className="BannerExperience container-fluid  text-white">
        <span className="titleRounded">
          Experiencias de nuestros visitantes
        </span>
        <div></div>
        <div className="row flex-column align-items-center">
          <div className="col-10 col-md-8 col-lg-6">
            <hr className="hr-car " />
            <div className="Sliderr">
              <Slider data={SliderExperience} id="slider-banner-experiencias" />
            </div>
          </div>
        </div>

        <br />
        <button className="btn-car">Contar mi experiencia</button>
      </div>
    );
  }
}

class PageHome extends Component {
  render() {
    return (
      <div className="PageHome">
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
        <BannerParks />
        <BannerInfo />
        <BannerExperience />
      </div>
    );
  }
}

export default PageHome;
