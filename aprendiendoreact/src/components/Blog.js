import React, { Component } from "react";

import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Blog extends Component {
  render() {
    return (
      <div id="Blog">
        <Slider
          title="Blog" //Exporta como propiedad al objeto en cuestion
          size="slider-small"
        />
        <div className="center">
          <div id="content">
            {/*Listado de articulos que vendran del API */}
          </div>
          <Sidebar 
            blog="true"
          />
        </div>
        {/* END DIV CENTER */}
      </div>
    );
  }
}

export default Blog;
