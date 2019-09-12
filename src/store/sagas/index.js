import { all } from 'redux-saga/effects';
import { globalActionWatcher } from './global.sagas';
import { authActionWatcher } from './auth.sagas';

export default function* rootSaga() {
  yield all([
    globalActionWatcher(),
    authActionWatcher(),
  ]);
}
