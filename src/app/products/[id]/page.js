"use client";
import { useState, useEffect, use, useContext } from "react";
import Link from 'next/link';
import { UsuariosContext } from '../../../context/UsuariosContext';
import { useRouter } from "next/navigation";


export default function PageDetails({ params }) {
  const { id } = use(params);
  const [product, setProduct] = useState(null);
  const { usuarioActual, compras } = useContext(UsuariosContext);
  const router = useRouter();

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/MichaelRiosOk/tp-next-g3-concesionaria/refs/heads/develop-mike/public/data/autos_argentina.json")
      .then((response) => response.json())
      .then((data) => {
        setProduct(data.find((product) => product["id"] == id));
      })
      .catch((error) => console.log(error));
  }, []);

  // Verifica si el usuario ya compró este auto
  const yaComprado = compras && compras.some((a) => String(a.id) === String(id));

  const buttonComprar = () => {
    if (usuarioActual) {
      router.push(`/compra/${id}`);
    } else {
      router.push(`/login?redirect=/products/${id}`);
    }
  };

  if (!product) {
    return <div className="text-center text-gray-500 mt-10">Cargando datos del auto...</div>;
  }

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-50 rounded-2xl shadow-lg mt-10">
      <img
        src={product.img}
        alt={`${product.marca} ${product.modelo}`}
        className="w-full max-h-[200px] object-contain rounded-xl mb-4"
      />
      <h3 className="text-lg text-gray-600 mb-1 uppercase tracking-wide">{product.marca}</h3>
      <h2 className="text-2xl font-bold text-gray-800 mb-3">{product.modelo}</h2>

      {/* Detalles del auto */}
      <div className="space-y-1 text-gray-700 text-sm mb-4">
        <p><span className="font-semibold">Versión:</span> {product.version}</p>
        <p><span className="font-semibold">Año de fabricación:</span> {product.anioFabricacion}</p>
        <p><span className="font-semibold">Tipo de vehículo:</span> {product.tipoVehiculo}</p>
        <p><span className="font-semibold">Kilometraje:</span> {product.kilometraje.toLocaleString()} km</p>
        <p><span className="font-semibold">Precio:</span> {product.precio.toLocaleString()} USD</p>
      </div>

      {/* Botón de comprar solo si NO fue comprado */}
      {!yaComprado && (
        <button
          onClick={buttonComprar}
          className="w-full bg-[#1A3A51] text-white py-3 rounded-xl font-semibold text-lg hover:bg-[#3F5C6D] transition duration-300 shadow-md cursor-pointer"
        >
          Comprar
        </button>
      )}
      {/* Mensaje si ya fue comprado */}
      {yaComprado && (
        <div className="text-green-700 font-semibold text-center mt-4">
          Ya compraste este auto.
        </div>
      )}
    </div>
  );
}
