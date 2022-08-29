import React from "react";
import {
  renderMatches,
  useMatch,
  useParams,
  useRoutes,
} from "react-router-dom";

import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Articles from "./Articles";

function User(props) {
  let buscador = useParams().username;
  console.log(useParams());
  console.log(useMatch());
  console.log(useRoutes());

  
  return (
    <div id="Blog">
      <Slider
        title={"Busqueda: " + buscador} //Exporta como propiedad al objeto en cuestion
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

export default User;
