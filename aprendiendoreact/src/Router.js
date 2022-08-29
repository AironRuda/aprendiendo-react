import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Formulario from "./components/Formulario";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Search from "./components/Search";
import User from "./components/User";

import SeccionPruebas from "./components/SeccionPruebas";
import Peliculas from "./components/Peliculas";
import MiComponente from "./components/MiComponente";

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

          <Route path="/user/:username" element={<User/>}/>

          <Route path="/blog/busqueda/:search" element={<Search/>}/>

          <Route
            path="/blog/articulo/:id"
            render={() => (
              <div>
                <h2>Paguina individual</h2>
              </div>
            )}
          />

          <Route path="/formulario" element={<Formulario />} />
          <Route path="*" element={<Error />} />

          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/segunda-ruta" element={<MiComponente />} />
          <Route path="/seccionPruebas" element={<SeccionPruebas />} />

          <Route
            path="/pagina-1"
            element={<MiComponente />}
            render={() => {
              <React.Fragment>
                <h1 className="subHeader">Ruta a la ruta: pagina 1</h1>
              </React.Fragment>;
            }}
          />
        </Routes>

        <div className="clearFix"></div>

        <Footer />
      </BrowserRouter>
    );
  }
}

export default Router;
