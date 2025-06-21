'use client';
import './contacto.css';
import Image from 'next/image';

export default function Contacto() {
  return (
    <main className="contacto-main">
      <div className="contacto-container">
        <div className="contacto-logo-wrapper">
          <Image
            src="/img/logoConcesionaria.png"
            alt="Logo Concesionaria"
            width={120}
            height={120}
            className="contacto-logo"
          />
        </div>
        <h1 className="contacto-title">Contacto</h1>

        <div className="contacto-box">
          <div>
            <h2>Nombre del comercio</h2>
            <p>Concesionaria PNT2</p>
          </div>

          <div>
            <h2>Dirección</h2>
            <p>Av. del Libertador 6796, C1429 Cdad. Autónoma de Buenos Aires</p>
          </div>

          <div>
            <h2>Teléfonos</h2>
            <ul>
              <li>+54 11 1234-5678 (Línea principal)</li>
              <li>+54 9 11 9876-5432 (WhatsApp)</li>
            </ul>
          </div>

          <div>
            <h2>Horario de atención</h2>
            <p>Lunes a Viernes de 9:00 a 18:00 hs</p>
          </div>

          <div>
            <h2>Email</h2>
            <p>contacto@pnt2.com.ar</p>
          </div>
        </div>
      </div>
    </main>
  );
}
