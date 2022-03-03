import React, { Component } from "react";
import GridParques from "./GridParques";
import CardOfParque from "./CardOfParque";
import "./Styles/pagNuestrosParques.css";
// Components
import { BrowserRouter as Router, Route } from "react-router-dom";
import InfoParque from "./InfoParque";

var CardsOfParques = [
  <CardOfParque
    imgsrc="https://www.iagua.es/sites/default/files/lago_portada.jpg"
    title="EMBALSE NEUSA"
    linkParque="nuestros-parques/embalse-neusa"
  ></CardOfParque>,

  <CardOfParque
    imgsrc="https://cdn-blog1.fibrasynormasdecolombia.com/wp-content/uploads/2018/02/Portada-10.jpg"
    title="GUATAVITA"
    linkParque="nuestros-parques/guatavita"
  ></CardOfParque>,

  <CardOfParque
    imgsrc="https://i.ytimg.com/vi/XIUBuhqylUc/maxresdefault.jpg"
    title="RIO NEUSA"
    linkParque="nuestros-parques/rio-neusa"
  ></CardOfParque>,

  <CardOfParque
    imgsrc="https://i.ytimg.com/vi/XIUBuhqylUc/maxresdefault.jpg"
    title="PUENTE SOPÓ"
    linkParque="nuestros-parques/puente-sopo"
  ></CardOfParque>,

  <CardOfParque
    imgsrc="https://www.car.gov.co/uploads/blog/yZoSgCdjRM.jpeg"
    title="EL HATO"
    linkParque="nuestros-parques/el-hato"
  ></CardOfParque>,

  <CardOfParque
    imgsrc="https://situr.boyaca.gov.co/wp-content/uploads/2017/05/parque-juanpablo.jpg"
    title="JUAN PABLO II"
    linkParque="nuestros-parques/juan-pablo-segundo"
  ></CardOfParque>,
];

var InfoParques = [
  {
    title: "EMBALSE NEUSA",
    title2: "Parque Embalse del Neusa",
    description:
      "Sus enormes y magníficos bosques son el escenario perfecto para ese camping con amigos que siempre has planeado. \n ¿No quieres preocuparte por nada? ¡Déjate consentir siendo huésped del hotel El Mirador o alquila una de nuestras cálidas y confortables cabañas y siéntete como en casa! Cierra tu visita con broche de oro visitando tres de los mejores restaurantes típicos de la región",
    videoSrc: "https://www.iagua.es/sites/default/files/lago_portada.jpg",
  },
  {
    title: "GUATAVITA",
    title2: "Parque Laguna del Cacique Guatavita",
    description:
      "Cuna de leyendas e historias increíbles que podrás conocer mientras recorres sus senderos empedrados a 3.100 msnm.\n Hermosas artesanías, excelentes fotografías y los mejores relatos son algunos de los regalos que este legado de la cultura Muisca tiene para ti ¿Qué estás esperando para visitarla?",
    videoSrc:
      "https://cdn-blog1.fibrasynormasdecolombia.com/wp-content/uploads/2018/02/Portada-10.jpg",
  },

  {
    title: "RÍO NEUSA",
    title2: "Parque Río Neusa",
    description:
      "Cuna de leyendas e historias increíbles que podrás conocer mientras recorres sus senderos empedrados a 3.100 msnm.\n Hermosas artesanías, excelentes fotografías y los mejores relatos son algunos de los regalos que este legado de la cultura Muisca tiene para ti ¿Qué estás esperando para visitarla?",
    videoSrc: "https://www.iagua.es/sites/default/files/lago_portada.jpg",
  },

  {
    title: "PUENTE SOPÓ",
    title2: "Parque Puente Sopó",
    description:
      "Cuna de leyendas e historias increíbles que podrás conocer mientras recorres sus senderos empedrados a 3.100 msnm.\n Hermosas artesanías, excelentes fotografías y los mejores relatos son algunos de los regalos que este legado de la cultura Muisca tiene para ti ¿Qué estás esperando para visitarla?",
    videoSrc: "https://www.iagua.es/sites/default/files/lago_portada.jpg",
  },

  {
    title: "EL HATO",
    title2: "Parque Embalse el Hato",
    description:
      "Cuna de leyendas e historias increíbles que podrás conocer mientras recorres sus senderos empedrados a 3.100 msnm.\n Hermosas artesanías, excelentes fotografías y los mejores relatos son algunos de los regalos que este legado de la cultura Muisca tiene para ti ¿Qué estás esperando para visitarla?",
    videoSrc: "https://www.car.gov.co/uploads/blog/yZoSgCdjRM.jpeg",
  },

  {
    title: "JUAN PABLO II",
    title2: "Parque Juan Pablo II",
    description:
      "Cuna de leyendas e historias increíbles que podrás conocer mientras recorres sus senderos empedrados a 3.100 msnm.\n Hermosas artesanías, excelentes fotografías y los mejores relatos son algunos de los regalos que este legado de la cultura Muisca tiene para ti ¿Qué estás esperando para visitarla?",
    videoSrc:
      "https://situr.boyaca.gov.co/wp-content/uploads/2017/05/parque-juanpablo.jpg",
  },
];

class PagNuestrosParques extends Component {
  render() {
    return (
      <div className="NuestrosParques">
        <span className="mainTitle">
          Nuestros <strong>parques</strong>
        </span>
        <div className="ContainerRoundedTop"></div>
        {/*Router para cambiar entre paginas*/}
        <div className="container-fluid pb-5 bg-white">
          <Router>
            <Route exact path="/nuestros-parques/">
              <GridParques data={CardsOfParques} />
            </Route>

            <Route path="/nuestros-parques/embalse-neusa">
              <InfoParque
                title={InfoParques[0].title}
                title2={InfoParques[0].title2}
                description={InfoParques[0].description}
                videoSrc={InfoParques[0].videoSrc}
              />
            </Route>

            <Route path="/nuestros-parques/guatavita">
              <InfoParque
                title={InfoParques[1].title}
                title2={InfoParques[1].title2}
                description={InfoParques[1].description}
                videoSrc={InfoParques[1].videoSrc}
              />
            </Route>

            <Route path="/nuestros-parques/rio-neusa">
              <InfoParque
                title={InfoParques[2].title}
                title2={InfoParques[2].title2}
                description={InfoParques[2].description}
                videoSrc={InfoParques[2].videoSrc}
              />
            </Route>

            <Route path="/nuestros-parques/puente-sopo">
              <InfoParque
                title={InfoParques[3].title}
                title2={InfoParques[3].title2}
                description={InfoParques[3].description}
                videoSrc={InfoParques[3].videoSrc}
              />
            </Route>

            <Route path="/nuestros-parques/el-hato">
              <InfoParque
                title={InfoParques[4].title}
                title2={InfoParques[4].title2}
                description={InfoParques[4].description}
                videoSrc={InfoParques[4].videoSrc}
              />
            </Route>

            <Route path="/nuestros-parques/juan-pablo-segundo">
              <InfoParque
                title={InfoParques[5].title}
                title2={InfoParques[5].title2}
                description={InfoParques[5].description}
                videoSrc={InfoParques[5].videoSrc}
              />
            </Route>
          </Router>
        </div>
      </div>
    );
  }
}

export default PagNuestrosParques;
