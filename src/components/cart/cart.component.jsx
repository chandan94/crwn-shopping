import React from 'react';
import { connect } from 'react-redux'

import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';

import { toggleCartShow } from '../../redux/cart/cart.actions';

import './cart.styles.scss'

const Cart = ({ toggleCartShow }) => (
    <div className='cart' onClick={toggleCartShow}>
        <ShoppingBag className='shopping-bag' />
        <span className='item-count'> 0 </span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartShow: () => dispatch(toggleCartShow())
});

export default connect (null, mapDispatchToProps)(Cart);