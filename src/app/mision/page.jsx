import './mision.css';
import Image from 'next/image';

export default function MisionPage() {
  return (
    <main className="mision-main">
      <div className="mision-container">
        <div className="mision-logo-wrapper">
          <Image
            src="/img/logoConcesionaria.png"
            alt="Logo Concesionaria"
            width={120}
            height={120}
            className="mision-logo"
          />
        </div>
        <h1 className="mision-title">Nuestra Misión</h1>
        <div className="mision-box">
          <p>
            En <strong>Concesionaria PNT2</strong>, nos proponemos ofrecer una experiencia única en la adquisición
            y mantenimiento de vehículos, basada en la confianza, la innovación y la excelencia en el servicio.
          </p>
          <p>
            Nuestro compromiso es acompañar a nuestros clientes en cada etapa, brindando atención personalizada,
            vehículos de calidad y soluciones pensadas para sus necesidades.
          </p>
          <p>
            Creemos en construir relaciones duraderas que se basen en el respeto, la transparencia y la mejora continua.
          </p>
        </div>
      </div>
    </main>
  );
}
