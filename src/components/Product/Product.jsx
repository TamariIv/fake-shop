import React from 'react';
import styles from './Product.module.css'

const Product = ({ product }) => {
    console.log("here"); 
    console.log(product.id);
    return (
        <div className={styles.product}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    );
};

export default Product;