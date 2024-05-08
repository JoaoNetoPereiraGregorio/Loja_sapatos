import React from 'react';
import styles from '../../styles/Botao.module.css';

      
      
function NextButton({ buttonText ,onClick}) {
    return (
        <button onClick={onClick} className={styles.btn}>{buttonText}</button>
    );
}

export default NextButton;

