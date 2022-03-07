import React, { Component } from "react";
import { Link } from "react-router-dom";

var InfoParques = [
  {
    title: "EMBALSE NEUSA",
    horario: "6:30 a.m. a 4:30 p.m.",
    description:
      "Alojamiento en cabañas: Ingreso (check in): 3:00 p.m. Salida (check out): 1:00 p.m. Horario para camping: Martes a jueves: 6:30 a.m. a 4:30 p.m. Viernes, sábado y día anterior a festivo: 6:30 a.m. a 10:00 p.m.",
    imgSrc: "https://www.iagua.es/sites/default/files/lago_portada.jpg",
  },
  {
    title: "GUATAVITA",
    horario: "9:00 am. a 4:00 pm.",
    description:
      "Horario de funcionamiento del parque La Reserva Forestal Protectora Laguna del Cacique de Guatavita y Cuchilla de Peña Blanca",
    imgSrc:
      "https://cdn-blog1.fibrasynormasdecolombia.com/wp-content/uploads/2018/02/Portada-10.jpg",
  },

  {
    title: "RÍO NEUSA",
    horario: "8:00 a.m. a 5:00 p.m.",
    description:
      "Alojamiento en cabañas: Ingreso (check in): 3:00 p.m. Salida (check out): 1:00 p.m. Horario para camping: Martes a jueves: 8:00 a.m. a 5:00 p.m. Viernes, sábado y día anterior a festivo: 8:00 a.m. a 8:00 p.m.",
    imgSrc: "https://www.iagua.es/sites/default/files/lago_portada.jpg",
  },

  {
    title: "PUENTE SOPÓ",
    horario: "8:00 a.m. a 5:00 p.m.",
    description:
      "Cuna de leyendas e historias increíbles que podrás conocer mientras recorres sus senderos empedrados a 3.100 msnm.\n Hermosas artesanías, excelentes fotografías y los mejores relatos son algunos de los regalos que este legado de la cultura Muisca tiene para ti ¿Qué estás esperando para visitarla?",
    imgSrc: "https://www.iagua.es/sites/default/files/lago_portada.jpg",
  },

  {
    title: "EL HATO",
    horario: "8:00 a.m. a 5:00 p.m.",
    description:
      "Cuna de leyendas e historias increíbles que podrás conocer mientras recorres sus senderos empedrados a 3.100 msnm.\n Hermosas artesanías, excelentes fotografías y los mejores relatos son algunos de los regalos que este legado de la cultura Muisca tiene para ti ¿Qué estás esperando para visitarla?",
    imgSrc: "https://www.car.gov.co/uploads/blog/yZoSgCdjRM.jpeg",
  },

  {
    title: "JUAN PABLO II",
    horario: "8:00 a.m. a 5:00 p.m.",
    description:
      "Cuna de leyendas e historias increíbles que podrás conocer mientras recorres sus senderos empedrados a 3.100 msnm.\n Hermosas artesanías, excelentes fotografías y los mejores relatos son algunos de los regalos que este legado de la cultura Muisca tiene para ti ¿Qué estás esperando para visitarla?",
    imgSrc:
      "https://situr.boyaca.gov.co/wp-content/uploads/2017/05/parque-juanpablo.jpg",
  },
];

function CardOfHorario(props) {
  return (
    <div className="container d-flex flex-column align-items-center border shadow-lg rounded-3">
      <button className="btn btn-secondary mt-4 mb-3 fs-5 bg-acua">
        {props.title}
      </button>
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
function Carrousel() {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide carousel-dark"
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
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active ">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-5">
              <CardOfHorario
                title={InfoParques[0].title}
                horario={InfoParques[0].horario}
                description={InfoParques[0].description}
                imgSrc={InfoParques[0].imgSrc}
              />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-5">
              <CardOfHorario
                title={InfoParques[1].title}
                horario={InfoParques[1].horario}
                description={InfoParques[1].description}
                imgSrc={InfoParques[1].imgSrc}
              />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-5">
              <CardOfHorario
                title={InfoParques[2].title}
                horario={InfoParques[2].horario}
                description={InfoParques[2].description}
                imgSrc={InfoParques[2].imgSrc}
              />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-5">
              <CardOfHorario
                title={InfoParques[3].title}
                horario={InfoParques[3].horario}
                description={InfoParques[3].description}
                imgSrc={InfoParques[3].imgSrc}
              />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-5">
              <CardOfHorario
                title={InfoParques[4].title}
                horario={InfoParques[4].horario}
                description={InfoParques[4].description}
                imgSrc={InfoParques[4].imgSrc}
              />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-5">
              <CardOfHorario
                title={InfoParques[5].title}
                horario={InfoParques[5].horario}
                description={InfoParques[5].description}
                imgSrc={InfoParques[5].imgSrc}
              />
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev "
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next "
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
          <h1 className="mb-4 fs-1 text-dark-acua ">IMPORTANTE</h1>
          <p className="m-auto fs-5 w-50 text-center text-dark-blue">
            <b>El primer día hábil de cada semana NO hay atención</b> ni se
            permite el ingreso a ninguno de nuestros parques.
          </p>
          <div className="row justify-content-center p-5">
            <div className="col-10  pb-5 ">
              <Carrousel />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
