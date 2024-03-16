import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';


const Home = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async () => {
        const response = await fetch('/api/name', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
        });

        const data = await response.json();

        //se a message for vazia e pq occoreu tudo bem na verificacao na rota entao ustiliza a função para alterar de pagina

        if (response.ok) {
            if (data.message == "") {
               
                setResponseMessage(data.teste);
                router.push(`/nova-tela?name=${encodeURIComponent(data.teste)}`);

            } else {
                setResponseMessage(data.teste);
            }
        }

    };



    


    return (
        <div className={styles.container}>



            <h1 className={styles.title}>Bem-vindo ao nosso site!</h1>
            <p className={styles.description}>Digite seu nome:</p>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={styles.input} />
            <button onClick={handleSubmit} className={styles.button}>
                Enviar
            </button>
            <p className={styles.responseMessage}>{responseMessage}</p>
        </div>
    );
};

export default Home;