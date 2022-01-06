import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RestaurantsPage from './pages/RestaurantsPage';
import RestaurantDetailPage from './pages/RestaurantDetailPage';

import store from './store';

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <Link to="/">
          <h1>헤더</h1>
        </Link>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="restaurants" element={<RestaurantsPage />} />
          <Route path="restaurants/:id" element={<RestaurantDetailPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('app'),
);
