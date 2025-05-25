import React from "react";
import "./cabecera.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Cabecera(props) {
  // TODO: Agregar Carrito con un contador, este contador se va incrementar cada vez que se presione
  // el boton Comprar
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
        <div className="cabecera__carrito">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="carrito__contador">{props.carrito}</span>
        </div>
        <div className="cabecera__usuario">
          <img src="/img/userProfileIcon.jpg" alt="Usuario logueado" />
        </div>
      </div>
    </header>
  );
}

export default Cabecera;
