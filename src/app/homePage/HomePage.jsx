// app/page.jsx
import React from "react";
import "./homePage.css"; // Importamos los estilos

export default function HomePage() {
  return (
    <main className="main-container">
      <header className="header">
        <h1 className="title">Concesionaria PNT2</h1>
        <p className="subtitle">Tu próximo auto te espera</p>
      </header>

      <div className="image-container">
        <img
          src="/img/logoConcesionaria.png" 
          alt="Auto principal de la concesionaria"
          className="main-image"
        />
      </div>
    </main>
  );
}