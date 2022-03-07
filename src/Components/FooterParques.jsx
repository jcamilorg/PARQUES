import React from "react";
import "./Styles/footerStyle.css";

export default function FooterParques() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <div class="d-flex flex-column align-items-center text-start">
              <div>
                <span class="InfoFooter">Av. Esperanza # 62-49</span>
                <span class="InfoFooter">Costado Esfera Pisos 6 y 7 </span>
                <span class="InfoFooter">Bogotá - Colombia</span>
                <span class="InfoFooter">En Bogotá: +57(1) 580 11 11</span>
                <span class="InfoFooter">
                  Línea Gratuita: 01 8000 915 317 -
                </span>
                <span class="InfoFooter">01 8000 913606</span>
                <span class="InfoFooter">http://www.car.gov.co/</span>
              </div>
            </div>
          </div>
          <div class="VerticalLine d-none d-lg-block"></div>
          <hr className="d-lg-none my-4" />
          <div className="col-lg-4 col-md-12 d-flex flex-column align-items-center justify-content-center">
            <h4 className="text-white mb-4">Nuestras redes</h4>
            <div class="d-flex justify-content-between">
              <img
                className="mx-3"
                height="50px"
                width="50px"
                src="./Assets/logos/footer_facebook.svg"
              />
              <img
                className="mx-3"
                height="50px"
                width="50px"
                src="./Assets/logos/footer_twitter.svg"
              />
              <img
                className="mx-3"
                height="50px"
                width="50px"
                src="./Assets/logos/footer_Instagram.svg"
              />
              <img
                className="mx-3"
                height="50px"
                width="50px"
                src="./Assets/logos/footer_Youtube.svg"
              />
            </div>
          </div>
          <hr className="d-lg-none my-4" />
          <div className="col-lg-2 col-md-12 d-flex align-items-center justify-content-center">
            <img width="130px" src="./Assets/logos/footer_Logo_CAR.svg" />
          </div>
          <hr className="d-lg-none my-4" />
        </div>
      </div>
    </footer>
  );
}
