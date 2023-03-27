import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product);
    const {img, name, seller, price, quantity} = props.product;


    return (
        <div className='product'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            
        </div>
    );
};

export default Product;