import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";

import Footer from "./components/Footer";
//import SeccionPruebas from "./components/SeccionPruebas";
//import Peliculas from "./components/Peliculas";

import MiComponente from "./components/MiComponente";
import Error from "./components/Error";
import Home from "./components/Home";
import Blog from "./components/Blog";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />

        {/* Configurar rutas y paguinas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/segunda-ruta" element={<MiComponente />} />
          <Route
            path="/pagina-1"
            element={<MiComponente />}
            render={() => {
              <React.Fragment>
                <h1>Ruta a la ruta: pagina 1</h1>
                <MiComponente saludo="Hola muy buenas" />
              </React.Fragment>;
            }}
          />
          <Route path="*" element={<Error />} />
        </Routes>

        <div className="clearFix"></div>

        <Footer />
      </BrowserRouter>
    );
  }
}

export default Router;
