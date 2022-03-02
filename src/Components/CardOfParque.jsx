import React from "react";

function CardOfParque(props) {
  return (
    <div className="CardOfParque col-5 col-lg-3 m-2">
      <div className="ContainerImg">
        <img src={props.imgsrc} />
      </div>
      <div className="Content">
        <h3 className="title p-2">{props.title}</h3>
        <p className="description">{props.description}</p>
        <div className="link">Ver más ➕</div>
      </div>
    </div>
  );
}

export default CardOfParque;
