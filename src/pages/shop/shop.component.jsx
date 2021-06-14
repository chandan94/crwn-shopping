import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { convertCollectionToMap, firestore } from '../../firebase/firebase-utils';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

import './shop.styles.scss';
import { shopUpdateAction } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    state = {
        isLoading: true,
    };

    unsubscribeFromCollections;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromCollections = collectionRef.onSnapshot(async snapshot => {
            const collections = convertCollectionToMap(snapshot);
            updateCollections(collections);
            this.setState({ isLoading : false });
        });
    }

    render() {
        const { match } = this.props;
        const { isLoading } = this.state;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={ (props) => <CollectionsOverviewWithSpinner isLoading={isLoading}  {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionsPageWithSpinner isLoading={isLoading}  {...props} />} />
            </div>
        )
    };

    componentWillUnmount() {
        this.unsubscribeFromCollections();
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collection => dispatch(shopUpdateAction(collection)),
});

export default connect(null, mapDispatchToProps)(ShopPage);