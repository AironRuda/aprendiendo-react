import React, { Component } from "react";

import MiComponente from "./MiComponente";

class SeccionPruebas extends Component {
  /**
   * Metodos se llaman con this.methosName
   * funciones se llaman con functionName
   */

  // Propiedades de la clase
  contador = 0;
  /**
   * Para trabajar con estados se debe crear un constructor
   *
  constructor(props) {
    super(props);

    this.state = {
      contador: 0,
    };
  }
  */
  state = {
    // Puede objetos o colecciones de objetos
    contador: 0,
  };

  HolaMundo(nombre, edad) {
    // Se convierte en un metodo
    var presentacion = (
      <div>
        <h2>Hola, soy {nombre}</h2>
        <h3>Tengo {edad} años</h3>
      </div>
    );
    return presentacion;
  }

  sumar = (e) => {
    //this.contador += 1;
    /**
     * Se rescribio la funcion como tipo flecha para evitar el bindeo de this
     *
     * Para que lea estimulos se deben setiar los estados
     *
     * La funcion cunaod fue llamada debio ser bindeada con this .bind(this)
     */
    this.setState({
      contador: this.state.contador + 1,
    });
  };
  restar = (e) => {
    this.setState({
      contador: this.state.contador - 1,
    });
  };
  render() {
    var nombre = "Airon Ruda";
    return (
      <section id="content">
        <h2 className="subHeader">Ultimos articulos</h2>
        <p>Hola bienvenido al aprendiendo react.</p>

        <h2 className="subHeader">Funciones y JSX basico</h2>
        {this.HolaMundo(nombre, 12)}

        <h2 className="subHeader">Componentes</h2>
        <section className="componentes">
          <MiComponente />
        </section>

        <h2 className="subHeader">Estado</h2>
        <p>contador: {this.state.contador}</p>
        <p>
          {/* REDEFINIENDO LAS FUNCIONES DE TIPO FLECHA SE EPUEDE EVITAR EL BINDEO DEL THIS */}
          {/*<input type="button" value="sumar" onClick={this.sumar.bind(this)} />*/}
          {/*<input type="button" value="restar" onClick={this.restar.bind(this)} />*/}
          <input type="button" value="sumar" onClick={this.sumar} />
          <input type="button" value="restar" onClick={this.restar} />
        </p>
      </section>
    );
  }
}

export default SeccionPruebas;
