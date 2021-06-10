import React from 'react';
import { connect } from 'react-redux';
import  { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import Stripe from '../../components/stripe/stripe.component';

import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selector';


import './checkout.styles.scss'

const Checkout = ({ cartItems, cartTotal }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                Product
            </div>
            <div className='header-block'>
                Description
            </div>
            <div className='header-block'>
                Quantity
            </div>
            <div className='header-block'>
                Price
            </div>
            <div className='header-block'>
                Remove
            </div>
        </div>
        {
            cartItems.map(item => {
                return <CheckoutItem key={item.id} cartItem={item} />
            })
        }
        <div className='total'>
            TOTAL: ${cartTotal}
        </div>
        <Stripe price={cartTotal} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartItemsTotal
});

export default connect(mapStateToProps)(Checkout);