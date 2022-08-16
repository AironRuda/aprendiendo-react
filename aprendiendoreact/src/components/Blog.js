import React, { Component } from "react";

import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Articles from "./Articles";

class Blog extends Component {
  /*state = {
    articles: {},
    status: null,
  };*/

  render() {
    {
      /* 
    axios.get("http://localhost:3900/api/articles").then((res) => {
      console.log(res.data);
      this.setState({
        articles: res.data.articles,
        status: "success",
      });
    });
      */
    }
    return (
      <div id="Blog">
        <Slider
          title="Blog" //Exporta como propiedad al objeto en cuestion
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

export default Blog;
