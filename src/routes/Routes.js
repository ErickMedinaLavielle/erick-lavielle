import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../pages/home";

const Rutas = () => {
  return (
    <Router>
      <Route path="/" exact={true}>
        <Home></Home>
      </Route>
    </Router>
  );
};

export default Rutas;
