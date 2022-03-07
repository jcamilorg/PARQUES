import React from "react";
import { Link } from "react-router-dom";

function CardOfParque(props) {
  return (
    <div className="CardOfParque col-5 col-lg-3 m-2">
      <div className="ContainerImg">
        <img src={props.imgsrc} />
      </div>

      <Link to={props.linkParque} class="text-decoration-none ">
        <h3 className="title p-2 mx-2 mx-md-4 mx-lg-5 container-titulo">
          {props.title}
        </h3>
      </Link>
      <div className="ImgColibri">
        <img
          width="70px"
          src={(require = "./Assets/fondos/Colibri.png")}
          alt=" "
        />
      </div>

      <p className="description">{props.description}</p>
      <Link to={props.linkParque} class="text-decoration-none">
        <div className="link">Ver más ➕</div>
      </Link>
    </div>
  );
}

export default CardOfParque;
