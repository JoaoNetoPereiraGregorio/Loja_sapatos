import React from 'react';
import { useRouter } from 'next/router';

import Header from './components/header';
import styles from '../styles/Product.module.css';
import Footer from './components/footer';
import NextButton from './components/botao';




const Product = () => {
  const router = useRouter();
  const { id } = router.query;


  const product = {
    id: parseInt(id),
    name: 'Product Name',
    description: 'Product Description juihuehdeuhdeuhdeuh ndedeuhdueh duihduehdu uhd3hu3e iuu8yu8 uhuhuhu huhhh ',
    price: 'R$100',
    image: 'https://drive.google.com/thumbnail?id=1TnsnbMAdAFnTcnxGbNkyaXf8YWdxzxsq',

  };

  // Fetch product details based on the id



  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.conteudo}>
        <h1 className={styles.name}>{product.name}</h1>

        <div className={styles.imagemTexto}>
          <img src={product.image} alt={product.name} className={styles.img} />

          <div className={styles.precoDescricao}>
           

            <p className={styles.descricao}>{product.description}</p>
            <p className={styles.preco}>{product.price}</p>
          </div>
        </div>

      </div>
      <NextButton buttonText="Comprar" />
      <NextButton buttonText="Adicionar ao Carrinho" />

      <Footer />


    </div>



  );
};

export default Product;