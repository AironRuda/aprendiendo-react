import React, { Component } from "react";

import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Formulario extends Component {
  render() {
    return (
      <div id="formulario">
        <Slider
          title="Formulario" //Exporta como propiedad al objeto en cuestion
          size="slider-small"
        />
        <div className="center">
          <div id="content">
            {/*Listado de articulos que vendran del API */}
          </div>
          <Sidebar blog="false" />
        </div>
        {/* END DIV CENTER */}
      </div>
    );
  }
}

export default Formulario;
