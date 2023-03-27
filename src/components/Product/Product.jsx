import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product);
    const {img, name, seller, price, ratings, quantity} = props.product;


    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <p>price: {price}$</p>
                <p>Manufracturer: {seller}</p>
                <p>Rating: {ratings} stars</p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;