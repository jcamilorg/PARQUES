import React, { Component } from "react";
import GridParks from "./Utils/GridParks";
import CardOfParque from "./Utils/CardOfPark";
import "./Styles/pageOurParks.css";
// Components
import { Route } from "react-router-dom";
import PagePark from "./Utils/PageForPark";
//informacion parques
import InfoParks from "./Utils/InfoParks";

class PageOurParks extends Component {
  render() {
    let bg_number = 0;
    const CardsOfParks = InfoParks.map((item, index) => {
      bg_number++;
      return (
        <CardOfParque
          key={index}
          imgsrc={item.imgSrc}
          title={item.title}
          linkParque={item.link}
          bg={bg_number}
        ></CardOfParque>
      );
    });

    return (
      <div className="OurParks">
        <span className="mainTitle">
          Nuestros <strong>parques</strong>
        </span>
        <div className="ContainerRoundedTop"></div>
        {/*Router para cambiar entre paginas*/}
        <div className="container-fluid pb-5 bg-white">
          <Route exact path="/nuestros-parques">
            <GridParks data={CardsOfParks} />
          </Route>

          <Route path="/nuestros-parques/embalse-neusa">
            <PagePark
              sliderImages={InfoParks[0].SliderImages}
              title={InfoParks[0].title}
              title2={InfoParks[0].title2}
              description={InfoParks[0].description}
              videoSrc={InfoParks[0].videoSrc}
            />
          </Route>

          <Route path="/nuestros-parques/guatavita">
            <PagePark
              sliderImages={InfoParks[0].SliderImages}
              title={InfoParks[1].title}
              title2={InfoParks[1].title2}
              description={InfoParks[1].description}
              videoSrc={InfoParks[1].videoSrc}
            />
          </Route>

          <Route path="/nuestros-parques/rio-neusa">
            <PagePark
              sliderImages={InfoParks[0].SliderImages}
              title={InfoParks[2].title}
              title2={InfoParks[2].title2}
              description={InfoParks[2].description}
              videoSrc={InfoParks[2].videoSrc}
            />
          </Route>

          <Route path="/nuestros-parques/puente-sopo">
            <PagePark
              sliderImages={InfoParks[0].SliderImages}
              title={InfoParks[3].title}
              title2={InfoParks[3].title2}
              description={InfoParks[3].description}
              videoSrc={InfoParks[3].videoSrc}
            />
          </Route>

          <Route path="/nuestros-parques/el-hato">
            <PagePark
              sliderImages={InfoParks[0].SliderImages}
              title={InfoParks[4].title}
              title2={InfoParks[4].title2}
              description={InfoParks[4].description}
              videoSrc={InfoParks[4].videoSrc}
            />
          </Route>

          <Route path="/nuestros-parques/juan-pablo-segundo">
            <PagePark
              sliderImages={InfoParks[0].SliderImages}
              title={InfoParks[5].title}
              title2={InfoParks[5].title2}
              description={InfoParks[5].description}
              videoSrc={InfoParks[5].videoSrc}
            />
          </Route>
        </div>
      </div>
    );
  }
}

export default PageOurParks;
