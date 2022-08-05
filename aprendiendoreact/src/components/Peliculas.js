import React, { Component } from "react";
import MensajeEstatico from "./MensajeEstatico";
import Pelicula from "./Pelicula";
import Sidebar from "./Sidebar";
import Slider from "./Slider";

class Peliculas extends Component {
  state = {};

  cambiarTitulo = () => {
    var peliculas = this.state.Peliculas; // Destructuring
    //var random = Math.floor(Math.random() * 3);
    peliculas[0].titulo = "Batman begins";

    this.setState({ peliculas: peliculas });
  };

  favorita = (pelicula, indice) => {
    console.log("favorita marcada");
    console.log(indice);
    this.setState({
      favorita: pelicula,
    });
  };

  /**
   *
   */
  componentWillMount() {
    this.setState({
      // Se montan los datos al State

      //Peliculas se definen en estate por se datos que quiero mostrar en las vistas
      Peliculas: [
        {
          titulo: "Batman vs Superman",
          image:
            "https://www.comicverso.com/wp-content/uploads/2019/12/destacada-batmanvssuperman.jpg",
        },
        {
          titulo: "Gran torino",
          image:
            "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/14d72f522cfc29e6865181b2d0ab782999e9dc367a37a52bb34025da51fff44b._SX1080_.jpg",
        },
        {
          titulo: "Looper",
          image:
            "https://www.themoviedb.org/t/p/w500/t6ogdhdjP9KDCLJR9i4HG3bplQL.jpg",
        },
      ],
      nombre: "Airon Ruda",
      favorita: {},
    });
  }
  componentDidMount() {
    // Cuando ya se ha montado el componente
  }

  componentWillUnmount() {
    // Se quita de la ejecucion de un componente
    // Util para ocultar componentes
  }
  /**
   * Render muestra por pantalla la vista, regresa el resultado en jsx
   * existente varios metodo que hacen referencia al ciclo de vida de la paguina
   * componentWillMount, antes de que se monte el resto de la paguina
   *
   * @returns
   */
  render() {
    var favoritas;
    if (this.state.favorita.titulo) {
      favoritas = (
        <p className="favorita">
          <strong>La pelicula favorita es: </strong>
          <span>{this.state.favorita.titulo}</span>
        </p>
      );
    } else {
      favoritas = <p>No hay pelicula favorita</p>;
    }
    return (
      <div id="peliculas">
        <Slider
          title="Peliculas" //
          size="slider-small"
        />
        <div className="center">
          <div id="content" className="peliculas">
            <h2 className="subHeader">Listado de peliculas</h2>
            <p>Seleccion de las peliculas favoritas de: {this.state.nombre}</p>
            <p>
              <button onClick={this.cambiarTitulo}>
                Cambiar titulo con button
              </button>
            </p>
            <p>
              <input
                type="button"
                value="Cambiar nombre"
                onClick={this.cambiarTitulo}
              />
            </p>
            {/*METODO CON JSX */}
            {/*this.state.favorita.titulo ? ( //Comprueba que el titulo exista, y si existe pone la tiqueta p
          <p className="favorita">
            <strong>La pelicula favorita es: </strong>
            <span>{this.state.favorita.titulo}</span>
          </p>
        ) : (
          <p>
            No hay pelicula favorita
          </p>
        )
        */}
            {/*METODO CON FUNCION EN RENDER */}
            {favoritas}
            {/* CREAR COMPONENTE DE PELICULA */}
            <div id="articles" className="peliculas"></div>
            {this.state.Peliculas.map((pelicula, i) => {
              //pelicula se llama la prop que será enviada, dentro de los corchetes está la informacion extraida del map(tambien llamada pelicula)
              return (
                <Pelicula
                  key={i}
                  pelicula={pelicula}
                  indice={i}
                  marcarFavorita={this.favorita}
                />
              );
            })}
          </div>

          <Sidebar blog="false" />
        </div>
      </div>
    );
  }
}

export default Peliculas;
