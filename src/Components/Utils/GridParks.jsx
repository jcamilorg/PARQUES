import React from "react";

function GridParks(props) {
  const CardsOfParques = props.data;
  const Carditems = CardsOfParques.map((card, index) => (
    <React.Fragment key={index}>{card}</React.Fragment>
  ));
  return (
    <div className="gridParks row d-flex justify-content-center">
      {Carditems}
    </div>
  );
}

export default GridParks;
