// pages/cart.js
import React, { useState } from 'react';
import CartItem from './components/CartItem';
import Padroes from './components/header';
import NextButton from './components/botao';
import styles from '../styles/Carrinho.module.css';
import Footer from './components/footer';

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
    alert(`Você será redirecionado para o WhatsApp para finalizar sua compra! Total: R$ ${totalPrice.toFixed(2)}`);
    const numeroTelefone = '62993726328'; // Número de telefone para o qual você quer enviar a mensagem
    const mensagem = 'Ola esse e um teste!'; // Mensagem que você quer enviar
    let url="";
    if (window.innerWidth < 600) {
      // Se o dispositivo for móvel, abre o WhatsApp com o protocolo wa.me
      url = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagem)}`;
    } else {
      // Se não for móvel, abre o WhatsApp Desktop com o protocolo web.whatsapp.com
      url = `https://web.whatsapp.com/send?phone=${numeroTelefone}&text=${encodeURIComponent(mensagem)}`;
    }
    window.open(url, '_blank');

  };

  return (

    <div className={styles.container}>
      <Padroes />
      <h1 className={styles.texto}>Carrinho</h1>
      <div className={styles.itens} >
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            product={item.product}
            price={item.price}
            onRemove={() => handleRemoveItem(item.id, item.price)}
          />
        ))}
      </div>
      <p className={styles.texto}>Total: R$ {totalPrice.toFixed(2)}</p>
      <NextButton onClick={handleCheckout} buttonText="Finalizar Compra" />


      <Footer />
    </div>

  );
};

export default CartPage;
