import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Filtros.module.css';
import Padroes from './components/header';
import Footer from './components/footer';
import FiltrosCard from './components/filtrosCard';



const Filtros = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [inputValue, setInputValue] = useState('');

    const router = useRouter();

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
                if (response.ok && Array.isArray(data.products)) {
                    setProducts(data.products);
                    setIsLoading(false);
                } else {
                    alert("Erro ao buscar dados, contate o administrador!");
                }
            } catch (error) {
                alert('Erro ao buscar dados da API:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (inputValue.trim() !== '') {
            const filtered = products.filter((product) =>
                product.name.toLowerCase().includes(inputValue.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(products);
        }
    }, [inputValue, products]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className={styles.container}>
            <Padroes />
            <div className={styles.divInput}>
                <input className={styles.pesquisa}
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Pesquisar..."
                />
            </div>
            <div className={styles.filtros}>
                {isLoading ? (
                    <div className={styles.divCarregando}>Carregando Filtros...</div>
                ) : (
                    <>
                        {filteredProducts.map((product) => (
                            <FiltrosCard key={product.id} product={product} />
                        ))}
                    </>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Filtros;
