// app/contacto/page.jsx
export default function Contacto() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Contacto</h1>

      <div className="space-y-6 text-gray-800">
        <div>
          <h2 className="text-xl font-semibold">Nombre del comercio</h2>
          <p>Comercial ORT Equipos Industriales</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Dirección</h2>
          <p>Av. Siempre Viva 742, Ciudad Autónoma de Buenos Aires, Argentina</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Teléfonos</h2>
          <ul className="list-disc list-inside">
            <li>+54 11 1234-5678 (Línea principal)</li>
            <li>+54 9 11 9876-5432 (WhatsApp)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Horario de atención</h2>
          <p>Lunes a Viernes de 9:00 a 18:00 hs</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Email</h2>
          <p>contacto@ortequipos.com.ar</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Redes sociales</h2>
          <p>
            Seguinos en nuestras redes para enterarte de novedades:
            <br />
            <a href="https://www.instagram.com" target="_blank" className="text-blue-600 hover:underline">Instagram</a> |{" "}
            <a href="https://www.facebook.com" target="_blank" className="text-blue-600 hover:underline">Facebook</a>
          </p>
        </div>
      </div>
    </main>
  );
}
