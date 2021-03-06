import React, { Component } from "react";

export default class PageContact extends Component {
  render() {
    return (
      <div className="ContainerMainTitle" style={background}>
        <span className="mainTitle">
          <strong>Contáctanos</strong>
        </span>
        <div className="ContainerRoundedTop"></div>
        <div className=" bg-white text-dark row">
          <div className="container py-4 col-10 col-md-8 col-lg-6">
            <form id="contactForm">
              <div className="mb-3">
                <label className="form-label fs-5 text-dark-acua" for="name">
                  Nombre
                </label>
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Name"
                />
              </div>

              <div className="mb-3">
                <label
                  className="form-label fs-5 text-dark-acua"
                  for="emailAddress"
                >
                  Correo electrónico
                </label>
                <input
                  className="form-control"
                  id="emailAddress"
                  type="email"
                  placeholder="Email Address"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fs-5 text-dark-acua" for="message">
                  Mensaje
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  type="text"
                  placeholder="Message"
                  style={{ height: "10rem" }}
                ></textarea>
              </div>

              <div className="d-grid">
                <button className="btn btn-success btn-lg" type="submit">
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

const background = {
  backgroundImage: `url("https://www.car.gov.co/uploads/blog/uU2LuNDtJe.jpeg")`,
  backgroundSize: "100%",
  backgroundPosition: "0% 400%",
};
