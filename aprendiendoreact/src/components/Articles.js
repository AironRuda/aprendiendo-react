import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";

class Articles extends Component {
  url = Global.url;

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
      .get(this.url + "articles") //
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
      var listArticles = this.state.articles.map((article) => {
        return (
          <article className="article-item" id="article-template">
            <div className="image-wrap">
              {article.image !== null 
                ?
                  (<img
                    src={this.url + "get-image/" + article.image}
                    alt={article.title}
                  />)
                :
                  (<img
                    src="https://encolombia.com/wp-content/uploads/2012/01/Raza-Beagle-Perro.jpg"
                    alt={article.title}
                  />)

              }


              
            </div>
            <h2>{article.title}</h2>
            <span className="date">{article.date}</span>
            <a href="#">Leer mas</a>

            <div className="clearFix"></div>
          </article>
        );
      });
      return <div id="articles">{listArticles}</div>;
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
      );
    }
  }
}

export default Articles;
