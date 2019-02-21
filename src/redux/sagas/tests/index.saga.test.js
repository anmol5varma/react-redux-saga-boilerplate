import { fork } from 'redux-saga/effects';
import sagaHelper from 'redux-saga-testing';
import combinedSagas from '../index.saga';
import sample from '../sample.saga';

describe('combinedSagas: combines all the sagas and return a single saga', () => {
  const it = sagaHelper(combinedSagas());
  it('should combine sample saga', (result) => {
    expect(result).toEqual(fork(sample));
  });
});
