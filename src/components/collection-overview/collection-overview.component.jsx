import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import './collection-overview.styles.scss';
import { selectShopCollections } from '../../redux/shop/shop.selector';

const CollectionOverview = ({ collections }) => (
    <div className='collection-overview'>
        {
             collections.map(({ id, ...collectionData }) => {
                return <CollectionPreview key={id} {...collectionData} />
            })
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections,
})

export default connect(mapStateToProps)(CollectionOverview);