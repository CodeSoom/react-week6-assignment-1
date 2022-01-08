import { Routes, Route, Link } from 'react-router-dom';

import AboutPage from './AboutPage';
import HomePage from './HomePage';
import RestaurantsPage from './RestaurantsPage';
import NotfoundPage from './NotfoundPage';
import RestaurantPage from './RestaurantPage';

export default function App() {
  return (
    <div>
      <header>
        <h1>
          <Link to="/">I'm Header!</Link>
        </h1>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/restaurant/:restaurantId" element={<RestaurantPage />} />
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
    </div>
  );
}
