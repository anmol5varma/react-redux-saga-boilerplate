import { fork } from 'redux-saga/effects';
import sampleSaga from './sample.saga';

export default function* () {
  yield fork(sampleSaga);
}
