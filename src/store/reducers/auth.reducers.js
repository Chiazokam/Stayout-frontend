import {
  CLOSE_SIGNUP_MODAL,
  OPEN_SIGNUP_MODAL,
  TOGGLE_PASSWORD,
  SIGNUP_LOADING
} from '../../constants';

const initialState = {
  isSignupModalOpen: false,
  isPasswordVisible: false,
  isLoading: false,
  payload: {}
};

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case OPEN_SIGNUP_MODAL:
      return {
        ...state,
        isSignupModalOpen: true,
      };
    case CLOSE_SIGNUP_MODAL:
      return {
        ...state,
        isSignupModalOpen: false,
      };
    case TOGGLE_PASSWORD:
      return {
        ...state,
        isPasswordVisible: !state.isPasswordVisible,
      };
    case SIGNUP_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_SIGNUP_DATA':
      return {
        ...state,
        isLoading: false,
        payload: action.payload,
      };
    default:
      return state;
  }
};
export default authReducer;
