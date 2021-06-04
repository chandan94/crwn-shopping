import React from 'react';
import { connect } from 'react-redux'

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';


const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(item => {
                    return (<CartItem id={item.id} item={item} />)
                })
            }
            <Button>CHECKOUT</Button>
        </div>
    </div>
)

const mapStateToProps = ({ cart: { cartItems }}) => ({
    cartItems,
})


export default connect(mapStateToProps)(CartDropdown);