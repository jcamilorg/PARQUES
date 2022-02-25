import React from 'react'
import "./Styles/headerStyle.css";

export default function HeaderParques() {
  return (
    <header>
       <div id = "ContainerImgTopHeader">
            <input type="text" placeholder="(Desarrollo)Buscar en esta pagina 🔎"/>
        </div>
        <div className="header">
            <div className="ContainerImgHeader">
                <img src="https://parques.car.gov.co/Content/images/LOGO_CAR_CUATRICROMIA.png"/>
            </div>

            <ul>
                <li><a href="../index.html" target="index">Inicio</a></li>
                <div class="VerticalLine"></div>
                <li>Parques </li>
                <div class="VerticalLine"></div>
                <li>Qué hacer </li>
                <div class="VerticalLine"></div>
                <li><a href="../games.html" target="index">Horarios y tarifas</a></li>
                <div class="VerticalLine"></div>
                <li>Para tener en cuenta </li>
                <div class="VerticalLine"></div>
                <li>Pregutas frecuentes</li>
                <div class="VerticalLine"></div>
                <li>Reservas</li>
                <div class="VerticalLine"></div>
                <li>Contáctanos</li>
            </ul>
        </div>
    </header>
  )
}
