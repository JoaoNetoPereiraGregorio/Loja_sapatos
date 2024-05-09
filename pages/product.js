import React from 'react';
import { useRouter } from 'next/router';

import Header from './components/header';
import styles from '../styles/Product.module.css';
import Footer from './components/footer';
import NextButton from './components/botao';
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';




const Product = () => {
  const router = useRouter();
  const { produto } = router.query;
  const produtoObj = JSON.parse(produto);


  const product = {
    id: produtoObj.id,
    name: produtoObj.name,
    description: produtoObj.description,
    price: parseFloat(produtoObj.price),
    image: produtoObj.image,

  };

  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const carrinhoItensString = Cookies.get('carrinho');
    const carrinhoItens = carrinhoItensString ? JSON.parse(carrinhoItensString) : [];
    setCartItems(carrinhoItens);
  }, []);


  const adicionar = (item) => {
    const novoCarrinho = [...cartItems, item];
    Cookies.set('carrinho', JSON.stringify(novoCarrinho));
    alert("Seu item foi adicionado ao carrinho!")
  };

  const carrinho = () => {
    router.push(`/carrinho`);
  };


  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.conteudo}>
        <h1 className={styles.name}>{product.name}</h1>

        <div className={styles.imagemTexto}>
          <img src={product.image} alt={product.name} className={styles.img} />

          <div className={styles.precoDescricao}>


            <p className={styles.descricao}>{product.description}</p>
            <p className={styles.preco}>R$ {product.price}</p>
          </div>
        </div>

      </div>

      <NextButton onClick={() => adicionar(product)} buttonText="Adicionar ao Carrinho" />


      <div className={styles.cartButton} onClick={carrinho}>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
        </svg>
      </div>

      <Footer />


    </div>



  );
};

export default Product;