import React, { Component } from "react";
import "./index.css";
import "./App.css";
//Router
import { BrowserRouter as Router, Route } from "react-router-dom";
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
    <div className="container-fluid bg-white page-dos">
      <HeaderParques />
      <Router>
        <Route exact path="/">
          <PagInicio />
        </Route>
        <Route path="/nuestros-parques">
          <PagNuestrosParques />
        </Route>
        <Route path="/que-hacer">
          <PagQueHacer />
        </Route>
        <Route path="/horarios-y-tarifas">
          <PagHorariosTarifas />
        </Route>
        <Route path="/para-tener-encuenta">
          <PagParaTenerEnCuenta />
        </Route>
        <Route path="/preguntas-frecuentes">
          <PagPreguntasFrecuentes />
        </Route>
        <Route path="/reservas">
          <PagReservas />
        </Route>
        <Route path="/contactanos">
          <PagContactanos />
        </Route>
      </Router>
      <FooterParques />
    </div>
  );
}
