import { createStore } from 'redux';
import reducer from './reducers/index.reducer';

/* eslint-disable*/
const initstore = () => createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */
export default initstore;
