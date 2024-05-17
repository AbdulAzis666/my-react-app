import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <div className="product-info">
        <h5>{product.name}</h5>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductCard;

