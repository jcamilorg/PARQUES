import React from "react";

function CardOfParque(props) {
  return (
    <div className="CardOfParque col-5 col-lg-3 m-2">
      <div className="ContainerImg">
        <img src={props.imgsrc} />
      </div>
      <div className="Content">
        <a href={props.linkParque} class="text-decoration-none">
          <h3 className="title p-2 mx-2 mx-md-4 mx-lg-5">{props.title}</h3>{" "}
        </a>
        <p className="description">{props.description}</p>
        <a href={props.linkParque} class="text-decoration-none">
          <div className="link">Ver más ➕</div>
        </a>
      </div>
    </div>
  );
}

export default CardOfParque;
