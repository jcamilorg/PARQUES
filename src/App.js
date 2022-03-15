import React, { Component } from "react";
import "./index.css";
import "./App.css";
//Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components
import HeaderParques from "./Components/HeaderParques";
import FooterParques from "./Components/FooterParques";
import PageHome from "./Components/PageHome";
import PageOurParks from "./Components/PageOurParks";
import PageWhatToDo from "./Components/PageWhatToDo";
import PageSchedulesAndRates from "./Components/PageSchedulesAndRates";
import PagParaTenerEnCuenta from "./Components/PageToKeepInMind";
import PagPreguntasFrecuentes from "./Components/PageFrequentlyQuestions";
import PagReservas from "./Components/PageBookings";
import PageContact from "./Components/PageContact";

export default function App() {
  return (
    <div className="container-fluid bg-white page-dos font-antipasto-regular">
      <Router>
        <HeaderParques />
        <Switch>
          <Route exact path="/" component={PageHome} />
          <Route
            exact
            path="/Pagina-web-parques-on-react"
            component={PageHome}
          />
          <Route path="/nuestros-parques" component={PageOurParks} />
          <Route path="/que-hacer" component={PageWhatToDo} />
          <Route path="/horarios-y-tarifas" component={PageSchedulesAndRates} />
          <Route path="/para-tener-encuenta" component={PagParaTenerEnCuenta} />
          <Route
            path="/preguntas-frecuentes"
            component={PagPreguntasFrecuentes}
          />
          <Route path="/reservas" component={PagReservas} />
          <Route path="/contactanos" component={PageContact} />
        </Switch>
        <FooterParques />
      </Router>
    </div>
  );
}
