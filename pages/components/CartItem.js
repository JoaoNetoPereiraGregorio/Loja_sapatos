// components/CartItem.js
import React from 'react';
import NextButton from '../components/botao';
import styles from '../../styles/Carrinho.module.css';

const CartItem = ({ product, price, onRemove }) => {
  return (
    <div  className={styles.card}>
      <p>{product} - R$ {price}</p>
      <NextButton  onClick={onRemove} buttonText="Remover" />

      
    </div>
  );
};

export default CartItem;
