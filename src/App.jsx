import { Link, Route, Routes } from 'react-router-dom';

import RestaurantsPage from './RestaurantsPage';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import RestaurantPage from './RestaurantPage';
import NotFoundPage from './NotFoundPage';

export default function App() {
  return (
    <div>
      <h1>
        <Link to="/">
          헤더
        </Link>
      </h1>
      <Routes>
        <Route exact path="/restaurants/:restaurantId" element={<RestaurantPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route exact path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
