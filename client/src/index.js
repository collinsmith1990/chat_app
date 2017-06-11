import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import reduxThunk from 'redux-thunk';
import actionCableManager from './middlewares/action_cable_manager';
import async from './middlewares/async';

import reducers from './reducers';
import { loadState, saveState } from './lib/local_storage';
import App from './containers/app';
import HomeShow from './components/home/show'
import RoomsShow from './containers/rooms/show';
import UsersNew from './components/users/new';
import AuthsNew from './components/auths/new';
import AuthsDestroy from './components/auths/destroy';

import requireAuth from './hocs/require_auth';

const createStoreWithMiddleware = applyMiddleware(reduxThunk, async, actionCableManager)(createStore);
const persistedState = loadState();
const store = createStoreWithMiddleware(reducers, persistedState);
const history = syncHistoryWithStore(browserHistory, store);

// Keep authentication state in localstorage
store.subscribe(() => {
  saveState({
    auths: store.getState().auths
  });
})

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path ='/' component={App}>
        <IndexRoute component={HomeShow} />
        <Route path='rooms' component={requireAuth(RoomsShow)} />
        <Route path='signup' component={UsersNew} />
        <Route path='signin' component={AuthsNew} />
        <Route path='signout' component={AuthsDestroy} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.app-root'));
