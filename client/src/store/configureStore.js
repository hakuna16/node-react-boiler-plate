/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/index';
import initSagas from '../initSagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = compose(
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const configureStore = () => {
  const store = createStore(rootReducer, composeEnhancers);
  initSagas(sagaMiddleware);
  return store;
};

export default configureStore;
