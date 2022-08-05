import React, { Component, createRef } from "react";

import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Formulario extends Component {
  nombreRef = React.createRef();
  apellidosRef = React.createRef();
  bioRef = React.createRef();
  generoHombreRef = React.createRef();
  generoMujerRef = React.createRef();
  generoOtroRef = React.createRef();

  state = {
    user: {},
  };

  recibirFormulario = (e) => {
    e.preventDefault();

    var genero;
    if (this.generoMujerRef.current.checked) {
      genero = this.generoMujerRef.current.value;
    } else if (this.generoOtroRef.current.checked) {
      genero = this.generoOtroRef.current.value;
    } else {
      genero = this.generoHombreRef.current.value;
    }

    var user = {
      nombre: this.nombreRef.current.value,
      apellido: this.apellidosRef.current.value,
      biografia: this.bioRef.current.value,
      genero: genero,
    };

    this.setState({
      user: user,
    });

    console.log("formulario enviado");
    console.log(user);
  };
  render() {
    if (this.state.user.nombre) {
      var user = this.state.user;
    }
    return (
      <div id="formulario">
        <Slider
          title="Formulario" //Exporta como propiedad al objeto en cuestion
          size="slider-small"
        />
        <div className="center">
          <div id="content">
            {/*MOSTRAR DATOS DEL FORMULARIO */}
            {this.state.user.nombre && (
              <div id="user-data">
                <p>
                  Nombre: <strong>{user.nombre}</strong>{" "}
                </p>
                <p>
                  Apellido: <strong>{user.apellido}</strong>{" "}
                </p>
                <p>
                  Bio: <strong>{user.biografia}</strong>{" "}
                </p>
                <p>
                  Genero: <strong>{user.genero}</strong>{" "}
                </p>
              </div>
            )}

            {/*contenido formulario */}
            <form
              className="mid-form"
              action=""
              onSubmit={this.recibirFormulario}
            >
              <div className="formGroup">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text" //
                  name="nombre"
                  ref={this.nombreRef}
                />
              </div>
              <div className="formGroup">
                <label htmlFor="apellido">Apellido</label>
                <input
                  type="text" //
                  name="nombre"
                  ref={this.apellidosRef}
                />
              </div>
              <div className="formGroup">
                <label htmlFor="bio">Biografia</label>
                <textarea
                  name="bio"
                  id=""
                  cols="30"
                  rows="10"
                  ref={this.bioRef}
                ></textarea>
              </div>
              <div className="formGroup radioButtons">
                <input
                  type="radio" //
                  name="Genero"
                  value="hombre"
                  ref={this.generoHombreRef}
                />
                Hombre
                <input
                  type="radio" //
                  name="Genero"
                  value="mujer"
                  ref={this.generoMujerRef}
                />
                Mujer
                <input
                  type="radio" //
                  name="Genero"
                  value="otro"
                  ref={this.generoOtroRef}
                />
                Otro
              </div>
              <div className="clearFix"></div>
              <input type="submit" value="Enviar" className="btn btn-success" />
            </form>
          </div>
          <Sidebar blog="false" />
        </div>
        {/* END DIV CENTER */}
      </div>
    );
  }
}

export default Formulario;
