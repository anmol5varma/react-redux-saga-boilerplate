import { createStore } from 'redux';
import rootReducer from '../index.reducer';
import sample from '../sample.reducer';

describe('Index reducer', () => {
  const store = createStore(rootReducer);
  it('initial state of the root reducer matches what child reducers return given an empty action', () => {
    expect(store.getState().sample).toEqual(sample(undefined, {}));
  });
});
