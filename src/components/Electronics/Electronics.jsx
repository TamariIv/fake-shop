import React from 'react';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Electronics = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/category/electronics');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false); // Set loading to false after fetch is complete
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <div>Loading...</div>; // Loading state
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Electronics;