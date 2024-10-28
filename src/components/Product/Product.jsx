import React from 'react';

const Product = ({ product }) => {
    console.log("here"); 
    console.log(product.id);
    return (
        <div>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <img src={product.image} alt={product.title} />
        </div>
    );
};

export default Product;