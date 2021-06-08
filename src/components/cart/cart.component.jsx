import React from 'react';
import { connect } from 'react-redux'

import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';

import { toggleCartShow } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

import './cart.styles.scss'

const Cart = ({ toggleCartShow, itemCount }) => (
    <div className='cart' onClick={toggleCartShow}>
        <ShoppingBag className='shopping-bag' />
        <span className='item-count'> {itemCount} </span>
    </div>
)

const mapStateToDrops = state => ({
    itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
    toggleCartShow: () => dispatch(toggleCartShow())
});

export default connect (mapStateToDrops, mapDispatchToProps)(Cart);