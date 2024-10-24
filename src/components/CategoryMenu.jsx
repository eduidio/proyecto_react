
import React from 'react';
import { Link } from 'react-router-dom';

const categories = ['Categoria 1', 'Categoria 2'];

const CategoryMenu = () => {
  return (
    <nav>
      {categories.map((category, index) => (
        <Link key={index} to={`/category/${category}`}>
          {category}
        </Link>
      ))}
    </nav>
  );
};

export default CategoryMenu;
