import React, { Component } from "react";

class Slider extends Component {
  render() {
    return (
      <div id="slider" className="slider-big">
        <h1>{this.props.title /*Extrae la propiedad definida en el llamado de la misma*/}</h1>
        <a href="#" className="btn-white">
          {this.props.btn /*Se llama a la propidad definida en el uso de la misma*/}
        </a>
      </div>
    );
  }
}

export default Slider;
