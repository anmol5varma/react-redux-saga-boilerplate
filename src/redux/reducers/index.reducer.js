import { combineReducers } from 'redux';
import sample from './sample.reducer';

const appReducers = combineReducers({
  sample,
});

export default appReducers;
