const initialState = {
  menuProps: ''
};

const globalReducer = (state = {}, action) => {
  switch (action.type) {
    case 'PASS_MENU_PROPS_SAGA':
      return {
        ...state,
        menuProps: action.payload
      };
    default:
      return state;
  }
};
export default globalReducer;
