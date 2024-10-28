import React from 'react';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import styles from './Books.module.css';
import { getProductsBooks } from '../../service';

const Books = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProductsBooks(); // Call the updated service function
                setProducts(data); // Update state with fetched products
            } catch (error) {
                setError(error.message); // Set error message if fetch fails
            } finally {
                setLoading(false); // Set loading to false after fetch is complete
            }
        };

        fetchProducts(); // Call the function to fetch products
    }, []); // Empty dependency array ensures this runs only once

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (

        <div className={styles.products}>
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>


    );
};

export default Books;