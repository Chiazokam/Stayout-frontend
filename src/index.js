import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';
import App from './App';


ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
