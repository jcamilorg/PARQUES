import React, { Component } from "react";

export default class PagReservas extends Component {
  render() {
    return (
      <div className="PagQueHacer">
        <span className="mainTitle">
          <strong>Reservas</strong>
        </span>
        <div className="ContainerRoundedTop"></div>
        <div className="container-fluid bg-white text-dark">
         {/*  <h1>Hola Mundo</h1> */}
          <p>
            Gracias por elegir nuestros parques como tu próximo destino turístico
          </p>
          <p><b>¡Esperamos que disfrutes tu estadía!</b></p>

          <p>
            Consulta nuestras fechas disponibles (resaltadas en color verde) y elije la que
            más te convenga. A continuación diligencia tus datos de contacto y sigue los
            pasos para reservar.
          </p>
          <div className="row justify-content-center container-fluid py-5">
            <div className="col-12 col-lg-12 m-3">
              <span className="titleRounded">Reservas de Cabañas</span>
              <hr className="hrInformate" />
            </div>
          </div>

          <div className="Container">
        
            <div className="row align-items-start pb-3">
              <div className="col-3"></div>
              <div className="col-6 text-center">
                <div className="row">
                  <div className="col-3">
                    <span className="badge bg-secondary text-dark">&nbsp;&nbsp;</span>
                    &nbsp; No disponible</div>
                  <div className="col-3"><span className="badge bg-success text-dark">&nbsp;&nbsp;</span>
                    &nbsp; Disponible</div>
                  <div className="col-3"><span className="badge bg-info text-dark">&nbsp;&nbsp;</span>
                    &nbsp; En mantenimiento</div>
                  <div className="col-3"><span className="badge bg-primary text-dark">&nbsp;&nbsp;</span>
                    &nbsp; Tus fechas</div>
                </div>
              </div>
              <div className="col-3"></div>
            </div>
            <div className="row align-items-start pb-5">
              <div className="col-2"></div>
              <div className="col-8 text-center">
                <form>
                    <div className="row bg-success">
                      <div className="col-4">
                        <select className="form-select" aria-label="Default select example">
                          <option selected>Elige un Parque</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div className="col-4">
                        <div className="input-group flex-nowrap">
                          <span className="input-group-text" id="addon-wrapping">@</span>
                          <input type="text" className="form-control" placeholder="00/00/0000" aria-label="Username" aria-describedby="addon-wrapping" />
                      </div>

                        </div>
                        <div className="col-2">1 of 1</div>
                      </div>
                </form>
                


              </div>
              <div className="col-3"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
