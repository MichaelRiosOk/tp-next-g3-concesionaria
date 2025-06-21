'use client';

import { useContext, useState } from 'react';
import ProductList from './ProductList';
import { AutosContext } from '../../context/AutosContext';

export default function Home() {
  const { autos } = useContext(AutosContext);
  const [page, setPage] = useState(1);

  const autosPorPagina = 10; 
  const autosDisponibles = autos.filter(auto => auto.disponible);

  const inicio = (page - 1) * autosPorPagina;
  const autosPaginados = autosDisponibles.slice(inicio, inicio + autosPorPagina);

  return (
    <main className="container mx-auto p-4">      
      {autos.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        <>
          <ProductList products={autosPaginados} />
          <div className="flex justify-center items-center mt-4 space-x-4">
            <button 
              onClick={() => setPage(prev => prev > 1 ? prev - 1 : 1)} 
              disabled={page === 1}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ← Anterior
            </button>
            <span className="text-gray-600 mx-4">Página {page}</span>
            <button 
              onClick={() => setPage(prev => prev + 1)}
              disabled={inicio + autosPorPagina >= autosDisponibles.length}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Siguiente →
            </button>
          </div>
        </>
      )}
    </main>
  );
}
