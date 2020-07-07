import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { BrowerRouter } from 'react-router-dom';

import App from './App';

import store from './store';

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowerRouter>
        <App />
      </BrowerRouter>
    </Provider>
  ),
  document.getElementById('app'),
);
