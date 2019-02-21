import { put, takeLatest } from 'redux-saga/effects';
import { SET_SAMPLE_ACTION, sampleAction } from '../actions/index.actions';

export function* setSampleValue({ payload }) {
  try {
    yield put(sampleAction(payload));
  } catch (err) {
    console.log(err);
  }
}

export default function* sample() {
  yield takeLatest(SET_SAMPLE_ACTION, setSampleValue);
}
