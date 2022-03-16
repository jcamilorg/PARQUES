import React from "react";
//Importacion de imagenes
import btn_izq from "../Assets/icons/btn-slider-izquierda.png";
import btn_der from "../Assets/icons/btn-slider-derecha.png";

function SliderItem(props) {
  let CaroulseClass = "carousel-item";
  if (props.active) {
    CaroulseClass = "carousel-item active";
  }
  return (
    <div className={CaroulseClass}>
      <div className="d-flex justify-content-center">
        <div className="py-4 px-5">
          <React.Fragment>{props.item}</React.Fragment>
        </div>
      </div>
    </div>
  );
}

function SliderAuto(props) {
  const Items = props.data;
  const Carditems = Items.map((card, index) => (
    <SliderItem key={index} item={card} active={index === 0 ? true : false} />
  ));

  const idTarget = "#" + props.id;

  return (
    <div
      id={props.id}
      className="carousel slide carousel-dark"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">{Carditems}</div>

      <button
        className="carousel-control-prev "
        type="button"
        data-bs-target={idTarget}
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon visually-hidden"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
        <img
          style={{ marginRight: "80%" }}
          width="25px"
          src={btn_izq}
          onError={() => "this.style.display='none'"}
          alt="<"
        />
      </button>

      <button
        className="carousel-control-next "
        type="button"
        data-bs-target={idTarget}
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon visually-hidden"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
        <img
          style={{ marginLeft: "80%" }}
          width="25px"
          src={btn_der}
          onError={() => "this.style.display='none'"}
          alt=">"
        />
      </button>
    </div>
  );
}

export default SliderAuto;
