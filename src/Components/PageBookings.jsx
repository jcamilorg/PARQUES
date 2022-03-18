import React, { Component } from "react";
import { Link } from "react-router-dom";
//import Titulo from "./Utils/TitlePark";
import { SliderBookings } from "./Utils/InfoParks";
//Importacion de multi carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CardsOfBookings = SliderBookings.map((item) => {
  return (
    <CardOfBooking
      title={item.title}
      description={item.description}
      imgSrc={item.imgSrc}
    />
  );
});

function CardOfBooking(props) {
  return (
    <div className="m-4">
      <div className="container d-flex flex-column align-items-center border shadow-lg rounded-3 justify-content-between p-4">
        <div className="d-flex flex-column align-items-center">
          <h3 className="title my-4 p-3 w-75 ">{props.title}</h3>
          <img
            className="w-100"
            height="250px"
            src={props.imgSrc}
            alt="..."
          />{" "}
        </div>
        <p className="px-3 pt-3 pb-4">{props.description}</p>

        <Link className="text-decoration-none text-info pb-5 " to="./reservas">
          Reservar <i className="fa-solid fa-circle-plus"></i>
        </Link>
      </div>
    </div>
  );
}

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 3,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 600,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 600,
    },
    items: 2,
    partialVisibilityGutter: 30,
  },
};

export default class PageBookings extends Component {
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
          <div className="container font-sans-serif pb-5">
            <Carousel
              responsive={responsive}
              additionalTransfrom={0}
              autoPlay
              autoPlaySpeed={4500}
              centerMode={false}
              className=""
              draggable
              infinite
              minimumTouchDrag={80}
            >
              {CardsOfBookings}
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

const background = {
  backgroundImage: `url("https://parques.car.gov.co/imagenes/85041Vistaexterior2caba%C3%B1as2.jpg")`,
  backgroundSize: "100%",
  backgroundPosition: "0% -70%",
};
