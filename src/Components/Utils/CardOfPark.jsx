import React from "react";
import { Link } from "react-router-dom";
import Title from "./TitlePark";
//Importacion de imagenes
import view_more from "../Assets/icons/btn-ver-mas.svg";

function CardOfParque(props) {
  return (
    <div className="CardOfParque col-10 col-sm-5 col-lg-3 m-2">
      <div className="ContainerImg">
        <img src={props.imgsrc} />
      </div>

      <Title
        title={props.title}
        linkParque={props.linkParque}
        addClass={"top-negative-20px"}
        bg={props.bg}
      />

      <p className="description">{props.description}</p>
      <Link to={props.linkParque} class="text-decoration-none">
        {/*<div className="link">Ver más ➕</div>*/}
        <img width="100px" src={view_more} />
      </Link>
    </div>
  );
}

export default CardOfParque;
