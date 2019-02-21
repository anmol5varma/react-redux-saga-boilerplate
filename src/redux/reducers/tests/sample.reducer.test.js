import sample from '../sample.reducer';
import {
  SAMPLE_ACTION,
} from '../../actions/index.actions';

describe('sample reducer', () => {
  const initialState = {
    value: null,
  };
  it('should have the initial state value as empty object', () => {
    expect(sample(undefined, {})).toEqual({
      value: null,
    });
  });
  it('should set status', () => {
    const action = {
      type: SAMPLE_ACTION,
      payload: 'test',
    };
    expect(sample(initialState, action)).toEqual({
      value: 'test',
    });
  });
});
