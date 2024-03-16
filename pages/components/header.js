
import styles from '../../styles/Padroes.module.css';
import React from 'react';
import { useRouter } from 'next/router';
import Footer from './footer';



const Padroes = () => {
  const router = useRouter();


  const handleClick = () => {
    router.push(`/home`);
  };

  const handleClickFiltro = () => {
    router.push(`/filtros`);
  };


  return (




    <header className={styles.topnavbar}>

      <div className={styles.logo}>
        <img src="https://via.placeholder.com/150" alt="Logo"/>
      </div>

      <div className={styles.leftnav}>
        <button className={styles.homebutton} onClick={handleClick}>HOME</button>
      </div>



      <div className={styles.rightnav}>
        <button className={styles.filterbutton} onClick={handleClickFiltro}>FILTRAR</button>
      </div> 
    </header>

   


  );
};

export default Padroes;