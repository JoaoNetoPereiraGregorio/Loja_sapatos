import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { useRouter } from 'next/router';
import styles from '../styles/Products.module.css';
import Link from 'next/link';
import Header from './components/header';
import Footer from './components/footer';





const products = [

  { id: 1, name: 'Product 1', price: '$100', image: 'https://drive.google.com/thumbnail?id=1TnsnbMAdAFnTcnxGbNkyaXf8YWdxzxsq' },
  { id: 2, name: 'Product 2', price: '$200', image: 'https://drive.google.com/thumbnail?id=1qMm9AjKJpYPGDWTyiT8ILFXNUX8OvA1h' },
  { id: 3, name: 'Product 3', price: '$300', image: 'https://drive.google.com/thumbnail?id=1xhynfWfDZ5qlQk4RDl64O0zQ-gy-wGFo' },
  { id: 4, name: 'Product 4', price: '$400', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Product 5', price: '$500', image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Product 6', price: '$600', image: 'https://via.placeholder.com/150' },
  { id: 1, name: 'Product 1', price: '$100', image: 'https://drive.google.com/thumbnail?id=1TnsnbMAdAFnTcnxGbNkyaXf8YWdxzxsq' },
  { id: 2, name: 'Product 2', price: '$200', image: 'https://drive.google.com/thumbnail?id=1qMm9AjKJpYPGDWTyiT8ILFXNUX8OvA1h' },
  { id: 3, name: 'Product 3', price: '$300', image: 'https://drive.google.com/thumbnail?id=1xhynfWfDZ5qlQk4RDl64O0zQ-gy-wGFo' },
  { id: 4, name: 'Product 4', price: '$400', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Product 5', price: '$500', image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Product 6', price: '$600', image: 'https://via.placeholder.com/150' },
  { id: 1, name: 'Product 1', price: '$100', image: 'https://drive.google.com/thumbnail?id=1TnsnbMAdAFnTcnxGbNkyaXf8YWdxzxsq' },
  { id: 2, name: 'Product 2', price: '$200', image: 'https://drive.google.com/thumbnail?id=1qMm9AjKJpYPGDWTyiT8ILFXNUX8OvA1h' },
  { id: 3, name: 'Product 3', price: '$300', image: 'https://drive.google.com/thumbnail?id=1xhynfWfDZ5qlQk4RDl64O0zQ-gy-wGFo' },
  { id: 4, name: 'Product 4', price: '$400', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Product 5', price: '$500', image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Product 6', price: '$600', image: 'https://via.placeholder.com/150' },
  { id: 1, name: 'Product 1', price: '$100', image: 'https://drive.google.com/thumbnail?id=1TnsnbMAdAFnTcnxGbNkyaXf8YWdxzxsq' },
  { id: 2, name: 'Product 2', price: '$200', image: 'https://drive.google.com/thumbnail?id=1qMm9AjKJpYPGDWTyiT8ILFXNUX8OvA1h' },
  { id: 3, name: 'Product 3', price: '$300', image: 'https://drive.google.com/thumbnail?id=1xhynfWfDZ5qlQk4RDl64O0zQ-gy-wGFo' },
  { id: 4, name: 'Product 4', price: '$400', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Product 5', price: '$500', image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Product 6', price: '$600', image: 'https://via.placeholder.com/150' },
  { id: 1, name: 'Product 1', price: '$100', image: 'https://drive.google.com/thumbnail?id=1TnsnbMAdAFnTcnxGbNkyaXf8YWdxzxsq' },
  { id: 2, name: 'Product 2', price: '$200', image: 'https://drive.google.com/thumbnail?id=1qMm9AjKJpYPGDWTyiT8ILFXNUX8OvA1h' },
  { id: 3, name: 'Product 3', price: '$300', image: 'https://drive.google.com/thumbnail?id=1xhynfWfDZ5qlQk4RDl64O0zQ-gy-wGFo' },
  { id: 4, name: 'Product 4', price: '$400', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Product 5', price: '$500', image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Product 6', price: '$600', image: 'https://via.placeholder.com/150' },
  { id: 1, name: 'Product 1', price: '$100', image: 'https://drive.google.com/thumbnail?id=1TnsnbMAdAFnTcnxGbNkyaXf8YWdxzxsq' },
  { id: 2, name: 'Product 2', price: '$200', image: 'https://drive.google.com/thumbnail?id=1qMm9AjKJpYPGDWTyiT8ILFXNUX8OvA1h' },
  { id: 3, name: 'Product 3', price: '$300', image: 'https://drive.google.com/thumbnail?id=1xhynfWfDZ5qlQk4RDl64O0zQ-gy-wGFo' },
  { id: 4, name: 'Product 4', price: '$400', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Product 5', price: '$500', image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Product 6', price: '$600', image: 'https://via.placeholder.com/150' },
  { id: 1, name: 'Product 1', price: '$100', image: 'https://drive.google.com/thumbnail?id=1TnsnbMAdAFnTcnxGbNkyaXf8YWdxzxsq' },
  { id: 2, name: 'Product 2', price: '$200', image: 'https://drive.google.com/thumbnail?id=1qMm9AjKJpYPGDWTyiT8ILFXNUX8OvA1h' },
  { id: 3, name: 'Product 3', price: '$300', image: 'https://drive.google.com/thumbnail?id=1xhynfWfDZ5qlQk4RDl64O0zQ-gy-wGFo' },
  { id: 4, name: 'Product 4', price: '$400', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Product 5', price: '$500', image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Product 6', price: '$600', image: 'https://via.placeholder.com/150' },
  
  // Adicione mais produtos conforme necessário
];

const ProductCard = ({ product }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product?id=${product.id}`);
  };

  return (

    <div
      className={styles.card}
      onClick={handleClick}

    >
      <img src={product.image} alt={product.name} style={{ width: '100%', height: '60%' }} />

      <h2>{product.name}</h2>
      <h2>{product.price}</h2>


    </div>

  );
};



const Products = () => {
  const router = useRouter();
  const carrinho = () => {
    router.push(`/carrinho`);
  };
  return (

   
     
    <div className={styles.container}>
      
      

      {products.map((product) => (
        <ProductCard key={product.id} product={product} />

      ))}

      <div className={styles.cartButton} onClick={carrinho}>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
        </svg>
      </div>
      
    </div>
   
  );


};



export default Products;


