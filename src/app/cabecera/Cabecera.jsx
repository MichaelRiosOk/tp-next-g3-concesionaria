'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Link from 'next/link';

export default function Cabecera() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <img src="/img/ortLogo.png" alt="Logo de la empresa" className="h-10" />
          </Link>
        </div>
        
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </button>

        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:space-x-4`}
        >
          <Link href="/" className="text-white hover:text-gray-300">
            Inicio
          </Link>
          <a href="/mision" className="text-white hover:text-gray-300">
            Mision
          </a>
          <a href="/nosotros" className="text-white hover:text-gray-300">
            Nosotros
          </a>
          <a href="/contacto" className="text-white hover:text-gray-300">
            Contacto
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <a href="/login" className="text-white">
            <img src="/img/loginIcono.png" alt="Login" className="h-6 w-6 invert" />
          </a>
          <div className="relative">
            <FontAwesomeIcon icon={faShoppingCart} className="text-white text-xl" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}