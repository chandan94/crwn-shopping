import React from 'react';

import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInUpPage from './pages/sign-in-up-page.component';

import { auth } from './components/firebase/firebase-utils';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


class App extends React.Component {

  unsubscribeFromAuth = null;

  constructor(props) {
    super(props);

    this.state = {
      currentUser : null
    };
  }

  componentDidMount() {
    this.unsubscribeFomAuth = auth.onAuthStateChanged( user => {
      this.setState({ currentUser : user });
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/shop' component={ShopPage} />
            <Route exact path="/sign-in-up" component={SignInUpPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
