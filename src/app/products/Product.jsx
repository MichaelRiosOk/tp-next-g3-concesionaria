import Link from 'next/link';
import React, { useState } from 'react';

export default function Product({ product }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

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
    </div>
  );
}