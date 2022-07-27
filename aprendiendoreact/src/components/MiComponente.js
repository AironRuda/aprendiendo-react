import React, { Component } from "react";

class MiComponente extends Component {
  render() {
    var receta = {
      nombre: "pizza",
      ingredientes: ["tomate", "queso", "jamon"],
      calorias: 400,
    };

    return (
      <div className="MiComponente">
        <h1>{receta.nombre}</h1>
        <h2>{"Calorias: " + receta.calorias}</h2>
        <ol>
          {receta.ingredientes.map((ingrediente, i) => {
            return <li key={i}>{ingrediente}</li>;
          })}
        </ol>

        <hr />
      </div>
    );
  }
}

export default MiComponente;
