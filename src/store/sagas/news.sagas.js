/* eslint-disable import/prefer-default-export */
import { put, takeLatest, call } from 'redux-saga/effects';
import apiCall from '../../utils/apiCalls/testCall.utils';

function* fetchNews(action) {
  try {
    const response = yield call(apiCall, action.payload);
    return yield put({ type: 'NEWS_RECEIVED', json: response.data.articles.rows });
  } catch (error) {
    return null;
  }
}

export function* actionWatcher() {
  yield takeLatest('GET_NEWS', fetchNews);
}
