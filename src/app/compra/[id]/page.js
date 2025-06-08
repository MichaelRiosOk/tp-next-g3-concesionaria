"use client";
import { useState, useEffect,use } from "react";
import Compra from "../Compra";

export default function PageCompra({ params }) {
    const { id } = use(params);
    const [car, setCar] = useState(null);
    const [comprado, setComprado] = useState(false);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/MichaelRiosOk/tp-next-g3-concesionaria/refs/heads/develop-mike/public/data/autos_argentina.json")
            .then((response) => response.json())
            .then((data) => {
                setCar(data.find((c) => c["id"] == id));
            })
            .catch((err) => console.log(err));
    }, []);

    if (!car) {
        return <div className="text-center text-gray-500 mt-10">Cargando datos del auto...</div>;
    }

    const message = (comprado) ? "USTED COMPRO ESTE AUTO" : "USTED ESTA POR COMPRAR ESTE AUTO";

    return (
        <div className="contenedor-compra">
            {car ? (
                <>
                    <Compra auto={car} mensaje={message} comprado={comprado} ></Compra>
                    {!comprado && (
                        <button className="finalizar-boton" onClick={() => setComprado(true)}>FINALIZAR COMPRA</button>
                    )}
                </>
            ) : (
                <p>Cargando auto...</p>
            )}
        </div >
    )

}