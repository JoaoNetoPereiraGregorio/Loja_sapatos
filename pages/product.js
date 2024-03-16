import React from 'react';
import { useRouter } from 'next/router';

import Header from './components/header';
import styles from '../styles/Product.module.css';
import Footer from './components/footer'





const products = [
   
  { id: 1, name: 'Product 1', price: '$100', image: 'https://drive.google.com/thumbnail?id=1TnsnbMAdAFnTcnxGbNkyaXf8YWdxzxsq'},
  { id: 2, name: 'Product 2', price: '$200', image: 'https://drive.google.com/thumbnail?id=1qMm9AjKJpYPGDWTyiT8ILFXNUX8OvA1h' },
  { id: 3, name: 'Product 3', price: '$300', image: 'https://drive.google.com/thumbnail?id=1xhynfWfDZ5qlQk4RDl64O0zQ-gy-wGFo' },
  { id: 4, name: 'Product 4', price: '$400' , image: 'https://via.placeholder.com/150'},
  { id: 5, name: 'Product 5', price: '$500' , image: 'https://via.placeholder.com/150'},
  { id: 6, name: 'Product 6', price: '$600' , image: 'https://via.placeholder.com/150'},
  { id: 1, name: 'Product 1', price: '$100', image: 'https://drive.google.com/thumbnail?id=1TnsnbMAdAFnTcnxGbNkyaXf8YWdxzxsq'},
  { id: 2, name: 'Product 2', price: '$200', image: 'https://drive.google.com/thumbnail?id=1qMm9AjKJpYPGDWTyiT8ILFXNUX8OvA1h' },
  { id: 3, name: 'Product 3', price: '$300', image: 'https://drive.google.com/thumbnail?id=1xhynfWfDZ5qlQk4RDl64O0zQ-gy-wGFo' },
  { id: 4, name: 'Product 4', price: '$400' , image: 'https://via.placeholder.com/150'},
  { id: 5, name: 'Product 5', price: '$500' , image: 'https://via.placeholder.com/150'},
  { id: 6, name: 'Product 6', price: '$600' , image: 'https://via.placeholder.com/150'},
  
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
      
       
      
    </div>
    
  );
}

const Products = () => {
  return (
    <div className={styles.container}>
      
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>

    
  );
};

const Product = () => {
  const router = useRouter();
  const { id } = router.query;


  const product = {
    id: parseInt(id),
    name: 'Product Name',
    description: 'Product Description',
    price: '$100',
    image: 'https://drive.google.com/thumbnail?id=1TnsnbMAdAFnTcnxGbNkyaXf8YWdxzxsq',
    
  };

  // Fetch product details based on the id
  
 

  return (
    <div className={styles.container}>
     <Header />
     <div className={styles.conteudo}>
      <h1 className={styles.name}>{product.name}</h1>

      <div className={styles.imagemTexto}>
      <img src={product.image} alt={product.name} className={styles.img}/>
      <p>{product.price}</p>
      <p>{product.id}</p>
      <p>{product.description}</p>
      </div>

      
      </div>
      <Footer />

      
      </div>



  );
};

export default Product;