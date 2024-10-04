// src/components/NavBar.js
import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#eee' }}>
      <div>
        <img src="logo.png" alt="Logo" style={{ width: '100px' }} />
      </div>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem' }}>
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
