import { Link, Route, Routes } from 'react-router-dom';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import RestaurantsPage from './RestaurantsPage';
import RestaurantDetail from './RestaurantDetail';
import NotFoundPage from './NotFoundPage';

export default function App() {
  return (
    <div>
      <header>
        <h1><Link to="/">헤더</Link></h1>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/restaurants/:id" element={<RestaurantDetail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
