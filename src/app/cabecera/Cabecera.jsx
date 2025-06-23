'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useState, useContext } from 'react';
import Link from 'next/link';
import "./cabecera.css";
import { UsuariosContext } from '../../context/UsuariosContext';

export default function Cabecera() {
  const [isOpen, setIsOpen] = useState(false);
  const { usuarioActual } = useContext(UsuariosContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="cabecera">
      <div className="container mx-auto flex justify-between items-center">
        <div className="cabecera__logo">
          <Link href="/">
            <img src="/img/ortLogo.png" alt="Logo de la empresa" />
          </Link>
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </button>

        <nav className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-4`}>
          <Link href="/" className="cabecera__nav-link">
            Inicio
          </Link>
          <a href="/mision" className="cabecera__nav-link">
            Mision
          </a>
          <a href="/nosotros" className="cabecera__nav-link">
            Nosotros
          </a>
          <a href="/contacto" className="cabecera__nav-link">
            Contacto
          </a>
        </nav>

        <div className="cabecera__acciones">
          <Link
            href={usuarioActual ? "/profile" : "/login"}
            className="cabecera__login"
          >
            <img src="/img/loginIcono.png" alt="Login" />
          </Link>
          <div className="cabecera__carrito">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="cabecera__carrito-contador">0</span>
          </div>
        </div>
      </div>
    </header>
  );
}