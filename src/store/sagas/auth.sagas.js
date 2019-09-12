/* eslint-disable import/prefer-default-export */
import { put, takeLatest, call } from 'redux-saga/effects';
import apiCall from '../../utils/apiCalls/authCalls.utils';

function* fetchSignup(action) {
  try {
    const response = yield call(apiCall, action.payload);
    return yield put({ type: 'GET_SIGNUP_DATA', payload: response });
  } catch (error) {
    return null;
  }
}

export function* authActionWatcher() {
  yield takeLatest('SIGNUP_LOADING', fetchSignup);
}
