import React, { Component } from "react";
import axios from "axios";

class Articles extends Component {
  state = {
    articles: [],
    status: null,
  };

  alo() {
    //Cargar antes de mostrar algo
    this.getArticles();
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:3900/api/articles") //
      .then((res) => {
        this.setState({
          articles: res.data.articles,
          status: "success",
        });

        console.log(this.state);
      });
  };

  render() {
    if (this.state.articles.length >= 1) {
      return (
        <div id="articles">
          <h1>Listado articulos</h1>
          
        </div>
      );
    } else if (
      this.state.articles.length === 0 &&
      this.state.status === "success"
    ) {
      return (
        <div id="articles">
          <h2 className="subHeader">No hya articulos para mostrar</h2>
        </div>
      );
    } else {
      return (
        <div id="articles">
          <h2>Cargando...</h2>
        </div>
      )
    }
  }
}

export default Articles;
