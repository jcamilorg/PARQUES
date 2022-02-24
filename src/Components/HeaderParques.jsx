import React from 'react'
import "./Styles/headerStyle.css";

export default function HeaderParques() {
  return (
    <header>
       <div id = "ContainerImgTopHeader">
            <input type="text" placeholder="Buscar en esta pagina 🔎"/>
        </div>
        <div className="header">
            <div className="ContainerImgHeader">
                <img src="https://parques.car.gov.co/Content/images/LOGO_CAR_CUATRICROMIA.png"/>
            </div>

            <ul>
                <li><a href="../index.html" target="index">Inicio</a></li>
                <hr/>
                <li>Parques </li>
                <hr/>
                <li>Qué hacer </li>
                <hr/>
                <li><a href="../games.html" target="index">Horarios y tarifas</a></li>
                <hr/>
                <li>Para tener en cuenta </li>
                <hr/>
                <li>Pregutas frecuentes</li>
                <hr/>
                <li>Reservas</li>
                <hr/>
                <li>Contáctanos</li>
            </ul>
        </div>
    </header>
  )
}
