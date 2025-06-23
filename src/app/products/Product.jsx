import Link from 'next/link';
import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { UsuariosContext } from '../../context/UsuariosContext';

export default function Product({ product }) {
  const [imageError, setImageError] = useState(false);
  const { usuarioActual, esFavorito, agregarFavorito, quitarFavorito } = useContext(UsuariosContext);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleFavoritoClick = (e) => {
    e.preventDefault(); // Evitar que se active el link del producto
    e.stopPropagation();
    
    if (!usuarioActual) {
      alert('Debes iniciar sesión para agregar favoritos');
      return;
    }

    if (esFavorito(product.id)) {
      quitarFavorito(product.id);
    } else {
      agregarFavorito(product);
    }
  };

  const isFavorito = esFavorito(product.id);

  return (
    <div className="product-card">
      <Link href={`/products/${product.id}`}>
        {product.marca && !imageError ? (
          <img 
            src={product.img} 
            alt={product.modelo} 
            className="product-img"
            onError={handleImageError}
          />
        ) : (
          <div className="product-img-placeholder">
            <span className="text-xs text-gray-600 text-center">{product.marca}</span>
          </div>
        )}
        <p className="product-text">{product.marca}</p>
        <p className="product-text">{product.modelo}</p>
      </Link>
      
      {usuarioActual && (
        <button 
          onClick={handleFavoritoClick}
          className={`favorite-btn ${isFavorito ? 'favorite-btn--active' : ''}`}
          title={isFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        >
          <FontAwesomeIcon icon={faHeart} />
        </button>
      )}
    </div>
  );
}