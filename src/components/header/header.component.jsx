import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'


import Cart from '../cart/cart.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCartShow } from '../../redux/cart/cart.selector';
import { selectCurrUser } from '../../redux/user/user.selector';

import { auth } from '../../firebase/firebase-utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser, showCart }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div> :
                    <div>
                        <Link className='option' to='/sign-in-up'>SIGN IN</Link>
                    </div>
            }
            <div className='option'>
                <Cart />
            </div>
        </div>
        {
            showCart ? <CartDropdown /> : null
        }
    </div>
)

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrUser,
    showCart: selectCartShow,
});

export default connect(mapStateToProps)(Header);