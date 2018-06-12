import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, withRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import App from './components/App';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import NotFound from './components/NotFound';

import { firebaseApp } from './firebase';

const history = createBrowserHistory();

firebaseApp.auth().onAuthStateChanged( user => {
    if (user) {
        console.log('User has signed in or up', user);
        history.push('/app');
    } else {
        console.log('User has signed out or still need to sign in.');
    }
});

const AppRouter = () => {
    return (
      <Router history={history}>
        <Switch>
            <Route exact path='/app' component={App} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
            <Route component={NotFound}></Route>
        </Switch>
      </Router>
    )
  }


ReactDOM.render(
    <AppRouter />, document.getElementById('root'));