import React, { Component } from "react";

export default class PagContactanos extends Component {
  render() {
    return (
      <div className="PagQueHacer">
        <span className="mainTitle">
          <strong>Contáctanos</strong>
        </span>
        <div className="ContainerRoundedTop"></div>
        <div className=" bg-white text-dark row">
          <div class="container py-4 col-10 col-md-8 col-lg-6">
            <form id="contactForm">
              <div class="mb-3">
                <label class="form-label fs-5 text-dark-acua" for="name">
                  Nombre
                </label>
                <input
                  class="form-control"
                  id="name"
                  type="text"
                  placeholder="Name"
                />
              </div>

              <div class="mb-3">
                <label
                  class="form-label fs-5 text-dark-acua"
                  for="emailAddress"
                >
                  Correo electrónico
                </label>
                <input
                  class="form-control"
                  id="emailAddress"
                  type="email"
                  placeholder="Email Address"
                />
              </div>

              <div class="mb-3">
                <label class="form-label fs-5 text-dark-acua" for="message">
                  Mensaje
                </label>
                <textarea
                  class="form-control"
                  id="message"
                  type="text"
                  placeholder="Message"
                  style={{ height: "10rem" }}
                ></textarea>
              </div>

              <div class="d-grid">
                <button class="btn btn-success btn-lg" type="submit">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
