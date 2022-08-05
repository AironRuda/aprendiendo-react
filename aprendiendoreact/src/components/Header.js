import React, { Component } from "react";
import logo from "../assets/images/logo.svg";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    let activeStyle = {
      textDecoration: "underline",
    };
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
                <NavLink
                  to="/home"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/segunda-ruta"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Formulario
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pagina-1"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Pagina1
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/segunda-ruta"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Pagina2
                </NavLink>
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
