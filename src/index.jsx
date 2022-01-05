import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import App from './pages/HomePage/App';

import store from './store';

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('app'),
);
