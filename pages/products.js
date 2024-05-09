import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Products.module.css';
import { useState, useEffect } from 'react';





const ProductCard = ({ product }) => {
  const router = useRouter();

  const productJson = JSON.stringify(product);
  const handleClick = () => {
    router.push(`/product?produto=${productJson}`);



  };

  return (

    <div
      className={styles.card}
      onClick={handleClick}>
      <img src={product.image} alt={product.name} className={styles.imagemProduto} />

      <h2>{product.name}</h2>
      <h2>R$ {product.price}</h2>


    </div>

  );
};



const Products = () => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./api/produtos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },

        });
        const data = await response.json();
        if (response.ok && Array.isArray(data.products)) { // Verifica se a resposta é um array
          setProducts(data.products);
          setIsLoading(false);

        } else {
          alert("Erro ao buscar dados contate o administrador!")
        }
      } catch (error) {
        alert('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, []);

  const router = useRouter();


  const carrinho = () => {
    router.push(`/carrinho`);
  };


  return (



    <div className={styles.container}>

      {isLoading ? (
        <div className={styles.divCarregando}>Carregando produtos...</div> // Exibe uma mensagem enquanto os produtos estão sendo carregados
      ) : (
        <>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />

          ))
          }
        </>
      )}


      <div className={styles.cartButton} onClick={carrinho}>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
        </svg>
      </div>



    </div>

  );


};





export default Products;


