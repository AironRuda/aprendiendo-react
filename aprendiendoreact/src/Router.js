import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import SeccionPruebas from "./components/SeccionPruebas";
import Peliculas from "./components/Peliculas";

import MiComponente from "./components/MiComponente";
import Error from "./components/Error";

class Router extends Component {
  render() {
    var buttonString = "IR AL BLOG";
    return (
      <BrowserRouter>
        <Header />

        <Slider
          title="Bienvenido al curso de React para JavaScript" //Exporta como propiedad al objeto en cuestion
          btn={buttonString}
        />
        <div className="center">
          {/* Configurar rutas y paguinas */}
          <Routes>
            <Route path="/" element={<Peliculas />} />
            <Route path="/home" element={<Peliculas />} />
            <Route path="/ruta-prueba" element={<SeccionPruebas />} />
            <Route path="/segunda-ruta" element={<MiComponente />} />
            <Route path="/pagina-1" element={<MiComponente/>} render={()=>{
              <React.Fragment>
                <h1>Ruta a la ruta: pagina 1</h1>
                <MiComponente saludo="Hola muy buenas"/>
              </React.Fragment>
            }}
            
            />
            <Route path="*" element={<Error />} />
          </Routes>
          <Sidebar />
          <div className="clearFix"></div>
        </div>
        {/* END DIV CENTER */}
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Router;
