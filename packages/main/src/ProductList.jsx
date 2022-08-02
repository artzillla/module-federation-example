import React from 'react';

export function ProductList({ products }) {
  return (
    <div className='products'>
      {products.map((product) => (
        <div className='product__item' key={product.id}>
          <strong className='product__name'>{product.name}</strong>
          <img
            className='product__image'
            src={product.img}
            alt={product.name}
          ></img>
          <ul className='product__features'>
            {product.features.map((feat) => (
              <li key={feat.description.replace(/\s/, '_')}>
                {feat.description}
              </li>
            ))}
          </ul>
          <strong className='product__price'>{product.price}</strong>
        </div>
      ))}
    </div>
  );
}
