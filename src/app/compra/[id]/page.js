'use client';

import { useContext, useEffect, useState, use } from 'react';
import { AutosContext } from '../../../context/AutosContext';
import { UsuariosContext } from '../../../context/UsuariosContext';
import Compra from '../Compra';

export default function PageCompra({ params }) {
    const { autos, actualizarAuto } = useContext(AutosContext);
    const { usuarioActual, agregarCompra, compras } = useContext(UsuariosContext);
    const [car, setCar] = useState(null);
    const [comprado, setComprado] = useState(false);

    const { id } = use(params);

    useEffect(() => {
        const autoEncontrado = autos.find((a) => a.id == id);
        if (autoEncontrado) {
            setCar(autoEncontrado);
        }
    }, [autos, id]);

    // Verifica si el usuario ya compró este auto
    const yaComprado = compras.some((a) => String(a.id) === String(id));

    const finalizarCompra = () => {
        setComprado(true);
        actualizarAuto(id, { disponible: false });
        if (usuarioActual && car) {
            agregarCompra(car);
            setCar({ ...car, disponible: false });
        }
    };

    if (!car) {
        return (
            <div className="text-center text-gray-500 mt-10">
                Cargando datos del auto...
            </div>
        );
    }

    const message = comprado || yaComprado
        ? 'USTED YA COMPRÓ ESTE AUTO'
        : 'USTED ESTÁ POR COMPRAR ESTE AUTO';

    return (
        <div className="contenedor-compra">
            <Compra auto={car} mensaje={message} comprado={comprado || yaComprado} />
            
            {/* Mostrar el botón solo si NO fue comprado */}
            {!(comprado || yaComprado) && (
                <button className="finalizar-boton" onClick={finalizarCompra}>
                    FINALIZAR COMPRA
                </button>
            )}

            {/* Mensaje si ya fue comprado */}
            {(comprado || yaComprado) && (
                <div className="compra-ya-realizada">
                    <p>Este auto ya está en tu listado de compras.</p>
                </div>
            )}
        </div>
    );
}
