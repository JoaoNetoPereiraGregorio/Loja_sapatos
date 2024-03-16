// pages/cart.js
import React, { useState } from 'react';
import CartItem from './components/CartItem';
import Padroes from './components/header'

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, product: 'Produto 1', price: 10.99 },
    { id: 2, product: 'Produto 2', price: 20.49 }
  ]);
  const [totalPrice, setTotalPrice] = useState(31.48);

  const handleRemoveItem = (id, price) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    setTotalPrice(totalPrice - price);
  };

  const handleCheckout = () => {
    alert(`Compra finalizada! Total: R$ ${totalPrice.toFixed(2)}`);
    // Adicione a lógica para redirecionar para a página de checkout
  };

  return (
    
    <div>
      <Padroes />
      <h1>Carrinho de Compras</h1>
      <div>
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            product={item.product}
            price={item.price}
            onRemove={() => handleRemoveItem(item.id, item.price)}
          />
        ))}
      </div>
      <p>Total: R$ {totalPrice.toFixed(2)}</p>
      <button onClick={handleCheckout}>Finalizar Compra</button>
    </div>
  );
};

export default CartPage;
