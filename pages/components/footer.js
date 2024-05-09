
import styles from '../../styles/Footer.module.css';
import React from 'react';
import { useRouter } from 'next/router';




const Footer = () => {
  const router = useRouter();


  const handleClick = () => {
    router.push(`/loginAdm`);
  };


  return (


      <footer className={styles.footer}>
        <div className={styles.contatos}>
          <h3>Contatos</h3>
          <p>Endereço: Rua Exemplo, 123</p>
          <p>Telefone: (11) 1234-5678</p>
          <p>Email: exemplo@example.com</p>
        </div>
        <div className={styles.admin}>
          <h3>Administração</h3>
          <button className={styles.adminBotao} onClick={handleClick}>Login como Administrador</button>
          
        </div>
      </footer>



  );
};

export default Footer;