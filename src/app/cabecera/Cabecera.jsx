'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState, useContext } from 'react';
import Link from 'next/link';
import "./cabecera.css";
import { UsuariosContext } from '../../context/UsuariosContext';

export default function Cabecera() {
  const [isOpen, setIsOpen] = useState(false);
  const { usuarioActual, logout } = useContext(UsuariosContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
    setIsOpen(false);
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
          <Link href="/mision" className="cabecera__nav-link">
            Mision
          </Link>
          <Link href="/nosotros" className="cabecera__nav-link">
            Nosotros
          </Link>
          <Link href="/contacto" className="cabecera__nav-link">
            Contacto
          </Link>
        </nav>

        <div className="cabecera__acciones">
          {usuarioActual ? (
            <div className="cabecera__user-menu">
              <div className="cabecera__user-actions">
                <Link href="/perfil" className="cabecera__user-link">
                  <FontAwesomeIcon icon={faUser} />
                  <span>Mi Perfil</span>
                </Link>
                <button onClick={handleLogout} className="cabecera__logout-btn">
                  Cerrar Sesión
                </button>
              </div>
            </div>
          ) : (
            <Link href="/login" className="cabecera__login">
              <img src="/img/loginIcono.png" alt="Login" />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}