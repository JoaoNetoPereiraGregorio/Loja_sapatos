
import React from 'react';
import { useRouter } from 'next/router';
import Header from './components/header';
import Footer from './components/footer';
import Products from './products';
import styles from '../styles/Home.module.css';



const Home = () => {


    return (



        <div className={styles.container}>
            <Header />
            <Products />

            <Footer />
        </div>





    );
};

export default Home;