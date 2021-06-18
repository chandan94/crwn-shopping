// import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';

import { selectShopCollectionsFetching } from '../../redux/shop/shop.selector';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectShopCollectionsFetching(state),
});

const CollectionOverviewContainer = compose(connect(mapStateToProps), WithSpinner)(CollectionPage);

export default CollectionOverviewContainer;
