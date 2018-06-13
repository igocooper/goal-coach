import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// redux part 
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import { logUser }  from './actions/index';

import App from './components/App';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import NotFound from './components/NotFound';

import { firebaseApp } from './firebase';

const history = createBrowserHistory();
const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged( user => {
    if (user) {
        const { email } = user; 
        // console.log('User has signed in or up', user);
        store.dispatch(logUser(email));
        history.push('/app');
    } else {
        // console.log('User has signed out or still need to sign in.');
        history.push('/signin');
    }
});

const AppRouter = () => {
    return (
      <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path='/app' component={App} />
                <Route exact path='/signin' component={SignIn} />
                <Route exact path='/signup' component={SignUp} />
                <Route component={NotFound}></Route>
            </Switch>
        </Router>
      </Provider>
    )
  }


ReactDOM.render(
    <AppRouter />, document.getElementById('root'));