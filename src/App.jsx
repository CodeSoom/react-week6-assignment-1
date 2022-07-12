import { Routes, Route, Link } from 'react-router-dom';

import RestaurantsPage from './page/RestaurantsPage';
import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import NotFoundPage from './page/NotFoundPage';
import RestaurantDetailPage from './page/RestaurantDetailPage';

export default function App() {
  return (
    <>
      <header>
        <Link to="/"><h1>헤더</h1></Link>
      </header>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/restaurants/:restaurantId" element={<RestaurantDetailPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
