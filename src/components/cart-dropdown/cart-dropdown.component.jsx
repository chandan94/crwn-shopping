import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { toggleCartShow } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selector';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';


const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ? 
                cartItems.map(item => {
                    return (<CartItem key={item.id} item={item} />)
                })
                :
                <div className='empty-message'> You do not have any items in the cart</div>
            }
            <Button onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartShow())
            }}>CHECKOUT</Button>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));