import React from "react";
import "./Styles/footerStyle.css";

//Importacion de imagenes
import LogoFacebook from "./Assets/logos/footer_facebook.svg";
import LogoTwitter from "./Assets/logos/footer_twitter.svg";
import LogoInstagram from "./Assets/logos/footer_Instagram.svg";
import LogoYoutube from "./Assets/logos/footer_Youtube.svg";
import LogoCAR from "./Assets/logos/footer_Logo_CAR.svg";

export default function FooterParques() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <div className="d-flex flex-column align-items-center text-start">
              <div>
                <span className="InfoFooter">Av. Esperanza # 62-49</span>
                <span className="InfoFooter">Costado Esfera Pisos 6 y 7 </span>
                <span className="InfoFooter">Bogotá - Colombia</span>
                <span className="InfoFooter">En Bogotá: +57(1) 580 11 11</span>
                <span className="InfoFooter">
                  Línea Gratuita: 01 8000 915 317 -
                </span>
                <span className="InfoFooter">01 8000 913606</span>
                <span className="InfoFooter">http://www.car.gov.co/</span>
              </div>
            </div>
          </div>
          <div className="VerticalLine d-none d-lg-block"></div>
          <hr className="d-lg-none my-4" />
          <div className="col-lg-4 col-md-12 d-flex flex-column align-items-center justify-content-center">
            <h4 className="text-white mb-4">Nuestras redes</h4>
            <div className="d-flex justify-content-between">
              <img
                className="mx-3"
                height="50px"
                width="50px"
                src={LogoFacebook}
                alt="Facebook"
              />{" "}
              <img
                className="mx-3"
                height="50px"
                width="50px"
                src={LogoTwitter}
                alt="Twitter"
              />{" "}
              <img
                className="mx-3"
                height="50px"
                width="50px"
                src={LogoInstagram}
                alt="Instagram"
              />{" "}
              <img
                className="mx-3"
                height="50px"
                width="50px"
                src={LogoYoutube}
                alt="Youtube"
              />
            </div>
          </div>
          <hr className="d-lg-none my-4" />
          <div className="col-lg-2 col-md-12 d-flex align-items-center justify-content-center">
            <img width="130px" src={LogoCAR} alt="CAR" />
          </div>
          <hr className="d-lg-none my-4" />
        </div>
      </div>
    </footer>
  );
}
