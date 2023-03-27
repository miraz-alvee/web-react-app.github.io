import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    console.log(props.product);
    const {img, name, seller, price, ratings} = props.product;

    const clickForCart = props.clickForCart;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <p>price: {price}$</p>
                <p>Manufracturer: {seller}</p>
                <p>Rating: {ratings} stars</p>
            </div>
            <button onClick={() => clickForCart(props.product)} className='btn-cart'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;