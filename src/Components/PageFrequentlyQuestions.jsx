import React, { Component } from "react";

function Acordion() {
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item my-2">
        <h2 className="accordion-header " id="headingOne">
          <button
            className="accordion-button bg-acua "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            ¿Puedo reservar parrillas o kioscos para asados?
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            No contamos con sistema de reserva de kioskos o parrillas en ninguno
            de nuestros parques. Puedes alquilar estos elementos a tu llegada al
            parque, en taquilla. Te recomendamos llegar con tiempo suficiente,
            especialmente los fines de semana cuando hay mayor afluencia de
            visitantes.
          </div>
        </div>
      </div>
      <div className="accordion-item my-2">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed bg-acua "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            ¿Puedo pagar con tarjeta débito o crédito?
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            No disponemos de datáfonos en ninguno de nuestros parques, dadas las
            condiciones geográficas que imposibilitan la señal y conexión a
            internet.
          </div>
        </div>
      </div>
      <div className="accordion-item my-2">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed bg-acua "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            ¿Puedo ingresar con mi mascota al parque?
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            Tu mascota es bienvenida al parque <b>EXCEPTO</b> en el parque
            Laguna Cacique Guatavita, donde NO está permitido el ingreso de
            ningún tipo de mascota.
          </div>
        </div>
      </div>

      <div className="accordion-item my-2">
        <h2 className="accordion-header" id="headingFour">
          <button
            className="accordion-button collapsed bg-acua "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
            ¿Existe algún tipo de descuento para grupos familiares o
            empresariales?
          </button>
        </h2>
        <div
          id="collapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="headingFour"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            Podrás adquirir un descuento especial, únicamente entre semana (de
            martes a viernes) si el grupo es mayor a 26 personas. Los fines de
            semana no se aplican tarifas preferenciales.
          </div>
        </div>
      </div>

      <div className="accordion-item my-2">
        <h2 className="accordion-header" id="headingFive">
          <button
            className="accordion-button collapsed bg-acua "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="false"
            aria-controls="collapseFive"
          >
            ¿Puedo adquirir la carpa en el parque?
          </button>
        </h2>
        <div
          id="collapseFive"
          className="accordion-collapse collapse"
          aria-labelledby="headingFive"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            No. Únicamente podemos alquilarte el espacio para que instales tu
            carpa.
          </div>
        </div>
      </div>
    </div>
  );
}

export default class PageFrequentlyQuestions extends Component {
  render() {
    return (
      <div className="ContainerMainTitle" style={background}>
        <span className="mainTitle">
          <strong>Preguntas</strong> frecuentes
        </span>
        <div className="ContainerRoundedTop"></div>
        <div className="container-fluid bg-white">
          <div className="container px-5 pb-5 pt-2 w-75">
            <Acordion />
            <h2 className="text-dark-acua mt-5 fs-1">
              <b>¿Cómo </b>llegar?
            </h2>
            <p className="fs-5">
              <b>¡Estás a un paso de vivir una experiencia inolvidable!</b>
            </p>
            <p className="fs-5">
              Haz clic en el nombre del parque que deseas visitar y a
              continuación elige el medio de transporte que usarás ¡encontrarás
              datos importantes para tu viaje!
            </p>
            <div className="mt-4 container-fluid">
              <img
                className="img-fluid"
                src={require("./Assets/Img/MapaParques.png")}
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const background = {
  backgroundImage: `url("https://www.car.gov.co/uploads/blog/FgvsjmPAJ8.jpeg")`,
  backgroundSize: "100%",
  backgroundPosition: "0% -64%",
};
