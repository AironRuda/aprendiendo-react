import React, { Component } from "react";

import MiComponente from "./MiComponente";
import Peliculas from "./Peliculas";

class SeccionPruebas extends Component {
  HolaMundo(nombre, edad) { // Se convierte en un metodo
    var presentacion = (
      <div>
        <h2>Hola, soy {nombre}</h2>
        <h3>Tengo {edad} años</h3>
      </div>
    );
    return presentacion;
  }

  render() {
    var nombre = "Airon Ruda";
    return (
      <section id="content">
        <h2 class="subHeader">Ultimos articulos</h2>
        <p>Hola bienvenido al aprendiendo react.</p>
        {this.HolaMundo(nombre, 12)}
        <section className="componentes">
          <MiComponente />
          <Peliculas />
        </section>
      </section>
    );
  }
}

export default SeccionPruebas;
