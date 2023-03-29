import React from 'react';
import './Cart.css'

const Cart = (props) => {

    let total=0;
    let totalShipping = 0;
    for(const product of props.cart){
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }

    const tax = (total*5)/100;

    const grandTotal = total + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Select Item : {props.cart.length}</p> 
            <p>Total price:&{total} </p>
            <p>Total Shipping:${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>tax.toFixed(2)
            <h4>Grand Total:${grandTotal.toFixed(2)} </h4> 
        </div>
    );
};

export default Cart;