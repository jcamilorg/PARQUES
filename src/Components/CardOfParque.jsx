import React from "react";
import { Link } from "react-router-dom";
import Titulo from "./Utils/BotonNombreParques";

function CardOfParque(props) {
  return (
    <div className="CardOfParque col-5 col-lg-3 m-2">
      <div className="ContainerImg">
        <img src={props.imgsrc} />
      </div>

      <Titulo
        title={props.title}
        linkParque={props.linkParque}
        addClass={"top-menos-20px"}
      />

      <p className="description">{props.description}</p>
      <Link to={props.linkParque} class="text-decoration-none">
        <div className="link">Ver más ➕</div>
      </Link>
    </div>
  );
}

export default CardOfParque;
