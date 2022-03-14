import React, { Component } from "react";
import "./index.css";
import "./App.css";
//Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components
import HeaderParques from "./Components/HeaderParques";
import FooterParques from "./Components/FooterParques";
import PagInicio from "./Components/PagInicio";
import PagNuestrosParques from "./Components/PagNuestrosParques";
import PagQueHacer from "./Components/PagQueHacer";
import PagHorariosTarifas from "./Components/PagHorariosTarifas";
import PagParaTenerEnCuenta from "./Components/PagParaTenerEnCuenta";
import PagPreguntasFrecuentes from "./Components/PagPreguntasFrecuentes";
import PagReservas from "./Components/PagReservas";
import PagContactanos from "./Components/PagContactanos";

export default function App() {
  return (
    <div className="container-fluid bg-white page-dos font-antipasto-regular">
      <Router>
        <HeaderParques />
        <Switch>
          <Route exact path="/" component={PagInicio} />
          <Route path="/nuestros-parques" component={PagNuestrosParques} />
          <Route path="/que-hacer" component={PagQueHacer} />
          <Route path="/horarios-y-tarifas" component={PagHorariosTarifas} />
          <Route path="/para-tener-encuenta" component={PagParaTenerEnCuenta} />
          <Route
            path="/preguntas-frecuentes"
            component={PagPreguntasFrecuentes}
          />
          <Route path="/reservas" component={PagReservas} />
          <Route path="/contactanos" component={PagContactanos} />
        </Switch>
        <FooterParques />
      </Router>
    </div>
  );
}
