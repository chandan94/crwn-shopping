import React from 'react';
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selector';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';


const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ? 
                cartItems.map(item => {
                    return (<CartItem id={item.id} item={item} />)
                })
                :
                <div className='empty-message'> You do not have any items in the cart</div>
            }
            <Button>CHECKOUT</Button>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})


export default connect(mapStateToProps)(CartDropdown);