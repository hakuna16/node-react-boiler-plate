import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import configureStore from './store/configureStore';
import App from './App';

const history = createBrowserHistory({});

/**
 * This method is used to configure the store on the root of the project.
 * @implements store from redux store.
 */
const store = configureStore();

/**
 * This is the root class of the project.
 */
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app'),
);
