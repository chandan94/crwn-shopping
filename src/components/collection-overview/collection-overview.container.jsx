// import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionOverview from './collection-overview.component';

import { selectShopCollectionsFetching } from '../../redux/shop/shop.selector';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectShopCollectionsFetching(state),
});

const CollectionOverviewContainer = compose(connect(mapStateToProps), WithSpinner)(CollectionOverview);

export default CollectionOverviewContainer;
