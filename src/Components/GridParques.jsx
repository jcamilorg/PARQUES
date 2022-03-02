import React from "react";

function GridParques(props) {
  const CardsOfParques = props.data;
  const Carditems = CardsOfParques.map((card) => (
    <React.Fragment>{card}</React.Fragment>
  ));
  return (
    <div className="gridParques row d-flex justify-content-center">
      {Carditems}
    </div>
  );
}

export default GridParques;
