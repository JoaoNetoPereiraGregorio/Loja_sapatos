import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { useRouter } from 'next/router';
import styles from '../styles/Products.module.css';
import Link from 'next/link';
import Padroes from './components/header'


const filtros = [
    { texto: 'teste' }, { texto: "teste" }, { texto: "teste" }, { texto: "teste" }, { texto: "teste" }, { texto: "teste" }, { texto: "teste" },
    { texto: "teste" }, { texto: "teste" },{ texto: "teste" },{ texto: "teste" },{ texto: "teste" },{ texto: "teste" },
    { texto: "teste" },


];

const FiltrosCard = ({ filtro }) => {


    return (

        <div
            
           >


           
          <h1>{filtro.texto}</h1>  


        </div>

    );
};

const Filtros = () => {
    return (


        <div className={styles.container}>
            <Padroes />

            {filtros.map((filtros) => (
                <FiltrosCard key={filtros.texto} filtro={filtros} />

            ))}
        </div>


    );
};

export default Filtros;
