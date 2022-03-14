import React from "react";
import { Link } from "react-router-dom";
//Importacion de imagenes
import colibri from "../Assets/fondos/Colibri.png";

export default function BotonNombreParques(props) {
  var bg = " bg-btn-acua";
  switch (props.bg) {
    case 1:
      bg = " bg-btn-acua";
      break;

    case 2:
      bg = " bg-btn-blue";
      break;

    case 3:
      bg = " bg-btn-dark-blue";
      break;

    case 4:
      bg = " bg-btn-dark-green";
      break;

    case 5:
      bg = " bg-btn-green";
      break;

    case 6:
      bg = " bg-btn-orange";
      break;
    default:
      break;
  }
  const classTitle = "title p-2 mx-2 mx-md-4 mx-lg-5 " + bg;

  return (
    <React.Fragment>
      <div className={"d-flex justify-content-center " + props.addClass}>
        <Link to={props.linkParque} class="text-decoration-none ">
          <h3 className={classTitle}>{props.title}</h3>
        </Link>
        <div className="ImgColibri d-none d-sm-none d-md-inline">
          <img width="70px" src={colibri} alt=" " />
        </div>
      </div>
    </React.Fragment>
  );
}
