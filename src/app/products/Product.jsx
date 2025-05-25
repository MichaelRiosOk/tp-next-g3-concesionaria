import Link from 'next/link';
import React, { useState } from 'react';

export default function Product({ product }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="w-[90px] text-center">
      <Link href={`/products/${product.id}`}>
      {product.marca && !imageError ? (
        <img 
          src={product.img} 
          alt={product.modelo} 
          className="w-full h-[135px] object-contain rounded-md"
          onError={handleImageError}
        />
      ) : (
        <div className="w-full h-[135px] bg-gray-300 rounded-md flex items-center justify-center">
          <span className="text-xs text-gray-600 text-center">{product.marca}</span>
        </div>

        
      )}
      <p className="text-xs mt-1 truncate">{product.marca}</p>
      <p className="text-xs mt-1 truncate">{product.modelo}</p>
      </Link>
    </div>
  );
}