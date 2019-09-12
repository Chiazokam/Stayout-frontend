/* eslint-disable import/prefer-default-export */
import { put, takeLatest } from 'redux-saga/effects';

function* passMenu(action) {
  try {
    return yield put({ type: 'PASS_MENU_PROPS_SAGA', payload: action.payload });
  } catch (error) {
    return null;
  }
}

export function* globalActionWatcher() {
  yield takeLatest('PASS_MENU_PROPS', passMenu);
}
