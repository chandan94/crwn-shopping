import React from 'react';
import { connect } from 'react-redux';
import { selectShopCollectionSet } from '../../redux/shop/shop.selector';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';


const CollectionPage = ({ collection }) => (
    <div className='collection-page'>
        <h2 className='title'>{collection.title}</h2>
        <div className='items'>
            {
                collection.items.map(item => {
                    return <CollectionItem key={item.id} item={item} className='collection-item' />
                })
            }
        </div>
    </div>
);

const mapStateToProps = (state, otherProps) => ({
    collection: selectShopCollectionSet(otherProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);