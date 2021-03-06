import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({ item: { name, price, imageUrl, quantity }}) => (
    <div className='cart-item'>
        <img className='img' src={`${imageUrl}`} alt={`${name}`} />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span>{quantity} x {price}</span>
        </div>
    </div>
)

export default CartItem;