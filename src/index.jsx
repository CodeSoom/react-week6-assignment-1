import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import App from './App';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RestaurantsPage from './pages/RestaurantsPage';
import RestaurantDetailPage from './pages/RestaurantDetailPage';
import NotFoundPage from './pages/NotFoundPage';

import store from './store';

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="restaurants">
              <Route index element={<RestaurantsPage />} />
              <Route path=":restaurantId" element={<RestaurantDetailPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('app'),
);
