import React from 'react';
import { connect } from 'react-redux';

import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInUpPage from './pages/sign-in-up/sign-in-up-page.component';

import { auth, createUserProfileDoc } from './components/firebase/firebase-utils';
// import store from './components/redux/store';
import { setCurrentUser } from './components/redux/user/user.actions';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// import { Provider } from 'react-redux';

import './App.css';


class App extends React.Component {

  unsubscribeFromAuth = null;


  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unsubscribeFomAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
          });
        });
      }

      setCurrentUser( userAuth );
    });
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
              <Route exact path='/shop' component={ShopPage} />
              <Route exact path="/sign-in-up" render={ () => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInUpPage />)} />
            </Switch>
          </Router>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser : user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
