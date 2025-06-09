"use client";
import { useState, useEffect, use } from "react";
import Link from 'next/link';

export default function PageDetails({ params }) {
    const { id } = use(params);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/MichaelRiosOk/tp-next-g3-concesionaria/refs/heads/develop-mike/public/data/autos_argentina.json")
            .then((response) => response.json())
            .then((data) => {
                setProduct(data.find((product) => product["id"] == id));
            })
            .catch((error) => console.log(error));
    }, []);

    if (!product) {
        return <div className="text-center text-gray-500 mt-10">Cargando datos del auto...</div>;
    }

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10">
            <img
                src={product.img}
                alt={`${product.marca} ${product.modelo}`}
                className="w-full max-h-[500px] object-contain rounded-xl mb-6"
            />
            <h3 className="text-xl text-gray-600 mb-1 uppercase tracking-wide">{product.marca}</h3>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{product.modelo}</h2>

            {/* Detalles del auto */}
            <div className="space-y-2 text-gray-700 text-base mb-6">
                <p><span className="font-semibold">Versión:</span> {product.version}</p>
                <p><span className="font-semibold">Año de fabricación:</span> {product.anioFabricacion}</p>
                <p><span className="font-semibold">Tipo de vehículo:</span> {product.tipoVehiculo}</p>
                <p><span className="font-semibold">Kilometraje:</span> {product.kilometraje.toLocaleString()} km</p>
                <p><span className="font-semibold">Precio:</span> {product.precio.toLocaleString()} USD</p>
            </div>

            {/* Botón de comprar */}
            <Link href={`/compra/${id}`}>
            <button
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-blue-700 transition duration-300 shadow-md">
                Comprar
            </button>
            </Link>
        </div>
    );
}
