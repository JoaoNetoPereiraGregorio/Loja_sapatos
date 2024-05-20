import { useRouter } from 'next/router';
import styles from '../../styles/Filtros.module.css';

const FiltrosCard = ({ product }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/product?produto=${JSON.stringify(product)}`);
    };

    return (
        <div className={styles.filtroCard} onClick={handleClick}>
            <p>{product.name}</p>
        </div>
    );
};

export default FiltrosCard;