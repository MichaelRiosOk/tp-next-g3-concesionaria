import React from 'react';
import Product from './Product';

export default function ProductList({ products }) {
  return (
    <div className="grid grid-cols-5 gap-2">
      {products.map((product) => (
        <Product key={product.id} product={product} id={product.id} />
      ))}
    </div>
  );
}


