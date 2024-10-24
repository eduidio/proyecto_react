
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from './data/products';

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
   
    const fetchProduct = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(products.find((p) => p.id === parseInt(productId)));
        }, 1000);
      });
    };

    fetchProduct().then((data) => {
      setProduct(data);
    });
  }, [productId]);

  if (!product) return <p>Cargando...</p>; 
  return (
    {product}
    
  );
};

export default ItemDetailContainer;
