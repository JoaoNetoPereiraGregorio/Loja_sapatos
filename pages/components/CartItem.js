// components/CartItem.js
import React from 'react';

const CartItem = ({ product, price, onRemove }) => {
  return (
    <div>
      <p>{product} - R$ {price.toFixed(2)}</p>
      <button onClick={onRemove}>Remover</button>
    </div>
  );
};

export default CartItem;
