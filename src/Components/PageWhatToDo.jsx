import React, { Component } from "react";
import "./Styles/pageWhatToDo.css";
import { ContentWhatToDo } from "./Utils/InfoParks";
import { Switch, Route, Link, useParams } from "react-router-dom";

function CardWhatToDo(props) {
  return (
    <div className="d-flex flex-column p-2 h-100  justify-content-center align-items-start shadow-sm hover-orange text-white">
      <p
        style={{
          textShadow: "1px 1px 2px #000",
          textAlign: "left",
        }}
      >
        <b className="fs-5">{props.description}</b>
      </p>
      <i class="fa-solid fa-circle-plus"></i>
    </div>
  );
}

function Activity() {
  let { id } = useParams();
  var index;
  if (id >= 0 || id < 8) {
    index = parseInt(id);
  } else {
    index = 0;
  }
  //let imgSrc = ContenidoQueHacer[0].icono.toString();
  var imgSrc = "./Assets/icons/Cabañas_QH.png";

  return (
    <div className="text-start pt-5 text-dark py-5 px-4 mb-3 shadow">
      <hr className="line-title" />
      <h2 className="fs-4 d-flex">
        {ContentWhatToDo[index].title_activity} {ContentWhatToDo[index].icon}
      </h2>
      <br />
      <br />
      {ContentWhatToDo[index].content}
    </div>
  );
}

export default class PageWhatToDo extends Component {
  render() {
    return (
      <div className="ContainerMainTitle">
        <span className="mainTitle">
          <strong>Qué</strong> Hacer
        </span>
        <div className="ContainerRoundedTop "></div>
        <div className="container-fluid bg-white pb-5 font-sans-serif">
          <div className=" row justify-content-center">
            <div className="col-sm-11 row col-md-5 col-lg-4">
              <div className="col-6 my-2">
                <Link to="/que-hacer/0">
                  <CardWhatToDo description="Zona de Camping" />
                </Link>
              </div>
              <div className="col-6 my-2">
                <Link to="/que-hacer/1">
                  <CardWhatToDo description="Kioscos y Hornillas" />
                </Link>
              </div>
              <div className="col-6 my-2 ">
                <Link to="/que-hacer/2">
                  <CardWhatToDo description="Visitas guiadas Senderismo" />
                </Link>
              </div>
              <div className="col-6 my-2">
                <Link to="/que-hacer/3">
                  <CardWhatToDo description="Prestamo de bicicletas" />
                </Link>
              </div>
              <div className="col-6 my-2">
                <Link to="/que-hacer/4">
                  <CardWhatToDo description="Restaurantes" />
                </Link>
              </div>
              <div className="col-6 my-2">
                <Link to="/que-hacer/5">
                  <CardWhatToDo description="Navegación" />
                </Link>
              </div>
              <div className="col-6 my-2 ">
                <Link to="/que-hacer/6">
                  <CardWhatToDo description="Alquiler de cabañas" />
                </Link>
              </div>
              <div className="col-6 my-2">
                <Link to="/que-hacer/7">
                  <CardWhatToDo description="Pesca deportiva" />
                </Link>
              </div>
            </div>

            {/* Contenendor de informacion */}
            <div className="col-sm-11 col-md-5 col-lg-4">
              <Switch>
                <Route path="/que-hacer/:id" children={<Activity />} />
              </Switch>
              <div className="d-flex justify-content-around">
                <button className="btn btn-secondary">💻 RESERVAS</button>
                <button className="btn btn-secondary">💵 TARIFAS</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
