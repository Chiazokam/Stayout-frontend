import {
  CLOSE_SIGNUP_MODAL,
  OPEN_SIGNUP_MODAL,
  TOGGLE_PASSWORD,
  SIGNUP_LOADING
} from '../../constants';

const closeSignupModal = () => ({
  type: CLOSE_SIGNUP_MODAL,
});

const openSignupModal = () => ({
  type: OPEN_SIGNUP_MODAL,
});

const togglePassword = () => ({
  type: TOGGLE_PASSWORD,
});

const submitSignup = user => ({
  type: SIGNUP_LOADING,
  payload: user,
});

export {
  closeSignupModal,
  openSignupModal,
  togglePassword,
  submitSignup
};
