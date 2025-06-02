import React from "react";
import "./cabecera.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Cabecera(props) {
  return (
    <header className="cabecera">
      <div className="cabecera__logo">
        <img src="img/ortLogo.png" alt="Logo de la empresa" />
      </div>
      <nav className="cabecera__nav">
        <a href="/home">Inicio</a>
        <a href="/servicios">Servicios</a>
        <a href="/nosotros">Nosotros</a>
        <a href="/contacto">Contacto</a>
      </nav>
      <div className="cabecera__acciones">
        <a href="/login" className="cabecera__login">
          <img src="img/loginIcono.png" alt="Login" />
        </a>
        <div className="cabecera__carrito">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="carrito__contador">{props.carrito}</span>
        </div>
      </div>
    </header>
  );
}

export default Cabecera;
