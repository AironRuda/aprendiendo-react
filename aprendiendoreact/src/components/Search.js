import React, { Component } from "react";

import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Articles from "./Articles";

import PropTypes from "prop-types";

class Search extends Component {
  /*state = {
    articles: {},
    status: null,
  };*/
  
  
  render() {
    const { match, location, history } = this.props;
    //var busqueda = ;
    //console.log(location.pathname);


    return (
      <div id="Blog">
        <Slider
          title={"Busqueda: " } //Exporta como propiedad al objeto en cuestion
          size="slider-small"
        />
        <div className="center">
          <div id="content">
            {/*Listado de articulos que vendran del API */}
            {/*this.state.status === "success" && (
              <div>
                {this.state.articles.map((article) => {
                  <h1>{article.title}</h1>;
                })}
              </div>
            )*/}

            <Articles />
          </div>
          <Sidebar blog="true" />
        </div>
        {/* END DIV CENTER */}
      </div>
    );
  }
}

export default Search;
