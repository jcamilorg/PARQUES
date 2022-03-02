import React, { Component } from "react";
import GridParques from "./GridParques";
import CardOfParque from "./CardOfParque";
import "./Styles/nuestrosParques.css";

var CardsOfParques = [
  <CardOfParque
    imgsrc="https://www.iagua.es/sites/default/files/lago_portada.jpg"
    title="EMBALSE NEUSA"
  ></CardOfParque>,

  <CardOfParque
    imgsrc="https://cdn-blog1.fibrasynormasdecolombia.com/wp-content/uploads/2018/02/Portada-10.jpg"
    title="GUATAVITA"
  ></CardOfParque>,

  <CardOfParque
    imgsrc="https://i.ytimg.com/vi/XIUBuhqylUc/maxresdefault.jpg"
    title="RIO NEUSA"
  ></CardOfParque>,

  <CardOfParque
    imgsrc="https://i.ytimg.com/vi/XIUBuhqylUc/maxresdefault.jpg"
    title="PUENTE SOPÓ"
  ></CardOfParque>,

  <CardOfParque
    imgsrc="https://www.car.gov.co/uploads/blog/yZoSgCdjRM.jpeg"
    title="EL HATO"
  ></CardOfParque>,

  <CardOfParque
    imgsrc="https://situr.boyaca.gov.co/wp-content/uploads/2017/05/parque-juanpablo.jpg"
    title="JUAN PABLO II"
  ></CardOfParque>,
];

class NuestrosParques extends Component {
  render() {
    return (
      <div className="NuestrosParques">
        <span className="mainTitle">
          Nuestros <strong>parques</strong>
        </span>
        <div className="ContainerGridParques">
          <GridParques data={CardsOfParques} />
        </div>
      </div>
    );
  }
}

export default NuestrosParques;
