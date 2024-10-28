import React from 'react';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import styles from './Jewelry.module.css';

const Jewelry = () => {

    const [products, setProducts] = useState([]); // State for storing products
    const [loading, setLoading] = useState(true); // State for loading status
    const [error, setError] = useState(null); // State for error handling

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/category/jewelery');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data); // Update state with fetched products
            } catch (err) {
                setError(err.message); // Set error message if fetch fails
            } finally {
                setLoading(false); // Set loading to false after fetch is complete
            }
        };

        fetchProducts(); // Call the function to fetch products
    }, []); // Empty dependency array ensures this runs only once

    if (loading) return <div>Loading...</div>; // Loading state
    if (error) return <div>Error: {error}</div>; // Error handling

    return (
        <div className={styles.products}>
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Jewelry;