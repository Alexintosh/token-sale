import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store.js';
import './public/bootstrap/bootstrap.min.css';
import './public/font-awesome/css/font-awesome.min.css';
import './public/css/index.css';
import './public/css/utils.css';
import './public/css/column.css';
import './public/css/color.css';


const app = document.getElementById('root');
render(
  <Provider store={store}>
    <App />
  </Provider>,
  app
);