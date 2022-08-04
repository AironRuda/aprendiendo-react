import React, { Component } from "react";
import logo from "../assets/images/logo.svg";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="center">
          {/*<!--LOGO-->*/}
          <div id="logo">
            <img src={logo} className="app-logo" alt="logotipo" />
            <span id="brand">
              <strong>Curso</strong>React
            </span>
          </div>

          {/*<!--MENU-->*/}
          <nav id="menu">
            <ul>
              <li>
                <NavLink to="/">Inicio</NavLink>
              </li>
              <li>
                <NavLink to="/ruta-prueba">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/segunda-ruta">Formulario</NavLink>
              </li>
              <li>
                <NavLink to="/ruta-prueba">Pagina1</NavLink>
              </li>
              <li>
                <NavLink to="/segunda-ruta">Pagina2</NavLink>
              </li>
            </ul>
          </nav>
          {/*<!--LIMPIAR LO FLOTADO-->*/}
          <div className="clearFix"></div>
        </div>
      </header>
    );
  }
}

export default Header;
