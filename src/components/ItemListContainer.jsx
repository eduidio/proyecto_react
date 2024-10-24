

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from './data/products';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
  
    const fetchProducts = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(products);
        }, 1000);
      });
    };

    fetchProducts().then((data) => {
      const filtered = categoryId
        ? data.filter((product) => product.category === categoryId)
        : data;
      setFilteredProducts(filtered);
    });
  }, [categoryId]);

  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;

