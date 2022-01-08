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
        <Link to="/"><h1>This is a Header!</h1></Link>
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
