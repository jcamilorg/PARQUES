import React from "react";
import { Link } from "react-router-dom";

export default function BotonNombreParques(props) {
  const classTitle = "title p-2 mx-2 mx-md-4 mx-lg-5 ";

  return (
    <React.Fragment>
      <div className={"d-flex justify-content-center " + props.addClass}>
        <Link to={props.linkParque} class="text-decoration-none ">
          <h3 className={classTitle}>{props.title}</h3>
        </Link>
        <div className="ImgColibri d-none d-sm-none d-md-inline">
          <img
            width="70px"
            src={(require = "../../Assets/fondos/Colibri.png")}
            alt=" "
          />
        </div>
      </div>
    </React.Fragment>
  );
}
