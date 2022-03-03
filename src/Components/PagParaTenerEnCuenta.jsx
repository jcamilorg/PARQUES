import React, { Component } from "react";

export default class PagParaTenerEnCuenta extends Component {
  render() {
    return (
      <div className="PagQueHacer">
        <span className="mainTitle">
          Para tener <strong>en cuenta</strong>
        </span>
        <div className="ContainerRoundedTop"></div>
        <div className="container-fluid bg-white text-dark">
          <p className="p-5 mx-5">
            Queremos que tu visita a nuestros parques sea una experiencia
            memorable, por eso te invitamos a seguir estas recomendaciones para
            tu seguridad y la de tus acompañantes:
          </p>
        </div>
      </div>
    );
  }
}
