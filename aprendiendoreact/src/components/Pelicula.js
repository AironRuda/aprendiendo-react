import React, { Component } from "react";

class Pelicula extends Component {
  
  marcar= () => {
    // Funcion que ejecuta el marcarFavotita del padre y envia parametros de la pelicula actual
    this.props.marcarFavorita(this.props.pelicula, this.props.indice)
  }
  
  render() {
    // pelicula se llama la prop que leerá del llamado al objeto
    // Asigna a titulo e image, los valores extraidos de los props aplicados en el llamado del objeto
    const { titulo, image } = this.props.pelicula;

    const pelicula = this.props.pelicula

    return (
      <article className="article-item" id="article-template">
        <div className="image-wrap">
          <img src={image} alt={titulo} />
        </div>
        <h2>{titulo}</h2>
        <span className="date">Hace 5 minutos</span>
        <a href="#">Leer mas</a>

        {/*Se especifica que se va a enviar marcarFavorita como prop */}
        <button onClick={this.marcar}>
          Marcar como favorita
        </button>

        <div className="clearFix"></div>
      </article>
    );
  }
}

export default Pelicula;
