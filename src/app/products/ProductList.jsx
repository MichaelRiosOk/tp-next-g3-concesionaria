import React from 'react';
import Product from './Product';
import './products.css';

export default function ProductList({ products }) {
  return (
    <div className="products-list">
      {products.map((product) => (
        <Product key={product.id} product={product} id={product.id} />
      ))}
    </div>
  );
}


