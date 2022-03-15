import React from "react";
import { Link } from "react-router-dom";
import Titulo from "./Utils/BotonNombreParques";
//Importacion de imagenes
import ver_mas from "./Assets/iconos/btn-ver-mas.svg";

function CardOfParque(props) {
  return (
    <div className="CardOfParque col-10 col-sm-5 col-lg-3 m-2">
      <div className="ContainerImg">
        <img src={props.imgsrc} />
      </div>

      <Titulo
        title={props.title}
        linkParque={props.linkParque}
        addClass={"top-menos-20px"}
        bg={props.bg}
      />

      <p className="description">{props.description}</p>
      <Link to={props.linkParque} class="text-decoration-none">
        {/*<div className="link">Ver más ➕</div>*/}
        <img width="100px" src={ver_mas} />
      </Link>
    </div>
  );
}

export default CardOfParque;
