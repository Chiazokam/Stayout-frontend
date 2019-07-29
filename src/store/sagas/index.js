import { all } from 'redux-saga/effects';
import { actionWatcher } from './news.sagas';

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
