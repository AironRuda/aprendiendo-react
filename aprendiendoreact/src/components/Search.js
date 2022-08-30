import React, { Component } from "react";

import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Articles from "./Articles";

import {
  renderMatches,
  useMatch,
  useParams,
  useRoutes,
} from "react-router-dom";

function User(props) {
  /**
   * search, parametro requerido en la creacion del elemento
   * 
   * hook, que extrae los parametros de creacion del componente
   */
  let searched = useParams().search;
  //console.log(renderMatches)
  //console.log(useParams());
  //console.log(useMatch());
  //console.log(useRoutes());

  return (
    <div id="Blog">
      <Slider
        title={"Busqueda: " + searched} //Exporta como propiedad al objeto en cuestion
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

          <Articles 
            search = {searched} //Se crea una props, llamada search que exporta el valor de busqueda
          />
        </div>
        <Sidebar blog="true" />
      </div>
      {/* END DIV CENTER */}
    </div>
  );
}

export default User;
