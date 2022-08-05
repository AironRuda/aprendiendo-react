import React, { Component } from "react";

class Slider extends Component {
  render() {
    return (
      <div id="slider" className={this.props.size}>
        <h1>
          {
            /*Extrae la propiedad definida en el llamado de la misma*/
            this.props.title
          }
        </h1>

        {
          /*Se llama a la propiedad definida en el uso de la misma*/
          this.props.btn && (
            <a href="" className="btn-white">
              {this.props.btn}
            </a>
          )
        }
      </div>
    );
  }
}

export default Slider;
