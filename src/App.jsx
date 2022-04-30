import {
  Routes,
  Route,
} from 'react-router-dom';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
import RestaurantsPage from './RestaurantsPage';
import RestaurantDetailPage from './RestaurantDetailPage';

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route exact path="/restaurants" element={<RestaurantsPage />} />
      <Route path="/restaurants/:restaurantId" element={<RestaurantDetailPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}
