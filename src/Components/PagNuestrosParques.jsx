import React, { Component } from "react";
import GridParques from "./GridParques";
import CardOfParque from "./CardOfParque";
import "./Styles/pagNuestrosParques.css";
// Components
import { BrowserRouter as Router, Route } from "react-router-dom";
import InfoParque from "./InfoParque";
//informacion parques
import InfoParques from "./Utils/InformacionParques";

class PagNuestrosParques extends Component {
  render() {
    var bg_number = 0;
    const CardsOfParques = InfoParques.map((item) => {
      bg_number++;
      return (
        <CardOfParque
          imgsrc={item.imgSrc}
          title={item.title}
          linkParque={item.link}
          bg={bg_number}
        ></CardOfParque>
      );
    });

    return (
      <div className="NuestrosParques">
        <span className="mainTitle">
          Nuestros <strong>parques</strong>
        </span>
        <div className="ContainerRoundedTop"></div>
        {/*Router para cambiar entre paginas*/}
        <div className="container-fluid pb-5 bg-white">
          <Route exact path="/nuestros-parques">
            <GridParques data={CardsOfParques} />
          </Route>

          <Route path="/nuestros-parques/embalse-neusa">
            <InfoParque
              sliderImages={InfoParques[0].SliderImages}
              title={InfoParques[0].title}
              title2={InfoParques[0].title2}
              description={InfoParques[0].description}
              videoSrc={InfoParques[0].videoSrc}
            />
          </Route>

          <Route path="/nuestros-parques/guatavita">
            <InfoParque
              sliderImages={InfoParques[0].SliderImages}
              title={InfoParques[1].title}
              title2={InfoParques[1].title2}
              description={InfoParques[1].description}
              videoSrc={InfoParques[1].videoSrc}
            />
          </Route>

          <Route path="/nuestros-parques/rio-neusa">
            <InfoParque
              sliderImages={InfoParques[0].SliderImages}
              title={InfoParques[2].title}
              title2={InfoParques[2].title2}
              description={InfoParques[2].description}
              videoSrc={InfoParques[2].videoSrc}
            />
          </Route>

          <Route path="/nuestros-parques/puente-sopo">
            <InfoParque
              sliderImages={InfoParques[0].SliderImages}
              title={InfoParques[3].title}
              title2={InfoParques[3].title2}
              description={InfoParques[3].description}
              videoSrc={InfoParques[3].videoSrc}
            />
          </Route>

          <Route path="/nuestros-parques/el-hato">
            <InfoParque
              sliderImages={InfoParques[0].SliderImages}
              title={InfoParques[4].title}
              title2={InfoParques[4].title2}
              description={InfoParques[4].description}
              videoSrc={InfoParques[4].videoSrc}
            />
          </Route>

          <Route path="/nuestros-parques/juan-pablo-segundo">
            <InfoParque
              sliderImages={InfoParques[0].SliderImages}
              title={InfoParques[5].title}
              title2={InfoParques[5].title2}
              description={InfoParques[5].description}
              videoSrc={InfoParques[5].videoSrc}
            />
          </Route>
        </div>
      </div>
    );
  }
}

export default PagNuestrosParques;
