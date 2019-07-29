const testReducer = (state = {}, action) => {
  switch (action.type) {
    case 'NEWS_RECEIVED':
      return {
        ...state,
        loading: true,
        data: action.json
      };
    default:
      return state;
  }
};
export default testReducer;
