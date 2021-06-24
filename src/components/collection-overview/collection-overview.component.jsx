import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import './collection-overview.styles.scss';
import { selectShopCollectionsPreview } from '../../redux/shop/shop.selector';

const CollectionOverview = ({ collections }) => (
    <div className='collection-overview'>
        {
             collections.map(({...collectionData}) => {
                const { title } = collectionData
                return <CollectionPreview key={title} {...collectionData} />
            })
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollectionsPreview,
})

export default connect(mapStateToProps)(CollectionOverview);