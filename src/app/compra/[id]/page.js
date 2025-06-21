'use client';

import { useContext, useEffect, useState, use } from 'react';
import { AutosContext } from '../../../context/AutosContext';
import Compra from '../Compra';

export default function PageCompra({ params }) {
  const { autos, actualizarAuto } = useContext(AutosContext);
  const [car, setCar] = useState(null);
  const [comprado, setComprado] = useState(false);

  const { id } = use(params); // ✅ usa React.use() para resolver la Promise

  useEffect(() => {
    const autoEncontrado = autos.find((a) => a.id == id);
    if (autoEncontrado) {
      setCar(autoEncontrado);
    }
  }, [autos, id]);

  const finalizarCompra = () => {
    setComprado(true);
    actualizarAuto(id, { disponible: false });
  };

  if (!car) {
    return (
      <div className="text-center text-gray-500 mt-10">
        Cargando datos del auto...
      </div>
    );
  }

  const message = comprado
    ? 'USTED COMPRÓ ESTE AUTO'
    : 'USTED ESTÁ POR COMPRAR ESTE AUTO';

  return (
    <div className="contenedor-compra">
      <Compra auto={car} mensaje={message} comprado={comprado} />
      {!comprado && (
        <button className="finalizar-boton" onClick={finalizarCompra}>
          FINALIZAR COMPRA
        </button>
      )}
    </div>
  );
}
