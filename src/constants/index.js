import test from './test.constants';
import auth from './auth.constants';
import global from './global.constants';


const { GET_NEWS, NEWS_RECEIVED } = test;
const {
  CLOSE_SIGNUP_MODAL,
  OPEN_SIGNUP_MODAL,
  TOGGLE_PASSWORD,
  SIGNUP_LOADING
} = auth;
const { PASS_MENU_PROPS } = global;

export {
  GET_NEWS,
  NEWS_RECEIVED,
  CLOSE_SIGNUP_MODAL,
  OPEN_SIGNUP_MODAL,
  PASS_MENU_PROPS,
  TOGGLE_PASSWORD,
  SIGNUP_LOADING
};
