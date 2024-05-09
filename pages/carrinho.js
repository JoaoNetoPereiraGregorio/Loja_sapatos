// pages/cart.js
import React from 'react';
import CartItem from './components/CartItem';
import Padroes from './components/header';
import NextButton from './components/botao';
import styles from '../styles/Carrinho.module.css';
import Footer from './components/footer';
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);


  const [totalPrice, setTotalPrice] = useState(0);


  // Função para carregar os itens do carrinho dos cookies ao carregar a página
  useEffect(() => {
    const carrinhoItensString = Cookies.get('carrinho');
    const carrinhoItens = carrinhoItensString ? JSON.parse(carrinhoItensString) : [];
    setCartItems(carrinhoItens);
    calcularTotalPrice(carrinhoItens);
  }, []);


  // Função para adicionar um item ao carrinho
  const adicionarItem = (item) => {
    const novoCarrinho = [...cartItems, item];
    Cookies.set('carrinho', novoCarrinho);
    setCartItems(novoCarrinho);
    calcularTotalPrice(novoCarrinho);
  };

  const removerItem = (indice) => {
    const novoCarrinho = [...cartItems.slice(0, indice), ...cartItems.slice(indice + 1)];
    Cookies.set('carrinho', novoCarrinho);
    setCartItems(novoCarrinho);
    calcularTotalPrice(novoCarrinho);
  };

  // Função para calcular o preço total do carrinho
  const calcularTotalPrice = (carrinhoItens) => {
    const precoTotal = carrinhoItens.reduce((total, item) => total + item.price, 0);
    setTotalPrice(precoTotal);
  };

  // Função para limpar o carrinho
  const limparCarrinho = () => {
    Cookies.remove('carrinho');
    setCartItems([]);
    setTotalPrice(0);
  };

  


  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Seu carrinho ainda esta vazio Adicione produtos para poder finalizar sua compra !")
    } else {
      alert(`Você será redirecionado para o WhatsApp para finalizar sua compra! Total: R$ ${totalPrice}`);
      const numeroTelefone = '62991503641'; // Número de telefone para o qual você quer enviar a mensagem
  let mensagem="*Olà gostaria de finalizar minha compra!*😊\n\n\n"
      cartItems.forEach((item, index) => {
        mensagem+="*Item* *"+(index+1)+"* ⬇️\n\n*Nome Produto:* "+item.name+"\n*Descrição Produto:* "+item.description+"\n*Preço Produto:* R$"+item.price+"\n\n\n";
       
      });
      mensagem +="\n\n*Total:* R$"+totalPrice +"✅";
      let url = "";
      if (window.innerWidth < 600) {
        // Se o dispositivo for móvel, abre o WhatsApp com o protocolo wa.me
        url = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagem)}`;
      } else {
        // Se não for móvel, abre o WhatsApp Desktop com o protocolo web.whatsapp.com
        url = `https://web.whatsapp.com/send?phone=${numeroTelefone}&text=${encodeURIComponent(mensagem)}`;
      }
      window.open(url, '_blank');

      limparCarrinho();
    }
  };

  return (


    <div className={styles.container}>
      <Padroes />
      <h1 className={styles.texto}>Carrinho</h1>

      {cartItems.length === 0 ? (
        <h1>O carrinho está vazio.</h1>
      ) : (
        <div className={styles.itens} >
          {cartItems.map((item, index) => (
            <CartItem
              key={index}
              product={item.name}
              price={item.price}
              onRemove={() => removerItem(index)}
            />
          ))}
        </div>
      )}
      <p className={styles.texto}>Total: R$ {totalPrice}</p>
      <NextButton onClick={handleCheckout} buttonText="Finalizar Compra" />


      <Footer />


    </div>

  );
};

export default CartPage;
