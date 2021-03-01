import React from 'react';

import ReactDOM from 'react-dom';

import { BrowserRouter, Link } from 'react-router-dom';

import { Provider } from 'react-redux';

import App from './App';

import store from './store';

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <p><Link to="/">헤더</Link></p>
        <App />
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('app'),
);
