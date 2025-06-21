import './nosotros.css';
import Image from 'next/image';

export default function NosotrosPage() {
  return (
    <main className="nosotros-main">
      <div className="nosotros-container">
        <div className="nosotros-logo-wrapper">
          <Image
            src="/img/logoConcesionaria.png"
            alt="Logo Concesionaria"
            width={120}
            height={120}
            className="nosotros-logo"
          />
        </div>
        <h1 className="nosotros-title">Quiénes Somos</h1>
        <div className="nosotros-box">
          <p>
            En <strong>Concesionaria PNT2</strong>, somos un equipo apasionado por el mundo automotor. Desde
            nuestros inicios, nos propusimos acercar a nuestros clientes a su vehículo ideal, brindando no solo una
            amplia gama de opciones, sino también un servicio transparente y humano.
          </p>
          <p>
            Contamos con una trayectoria sólida en el mercado, y nuestro compromiso diario se enfoca en ofrecer
            soluciones a medida, con el respaldo de las mejores marcas y un equipo capacitado para acompañar cada paso
            del proceso.
          </p>
          <p>
            Más que vender autos, buscamos construir vínculos de confianza con quienes nos eligen, trabajando con
            responsabilidad, cercanía y vocación de servicio.
          </p>
        </div>
      </div>
    </main>
  );
}
