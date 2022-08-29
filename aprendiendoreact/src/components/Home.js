import React, { Component } from "react";

import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Articles from "./Articles";

class Home extends Component {
  render() {
    return (
      <div id="Home">
        <Slider
          title="Bienvenido al curso de React para JavaScript" //Exporta como propiedad al objeto en cuestion
          size="slider-big"
          btn="Ir al blog"
        />
        <div className="center">
          <div id="content">
            <h1 className="subHeader">Ultimos articulos</h1>
            <Articles
              home="true"/>
          </div>
          <Sidebar />
        </div>
        {/* END DIV CENTER */}
      </div>
    );
  }
}

export default Home;
