import sagaHelper from 'redux-saga-testing';
import { takeLatest, put } from 'redux-saga/effects';
import sampleSaga, { setSampleValue } from '../sample.saga';

import { SET_SAMPLE_ACTION, sampleAction } from '../../actions/index.actions';

describe('sampleSaga: testing the root saga', () => {
  const it = sagaHelper(sampleSaga());
  it('should call setSampleValue', (result) => {
    expect(result).toEqual(takeLatest(SET_SAMPLE_ACTION, setSampleValue));
  });
  it('should do nothing', (result) => {
    expect(result).toBeUndefined();
  });
});

describe('setSampleValue success case:', () => {
  const it = sagaHelper(setSampleValue({ type: SET_SAMPLE_ACTION, payload: 'test' }));
  it('should call action', (result) => {
    expect(result).toEqual(put(sampleAction('test')));
  });
});
