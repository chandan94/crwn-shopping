import React from 'react';
import { connect } from 'react-redux';

import Button from '../button/button.component';

import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem = ({item, addItemToCart}) => {
    const { name, price, imageUrl } = item;
    return (
        <div className='collection-item'>
            <div className='image' style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className='collection-footer'>
                <span className='title'>{name}</span>
                <span className='price'>{price}$</span>
            </div>
            <Button inverted onClick={()=> {addItemToCart(item)}}>Add to cart</Button>
        </div>
    );
}


const mapDispatchToProps = dispatch => ({
    addItemToCart: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);