'use client';
import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { UsuariosContext } from '../../context/UsuariosContext';
import './perfil.css';

export default function Perfil() {
  const { usuarioActual, favoritos, quitarFavorito, compras } = useContext(UsuariosContext);
  const router = useRouter();

  // Usar useEffect para la redirección
  useEffect(() => {
    if (!usuarioActual) {
      router.push('/login');
    }
  }, [usuarioActual, router]);

  // Si no hay usuario logueado, mostrar loading o nada
  if (!usuarioActual) {
    return (
      <div className="perfil-container">
        <div className="perfil-loading">
          <p>Redirigiendo al login...</p>
        </div>
      </div>
    );
  }

  const handleQuitarFavorito = (autoId) => {
    quitarFavorito(autoId);
  };

  // Combinar nombre y apellido
  const nombreCompleto = `${usuarioActual.nombre || ''} ${usuarioActual.apellido || ''}`.trim();

  return (
    <div className="perfil-container">
      <div className="perfil-header">
        <h1>Mi Perfil</h1>
      </div>

      <div className="perfil-content">
        <div className="perfil-section">
          <h2>Información Personal</h2>
          <div className="perfil-info">
            <div className="info-item">
              <label>Nombre:</label>
              <span>{nombreCompleto || 'No especificado'}</span>
            </div>
            <div className="info-item">
              <label>Email:</label>
              <span>{usuarioActual.email}</span>
            </div>
            <div className="info-item">
              <label>Miembro desde:</label>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        <div className="perfil-section">
          <h2>Mis Favoritos ({favoritos.length})</h2>
          {favoritos.length === 0 ? (
            <div className="favoritos-vacio">
              <p>No tienes autos favoritos aún.</p>
              <Link href="/products" className="favoritos-explorar">
                Explorar Autos
              </Link>
            </div>
          ) : (
            <div className="favoritos-grid">
              {favoritos.map((auto) => (
                <div key={auto.id} className="favorito-card">
                  <Link href={`/products/${auto.id}`}>
                    <img src={auto.img} alt={auto.modelo} className="favorito-img" />
                    <div className="favorito-info">
                      <h4>{auto.marca}</h4>
                      <p>{auto.modelo}</p>
                      <p className="favorito-precio">${auto.precio?.toLocaleString() || 'Consultar'}</p>
                    </div>
                  </Link>
                  <button 
                    onClick={() => handleQuitarFavorito(auto.id)}
                    className="favorito-remove-btn"
                    title="Quitar de favoritos"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="perfil-section">
          <h2>Mis Compras ({compras.length})</h2>
          {compras.length === 0 ? (
            <div className="favoritos-vacio">
              <p>No has realizado compras aún.</p>
            </div>
          ) : (
            <div className="favoritos-grid">
              {compras.map((auto) => (
                <div key={auto.id} className="favorito-card">
                  <Link href={`/products/${auto.id}`}>
                    <img src={auto.img} alt={auto.modelo} className="favorito-img" />
                    <div className="favorito-info">
                      <h4>{auto.marca}</h4>
                      <p>{auto.modelo}</p>
                      <p className="favorito-precio">${auto.precio?.toLocaleString() || 'Consultar'}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>

        {compras.length === 0 && (
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <Link href="/products" className="favoritos-explorar">
              Explorar Autos
            </Link>
          </div>
        )}

        <div className="perfil-section">
          <h2>Acciones Rápidas</h2>
          <div className="quick-actions">
            <Link href="/products" className="action-button">
              Ver Catálogo
            </Link>
            <Link href="/contacto" className="action-button">
              Contactar Soporte
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}