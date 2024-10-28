import React from 'react';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import styles from './Electronics.module.css';
import { getProductsElectronics } from '../../service';

const Electronics = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            getProductsElectronics()
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setLoading(false); 
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            })
        };

        fetchProducts(); 
    }, []); 
    
    if (loading) return <div>Loading...</div>; // Loading state
    if (error) return <div>Error: {error}</div>;

    return (
        <div className={styles.products}>
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Electronics;