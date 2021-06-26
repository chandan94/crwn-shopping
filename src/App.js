import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInUpPage from './pages/sign-in-up/sign-in-up-page.component';

// import { auth, createUserProfileDoc } from './firebase/firebase-utils';

import { isUserAuthenticated } from './redux/user/user.actions';
import { selectCurrUser } from './redux/user/user.selector';
import { selectShopCollectionsPreview } from './redux/shop/shop.selector'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import Checkout from './pages/checkout/checkout.component';


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserAuth } = this.props;
    checkUserAuth();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
          <Router>
            <Header />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/shop' component={ShopPage} />
              <Route exact path='/sign-in-up' render={ () => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInUpPage />)} />
              <Route exact path='/checkout' component={Checkout} />
            </Switch>
          </Router>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
    currentUser : selectCurrUser,
    collections : selectShopCollectionsPreview,
})

const mapDispatchToProps = dispatch => ({
  checkUserAuth : () => dispatch(isUserAuthenticated())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
