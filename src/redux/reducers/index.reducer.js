import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import sample from './sample.reducer';

const appReducers = combineReducers({
  routing: routerReducer,
  sample,
});

export default appReducers;
