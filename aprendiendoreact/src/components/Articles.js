import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Global from "../Global";
import Moment from "react-moment";
import "moment/locale/es";

class Articles extends Component {
  url = Global.url;

  state = {
    articles: [],
    status: null,
  };

  //alo() {
  // //Cargar antes de mostrar algo
  //  this.getArticles();
  //}

  componentDidMount() {
    var home = this.props.home;
    var search = this.props.search;
    if (home) {
      this.getLastArticles();
    } else if (search && search != null && search != undefined) {
      this.getArticlesBySearch(search);
    } else {
      this.getArticles();
    }
  }

  getArticlesBySearch = (searched) => {
    axios
      .get(this.url + "search/" + searched) //
      .then((res) => {
        this.setState({
          articles: res.data.articles,
          status: "success",
        });
      })
      .catch((err) => {
        this.setState({
          articles: [],
          status: "error",
        });
      });
  };

  getLastArticles = () => {
    axios
      .get(this.url + "articles/last") //
      .then((res) => {
        this.setState({
          articles: res.data.articles,
          status: "success",
        });
      });
  };

  getArticles = () => {
    axios
      .get(this.url + "articles") //
      .then((res) => {
        this.setState({
          articles: res.data.articles,
          status: "success",
        });
      });
  };

  render() {
    if (this.state.articles.length >= 1) {
      var listArticles = this.state.articles.map((article) => {
        return (
          <article className="article-item" id="article-template">
            <div className="image-wrap">
              {article.image !== null ? (
                <img
                  src={this.url + "get-image/" + article.image}
                  alt={article.title}
                />
              ) : (
                <img
                  src="https://encolombia.com/wp-content/uploads/2012/01/Raza-Beagle-Perro.jpg"
                  alt={article.title}
                />
              )}
            </div>
            <h2>{article.title}</h2>
            <span className="date">
              <Moment fromNow>{article.date}</Moment>
            </span>
            <Link to={"/blog/articulo/" + article._id}>Leer mas</Link>

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
