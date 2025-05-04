import "./pieDePagina.css";

function PieDePagina() {
  return (
    <footer className="pie">
      <div className="pie__info">
        © 2025 ORT Argentina. Todos los derechos reservados.
      </div>
      <nav className="pie__nav">
        <a href="/politica-privacidad">Política de Privacidad</a>
        <a href="/terminos">Términos y Condiciones</a>
        <a href="/ayuda">Ayuda</a>
      </nav>
    </footer>
  );
}

export default PieDePagina;
