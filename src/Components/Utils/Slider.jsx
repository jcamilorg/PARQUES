import React from "react";

function CarrouselItem(props) {
  var CaroulseClass = "carousel-item";
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

function CarrouselAuto(props) {
  const Items = props.data;
  const Carditems = Items.map((card, index) => (
    <CarrouselItem item={card} active={index === 0 ? true : false} />
  ));

  const idTarget = "#" + props.id;

  return (
    <div
      id={props.id}
      class="carousel slide carousel-dark"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">{Carditems}</div>

      <button
        class="carousel-control-prev "
        type="button"
        data-bs-target={idTarget}
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon visually-hidden"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
        <img
          style={{ marginRight: "80%" }}
          width="25px"
          src="../../Assets/iconos/boton-slider-izquierda.png"
          onerror="this.style.display='none'"
          alt="<"
        />
      </button>

      <button
        class="carousel-control-next "
        type="button"
        data-bs-target={idTarget}
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon visually-hidden"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
        <img
          style={{ marginLeft: "80%" }}
          width="25px"
          src="../../Assets/iconos/boton-slider-derecha.png"
          onError="this.style.display='none'"
          alt=">"
        />
      </button>
    </div>
  );
}

export default CarrouselAuto;
