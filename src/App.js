import React, { Component } from "react";
import "./index.css";
import "./App.css";
//Router
import { BrowserRouter as Router, Route } from "react-router-dom";
// Components
import HeaderParques from "./Components/HeaderParques";
import FooterParques from "./Components/FooterParques";
import PagInicio from "./Components/PagInicio";
import NuestrosParques from "./Components/NuestrosParques";

export default function App() {
  return (
    <div className="container-fluid bg-white page-dos">
      <HeaderParques />
      <Router>
        <Route exact path="/">
          <PagInicio />
        </Route>
        <Route path="/nuestros-parques">
          <NuestrosParques />
        </Route>
      </Router>
      <FooterParques />
    </div>
  );
}
