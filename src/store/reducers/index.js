import { combineReducers } from 'redux';
import testReducer from './test.reducers';
import authReducer from './auth.reducers';
import globalReducer from './global.reducers';

const Reducer = combineReducers({
  test: testReducer,
  auth: authReducer,
  global: globalReducer
});

export default Reducer;
