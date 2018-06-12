import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import NotFound from './components/NotFound';


import { firebaseApp } from './firebase';

firebaseApp.auth().onAuthStateChanged( user => {
    if (user) {
        console.log('User has signed in or up', user);
    } else {
        console.log('User has signed out or still need to sign in.');
    }
});

const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
            <Route component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    )
  }


ReactDOM.render(
    <Router />, document.getElementById('root'));