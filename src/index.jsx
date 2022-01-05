import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';

import store from './store';

function AboutPage() {
  return <div>AboutPage</div>;
}

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('app'),
);
