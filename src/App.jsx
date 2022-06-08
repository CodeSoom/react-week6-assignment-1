import { Routes, Route, Link } from 'react-router-dom';

import AboutPage from './AboutPage';
import RestaurantInfoPage from './RestaurantInfoPage';
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';
import RestaurantsPage from './RestaurantsPage';

export default function App() {
  return (
    <>
      <h1><Link to="/">헤더</Link></h1>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/restaurants/:id" element={<RestaurantInfoPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
