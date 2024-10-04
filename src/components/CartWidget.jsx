// src/components/CartWidget.js
import React from 'react';

const CartWidget = () => {
  return (
    <div>
      <img src="cart-icon.png" alt="Cart" style={{ width: '30px' }} />
      <span>3</span> {/* Este número puede representar la cantidad de productos en el carrito */}
    </div>
  );
};

export default CartWidget;
