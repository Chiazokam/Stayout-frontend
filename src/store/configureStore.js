import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import Reducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const enhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));
const Store = createStore(Reducer, enhancers);
sagaMiddleware.run(rootSaga);

export default Store;
