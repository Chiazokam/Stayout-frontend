import { combineReducers } from 'redux';
import testReducer from './test.reducers';

const Reducer = combineReducers({
  test: testReducer,
});

export default Reducer;
