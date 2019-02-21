// import React from 'react';
import Home from '../index';
import { SET_SAMPLE_ACTION } from '../../../redux/actions/index.actions';

jest.mock('react-redux');

describe('Home: mapStateToProps', () => {
  const mockStore = {
    sample: 'test',
  };
  it('should get sample from state', () => {
    const state = Home.mapStateToProps(mockStore);
    expect(state).toEqual(mockStore);
  });
});
describe('Home: mapDispatchToProps', () => {
  const props = Home.mapDispatchToProps();
  it('should dispatch action for setting sample value', () => {
    expect(props.updateSampleReducer('test')).toEqual({ payload: 'test', type: SET_SAMPLE_ACTION });
  });
});
