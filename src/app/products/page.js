'use client';

import { useContext, useState } from 'react';
import ProductList from './ProductList';
import { AutosContext } from '../../context/AutosContext';
import './products.css';

export default function Home() {
  const { autos } = useContext(AutosContext);
  const [page, setPage] = useState(1);

  const autosPorPagina = 10; 
  const autosDisponibles = autos.filter(auto => auto.disponible);

  const inicio = (page - 1) * autosPorPagina;
  const autosPaginados = autosDisponibles.slice(inicio, inicio + autosPorPagina);

  return (
    <main className="products-container">      
      {autos.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        <>
          <ProductList products={autosPaginados} />
          <div className="products-container-buttons">
            <button 
              onClick={() => setPage(prev => prev > 1 ? prev - 1 : 1)} 
              disabled={page === 1}
              className="products-btn"
            >
              ← Anterior
            </button>
            <span className="products-page-info">Página {page}</span>
            <button 
              onClick={() => setPage(prev => prev + 1)}
              disabled={inicio + autosPorPagina >= autosDisponibles.length}
              className="products-btn"
            >
              Siguiente →
            </button>
          </div>
        </>
      )}
    </main>
  );
}
