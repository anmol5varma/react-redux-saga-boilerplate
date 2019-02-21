import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';

import reducer from './reducers/index.reducer';
import sagas from './sagas/index.saga';

const configureStore = (initialState = {}, history) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
  ];

  const enhancers = [applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable */

  const initstore = createStore(
    reducer,
    initialState,
    composeEnhancers(...enhancers),
  );

  sagaMiddleware.run(sagas);
  return initstore;
};
export default configureStore;
